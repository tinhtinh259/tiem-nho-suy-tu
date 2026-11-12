/**
 * ==============================================================================
 * CARAFLOW EMAIL CONFIGURATION & DISPATCHER
 * Tiệm Nhỏ Suy Tư - Hệ thống chuyển tiếp thư & lời nhắn về Email
 * ==============================================================================
 * 
 * 👉 HƯỚNG DẪN ĐỔI EMAIL NHẬN THƯ VỀ SAU:
 * Bạn chỉ cần thay đổi địa chỉ bên dưới, toàn bộ các form trên website
 * (Hòm thư tâm tình, Liên hệ, Đóng góp câu chuyện, Trạm lắng nghe)
 * sẽ tự động gửi về địa chỉ mới này!
 */

const CARAFLOW_TARGET_EMAIL = "tinhtinh.vov@gmail.com";

/**
 * Hàm gửi dữ liệu form về email trung tâm (Hỗ trợ FormSubmit API + Mailto Fallback)
 * 
 * @param {Object} options
 * @param {string} options.formType - Tên trạm gửi (VD: "Liên Hệ", "Hòm Thư Tâm Tình", "Góc Kể Chuyện")
 * @param {string} options.senderName - Tên hoặc biệt danh người gửi
 * @param {string} options.senderEmail - Email phản hồi (nếu có)
 * @param {string} options.subject - Tiêu đề email
 * @param {string} options.message - Nội dung lời nhắn / tâm sự
 * @param {Object} [options.extraData] - Dữ liệu bổ sung (nhạc nền, con dấu, người nhận...)
 * @returns {Promise<{success: boolean, message: string}>}
 */
async function sendCaraflowEmail({
  formType = "Tin Nhắn Website",
  senderName = "Một Người Ẩn Danh",
  senderEmail = "",
  subject = "",
  message = "",
  extraData = {}
}) {
  const targetEmail = (typeof CARAFLOW_TARGET_EMAIL !== "undefined" && CARAFLOW_TARGET_EMAIL) 
    ? CARAFLOW_TARGET_EMAIL 
    : "tinhtinh.vov@gmail.com";

  const emailSubject = subject || `[Tiệm Nhỏ - ${formType}] Lời nhắn từ ${senderName}`;

  // Chuẩn bị payload dữ liệu gửi đi (Format dạng bảng rõ ràng trong Gmail)
  const payload = {
    _subject: emailSubject,
    _replyto: senderEmail || targetEmail,
    _template: "table",
    _captcha: "false"
  };

  // Đưa các thông tin phân loại quan trọng (Mục Đích, Tiêu Đề...) lên hàng đầu
  for (const [key, value] of Object.entries(extraData)) {
    if (value) {
      payload[key] = value;
    }
  }

  payload["Trạm Gửi"] = formType;
  payload["Người Gửi"] = senderName;
  payload["Email Phản Hồi"] = senderEmail || "Ẩn danh / Không để lại email";
  payload["Thời Gian Gửi"] = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
  payload["Nội Dung"] = message;

  try {
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json().catch(() => ({}));
      return {
        success: true,
        message: "Thư đã được gửi đi thành công tới Tiệm! ✨"
      };
    } else {
      console.warn("FormSubmit response not ok:", response.status);
      return {
        success: false,
        message: "Không thể kết nối đến máy chủ thư. Đang chuyển sang phương thức dự phòng."
      };
    }
  } catch (error) {
    console.warn("Lỗi khi gửi email qua API:", error);
    return {
      success: false,
      message: error.message || "Lỗi kết nối mạng"
    };
  }
}

/**
 * Phương án dự phòng mở ứng dụng email (Gmail / Outlook) nếu mạng bị chặn
 */
function openCaraflowMailtoFallback({ subject = "", body = "" }) {
  const targetEmail = CARAFLOW_TARGET_EMAIL || "tinhtinh.vov@gmail.com";
  const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoUrl, "_blank");
}
