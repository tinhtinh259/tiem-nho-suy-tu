/* ==========================================================================
   ALBUM NHẠC KÝ ỨC - PHYSICALLY ACCURATE 3D BOOK UNFOLD THEATER
   ========================================================================== */

// 1. DỮ LIỆU TẬP SÁCH TRÊN KỆ 3D (MASTER BOOK VOLUMES FOR THE SHELF)
const MASTER_BOOKS = [
  {
    id: "vol-1",
    title: "Tập 1\n Cuốn Sổ Nhạc Ký Ức",
    author: "Nhiều tác giả • Tiệm Nhỏ sưu tầm",
    tagAlias: "Chương dạo đồng vàng & hành lang",
    color: "#422817", spineColor: "#2b1a0e", band: "#d8be86", label: "#faecd2",
    ornament: "✦", width: 36, height: 212,
    pages: [
      {
        left: {
          chapter: "CHƯƠNG I • @ENCOUNTER_001",
          heading: "Cánh Đồng Lúa Nắng Thu",
          body: `<p class="page-drop-cap">Chiều hôm ấy, nắng nhuộm vàng cả cánh đồng lúa chín. Gió mây cuồn cuộn thổi qua rặng tre ngà. Tôi đứng ở đầu con đường đê nhỏ, nhắm mắt lại để hít hà cái hương cỏ dại ngái nồng.</p>
          <div style="margin: 15px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
            <img src="images/album/draft-4.jpg" style="width: 100%; height: 130px; object-fit: cover;">
          </div>
          <p>Ở đằng xa, một bóng người gầy bước đi thong dong trên bờ ruộng. Cậu ấy cầm trên tay một cành hoa dại, bước chân chậm rãi như thể thời gian không bao giờ trôi tiếp.</p>`
        },
        right: {
          chapter: "CHƯƠNG I • KÝ ỨC VÀNG",
          heading: "Thoáng Chạm Chiều Hoàng Hôn",
          body: `<p>Chúng tôi không nói với nhau câu nào. Chỉ là ánh mắt chạm nhau trong vài giây giữa hoàng hôn rực rỡ. Nhưng giai điệu của cánh đồng chiều hôm ấy đã ở lại trong ký ức tôi trọn vẹn từng nhịp thở.</p>
          <div style="background: rgba(184, 138, 68, 0.1); border-left: 3px solid #b88a44; padding: 10px; margin-top: 10px; font-style: italic; color: #5c3f19;">"Bờ ruộng chiều thu năm ấy, có người đi qua mang theo cả mùi thơm của đồng cỏ dại..."</div>`
        }
      },
      {
        left: {
          chapter: "CHƯƠNG II • @ENCOUNTER_002",
          heading: "Ánh Mắt Nơi Hành Lang",
          body: `<p class="page-drop-cap">Hành lang quán cà phê cũ vào một chiều mưa phùn. Giữa những mảng tường gạch rêu phong, hình ảnh một chàng trai đội chiếc mũ len đỏ nổi bật như một đốm lửa ấm áp.</p>
          <p>Cậu ấy cầm chiếc máy ảnh cơ 35mm, tỉ mẩn điều chỉnh khẩu độ và góc máy. Khi khung hình xoay về hướng tôi, tiếng 'tách' vang lên thật nhẹ.</p>`
        },
        right: {
          chapter: "CHƯƠNG II • HỔ PHÁCH ẤM",
          heading: "Thước Phim Của Trái Tim",
          body: `<p>Tôi ngẩng lên, hai ánh mắt vô tình giao nhau qua ống kính. Cậu mỉm cười ngại ngùng rồi vội cúi xuống vặn lại cuộn phim. Bức ảnh ấy tôi chưa bao giờ được xem, nhưng khoảnh khắc ấy đã tự lưu vào thước phim của trái tim.</p>`
        }
      }
    ]
  },
  {
    id: "vol-2",
    title: "Tập 2\n Ký Ức Hổ Phách",
    author: "Góc Nhỏ Tâm Hồn",
    tagAlias: "Những góc phố xám & cuộn phim cũ",
    color: "#5c2424", spineColor: "#3d1313", band: "#d8be86", label: "#faecd2",
    ornament: "⚜", width: 32, height: 206,
    pages: [
      {
        left: {
          chapter: "CHƯƠNG I • @ENCOUNTER_002",
          heading: "Chiếc Mũ Len Đỏ Chiều Mưa",
          body: `<p class="page-drop-cap">Hành lang quán cà phê cũ vào một chiều mưa phùn. Giữa những mảng tường gạch rêu phong, hình ảnh một chàng trai đội chiếc mũ len đỏ nổi bật như một đốm lửa ấm áp.</p>
          <p>Cậu ấy cầm chiếc máy ảnh cơ 35mm, tỉ mẩn điều chỉnh khẩu độ và góc máy. Khi khung hình xoay về hướng tôi, tiếng 'tách' vang lên thật nhẹ.</p>`
        },
        right: {
          chapter: "CHƯƠNG I • HỔ PHÁCH ẤM",
          heading: "Thước Phim Của Trái Tim",
          body: `<p>Tôi ngẩng lên, hai ánh mắt vô tình giao nhau qua ống kính. Cậu mỉm cười ngại ngùng rồi vội cúi xuống vặn lại cuộn phim. Bức ảnh ấy tôi chưa bao giờ được xem, nhưng khoảnh khắc ấy đã tự lưu vào thước phim của trái tim.</p>`
        }
      }
    ]
  },
  {
    id: "vol-3",
    title: "Tập 3\n Những Vệt Mưa Đêm",
    author: "Tình Tình Collection",
    songTitle: "Đếm Thời Gian",
    songArtist: "Khánh Đơn • Huyền Thoại",
    tagId: "@Song_DemThoiGian",
    tagAlias: "Màn đêm không trăng, không sao, không gió...",
    duration: "04:12",
    audioSrc: "audio/dem-thoi-gian.mp3",
    melodyType: "dem-thoi-gian",
    color: "#244431", spineColor: "#13271c", band: "#9cc486", label: "#d5ebd0",
    ornament: "✿", width: 38, height: 215,
    pages: [
      {
        left: {
          chapter: "BẢN NHẠC • ĐẾM THỜI GIAN",
          heading: "Màn Đêm Không Trăng Không Gió",
          body: `<p class="page-drop-cap">Cơn mưa đêm buông xuống góc phố vắng. Ánh đèn đường nhòe đi trong từng hạt mưa rào, nhịp thời gian tích tắc như tiếng đếm của một nỗi nhớ chưa từng nguôi.</p>
          <div style="background: rgba(36, 68, 49, 0.08); border-left: 3px solid #244431; padding: 12px 14px; margin: 12px 0; border-radius: 0 6px 6px 0; font-family: 'Cormorant Garamond', serif; font-size: 13.5px; line-height: 1.7; color: #1c3325;">
            <em>"Màn đêm không trăng, không sao, không gió<br>
            Không ai đi ngang qua con phố quen...<br>
            Có mình anh nơi đây cô đơn<br>
            Ôm bó hoa tươi, anh đang trông mong một người<br>
            Mà sao em yêu không đến đây<br>
            Để cho bông hoa kia héo khô, đợi chờ em... đợi chờ em..."</em>
          </div>
          <p>Mỗi hạt mưa rơi xuống vỉa hè là một khoảnh khắc đếm ngược trong vô vọng.</p>`
        },
        right: {
          chapter: "ĐIỆP KHÚC • ĐẾM THỜI GIAN",
          heading: "Một, Hai, Ba... Anh Chờ Em",
          body: `<div style="margin: 8px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.18);">
            <img src="images/album/draft-6.jpg" style="width: 100%; height: 120px; object-fit: cover;">
          </div>
          <div style="background: rgba(36, 68, 49, 0.1); border: 1px dashed #4a755b; border-radius: 8px; padding: 12px 14px; margin: 10px 0; font-family: 'Cormorant Garamond', serif; font-size: 13px; line-height: 1.75; color: #16291e;">
            <strong>Điệp khúc:</strong><br>
            <em>"Một, hai, ba... Anh chờ em đã bao lâu rồi người hay không?<br>
            Một, hai, ba... Anh chờ em giữa đêm mưa buồn ướt lạnh<br>
            Một, hai, ba... Nghe thời gian vẫn trôi âm thầm từng phút giây<br>
            Một, hai, ba... Anh chờ em, chờ giữa kỉ niệm đắng cay..."</em>
          </div>
          <p style="font-size: 12px; color: #3d5e4a; font-style: italic; text-align: right; margin-top: 6px;">— Sáng tác: Khánh Đơn • Ca khúc Ký Ức —</p>`
        }
      },
      {
        left: {
          chapter: "CHƯƠNG II • @ENCOUNTER_004",
          heading: "Cơn Mưa Trạm Xe Buýt",
          body: `<p class="page-drop-cap">Cơn mưa rào bất chợt lúc 7 giờ tối đổ xuống trạm xe buýt. Hai con người lạ mặt đứng nép dưới mái che hẹp tẹo, nghe tiếng nước mưa gõ vào mái tôn rộn rã.</p>
          <p>Người ấy lặng lẽ lấy trong chiếc balo ra một chiếc dù xếp màu xanh rêu, quay sang đưa về phía tôi và nhẹ giọng: 'Bạn dùng đi, tôi có áo mưa rồi'.</p>`
        },
        right: {
          chapter: "CHƯƠNG II • CHIẾC DÙ XANH RÊU",
          heading: "Lời Nói Giản Đơn",
          body: `<p>Chiếc dù màu xanh rêu ấy đến nay tôi vẫn giữ. Mỗi lần trời đổ mưa rào, câu chuyện năm ấy và bài hát cũ lại thì thầm trở lại.</p>
          <div style="background: rgba(184, 138, 68, 0.12); border-left: 3px solid #b88a44; padding: 10px; margin-top: 15px; font-style: italic; color: #5c3f19;">"Có những cơn mưa đi qua đời ta, để lại một chiếc dù và một khúc ca không bao giờ quên..."</div>`
        }
      }
    ]
  },
  {
    id: "single-1",
    isStandalone: true,
    title: "Cuốn Sổ Dở Dang",
    author: "Ký Ức Tuổi Trẻ",
    songTitle: "Homesick",
    songArtist: "Dua Lipa • Chris Martin",
    tagId: "@Song_Homesick",
    tagAlias: "I'm covered in blue... I'm running home to you",
    duration: "03:50",
    audioSrc: "audio/homesick.mp3",
    melodyType: "homesick",
    color: "#1d314f", spineColor: "#0f1c2e", band: "#d8be86", label: "#f3e8cb",
    ornament: "❦", width: 32, height: 204,
    pages: [
      {
        left: {
          chapter: "CHƯƠNG I • ÁP LỰC VÔ HÌNH",
          heading: "Những Ngày Sợ Mở Mạng Xã Hội",
          body: `<p class="page-drop-cap">Có một giai đoạn trong đời, tôi đi xin việc mãi mà chẳng được. Cảm giác thức dậy mỗi sáng với hộp thư đến trống trơn, những lá đơn gửi đi rơi vào im lặng, stress đến nghẹt thở.</p>
          <p>Những ngày ấy, sợ nhất là mở mạng xã hội. Trên Facebook, các hội nhóm tràn ngập bài viết chia sẻ về những công việc trong mơ, công ty đãi ngộ tốt, phúc lợi ngập tràn. Thậm chí chỉ một câu hỏi bâng quơ: <em>'Hôm nay bạn có đi làm không?'</em> cũng như nhát dao cứa vào sự tự ti đang rỉ máu.</p>
          <div style="margin: 12px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.22);">
            <img src="images/album/corridor_look_back.png" style="width: 100%; height: 115px; object-fit: cover;">
          </div>
          <p>Tôi từng thu mình lại trong phòng, cay đắng tự hỏi: Phải chăng mình là kẻ kém cỏi giữa một thế giới ai cũng đang tiến về phía trước?</p>`
        },
        right: {
          chapter: "CHƯƠNG I • CỨU RỖI",
          heading: "Dòng Bình Luận Giữa Chiều Muộn",
          body: `<p>Thế rồi vào một buổi chiều rệu rã, tôi lang thang sang LinkedIn. Giữa hàng trăm bài viết phân tích đao to búa lớn, mắt tôi vô tình dừng lại ở một dòng bình luận ngắn ngủi của một người xa lạ:</p>
          <div style="background: rgba(29, 49, 79, 0.08); border-left: 3px solid #1d314f; border-radius: 0 8px 8px 0; padding: 14px 16px; margin: 16px 0; font-family: 'Cormorant Garamond', serif; font-size: 13.5px; line-height: 1.7; color: #0d1a2d; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <strong>“Nếu bạn không đậu phỏng vấn ở một công ty nào đó, không có nghĩa là bạn không đủ giỏi. Đơn giản là cả hai bên không hợp nhau, không dành cho nhau mà thôi.”</strong>
          </div>
          <p>Trời ơi, câu nói ấy cứu tôi dữ dằn luôn! Nó như một cái ôm ghì chặt giữa cơn bão, tháo bỏ chiếc gai tự ti nhức nhối trong lòng bấy lâu. Hóa ra tôi không dở, chỉ là chiếc chìa khóa của tôi chưa tìm đúng ổ khóa thuộc về mình.</p>`
        }
      },
      {
        left: {
          chapter: "CHƯƠNG II • CHIÊM NGHIỆM",
          heading: "Chữ Duyên Dưới Một Mái Nhà",
          body: `<p class="page-drop-cap">Thời gian trôi qua, sau này khi đã đi làm và bước qua vài nơi, tôi lại nhặt thêm cho mình một bài học sâu sắc nữa về công việc.</p>
          <p>Hóa ra, khi bạn bước chân vào làm việc ở một công ty nào đó, đó không đơn thuần là một bản mô tả công việc (JD) hay sự đánh đổi thời gian lấy tiền lương. Dường như bạn có một <strong>chữ Duyên</strong> kỳ lạ với những con người ở nơi ấy.</p>
          <p>Có thể là một người sếp chịu kiên nhẫn dẫn dắt bạn, một người đồng nghiệp cùng chia nhau ly cà phê sáng lúc chạy deadline, hay những con người cùng tần số tình cờ tụ lại thành một nhóm, cùng nhau tạo nên một môi trường ấm áp.</p>`
        },
        right: {
          chapter: "CHƯƠNG II • TRẠM DỪNG",
          heading: "Vũ Trụ Giữ Bạn Lại",
          body: `<p>Bây giờ nghĩ lại, tôi thầm cảm ơn những buổi phỏng vấn bị từ chối năm xưa. Nếu ngày ấy tôi được nhận vào những nơi không dành cho mình, có lẽ tôi đã không bao giờ có cơ hội gặp những người đồng đội tuyệt vời của hiện tại.</p>
          <div style="background: rgba(216, 190, 134, 0.15); border: 1px dashed #b88a44; border-radius: 8px; padding: 14px 16px; margin: 15px 0; font-family: 'Cormorant Garamond', serif; font-size: 13.5px; line-height: 1.7; color: #4a3319;">
            <em>"Mỗi chiếc ghế trống ta từng trượt mất, thực ra là vũ trụ đang âm thầm giữ ta lại — để ta ngồi vào đúng chiếc ghế có những người đang đợi ta ở trạm dừng tiếp theo."</em>
          </div>
          <p style="font-size: 12px; color: #5a4025; font-style: italic; text-align: right; margin-top: 8px;">— Trích Cuốn Sổ Dở Dang • Ký Ức Chữa Lành —</p>`
        }
      }
    ]
  },
  {
    id: "single-2",
    isStandalone: true,
    title: "Mẩu Thơ Gió Mùa",
    author: "Góc Nhỏ Ký Ức",
    tagAlias: "Những dòng thơ viết vội bên ô cửa sổ",
    color: "#785338", spineColor: "#563821", band: "#d8be86", label: "#faecd2",
    ornament: "🍂", width: 22, height: 196,
    pages: [
      {
        left: {
          chapter: "THƠ NHÁP • TIẾNG GIÓ",
          heading: "Gửi Một Ngày Chớm Đông",
          body: `<p class="page-drop-cap">Gió mùa về qua khe cửa nhỏ, mang theo chút lạnh ngọt ngào của mùa đông đầu tiên. Chiếc áo len cũ treo góc phòng bỗng thấy ấm áp lạ kỳ.</p>
          <div style="margin: 15px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
            <img src="images/album/draft-4.jpg" style="width: 100%; height: 130px; object-fit: cover; filter: sepia(0.25);">
          </div>
          <p style="font-style: italic; color: #5c3e21; text-align: center; margin-top: 8px;">"Có những nỗi nhớ chẳng gọi thành tên,<br>Chỉ biết gửi gió... bay về phía người."</p>`
        },
        right: {
          chapter: "THƠ NHÁP • DÒNG CUỐI",
          heading: "Thoáng Hương Chiều Cũ",
          body: `<p>Mỗi trang thơ mỏng này như một mẩu giấy gấp nhỏ, không mong ai đọc được trọn vẹn, chỉ mong ai đó khi tình cờ lật qua sẽ thấy lòng mình dịu lại.</p>
          <div style="background: rgba(184, 138, 68, 0.12); border-left: 3px solid #b88a44; padding: 12px; margin-top: 15px; font-style: italic; color: #5c3f19;">"Nếu hôm nay lòng bạn thấy mỏi mệt, hãy để tiếng gió ngoài hiên thì thầm khúc ca bình yên..."</div>`
        }
      }
    ]
  }
];

// 1.1 QUYỂN SÁCH ĐẶC BIỆT GÓC PHẢI KỆ SÁCH (SPECIAL AUTUMN BOOK BY JENNY)
const SPECIAL_BOOK_JENNY = {
  id: "special-jenny",
  isStandalone: true,
  title: "Vệt Mực\nMùa Thu",
  author: "Jenny",
  songTitle: "Colour Me In",
  songArtist: "Damien Rice",
  melodyType: "colour-me-in",
  audioSrc: "audio/colour-me-in.mp3",
  tagId: "@Jenny_Autumn",
  tagClass: "enc-special",
  tagAlias: "Mùa thu 2026 • Gửi anh, một kẻ đơn độc",
  duration: "03:59",
  color: "#542131",
  spineColor: "#39121f",
  band: "#e5c583",
  label: "#faecd2",
  ornament: "🍂",
  width: 33,
  height: 208,
  pages: [
    {
      left: {
        chapter: "MÙA THU 2026 • LỜI TỰ BẠCH",
        heading: "Khoảnh Khắc Buông Phòng Bị",
        body: `<p class="page-drop-cap">Mùa thu 2026, mình gặp được một người.</p>
        <p>Sau những tổn thương và sợ hãi mình có trong những năm qua, những hành động của người ấy làm mình buông mất lớp phòng bị mà lỡ sa vào cảm giác nhớ nhung, muốn được trao đi tình yêu lần nữa.</p>
        <p>Ngược về quá khứ một chút, khoảng 7 năm trước mình đã lỡ động lòng với một người mà không nên bắt đầu, dù chưa bắt đầu thì nó cũng là sai trái.</p>
        <p>Mình đã mất 3 năm để đấu tranh tâm lý và 4 năm để quên đi hình bóng người ấy cho đến khi hoàn toàn không còn cảm giác gì nữa ngày mình gặp lại người ấy. Tất cả chỉ còn lại một kiểu cảm tình như những người bạn lâu năm. Mình nghĩ đó là lúc mình hoàn toàn chấm dứt được mối quan hệ đó.</p>
        <div style="background: rgba(84, 33, 49, 0.08); border-left: 3px solid #7d334a; padding: 10px 14px; margin: 12px 0; border-radius: 0 6px 6px 0; font-style: italic; color: #501e2e;">
          "Từ ngày đó trở đi, mình gần như không có động tâm với những điều lãng mạn, một lòng hướng Phật."
        </div>`
      },
      right: {
        chapter: "RUNG CẢM • ANH VÀ EM",
        heading: "Tường Thành Sụp Đổ",
        body: `<p>Nhưng rồi mùa thu vừa rồi mình gặp được anh ấy. Tự dưng cảm giác rung cảm của tình yêu lại bắt đầu nảy nở.</p>
        <p>Mình ban đầu chỉ dám đặt tên mối quan hệ này là <em>anh trai – em gái</em>, nhưng danh nghĩa đó mình gán cho nó thật mong manh. Mình đã sai lầm rồi. Mình cố gắng đẩy bản thân ra xa những thứ lãng mạn của cuộc đời thì phải. Haha.</p>
        <p>Và rồi anh ấy đến, nhẹ nhàng làm hết mọi việc, trấn an mình khi bản thân mình cảm thấy mông lung, và ủng hộ mọi quyết định của mình.</p>
        <div style="margin: 12px 0; padding: 12px 14px; background: rgba(229, 197, 131, 0.15); border: 1px dashed #c49a45; border-radius: 8px; font-family: 'Cormorant Garamond', serif; font-size: 13.5px; line-height: 1.7; color: #421e2a;">
          <strong>Và rồi "đùng"</strong> — âm thanh vang lên trong đầu mình, danh nghĩa "anh–em" đó sụp đổ mất rồi. Mình không kiểm soát được mà xiêu lòng trước anh ấy.
        </div>
        <p>Những tường thành mình xây dựng để không phải đau khổ, không bi lụy vì tình yêu trong 4 năm qua lần nữa sụp đổ. Mình không phải không tin tình yêu. Mình chỉ sợ hãi lại phải chữa lành và lại phải chờ đợi nó qua đi.</p>`
      }
    },
    {
      left: {
        chapter: "CHIÊM NGHIỆM • VÒNG LẶP",
        heading: "Dù Biết Là Không Thể...",
        body: `<p class="page-drop-cap">Mình đã cố gắng bình tâm lại, nhưng có lẽ tình cảm này đang lớn dần lên rồi.</p>
        <p>Mình cũng biết rõ câu trả lời là không thể. Nhưng cảm xúc thì vẫn để nó tự nhiên mà tiến tới. Dù câu chuyện của bọn mình không sai trái, cũng không quá giới hạn... nhưng mình biết nó sẽ là không thể.</p>
        <p>Vòng lặp của mình lại đến rồi, mình sẽ vẫn thích anh ấy, cho đến vài năm sau, rồi lại bình tâm, chấp nhận rằng bọn mình không thể dành cho nhau và rồi lại chữa lành.</p>
        <div style="margin: 14px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
          <img src="images/album/corridor_look_back.png" style="width: 100%; height: 115px; object-fit: cover; filter: sepia(0.25) saturate(1.1);">
        </div>
        <p style="font-size: 12.5px; color: #6e2e42; font-style: italic; text-align: center;">"Có những người bước vào đời ta, dịu dàng gỡ từng lớp phòng bị..."</p>`
      },
      right: {
        chapter: "COLOUR ME IN • DAMIEN RICE",
        heading: "Tô Điểm Sắc Màu Cuộc Đời Em",
        body: `<p>Có đoạn bài hát này mình rất thích:</p>
        <div style="background: rgba(84, 33, 49, 0.08); border-left: 3px solid #842f47; padding: 12px 14px; margin: 10px 0; border-radius: 0 6px 6px 0; font-family: 'Cormorant Garamond', serif; font-size: 13.5px; line-height: 1.7; color: #3d1421;">
          <em>"Tôi cố xóa sạch nó đi, nhưng mực cứ thế nhòe ra, thấm qua trang giấy<br>
          Suýt chút nữa tôi đã phát điên khi những dòng chữ này dẫn lối tôi tìm đến em<br><br>
          Cùng với bao giấc mơ vô nghĩa về cuộc sống đơn độc<br>
          Như một kẻ cứng đầu<br><br>
          Vậy nên, hãy để tôi yêu em<br>
          Hãy để tôi yêu em, rồi tô điểm sắc màu vào cuộc đời tôi..."</em>
        </div>
        <p>Đó là 1 đoạn ca khúc <strong>Colour Me In</strong> của Damien Rice mà mình đang nghe, một kẻ cô độc muốn được yêu nhưng lại che đậy cảm xúc của mình. Để rồi phải tự mình thú nhận, muốn có được tình yêu đó.</p>
        <p>Mình cũng không biết mình đang là kẻ cứng đầu hay là kẻ đáng thương nữa. Nhưng mình có vẻ đang tận hưởng sự đơn độc này.<br><strong>Và mình nhớ anh nhiều lắm ^^</strong></p>
        <p style="font-size: 12px; color: #842f47; font-style: italic; text-align: right; margin-top: 10px; font-weight: 600;">— Jenny • Mùa thu 2026 —</p>`
      }
    }
  ]
};

// 2. DỮ LIỆU CÁC MẢU GIẤY BẢN THẢO CHƯA ĐÓNG BÌA (LOOSE MANUSCRIPT DRAFTS)
const ALBUM_TRACKS = [
  {
    id: "draft-1",
    draftId: "#DRAFT-001",
    draftType: "torn",
    draftTypeLabel: "Trang Xé Sổ Tay",
    draftTypeIcon: "📄",
    createdContext: "🌾 Bờ ruộng chiều thu • Nắng quái",
    date: "14.09.2021",
    handwrittenNote: "Chiếc áo trắng lẫn vào màu lúa chín... đoạn này viết vội nên chữ hơi run.",
    title: "Khúc Dạo Trên Đồng Vàng",
    author: "@Encounter_001",
    tagId: "@Encounter_001",
    tagClass: "enc-1",
    tagAlias: "Cậu bé từ cánh đồng lúa",
    pageNumber: "BẢN THẢO 01",
    duration: "03:45",
    hasPhoto: true,
    coverImg: "images/album/draft-4.jpg",
    quote: "Bờ ruộng chiều thu năm ấy, có người đi qua mang theo cả mùi thơm của đồng cỏ dại...",
    color: "#3d1f0a", spineColor: "#1a0e08", band: "#c9a84c", label: "#e8cc7a",
    ornament: "✦",
    secretNote: "Dành riêng cho cậu - cậu bé trên bờ ruộng ngày ấy: Dù thời gian có làm phai mờ nhiều thứ, nụ cười thơ dại giữa cánh đồng nắng vàng vẫn là bản nhạc êm đềm nhất.",
    pages: [
      {
        left: {
          chapter: "BẢN THẢO 01 • @ENCOUNTER_001",
          heading: "Cánh Đồng Lúa Nắng Thu",
          body: `<p class="page-drop-cap">Chiều hôm ấy, nắng nhuộm vàng cả cánh đồng lúa chín. Gió mây cuồn cuộn thổi qua rặng tre ngà. Tôi đứng ở đầu con đường đê nhỏ, nhắm mắt lại để hít hà cái hương cỏ dại ngái nồng.</p>
          <div style="margin: 15px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
            <img src="images/album/draft-4.jpg" style="width: 100%; height: 130px; object-fit: cover;">
          </div>
          <p>Ở đằng xa, một bóng người gầy bước đi thong dong trên bờ ruộng. Cậu ấy cầm trên tay một cành hoa dại, bước chân chậm rãi như thể thời gian không bao giờ trôi tiếp.</p>`
        },
        right: {
          chapter: "BẢN THẢO 01 • KÝ ỨC VÀNG",
          heading: "Thoáng Chạm Chiều Hoàng Hôn",
          body: `<p>Chúng tôi không nói với nhau câu nào. Chỉ là ánh mắt chạm nhau trong vài giây giữa hoàng hôn rực rỡ. Nhưng giai điệu của cánh đồng chiều hôm ấy đã ở lại trong ký ức tôi trọn vẹn từng nhịp thở.</p>
          <div style="background: rgba(184, 138, 68, 0.1); border-left: 3px solid #b88a44; padding: 10px; margin-top: 10px; font-style: italic; color: #5c3f19;">"Bờ ruộng chiều thu năm ấy, có người đi qua mang theo cả mùi thơm của đồng cỏ dại..."</div>`
        }
      }
    ]
  },
  {
    id: "draft-2",
    draftId: "#DRAFT-002",
    draftType: "dialogue",
    draftTypeLabel: "Mẩu Đối Thoại Dở Dang",
    draftTypeIcon: "💬",
    createdContext: "☕ Quán Cà Phê Cũ • Chiều Mưa Phùn",
    date: "08.12.2022",
    handwrittenNote: "Tiếng 'tách' của màn trập máy ảnh vang lên thật khẽ giữa góc tường rêu...",
    title: "Ánh Mắt Nơi Hành Lang",
    author: "@Encounter_002",
    tagId: "@Encounter_002",
    tagClass: "enc-2",
    tagAlias: "Nhiếp ảnh gia mang chiếc mũ len đỏ",
    pageNumber: "BẢN THẢO 02",
    duration: "04:12",
    hasPhoto: true,
    coverImg: "images/album/draft-3.jpg",
    quote: "Chiếc nón len đỏ giữa góc phố xám, và tiếng bấm máy giấu một ánh nhìn ngập ngừng...",
    color: "#4a1010", spineColor: "#2d0808", band: "#c9a84c", label: "#f5d0a0",
    ornament: "⚜",
    secretNote: "Gửi người mang chiếc mũ len đỏ: Nếu một ngày cậu rửa lại cuộn phim cũ năm đó, hy vọng cậu vẫn nhớ về ánh mắt ngập ngừng nơi hành lang chiều mưa.",
    pages: [
      {
        left: {
          chapter: "BẢN THẢO 02 • @ENCOUNTER_002",
          heading: "Chiếc Mũ Len Đỏ Chiều Mưa",
          body: `<p class="page-drop-cap">Hành lang quán cà phê cũ vào một chiều mưa phùn. Giữa những mảng tường gạch rêu phong, hình ảnh một chàng trai đội chiếc mũ len đỏ nổi bật như một đốm lửa ấm áp.</p>
          <div style="margin: 15px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
            <img src="images/album/draft-3.jpg" style="width: 100%; height: 130px; object-fit: cover;">
          </div>
          <p>Cậu ấy cầm chiếc máy ảnh cơ 35mm, tỉ mẩn điều chỉnh khẩu độ và góc máy. Khi khung hình xoay về hướng tôi, tiếng 'tách' vang lên thật nhẹ.</p>`
        },
        right: {
          chapter: "BẢN THẢO 02 • HỔ PHÁCH ẤM",
          heading: "Thước Phim Của Trái Tim",
          body: `<p>Tôi ngẩng lên, hai ánh mắt vô tình giao nhau qua ống kính. Cậu mỉm cười ngại ngùng rồi vội cúi xuống vặn lại cuộn phim.</p>
          <p>Bức ảnh ấy tôi chưa bao giờ được xem, nhưng khoảnh khắc ấy đã tự lưu vào thước phim của trái tim.</p>`
        }
      }
    ]
  },
  {
    id: "draft-3",
    draftId: "#DRAFT-003",
    draftType: "letter",
    draftTypeLabel: "Lá Thư Chưa Gửi",
    draftTypeIcon: "✉️",
    createdContext: "💻 Góc Bàn Học • 02:15 Đêm",
    date: "24.03.2023",
    handwrittenNote: "Nút 'Accept' vẫn nằm yên ở đó... hóa ra có những điều dang dở lại đẹp hơn trọn vẹn.",
    title: "Lời Mời Chưa Chấp Nhận 😅",
    author: "@Encounter_003",
    tagId: "@Encounter_003",
    tagClass: "enc-3",
    tagAlias: "Người từng một lần ngoảnh lại",
    pageNumber: "BẢN THẢO 03",
    duration: "02:58",
    hasPhoto: true,
    coverImg: "images/album/corridor_look_back.png",
    quote: "Có những cái gật đầu thoáng qua, và lời mời kết bạn nằm lại trong vô tận...",
    color: "#102a3a", spineColor: "#06121a", band: "#63cdda", label: "#a0e8f5",
    ornament: "✧",
    secretNote: "Gửi ai đó từng ngoảnh lại: Nút 'Accept' chưa bao giờ được nhấn, nhưng khoảnh khắc cậu quay đầu nhìn lại ở hành lang đã là câu trả lời tròn đầy nhất.",
    pages: [
      {
        left: {
          chapter: "BẢN THẢO 03 • @ENCOUNTER_003",
          heading: "Cái Ngoảnh Đầu Ở Hành Lang",
          body: `<p class="page-drop-cap">Trái đất này thật lạ, có những người ta gặp vài lần ở sảnh thư viện, mỉm cười chào nhau như những người quen cũ, nhưng lại chẳng bao giờ đi vào cuộc đời nhau.</p>
          <div style="margin: 15px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
            <img src="images/album/corridor_look_back.png" style="width: 100%; height: 130px; object-fit: cover;">
          </div>
          <p>Tôi nhớ lần cuối bước qua dãy hành lang dài rợp bóng nắng, khi tôi đi qua khỏi góc rẽ, tôi ngoảnh lại và thấy người ấy cũng đang quay đầu nhìn lại.</p>`
        },
        right: {
          chapter: "BẢN THẢO 03 • DỞ DANG DỊU DÀNG",
          heading: "Nút Accept Nằm Yên",
          body: `<p>Đêm đó tôi gửi một lời mời kết bạn đơn sơ trên mạng xã hội. Lời mời ấy mãi mãi nằm ở trạng thái 'Đã gửi'. Nhưng chẳng sao cả, cuộc đời đôi khi đẹp chính là nhờ những trang sách dở dang dịu dàng như thế.</p>`
        }
      }
    ]
  },
  {
    id: "draft-4",
    draftId: "#DRAFT-004",
    draftType: "torn",
    draftTypeLabel: "Trang Xé Sổ Tay",
    draftTypeIcon: "🌧️",
    createdContext: "🌧️ Trạm Xe Buýt Số 08 • 19:45 Tối",
    date: "15.07.2023",
    handwrittenNote: "Chiếc dù xanh rêu vẫn nằm trong ngăn kéo, mỗi mùa mưa lại nhớ giọng nói ấy.",
    title: "Vệt Mưa Trạm Xe Đêm",
    author: "@Encounter_004",
    tagId: "@Encounter_004",
    tagClass: "enc-1",
    tagAlias: "Bóng người dưới mái hiên mưa",
    pageNumber: "BẢN THẢO 04",
    duration: "05:01",
    hasPhoto: true,
    coverImg: "images/album/draft-6.jpg",
    quote: "Trú mưa chung một mái hiên, nghe tiếng mưa rơi át đi nhịp đập gấp gáp...",
    color: "#183a24", spineColor: "#0b1c11", band: "#8aaa6a", label: "#b8d490",
    ornament: "✿",
    secretNote: "Gửi người trao chiếc dù xanh: Cơn mưa năm ấy lạnh lắm, nhưng sự ấm áp từ bàn tay trao chiếc dù ấy vẫn theo tôi qua biết bao mùa mưa sau này.",
    pages: [
      {
        left: {
          chapter: "BẢN THẢO 04 • @ENCOUNTER_004",
          heading: "Cơn Mưa Trạm Xe Buýt",
          body: `<p class="page-drop-cap">Cơn mưa rào bất chợt lúc 7 giờ tối đổ xuống trạm xe buýt. Hai con người lạ mặt đứng nép dưới mái che hẹp tẹo, nghe tiếng nước mưa gõ vào mái tôn rộn rã.</p>
          <div style="margin: 15px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
            <img src="images/album/draft-6.jpg" style="width: 100%; height: 130px; object-fit: cover;">
          </div>`
        },
        right: {
          chapter: "BẢN THẢO 04 • CHIẾC DÙ XANH RÊU",
          heading: "Lời Nói Giản Đơn",
          body: `<p>Người ấy lặng lẽ lấy trong chiếc balo ra một chiếc dù xếp, quay sang đưa về phía tôi và nhẹ giọng: 'Bạn dùng đi, tôi có áo mưa rồi'.</p>
          <p>Chiếc dù màu xanh rêu ấy đến nay tôi vẫn giữ. Mỗi lần trời đổ mưa rào, trang sách năm ấy lại thì thầm trở lại.</p>`
        }
      }
    ]
  },
  {
    id: "draft-5",
    draftId: "#DRAFT-005",
    draftType: "torn",
    draftTypeLabel: "Trang Xé Sổ Tay",
    draftTypeIcon: "💡",
    createdContext: "🕯️ Bên Bàn Viết • Nửa Đêm Chiêm Nghiệm",
    date: "10.09.2024",
    handwrittenNote: "Khát vọng và nỗi sợ luôn là hai mặt của chiếc gương nội tâm...",
    title: "Nghịch Lý Khát Vọng & Nỗi Sợ",
    author: "@TiemNhoSuyTu",
    tagId: "@TamLy_005",
    tagClass: "enc-1",
    tagAlias: "Cặp cực đối ngẫu A và -A",
    pageNumber: "BẢN THẢO 05",
    duration: "03:30",
    hasPhoto: false,
    quote: "Nếu khát vọng là A thì nỗi sợ chính là -A. Hay nói cách khác, nỗi sợ chính là thứ ngăn nhân vật đạt tới khát vọng.",
    color: "#2a1b12", spineColor: "#140c08", band: "#d4a85c", label: "#f7f3eb",
    ornament: "⚖️",
    secretNote: "Nỗi sợ không tự nhiên sinh ra, nó là chiếc bóng phản chiếu chính xác khát vọng mà nhân vật tôn thờ và khao khát nhất.",
    pages: [
      {
        left: {
          chapter: "BẢN THẢO 05 • ĐỐI NGẪU NỘI TÂM",
          heading: "Cặp Cực Đối Ngẫu: A và -A",
          body: `<p class="page-drop-cap">Nếu khát vọng là A thì nỗi sợ chính là -A. Hay nói cách khác, nỗi sợ chính là thứ ngăn nhân vật đạt tới khát vọng.</p>
          <div style="background: rgba(184, 138, 68, 0.1); border-left: 3px solid #b88a44; padding: 12px 14px; margin: 12px 0; border-radius: 0 6px 6px 0; font-family: 'Cormorant Garamond', serif; font-size: 14.5px; line-height: 1.7; color: #422b15;">
            <em>"Một nhân vật khao khát kết nối và tình yêu sâu sắc (A) sẽ luôn mang trong mình nỗi sợ tột cùng trước sự cự tuyệt và nỗi cô đơn (-A). Một người khát khao tự do (A) lại luôn ám ảnh bởi nỗi sợ bị ràng buộc và kiểm soát (-A)."</em>
          </div>
          <p>Nỗi sợ không chỉ là một rào cản vô nghĩa; nó là tấm gương trung thực nhất soi chiếu điều mà nhân vật xem là quý giá và thiêng liêng nhất trong cuộc đời.</p>`
        },
        right: {
          chapter: "BẢN THẢO 05 • BƯỚC NGOẶT CHUYỂN HÓA",
          heading: "Vượt Qua Chiếc Bóng Của Ước Mơ",
          body: `<p>Trong mọi câu chuyện cảm động, nhân vật chỉ thực sự trưởng thành khi họ dám bước xuyên qua bóng tối của -A thay vì quay đầu lẩn tránh nó.</p>
          <p>Khi khát vọng A đủ lớn và sáng tỏ, nỗi sợ -A sẽ không còn là sợi xích níu chân, mà trở thành chất xúc tác mạnh mẽ nhất đẩy nhân vật về phía ánh sáng.</p>`
        }
      }
    ]
  },
  {
    id: "draft-6",
    draftId: "#DRAFT-006",
    draftType: "torn",
    draftTypeLabel: "Trang Xé Sổ Tay",
    draftTypeIcon: "✍️",
    createdContext: "☕ Bàn Trà Khuya • Tờ Giấy Vo Tròn",
    date: "10.09.2024",
    handwrittenNote: "Phải làm thế nào nếu mình viết tào lao và không hay. Chà, có lẽ là ...",
    title: "Nếu Mình Viết Tào Lao Và Không Hay",
    author: "@TiemNhoSuyTu",
    tagId: "@VietLach_006",
    tagClass: "enc-3",
    tagAlias: "Chà, có lẽ là...",
    pageNumber: "BẢN THẢO 06",
    duration: "02:45",
    hasPhoto: true,
    coverImg: "images/album/draft-1.jpg",
    quote: "Phải làm thế nào nếu mình viết tào lao và không hay. Chà, có lẽ là ...",
    color: "#302219", spineColor: "#170f0a", band: "#d4a85c", label: "#f7f3eb",
    ornament: "✒️",
    secretNote: "Bản nháp sinh ra là để vụng về. Đừng sợ viết dở, hãy cứ để ngòi bút trôi đi trên giấy.",
    pages: [
      {
        left: {
          chapter: "BẢN THẢO 06 • TRĂN TRỞ NGÒI BÚT",
          heading: "Viết Tào Lao Và Không Hay",
          body: `<p class="page-drop-cap">Phải làm thế nào nếu mình viết tào lao và không hay. Chà, có lẽ là... cứ tiếp tục viết thôi.</p>
          <div style="margin: 15px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
            <img src="images/album/draft-1.jpg" style="width: 100%; height: 130px; object-fit: cover;">
          </div>
          <p>Nỗi sợ viết dở, viết ngô nghê thường làm đông cứng ngòi bút trước khi ta kịp hạ dòng chữ đầu tiên. Ta sợ ánh mắt phán xét của người khác, và tệ hơn nữa, là sự thất vọng của chính mình.</p>`
        },
        right: {
          chapter: "BẢN THẢO 06 • DŨNG CẢM VỚI BẢN NHÁP",
          heading: "Cho Phép Mình Được Vụng Về",
          body: `<p>Nhưng bản thảo sinh ra không phải để hoàn hảo ngay từ đầu. Bản nháp là nơi an toàn nhất để phạm sai lầm, để những ý nghĩ thô mộc và lộn xộn tìm thấy hình hài của chính nó.</p>
          <div style="background: rgba(184, 138, 68, 0.1); border-left: 3px solid #b88a44; padding: 12px 14px; margin: 12px 0; border-radius: 0 6px 6px 0; font-family: 'Cormorant Garamond', serif; font-size: 14.5px; line-height: 1.7; color: #422b15;">
            <em>"Người viết dở là người đang trên đường viết tốt hơn. Còn người không bao giờ dám viết thì trang giấy sẽ mãi mãi là khoảng trắng câm lặng."</em>
          </div>
          <p>Cứ viết tào lao đi, rồi gọt giũa lại sau. Điều kỳ diệu luôn bắt đầu từ những mẩu giấy nhàu nhĩ bên tách trà khuya.</p>`
        }
      }
    ]
  },
  {
    id: "draft-7",
    draftId: "#DRAFT-007",
    draftType: "torn",
    draftTypeLabel: "Trang Xé Sổ Tay",
    draftTypeIcon: "⚖️",
    createdContext: "🌙 Bên Ô Cửa Khuya • Đêm Nghĩ Ngợi",
    date: "10.09.2024",
    handwrittenNote: "Nên cho kết có hậu hay là kết hiển nhiên sẽ xảy ra?",
    title: "Kết Có Hậu Hay Kết Hiển Nhiên?",
    author: "@TiemNhoSuyTu",
    tagId: "@KetTruyen_007",
    tagClass: "enc-1",
    tagAlias: "Trăn trở về cái kết của câu chuyện",
    pageNumber: "BẢN THẢO 07",
    duration: "03:10",
    hasPhoto: true,
    coverImg: "images/album/draft-2.jpg",
    quote: "Nên cho kết có hậu hay là kết hiển nhiên sẽ xảy ra?",
    color: "#202a30", spineColor: "#0e1418", band: "#d4a85c", label: "#f0f4f7",
    ornament: "⚖️",
    secretNote: "Một cái kết chân thật không phải là chiều lòng người đọc bằng sự màu hồng giả tạo, mà là sự tự nhiên và tất yếu nảy sinh từ mọi lựa chọn của nhân vật.",
    pages: [
      {
        left: {
          chapter: "BẢN THẢO 07 • LỰA CHỌN CÁI KẾT",
          heading: "Giữa Màu Hồng & Sự Hiển Nhiên",
          body: `<p class="page-drop-cap">Nên cho kết có hậu hay là kết hiển nhiên sẽ xảy ra? Câu hỏi này luôn là nỗi dằn vặt lớn nhất của người kể chuyện khi bước đến những trang cuối cùng.</p>
          <div style="margin: 15px 0; border: 3px solid #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
            <img src="images/album/draft-2.jpg" style="width: 100%; height: 130px; object-fit: cover;">
          </div>
          <p>Ta thường có xu hướng muốn bù đắp cho nhân vật của mình bằng một cái kết vẹn tròn, một happy ending xoa dịu mọi tổn thương họ đã trải qua.</p>`
        },
        right: {
          chapter: "BẢN THẢO 07 • TẤT YẾU CỦA ĐỜI SỐNG",
          heading: "Sức Nặng Của Tính Chân Thật",
          body: `<p>Nhưng một cái kết gượng ép sẽ giết chết sự chân thật của toàn bộ câu chuyện. Cái kết đẹp nhất chính là cái kết hiển nhiên phải tới — hệ quả tất yếu từ tính cách, vết thương và những quyết định mà nhân vật đã chọn.</p>
          <div style="background: rgba(184, 138, 68, 0.1); border-left: 3px solid #b88a44; padding: 12px 14px; margin: 12px 0; border-radius: 0 6px 6px 0; font-family: 'Cormorant Garamond', serif; font-size: 14.5px; line-height: 1.7; color: #422b15;">
            <em>"Dù có hậu hay dang dở, chỉ cần cái kết ấy chân thành với hành trình của nhân vật, nó sẽ tự khắc gieo vào lòng người đọc sự rung cảm sâu sắc và vĩnh cửu."</em>
          </div>
          <p>Hãy để câu chuyện kết thúc theo cách nó phải kết thúc, đừng biến nó thành một lời hứa dối lừa.</p>`
        }
      }
    ]
  }
];

// 3. STATE & GLOBALS
let currentBook = null;
let currentBookIndex = 0;
let currentFlipPage = 0;
let totalFlipPages = 0;
let totalStoryPages = 0;
let is3DTiltOn = true;
let isPlaying = false;
let isAmbientRainOn = false;
let audioCtx = null;
let masterGain = null;
let synthOsc = null;
let rainNoiseNode = null;
let analyserNode = null;
let ambientGain = null;
let realAudioPlayer = null;
let melodyTimeouts = [];
let activeOscillators = [];

// DOM Cached Elements
let bookshelf, overlay, flipbookTheater, flipbookViewport, book3D;
let flipbookBookTitle, flipbookBookAuthor, flipbookPageCounter;
let btnToggle3DAngle, btnPrevPage, btnNextPage, closeBtn;

// Sheet Reader Modal Elements
let sheetModalOverlay, sheetModalContainer, sheetModalCloseBtn, sheetModalPinBtn, looseSheetPaper, pinnedCountBadge;
let currentReadingSheet = null;

// Pinned Drafts Storage Helper
function getPinnedDrafts() {
  try {
    return JSON.parse(localStorage.getItem('cara_pinned_drafts') || '[]');
  } catch (e) {
    return [];
  }
}

function savePinnedDrafts(arr) {
  try {
    localStorage.setItem('cara_pinned_drafts', JSON.stringify(arr));
  } catch (e) { }
  updatePinnedBadge();
}

function updatePinnedBadge() {
  const badge = document.getElementById('pinnedCountBadge');
  if (badge) {
    badge.textContent = getPinnedDrafts().length;
  }
}

function initDOMElements() {
  bookshelf = document.getElementById('bookshelf');
  overlay = document.getElementById('overlay');
  flipbookTheater = document.getElementById('flipbookTheater');
  flipbookViewport = document.getElementById('flipbookViewport');
  book3D = document.getElementById('book3D');

  flipbookBookTitle = document.getElementById('flipbookBookTitle');
  flipbookBookAuthor = document.getElementById('flipbookBookAuthor');
  flipbookPageCounter = document.getElementById('flipbookPageCounter');

  btnToggle3DAngle = document.getElementById('btnToggle3DAngle');
  btnPrevPage = document.getElementById('btnPrevPage');
  btnNextPage = document.getElementById('btnNextPage');
  closeBtn = document.getElementById('closeBtn');

  // Sheet reader elements
  sheetModalOverlay = document.getElementById('sheetModalOverlay');
  sheetModalContainer = document.getElementById('sheetModalContainer');
  sheetModalCloseBtn = document.getElementById('sheetModalCloseBtn');
  sheetModalPinBtn = document.getElementById('sheetModalPinBtn');
  looseSheetPaper = document.getElementById('looseSheetPaper');
  pinnedCountBadge = document.getElementById('pinnedCountBadge');
  updatePinnedBadge();
}

// 4. BUILD 3D BOOKSHELF
// 4. BUILD 3D BOOKSHELF (COZY VINTAGE BOOKCASE)
function buildShelf(container) {
  if (!container) return;
  container.innerHTML = '';

  // Khoang hộc tủ sách (Bookcase Interior)
  const centerStage = document.createElement('div');
  centerStage.className = 'shelf-center-stage';

  // Khay xếp 4 cuốn sách 3D (Xếp sát vào vách tủ bên trái)
  const booksContainer = document.createElement('div');
  booksContainer.className = 'books-container';

  MASTER_BOOKS.forEach(function (b, idx) {
    const bookEl = document.createElement('div');
    // Cuốn cuối cùng hơi nghiêng tự nhiên tạo cảm giác sống động, đời thường
    const isLastBook = idx === MASTER_BOOKS.length - 1;
    bookEl.className = 'book' + (isLastBook ? ' book-tilted' : '');
    bookEl.style.setProperty('--w', b.width + 'px');
    bookEl.style.setProperty('--h', b.height + 'px');

    const spine = document.createElement('div');
    spine.className = 'book-spine';
    spine.style.setProperty('--color', b.color);
    spine.style.setProperty('--spine-color', b.spineColor || b.color);
    spine.style.setProperty('--band', b.band);
    spine.style.setProperty('--label', b.label);

    // Tách dòng: Tập X và Tựa sách chính
    const rawLines = (b.title || '').split('\n').map(s => s.trim()).filter(Boolean);
    let volText = '';
    let mainTitleLines = [];

    const hasVolPrefix = rawLines.length > 0 && /^(Tập|Vol|Quyển|Chương)\s*[\dIVXLCDM]+/i.test(rawLines[0]);

    if (b.isStandalone || (!hasVolPrefix && !b.volume)) {
      volText = '';
      mainTitleLines = rawLines;
    } else {
      volText = hasVolPrefix ? rawLines[0] : (b.volume || `TẬP ${idx + 1}`);
      mainTitleLines = hasVolPrefix ? rawLines.slice(1) : rawLines;
    }

    if (mainTitleLines.length === 0) {
      mainTitleLines = [b.title || 'Ký Ức'];
    }

    const titleColsHtml = mainTitleLines.map(line => `<span class="spine-col">${line}</span>`).join('');

    const topGroupHtml = volText ? `
      <div class="spine-top-group">
        <div class="spine-ornament">${b.ornament || '✦'}</div>
        <div class="spine-vol-box">
          <span class="spine-vol-text">${volText.toUpperCase()}</span>
        </div>
      </div>
    ` : `
      <div class="spine-top-group standalone">
        <div class="spine-ornament lg">${b.ornament || '❦'}</div>
        <div class="spine-standalone-flourish">✦ ✦ ✦</div>
      </div>
    `;

    spine.innerHTML = `
      <div class="paperback-edge-fold top"></div>

      ${topGroupHtml}

      <div class="spine-title-wrap">
        <div class="spine-main-title ${mainTitleLines.length > 1 ? 'multi-col' : ''}">
          ${titleColsHtml}
        </div>
      </div>

      <div class="spine-tail-imprint">
        <span class="imprint-icon">❦</span>
        <span class="imprint-text">CARA</span>
      </div>

      <div class="paperback-edge-fold bottom"></div>
    `;

    bookEl.appendChild(spine);

    // Bóng đổ tiếp xúc chân sách
    const shadowEl = document.createElement('div');
    shadowEl.className = 'book-foot-shadow';
    bookEl.appendChild(shadowEl);

    // CLICK BOOK: FLY OUT POPUP TO 3D FLIPBOOK THEATER!
    bookEl.addEventListener('click', function () {
      openModal(b, idx, bookEl);
    });

    booksContainer.appendChild(bookEl);
  });

  centerStage.appendChild(booksContainer);

  // Cụm Decor ở giữa: Góc thư thái (Chậu sen đá + Tách cà phê dời sang trái)
  const decorGroup = document.createElement('div');
  decorGroup.className = 'shelf-decor-group';
  decorGroup.innerHTML = `
    <div class="shelf-decor decor-plant">
      <div class="decor-item-wrap" title="Góc bình yên: Chậu sen đá nhỏ">
        <span class="decor-icon-lg">🪴</span>
        <div class="decor-contact-shadow"></div>
      </div>
    </div>
    <div class="shelf-decor decor-coffee">
      <div class="decor-item-wrap decor-coffee" title="Góc chill: Tách cà phê ấm">
        <div class="coffee-steam-wrap">
          <span class="steam-line steam-1"></span>
          <span class="steam-line steam-2"></span>
          <span class="steam-line steam-3"></span>
        </div>
        <div class="decor-cup-svg">
          <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Đĩa lót sứ nhìn ngang phẳng tiếp xúc mặt kệ -->
            <path d="M2.5 22.5C2.5 22.5 7 24.5 17 24.5C27 24.5 31.5 22.5 31.5 22.5C32.2 22.5 32.8 23.2 32.5 24C31.5 25.5 25 26 17 26C9 26 2.5 25.5 1.5 24C1.2 23.2 1.8 22.5 2.5 22.5Z" fill="#E6D6C2"/>
            <path d="M4 22.5C8.5 24 14 24.5 17 24.5C20 24.5 25.5 24 30 22.5H4Z" fill="#D3BEA2"/>
            <!-- Quai cầm bên phải (Side Profile) -->
            <path d="M22 8C26.5 8 28.5 10.5 28.5 14C28.5 17.5 25.5 19.5 21 19.5" stroke="#F5EDE4" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M22 9.5C25 9.5 26.5 11 26.5 14C26.5 16.5 24.5 18 21.5 18" stroke="#CBB499" stroke-width="1.2" stroke-linecap="round"/>
            <!-- Thân cốc sứ nhìn ngang phẳng -->
            <path d="M8 6H23L21.2 21C21 22.2 19.8 23 18.5 23H12.5C11.2 23 10 22.2 9.8 21L8 6Z" fill="#FAF6F0"/>
            <path d="M9.8 21L8 6H9.8L11.5 21C11.6 21.8 12.2 22.5 13 22.8L12.5 23C11.2 23 10 22.2 9.8 21Z" fill="#E8DDD0"/>
            <!-- Miệng cốc phẳng & nước cà phê thơm nhìn ngang -->
            <ellipse cx="15.5" cy="6" rx="7.5" ry="1.6" fill="#6A4121"/>
            <ellipse cx="15.5" cy="6.2" rx="6.5" ry="1.1" fill="#482A12"/>
            <ellipse cx="14" cy="5.8" rx="2.5" ry="0.5" fill="#885A34" opacity="0.65"/>
          </svg>
        </div>
        <div class="decor-contact-shadow"></div>
      </div>
    </div>
  `;
  centerStage.appendChild(decorGroup);

  // QUYỂN SÁCH ĐẶC BIỆT CỦA JENNY Ở GÓC PHẢI CỦA KỆ SÁCH
  const specialBookEl = document.createElement('div');
  specialBookEl.className = 'book shelf-special-book book-tilted-right';
  specialBookEl.style.setProperty('--w', SPECIAL_BOOK_JENNY.width + 'px');
  specialBookEl.style.setProperty('--h', SPECIAL_BOOK_JENNY.height + 'px');

  const specialSpine = document.createElement('div');
  specialSpine.className = 'book-spine';
  specialSpine.style.setProperty('--color', SPECIAL_BOOK_JENNY.color);
  specialSpine.style.setProperty('--spine-color', SPECIAL_BOOK_JENNY.spineColor || SPECIAL_BOOK_JENNY.color);
  specialSpine.style.setProperty('--band', SPECIAL_BOOK_JENNY.band);
  specialSpine.style.setProperty('--label', SPECIAL_BOOK_JENNY.label);

  const specialLines = (SPECIAL_BOOK_JENNY.title || '').split('\n').map(s => s.trim()).filter(Boolean);
  const specialTitleColsHtml = specialLines.map(line => `<span class="spine-col">${line}</span>`).join('');

  specialSpine.innerHTML = `
    <div class="paperback-edge-fold top"></div>

    <div class="spine-top-group standalone">
      <div class="spine-ornament lg">${SPECIAL_BOOK_JENNY.ornament || '🍂'}</div>
      <div class="spine-vol-box special-author-badge">
        <span class="spine-vol-text">JENNY</span>
      </div>
    </div>

    <div class="spine-title-wrap">
      <div class="spine-main-title multi-col">
        ${specialTitleColsHtml}
      </div>
    </div>

    <div class="spine-tail-imprint">
      <span class="imprint-icon">❦</span>
      <span class="imprint-text">2026</span>
    </div>

    <div class="paperback-edge-fold bottom"></div>
  `;

  specialBookEl.appendChild(specialSpine);

  // Ruy-băng bookmark trang nhã rủ xuống chân sách
  const ribbonEl = document.createElement('div');
  ribbonEl.className = 'special-bookmark-ribbon';
  ribbonEl.setAttribute('aria-hidden', 'true');
  specialBookEl.appendChild(ribbonEl);

  // Ánh sao lấp lánh biểu thị cuốn sách độc bản
  const glowEl = document.createElement('div');
  glowEl.className = 'special-book-glow';
  glowEl.innerHTML = '✦';
  specialBookEl.appendChild(glowEl);

  // Bóng đổ tiếp xúc chân sách
  const specialShadow = document.createElement('div');
  specialShadow.className = 'book-foot-shadow';
  specialBookEl.appendChild(specialShadow);

  specialBookEl.setAttribute('title', 'Cuốn sách đặc biệt của Jenny • Vệt Mực Mùa Thu (Chạm để mở đọc)');

  // CLICK SÁCH ĐẶC BIỆT CỦA JENNY: MỞ 3D FLIPBOOK!
  specialBookEl.addEventListener('click', function () {
    openModal(SPECIAL_BOOK_JENNY, 999, specialBookEl);
  });

  centerStage.appendChild(specialBookEl);

  container.appendChild(centerStage);

  // 3. MẶT ĐỢT GỖ TREO TƯỜNG (COZY FLOATING WOOD PLANK)
  const plankUnit = document.createElement('div');
  plankUnit.className = 'shelf-plank-unit';
  plankUnit.innerHTML = `
    <div class="shelf-top-surface"></div>
    <div class="shelf-plank-edge"></div>
    <div class="shelf-brackets">
      <div class="shelf-bracket left"></div>
      <div class="shelf-bracket right"></div>
    </div>
  `;
  container.appendChild(plankUnit);
}

// ==========================================================================
// 4.5. QUẢN LÝ GHIM BẢN THẢO (PINNED DRAFTS MANAGEMENT)
// ==========================================================================
const PINNED_DRAFTS_KEY = 'caraflow_pinned_drafts';

function getPinnedDrafts() {
  try {
    const raw = localStorage.getItem(PINNED_DRAFTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    return [];
  }
}

function savePinnedDrafts(arr) {
  try {
    localStorage.setItem(PINNED_DRAFTS_KEY, JSON.stringify(arr));
  } catch (err) { }
  updatePinnedBadge();
}

function updatePinnedBadge() {
  const badge = document.getElementById('pinnedCountBadge');
  if (badge) {
    badge.textContent = getPinnedDrafts().length;
  }
}

function togglePinDraft(e, identifier) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }

  let draftId = identifier;
  if (typeof identifier === 'number') {
    const currentPill = document.querySelector('.filter-pills .filter-pill.active');
    const currentFilter = currentPill ? currentPill.getAttribute('data-filter') : 'all';
    const displayedDrafts = getFilteredDrafts(currentFilter);
    const draft = displayedDrafts[identifier] || ALBUM_TRACKS[identifier];
    if (draft) draftId = draft.id;
  }

  if (!draftId) return;

  let list = getPinnedDrafts();
  const alreadyPinned = list.includes(draftId);

  if (alreadyPinned) {
    list = list.filter(id => id !== draftId);
  } else {
    list.push(draftId);
  }
  savePinnedDrafts(list);

  // Refresh current filtered view
  const currentPill = document.querySelector('.filter-pills .filter-pill.active');
  const currentFilter = currentPill ? currentPill.getAttribute('data-filter') : 'all';
  renderTracklist(getFilteredDrafts(currentFilter));

  // Also update modal pin btn if currently open for this draft
  if (currentReadingSheet && currentReadingSheet.id === draftId && sheetModalPinBtn) {
    const isPinnedNow = list.includes(draftId);
    sheetModalPinBtn.innerHTML = isPinnedNow ? '<span class="pin-icon">📌</span> Đã Ghim Mẩu Này' : '<span class="pin-icon">📌</span> Ghim Mẩu Giấy Này';
    sheetModalPinBtn.classList.toggle('pinned', isPinnedNow);
  }
}

function togglePinCurrentSheet() {
  if (!currentReadingSheet) return;
  togglePinDraft(null, currentReadingSheet.id);
}

function getFilteredDrafts(category = 'all') {
  const searchInput = document.getElementById('albumSearchInput');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const pinnedList = getPinnedDrafts();

  return ALBUM_TRACKS.filter(draft => {
    let matchesCategory = true;
    if (category === 'pinned') {
      matchesCategory = pinnedList.includes(draft.id);
    } else if (category === 'torn') {
      matchesCategory = draft.draftType === 'torn' || draft.draftType === 'torn_sheet';
    } else if (category === 'dialogue') {
      matchesCategory = draft.draftType === 'dialogue' || draft.draftType === 'unfinished_dialogue';
    } else if (category === 'letter') {
      matchesCategory = draft.draftType === 'letter' || draft.draftType === 'unsent_letter';
    }

    if (!matchesCategory) return false;

    if (query) {
      const searchHaystack = [
        draft.title,
        draft.tagAlias,
        draft.quote,
        draft.createdContext,
        draft.handwrittenNote,
        draft.draftTypeLabel,
        draft.date
      ].join(' ').toLowerCase();

      return searchHaystack.includes(query);
    }

    return true;
  });
}

// 5. RENDER LOOSE MANUSCRIPT SHEETS (NHỮNG TRANG GIẤY CHƯA ĐÓNG BÌA)
function renderTracklist(drafts) {
  const gridContainer = document.getElementById('tracklistGrid');
  if (!gridContainer) return;

  const pinnedList = getPinnedDrafts();
  updatePinnedBadge();

  if (!drafts || drafts.length === 0) {
    gridContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #b8a688; font-family: var(--album-font-serif); font-style: italic;">
        <div style="font-size: 32px; margin-bottom: 12px;">🍂</div>
        <p style="font-size: 17px; margin-bottom: 6px;">Không tìm thấy mẩu giấy nào phù hợp.</p>
        <p style="font-size: 13px; opacity: 0.7;">Hãy thử chọn bộ lọc khác hoặc từ khóa tìm kiếm khác.</p>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = drafts.map((draft, idx) => {
    const isPinned = pinnedList.includes(draft.id);

    const visualContent = draft.hasPhoto ? `
      <div class="sheet-photo-wrapper">
        <div class="sheet-polaroid-clip">
          <img src="${draft.coverImg}" alt="${draft.title}" onerror="this.src='images/cara-img.png'">
          <div class="sheet-photo-stamp">KỶ VẬT • ${draft.date || 'LƯU KÝ'}</div>
        </div>
      </div>
    ` : `
      <div class="sheet-quote-box">
        <div class="sheet-quote-text">"${draft.quote}"</div>
      </div>
    `;

    return `
      <article class="manuscript-sheet ${isPinned ? 'is-pinned' : ''}" 
               data-id="${draft.id}" 
               onclick="openSheetReaderById('${draft.id}', this)">
        
        <!-- Răng cưa xé sổ tay & ghim kẹp giấy cổ điển -->
        <div class="sheet-spiral-edge">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="sheet-metal-clip" title="Kẹp giấy kim loại"></div>
        ${isPinned ? '<div class="sheet-pinned-badge" title="Đã ghim mẩu giấy này">📌 ĐÃ GHIM</div>' : ''}

        <!-- Header: Ngày tháng & Thể loại bản thảo -->
        <div class="sheet-header">
          <div class="sheet-type-pill">
            <span class="sheet-type-icon">${draft.draftTypeIcon || '📄'}</span>
            <span class="sheet-type-label">${draft.draftTypeLabel || 'Trang Sổ'}</span>
          </div>
          <span class="sheet-date-stamp">${draft.date || 'Chưa ghi ngày'}</span>
        </div>

        <!-- Ngữ cảnh không gian sáng tác -->
        <div class="sheet-context-line">
          <span class="context-pin">📍</span>
          <span class="context-text">${draft.createdContext || 'Góc nhỏ bình yên'}</span>
        </div>

        <!-- Ảnh kỷ vật hoặc Trích dẫn bút chì -->
        ${visualContent}

        <!-- Tiêu đề & Cảm xúc -->
        <div class="sheet-content">
          <h3 class="sheet-title">${draft.title}</h3>
          <div class="sheet-alias">
            <span class="alias-tag">Ẩn dụ:</span>
            <span class="alias-text">"${draft.tagAlias}"</span>
          </div>
        </div>

        <!-- Dòng bút chì viết vội bên lề (Marginalia) -->
        ${draft.handwrittenNote ? `
          <div class="sheet-marginalia">
            <span class="pencil-icon">✎</span>
            <span class="marginalia-content">${draft.handwrittenNote}</span>
          </div>
        ` : ''}

        <!-- Footer hành động: Ghim & Cầm lên đọc -->
        <div class="sheet-footer">
          <button class="btn-sheet-pin ${isPinned ? 'active' : ''}" 
                  onclick="togglePinDraft(event, '${draft.id}')" 
                  title="${isPinned ? 'Bỏ ghim' : 'Ghim lại mẩu giấy'}">
            <span>${isPinned ? '📌 Đã ghim' : '📌 Ghim lại'}</span>
          </button>
          <button class="btn-sheet-read">
            <span>Cầm lên đọc</span>
            <span>→</span>
          </button>
        </div>
      </article>
    `;
  }).join('');

  if (typeof updateStreamNavArrows === 'function') {
    setTimeout(updateStreamNavArrows, 50);
  }
}

function openSheetReaderById(draftId, cardEl) {
  const draft = ALBUM_TRACKS.find(t => t.id === draftId);
  if (draft) {
    openSheetReader(draft, 0, cardEl);
  }
}

function openSheetReaderByIndex(idx, cardEl) {
  const currentPill = document.querySelector('.filter-pills .filter-pill.active');
  const currentFilter = currentPill ? currentPill.getAttribute('data-filter') : 'all';
  const displayedDrafts = getFilteredDrafts(currentFilter);
  const draft = displayedDrafts[idx] || ALBUM_TRACKS[idx];
  if (draft) {
    openSheetReader(draft, idx, cardEl);
  }
}

function openSheetReader(draft, idx, cardEl) {
  if (!draft) return;
  currentReadingSheet = draft;

  if (!sheetModalOverlay) {
    sheetModalOverlay = document.getElementById('sheetModalOverlay');
    looseSheetPaper = document.getElementById('looseSheetPaper');
    sheetModalPinBtn = document.getElementById('sheetModalPinBtn');
    sheetModalCloseBtn = document.getElementById('sheetModalCloseBtn');
  }

  if (!sheetModalOverlay || !looseSheetPaper) return;

  const isPinned = getPinnedDrafts().includes(draft.id);

  if (sheetModalPinBtn) {
    sheetModalPinBtn.innerHTML = isPinned ? '<span class="pin-icon">📌</span> Đã Ghim Mẩu Này' : '<span class="pin-icon">📌</span> Ghim Mẩu Giấy Này';
    sheetModalPinBtn.classList.toggle('pinned', isPinned);
  }

  const visualHtml = draft.hasPhoto ? `
    <div class="modal-paper-polaroid">
      <div class="polaroid-pin-icon">📌</div>
      <img src="${draft.coverImg}" alt="${draft.title}" onerror="this.src='images/cara-img.png'">
      <div class="polaroid-caption-text">KỶ VẬT BẢN THẢO • ${draft.date || 'LƯU KÝ'}</div>
    </div>
  ` : '';

  let storyContentHtml = '';
  if (draft.fullStoryText) {
    storyContentHtml = draft.fullStoryText;
  } else if (draft.pages && draft.pages[0]) {
    storyContentHtml = `
      <div class="modal-story-section">
        ${draft.pages[0].left.body}
      </div>
      ${draft.pages[0].right ? `
        <div class="modal-story-section" style="margin-top: 18px;">
          ${draft.pages[0].right.body}
        </div>
      ` : ''}
    `;
  } else {
    storyContentHtml = `<p class="page-drop-cap">${draft.quote}</p>`;
  }

  looseSheetPaper.innerHTML = `
    <!-- Top notebook spiral tear -->
    <div class="modal-sheet-spiral">
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </div>
    <div class="modal-sheet-paperclip"></div>

    <div class="modal-sheet-meta-bar">
      <div class="modal-draft-badge">
        <span class="badge-icon">${draft.draftTypeIcon || '📄'}</span>
        <span class="badge-title">${draft.draftTypeLabel || 'BẢN THẢO'}</span>
        <span class="badge-id">${draft.draftId || ''}</span>
      </div>
      <div class="modal-draft-date-info">
        <div><strong>Thời gian:</strong> ${draft.date || 'Chưa ghi ngày'}</div>
        <div><strong>Góc ngồi:</strong> ${draft.createdContext || 'Góc nhỏ bình yên'}</div>
      </div>
    </div>

    <h2 class="modal-draft-title">${draft.title}</h2>

    ${draft.tagAlias ? `
      <div class="modal-draft-alias">
        <span>Ẩn dụ:</span>
        <em>"${draft.tagAlias}"</em>
      </div>
    ` : ''}

    ${visualHtml}

    <div class="modal-draft-text-body">
      ${storyContentHtml}
    </div>

    ${draft.handwrittenNote ? `
      <div class="modal-draft-pencil-note">
        <div class="pencil-label">✏️ Ghi chú viết vội bên lề:</div>
        <div class="pencil-text">"${draft.handwrittenNote}"</div>
      </div>
    ` : ''}

    <div class="modal-draft-footer-note">
      — Mẩu giấy rời rạc • Lưu giữ tại Tiệm Nhỏ Suy Tư —
    </div>
  `;

  sheetModalOverlay.classList.add('open');

  if (window.gsap && looseSheetPaper) {
    gsap.fromTo(looseSheetPaper,
      { scale: 0.88, y: 30, opacity: 0, rotate: -1.5 },
      { scale: 1, y: 0, opacity: 1, rotate: 0, duration: 0.35, ease: "power2.out" }
    );
  }
}

function closeSheetReader() {
  if (!sheetModalOverlay || !sheetModalOverlay.classList.contains('open')) return;

  if (window.gsap && looseSheetPaper) {
    gsap.to(looseSheetPaper, {
      scale: 0.9,
      y: 20,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        sheetModalOverlay.classList.remove('open');
        gsap.set(looseSheetPaper, { clearProps: "all" });
      }
    });
  } else {
    sheetModalOverlay.classList.remove('open');
  }
}

let isClosingModal = false;

// 6. POPUP SÁCH BAY RA & MỞ 3D FLIPBOOK (CHUẨN 1:1 VỚI /3d-flipbook/*)
function openModal(book, idx, clickedElement) {
  isClosingModal = false;

  if (window.gsap && book3D) {
    gsap.killTweensOf(book3D);
  }

  currentBook = book;
  currentBookIndex = idx;
  currentFlipPage = 0;

  updateDeckDisplay(book);
  if (!isPlaying) {
    togglePlayMaster();
  } else {
    playSynthMelody();
  }

  if (flipbookBookTitle) {
    flipbookBookTitle.textContent = book.title ? book.title.replace('\n', ' • ') : 'Cuốn Sổ Nhạc Ký Ức';
  }
  if (flipbookBookAuthor) {
    flipbookBookAuthor.textContent = (book.author || book.tagId || 'Tiệm Nhỏ Suy Tư') + (book.tagAlias ? ' — ' + book.tagAlias : '');
  }

  // Setup book colors on 3D book container
  if (book3D) {
    book3D.style.setProperty('--book-cover-bg', `linear-gradient(135deg, ${book.color || '#3d1f0a'} 0%, ${book.spineColor || '#1a0e08'} 100%)`);
    book3D.style.setProperty('--book-color', book.color || '#3d1f0a');
    book3D.style.setProperty('--book-spine', book.spineColor || '#1a0e08');
    book3D.style.setProperty('--book-gold', book.band || '#c9a84c');
  }

  // Render 3D FlipBook Pages
  render3DFlipBook(book);

  // Show overlay
  if (overlay) {
    overlay.classList.add('open');
  }

  // POPUP BAY RA TỪ KỆ SÁCH (GSAP 3D FLY-OUT ANIMATION)
  if (window.gsap && book3D) {
    gsap.killTweensOf(book3D);
    gsap.set(book3D, { opacity: 1 });

    if (clickedElement) {
      const rect = clickedElement.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const startX = (rect.left + rect.width / 2) - centerX;
      const startY = (rect.top + rect.height / 2) - centerY;

      gsap.fromTo(book3D,
        {
          x: startX,
          y: startY,
          scale: 0.16,
          rotateY: -45,
          rotateX: 55,
          opacity: 0.3
        },
        {
          x: 0,
          y: 0,
          scale: 1,
          rotateY: 0,
          rotateX: is3DTiltOn ? 22 : 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out"
        }
      );
    } else {
      gsap.fromTo(book3D,
        { scale: 0.6, opacity: 0, y: 60 },
        { scale: 1, opacity: 1, y: 0, duration: 0.65, ease: "power2.out" }
      );
    }
  }
}

// ==========================================================================
// TỰ ĐỘNG PHÂN TRANG THÔNG MINH (AUTO-PAGINATION ENGINE CHO 3D FLIPBOOK)
// Tách trang tự động dựa trên chiều cao thực tế, tuyệt đối KHÔNG SCROLLBAR
// ==========================================================================
function autoPaginateStory(pagesData) {
  if (!pagesData || pagesData.length === 0) return [];

  const rawSections = [];
  pagesData.forEach(spread => {
    if (spread.left && (spread.left.heading || spread.left.body || spread.left.chapter)) {
      rawSections.push(spread.left);
    }
    if (spread.right && (spread.right.heading || spread.right.body || spread.right.chapter)) {
      rawSections.push(spread.right);
    }
  });

  // Tính toán kích thước trang thực tế dựa trên thiết bị (Mobile / Tablet / Desktop)
  const isMobile = window.innerWidth <= 480;
  const isTablet = window.innerWidth <= 768;

  let targetContentWidth = 285;
  let maxPageContentHeight = 350;

  if (isMobile) {
    const pageWidth = Math.min(window.innerWidth * 0.45, 185);
    targetContentWidth = Math.max(125, pageWidth - 22);
    maxPageContentHeight = 270;
  } else if (isTablet) {
    const pageWidth = Math.min(window.innerWidth * 0.44, 240);
    targetContentWidth = Math.max(160, pageWidth - 32);
    maxPageContentHeight = 310;
  }

  const measureBox = document.createElement('div');
  measureBox.style.cssText = `
    position: fixed;
    top: -9999px;
    left: -9999px;
    width: ${targetContentWidth}px;
    box-sizing: border-box;
    visibility: hidden;
    pointer-events: none;
    z-index: -999;
  `;
  document.body.appendChild(measureBox);

  const paginatedPages = [];

  rawSections.forEach(section => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = section.body || '';
    let childBlocks = Array.from(tempDiv.children);

    if (childBlocks.length === 0) {
      if ((section.body || '').trim()) {
        paginatedPages.push({
          chapter: section.chapter || '',
          heading: section.heading || '',
          body: section.body
        });
      }
      return;
    }

    let currentPageBlocks = [];
    let isContinued = false;

    const testHeight = (currentBlocks, nextBlock) => {
      const chapterFont = isMobile ? '8px' : '9.5px';
      const headingFont = isMobile ? '11.5px' : (isTablet ? '14px' : '16px');
      const bodyFont = isMobile ? '11px' : (isTablet ? '13px' : '14.5px');
      const bodyLine = isMobile ? '1.4' : '1.52';

      measureBox.innerHTML = `
        <div class="story-page-content" style="width:${targetContentWidth}px; height:auto !important; min-height:0 !important; display:flex; flex-direction:column; justify-content:flex-start; box-sizing:border-box;">
          <div class="page-chapter" style="font-family:'Cormorant Garamond', serif; font-size:${chapterFont}; text-transform:uppercase; margin-bottom:2px;">${section.chapter || ''}</div>
          ${!isContinued && section.heading ? `<h3 class="page-heading" style="font-family:'IM Fell English', serif; font-size:${headingFont}; margin-bottom:4px; line-height:1.22;">${section.heading}</h3>` : ''}
          <div class="page-body-text" style="font-size:${bodyFont}; line-height:${bodyLine};">
            ${currentBlocks.map(b => b.outerHTML).join('')}
            ${nextBlock ? nextBlock.outerHTML : ''}
          </div>
        </div>
      `;
      const contentEl = measureBox.querySelector('.story-page-content');
      return contentEl ? contentEl.offsetHeight : 0;
    };

    childBlocks.forEach(block => {
      if (currentPageBlocks.length > 0 && testHeight(currentPageBlocks, block) > maxPageContentHeight) {
        paginatedPages.push({
          chapter: section.chapter || '',
          heading: isContinued ? '' : (section.heading || ''),
          body: currentPageBlocks.map(b => b.outerHTML).join('')
        });
        currentPageBlocks = [block];
        isContinued = true;
      } else {
        currentPageBlocks.push(block);
      }
    });

    if (currentPageBlocks.length > 0) {
      paginatedPages.push({
        chapter: section.chapter || '',
        heading: isContinued ? '' : (section.heading || ''),
        body: currentPageBlocks.map(b => b.outerHTML).join('')
      });
    }
  });

  try {
    document.body.removeChild(measureBox);
  } catch (e) { }

  return paginatedPages;
}

// TẠO CẤU TRÚC TRANG 3D FLIPBOOK (TỰ ĐỘNG SANG TRANG THÔNG MINH NHƯ SÁCH THẬT)
function render3DFlipBook(book) {
  if (!book3D) return;
  book3D.innerHTML = '';
  book3D.classList.add('mounting');
  book3D.style.setProperty('--c', 0);
  book3D.style.translate = '0% 0%';

  const pagesData = book.pages || [];
  const bookPages = [];

  // TRANG 0: BÌA TRƯỚC (Mặt ngoài là da dát vàng, mặt trong là Ex-Libris)
  const pageCover = document.createElement('div');
  pageCover.className = 'page';
  pageCover.style.setProperty('--i', 0);
  pageCover.style.zIndex = '50';
  pageCover.innerHTML = `
    <div class="front cover">
      <div class="cover-top-ornament">${book.ornament || '✦'}</div>
      <div class="cover-volume-tag">${book.isStandalone ? 'ĐỘC BẢN KÝ ỨC' : (book.tagId || 'TẬP KÝ ỨC')}</div>
      <h2 class="cover-main-title">${(book.title || 'Cuốn Sổ Nhạc Ký Ức').replace(/\n/g, '<br>')}</h2>
      <div class="cover-sub-author">${book.author || 'Tủ Sách Tiệm Nhỏ Suy Tư'}</div>
      <div class="cover-open-hint">✨ Nhấp vào bìa để lật mở trang</div>
    </div>
    <div class="back">
      <div class="inside-cover-bookplate">
        <div class="ex-libris-title">EX LIBRIS</div>
        <div class="ex-libris-symbol">⚜</div>
        <div class="ex-libris-name">Tiệm Nhỏ Ký Ức</div>
        <p class="ex-libris-desc">
          "Cuốn sổ này cất giữ những thanh âm và bóng hình từng lướt qua cuộc đời.<br>
          Xin hãy lật mở nhẹ nhàng như chính những rung động đầu đời."
        </p>
      </div>
      <div class="page-footer-num">Lời đề từ • Tiệm Nhỏ Suy Tư</div>
    </div>
  `;
  bookPages.push(pageCover);

  // TỰ ĐỘNG PHÂN TRANG BẰNG AUTO-PAGINATION ENGINE (KHÔNG BAO GIỜ BỊ CUỘN CHỮ)
  const paginatedPages = autoPaginateStory(pagesData);
  totalStoryPages = paginatedPages.length;
  const totalSheets = Math.ceil(paginatedPages.length / 2);

  for (let sIdx = 0; sIdx < totalSheets; sIdx++) {
    const pageIndex = sIdx + 1;
    const pageEl = document.createElement('div');
    pageEl.className = 'page';
    pageEl.style.setProperty('--i', pageIndex);
    pageEl.style.zIndex = String(40 - sIdx);

    const leftData = paginatedPages[sIdx * 2] || null;
    const rightData = paginatedPages[sIdx * 2 + 1] || null;

    const leftNum = sIdx * 2 + 1;
    const rightNum = sIdx * 2 + 2;

    const leftHtml = leftData ? `
      <div class="front">
        <div class="story-page-content">
          <div class="page-chapter">${leftData.chapter || ''}</div>
          <h3 class="page-heading">${leftData.heading || ''}</h3>
          <div class="page-body-text">${leftData.body || ''}</div>
        </div>
        <div class="page-footer-num">Trang ${leftNum}</div>
      </div>
    ` : `
      <div class="front">
        <div class="story-page-content" style="justify-content: center; text-align: center;">
          <div style="font-size: 24px; color: #8c5b1d; margin-bottom: 8px;">❦</div>
          <p style="font-family: 'IM Fell English', serif; font-style: italic; color: #7a5a3a;">Khoảng lặng ký ức</p>
        </div>
        <div class="page-footer-num">Trang ${leftNum}</div>
      </div>
    `;

    const rightHtml = rightData ? `
      <div class="back">
        <div class="story-page-content">
          <div class="page-chapter">${rightData.chapter || ''}</div>
          <h3 class="page-heading">${rightData.heading || ''}</h3>
          <div class="page-body-text">${rightData.body || ''}</div>
        </div>
        <div class="page-footer-num">Trang ${rightNum}</div>
      </div>
    ` : `
      <div class="back">
        <div class="story-page-content" style="justify-content: center; text-align: center;">
          <div style="font-size: 24px; color: #8c5b1d; margin-bottom: 8px;">❦</div>
          <p style="font-family: 'IM Fell English', serif; font-style: italic; color: #7a5a3a; font-size: 13.5px;">
            "Có những trang sách sinh ra để giữ lại một khoảng trống bình yên..."
          </p>
        </div>
        <div class="page-footer-num">Trang ${rightNum}</div>
      </div>
    `;

    pageEl.innerHTML = leftHtml + rightHtml;
    bookPages.push(pageEl);
  }

  // TRANG CUỐI: BÌA SAU (Mặt trước là Hồi kết, mặt ngoài sau là Bìa sau)
  const lastIndex = bookPages.length;
  const pageBackCover = document.createElement('div');
  pageBackCover.className = 'page';
  pageBackCover.style.setProperty('--i', lastIndex);
  pageBackCover.style.zIndex = '5';
  pageBackCover.innerHTML = `
    <div class="front">
      <div class="story-page-content" style="justify-content: center; text-align: center;">
        <div style="font-size: 28px; color: #8c5b1d; margin-bottom: 12px;">❦</div>
        <h4 style="font-family: 'Cormorant Garamond', serif; font-size: 16px; color: #3d210b; margin-bottom: 10px;">Khép Lại Chương Ký Ức</h4>
        <p style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 14px; color: #5a3819; line-height: 1.8;">
          "${book.secretNote || book.quote || 'Mỗi cuộc gặp gỡ là một nốt nhạc, mỗi lời chia tay là một khoảng lặng dịu êm...'}"
        </p>
        <div style="margin-top: 18px; font-family: 'IM Fell English', serif; font-size: 13px; color: #8c5b1d;">
          — Xuất bản tại website Tiệm Nhỏ Suy Tư —
        </div>
      </div>
      <div class="page-footer-num">Hồi kết</div>
    </div>
    <div class="back cover">
      <div class="cover-top-ornament">✦</div>
      <div>
        <div style="font-family: 'Cormorant Garamond', serif; font-size: 14px; letter-spacing: 0.2em; color: var(--gold-light); margin-bottom: 6px; text-transform: uppercase;">
          TIỆM NHỎ SUY TƯ
        </div>
        <div style="font-size: 11px; color: var(--gold); opacity: 0.85; font-style: italic;">
          Lưu giữ & Phát hành tại Tiệm Nhỏ Suy Tư
        </div>
      </div>
      <div class="cover-open-hint">✨ Nhấp để lật lại trang trước</div>
    </div>
  `;
  bookPages.push(pageBackCover);

  // Gắn các trang vào book3D
  bookPages.forEach(p => book3D.appendChild(p));
  totalFlipPages = bookPages.length;

  // Trigger reflow to apply initial closed state without animation glitch
  void book3D.offsetWidth;
  book3D.classList.remove('mounting');

  // Kích hoạt logic lật sách 3D FlipBook
  flipBook3D(book3D);
  setFlipBookPage(0);
}

// LOGIC LẬT TRANG 3D FLIPBOOK (CHUẨN TỪ /3d-flipbook/script.js)
const flipBook3D = (elBook) => {
  elBook.style.setProperty("--c", 0);
  elBook.querySelectorAll(".page").forEach((page, idx) => {
    page.style.setProperty("--i", idx);
    page.addEventListener("click", (evt) => {
      if (evt.target.closest("a, button")) return;
      const curr = evt.target.closest(".back") ? idx : idx + 1;
      setFlipBookPage(curr);
    });
  });
};

function setFlipBookPage(pageIndex) {
  if (!book3D) return;
  currentFlipPage = Math.max(0, Math.min(pageIndex, totalFlipPages));
  book3D.style.setProperty("--c", currentFlipPage);

  // Tự động căn tâm cân xứng tuyệt đối:
  // - Bìa trước đóng (0): translate 0% -> bìa trước nằm chính giữa màn hình
  // - Khi mở sách (1..total-1): translate 50% -> gáy sách nằm chính giữa, 2 trang xòe đều 2 bên
  // - Bìa sau đóng (total): translate 100% -> bìa sau trượt về chính giữa màn hình
  if (currentFlipPage === 0) {
    book3D.style.translate = "0% 0%";
  } else if (currentFlipPage >= totalFlipPages) {
    book3D.style.translate = "100% 0%";
  } else {
    book3D.style.translate = "50% 0%";
  }

  // Quản lý thứ tự z-index để loại bỏ 100% hiện tượng Z-fighting hay chớp trang trong 3D:
  const allPages = book3D.querySelectorAll(".page");
  allPages.forEach((page, idx) => {
    if (idx < currentFlipPage) {
      page.style.zIndex = idx + 1;
    } else {
      page.style.zIndex = totalFlipPages - idx + 10;
    }
  });

  if (flipbookPageCounter) {
    if (currentFlipPage === 0) {
      flipbookPageCounter.textContent = "Bìa Trước";
    } else if (currentFlipPage >= totalFlipPages) {
      flipbookPageCounter.textContent = "Bìa Sau";
    } else if (currentFlipPage === 1) {
      const isMob = window.innerWidth <= 480;
      flipbookPageCounter.textContent = totalStoryPages > 0 
        ? (isMob ? `Trang 1 / ${totalStoryPages}` : `Lời đề từ • Trang 1 / ${totalStoryPages}`) 
        : 'Lời đề từ';
    } else if (currentFlipPage === totalFlipPages - 1) {
      const isMob = window.innerWidth <= 480;
      const leftPageNum = (currentFlipPage - 1) * 2;
      flipbookPageCounter.textContent = leftPageNum <= totalStoryPages 
        ? (isMob ? `Trang ${leftPageNum} / ${totalStoryPages}` : `Trang ${leftPageNum} • Hồi kết`) 
        : `Hồi kết`;
    } else {
      const leftPageNum = (currentFlipPage - 1) * 2;
      const rightPageNum = leftPageNum + 1;
      if (rightPageNum <= totalStoryPages) {
        flipbookPageCounter.textContent = `Trang ${leftPageNum} - ${rightPageNum} / ${totalStoryPages}`;
      } else {
        flipbookPageCounter.textContent = `Trang ${leftPageNum} / ${totalStoryPages}`;
      }
    }
  }

  if (btnPrevPage) {
    btnPrevPage.style.opacity = currentFlipPage === 0 ? "0.35" : "1";
    btnPrevPage.style.pointerEvents = currentFlipPage === 0 ? "none" : "all";
  }
  if (btnNextPage) {
    btnNextPage.style.opacity = currentFlipPage >= totalFlipPages ? "0.35" : "1";
    btnNextPage.style.pointerEvents = currentFlipPage >= totalFlipPages ? "none" : "all";
  }
}

// CHUYỂN ĐỔI GÓC NHÌN 3D NGHIÊNG / TRỰC DIỆN
function toggle3DAngle() {
  is3DTiltOn = !is3DTiltOn;
  const angleText = document.getElementById('angleText');
  const angleIcon = document.getElementById('angleIcon');

  if (book3D) {
    if (is3DTiltOn) {
      book3D.classList.remove('flat-angle');
      book3D.classList.add('tilted-angle');
      if (btnToggle3DAngle) btnToggle3DAngle.classList.add('active');
      if (angleText) angleText.textContent = 'Góc Nghiêng 3D';
      if (angleIcon) angleIcon.textContent = '📐';
    } else {
      book3D.classList.remove('tilted-angle');
      book3D.classList.add('flat-angle');
      if (btnToggle3DAngle) btnToggle3DAngle.classList.remove('active');
      if (angleText) angleText.textContent = 'Nhìn Trực Diện';
      if (angleIcon) angleIcon.textContent = '📖';
    }
  }
}

function closeModal() {
  if (!overlay || !overlay.classList.contains('open') || isClosingModal) return;
  isClosingModal = true;

  // Dừng nhạc khi đóng sách / cất lên kệ
  if (isPlaying) {
    togglePlayMaster();
  }

  let finished = false;
  const finishClose = () => {
    if (finished) return;
    finished = true;
    if (overlay) overlay.classList.remove('open');
    if (window.gsap && book3D) gsap.set(book3D, { clearProps: "all" });
    setFlipBookPage(0);
    isClosingModal = false;
  };

  if (window.gsap && book3D) {
    gsap.killTweensOf(book3D);
    gsap.to(book3D, {
      scale: 0.5,
      opacity: 0,
      y: 40,
      duration: 0.3,
      ease: "power2.in",
      onComplete: finishClose
    });
    setTimeout(finishClose, 360);
  } else {
    finishClose();
  }
}

function initEventListeners() {
  if (btnPrevPage) {
    btnPrevPage.addEventListener('click', function (e) {
      e.stopPropagation();
      setFlipBookPage(currentFlipPage - 1);
    });
  }

  if (btnNextPage) {
    btnNextPage.addEventListener('click', function (e) {
      e.stopPropagation();
      setFlipBookPage(currentFlipPage + 1);
    });
  }

  if (btnToggle3DAngle) {
    btnToggle3DAngle.addEventListener('click', function (e) {
      e.stopPropagation();
      toggle3DAngle();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeModal();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
  }

  // Loose Sheet Reader Modal Event Listeners
  if (sheetModalCloseBtn) {
    sheetModalCloseBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeSheetReader();
    });
  }

  if (sheetModalOverlay) {
    sheetModalOverlay.addEventListener('click', function (e) {
      if (e.target === sheetModalOverlay) {
        closeSheetReader();
      }
    });
  }

  if (sheetModalPinBtn) {
    sheetModalPinBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      togglePinCurrentSheet();
    });
  }

  document.addEventListener('keydown', function (e) {
    // 1. Check if Loose Sheet Modal is open
    if (sheetModalOverlay && sheetModalOverlay.classList.contains('open')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeSheetReader();
        return;
      }
    }

    // 2. Check if Shelf Book Modal is open
    if (!overlay || !overlay.classList.contains('open')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      setFlipBookPage(currentFlipPage + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      setFlipBookPage(currentFlipPage - 1);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
    }
  });

  let resizeTimer = null;
  window.addEventListener('resize', function () {
    if (overlay && overlay.classList.contains('open') && currentBook) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const savedPage = currentFlipPage;
        render3DFlipBook(currentBook);
        setFlipBookPage(Math.min(savedPage, totalFlipPages));
      }, 250);
    }
  });
}

// 7. AUDIO SYNTH & TURNTABLE ENGINE
function initCursorSpotlight() {
  const spotlight = document.getElementById('cursorSpotlight');
  if (!spotlight || !window.gsap) return;

  const xTo = gsap.quickTo(spotlight, "x", { duration: 0.5, ease: "power2.out" });
  const yTo = gsap.quickTo(spotlight, "y", { duration: 0.5, ease: "power2.out" });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });
}

function initAmbientCanvas() {
  const canvas = document.getElementById('ambientBgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.5,
      alpha: Math.random() * 0.6 + 0.1,
      speedY: -(Math.random() * 0.4 + 0.1),
      speedX: (Math.random() - 0.5) * 0.3,
      pulse: Math.random() * 0.02 + 0.005
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.alpha += Math.sin(Date.now() * p.pulse) * 0.01;

      if (p.y < -10) p.y = height + 10;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201, 168, 76, ${Math.max(0.05, Math.min(0.7, p.alpha))})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(201, 168, 76, 0.4)';
      ctx.fill();
    });

    requestAnimationFrame(renderParticles);
  }

  renderParticles();
}

function initAudioSynth() {
  if (audioCtx) return;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();

  masterGain = audioCtx.createGain();
  masterGain.gain.value = 0.5;

  analyserNode = audioCtx.createAnalyser();
  analyserNode.fftSize = 64;

  masterGain.connect(analyserNode);
  analyserNode.connect(audioCtx.destination);
}

// ==========================================================================
// 8. AUDIO ENGINE & SYNTHESIZER (ĐỆM NHẠC & BÀI HÁT "ĐẾM THỜI GIAN")
// ==========================================================================

const NOTE_FREQS = {
  'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'G3': 196.00, 'A3': 220.00, 'Bb3': 233.08, 'B3': 246.94,
  'C4': 261.63, 'D4': 293.66, 'Eb4': 311.13, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'Bb4': 466.16, 'B4': 493.88,
  'C5': 523.25, 'D5': 587.33, 'Eb5': 622.25, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00, 'Bb5': 932.33, 'B5': 987.77,
  'C6': 1046.50
};

// Giai điệu kinh điển của bài hát "Đếm Thời Gian" (Khánh Đơn / Huyền Thoại / Khang Duy)
// "Màn đêm không trăng không sao không gió / Không ai đi ngang qua con phố quen..."
// "Một, hai, ba... Anh chờ em đã bao lâu rồi người hay không..."
const DEM_THOI_GIAN_NOTES = [
  // Phiên khúc: "Màn đêm không trăng, không sao, không gió..."
  { note: 'D4', dur: 0.45, bass: 'D3' },
  { note: 'F4', dur: 0.45 },
  { note: 'G4', dur: 0.45 },
  { note: 'A4', dur: 0.65, bass: 'D3' },
  { note: 'A4', dur: 0.35 },
  { note: 'G4', dur: 0.35 },
  { note: 'F4', dur: 0.35 },
  { note: 'D4', dur: 0.70, bass: 'D3' },

  // "Không ai đi ngang qua con phố quen..."
  { note: 'F4', dur: 0.45, bass: 'Bb3' },
  { note: 'G4', dur: 0.45 },
  { note: 'A4', dur: 0.60 },
  { note: 'A4', dur: 0.35 },
  { note: 'C5', dur: 0.45, bass: 'C3' },
  { note: 'D5', dur: 0.45 },
  { note: 'A4', dur: 0.90, bass: 'A3' },

  // "Có mình anh nơi đây cô đơn ôm bó hoa tươi..."
  { note: 'F4', dur: 0.35, bass: 'D3' },
  { note: 'G4', dur: 0.35 },
  { note: 'A4', dur: 0.35 },
  { note: 'A4', dur: 0.35 },
  { note: 'G4', dur: 0.35 },
  { note: 'F4', dur: 0.35 },
  { note: 'E4', dur: 0.35 },
  { note: 'F4', dur: 0.35 },
  { note: 'G4', dur: 0.80, bass: 'G3' },

  // "Anh đang trông mong một người..."
  { note: 'G4', dur: 0.35, bass: 'G3' },
  { note: 'A4', dur: 0.35 },
  { note: 'Bb4', dur: 0.40 },
  { note: 'A4', dur: 0.40 },
  { note: 'F4', dur: 0.40 },
  { note: 'G4', dur: 0.40 },
  { note: 'E4', dur: 0.90, bass: 'A3' },

  // "Mà sao em yêu không đến đây..."
  { note: 'E4', dur: 0.35, bass: 'A3' },
  { note: 'F4', dur: 0.35 },
  { note: 'G4', dur: 0.40 },
  { note: 'A4', dur: 0.40 },
  { note: 'F4', dur: 0.40 },
  { note: 'D4', dur: 0.80, bass: 'D3' },

  // "Để cho bông hoa kia héo khô đợi chờ em..."
  { note: 'D4', dur: 0.35, bass: 'Bb3' },
  { note: 'F4', dur: 0.35 },
  { note: 'G4', dur: 0.35 },
  { note: 'A4', dur: 0.40 },
  { note: 'G4', dur: 0.40 },
  { note: 'F4', dur: 0.40 },
  { note: 'E4', dur: 0.40 },
  { note: 'D4', dur: 0.70, bass: 'D3' },

  // "Đợi chờ em..."
  { note: 'E4', dur: 0.40, bass: 'A3' },
  { note: 'D4', dur: 1.40, bass: 'D3' },

  // Điệp khúc: "Một..."
  { note: 'D5', dur: 0.85, bass: 'D3' },
  // "Hai..."
  { note: 'C5', dur: 0.85, bass: 'C3' },
  // "Ba..."
  { note: 'A4', dur: 1.10, bass: 'A3' },

  // "Anh chờ em đã bao lâu rồi người hay không..."
  { note: 'A4', dur: 0.35, bass: 'F3' },
  { note: 'G4', dur: 0.35 },
  { note: 'A4', dur: 0.35 },
  { note: 'D5', dur: 0.40 },
  { note: 'C5', dur: 0.40 },
  { note: 'A4', dur: 0.40 },
  { note: 'G4', dur: 0.40 },
  { note: 'F4', dur: 0.40 },
  { note: 'G4', dur: 0.90, bass: 'G3' },

  // "Một..."
  { note: 'D5', dur: 0.85, bass: 'D3' },
  // "Hai..."
  { note: 'C5', dur: 0.85, bass: 'C3' },
  // "Ba..."
  { note: 'A4', dur: 1.10, bass: 'A3' },

  // "Anh chờ em giữa đêm mưa buồn ướt lạnh..."
  { note: 'A4', dur: 0.35, bass: 'Bb3' },
  { note: 'G4', dur: 0.35 },
  { note: 'A4', dur: 0.35 },
  { note: 'D5', dur: 0.40 },
  { note: 'C5', dur: 0.40 },
  { note: 'A4', dur: 0.40 },
  { note: 'G4', dur: 0.40 },
  { note: 'F4', dur: 0.40 },
  { note: 'D4', dur: 1.60, bass: 'D3' }
];

// Giai điệu piano kinh điển của ca khúc "Homesick" (Dua Lipa ft. Chris Martin)
// "Here where the sky's falling / I'm covered in blue / I'm running home to you..."
// "Oh, I wish I was there with you..."
const HOMESICK_NOTES = [
  // Đoạn dạo đầu / Phiên khúc: "Here where the sky's falling..."
  { note: 'E4', dur: 0.45, bass: 'C3' },
  { note: 'G4', dur: 0.45 },
  { note: 'A4', dur: 0.45 },
  { note: 'G4', dur: 0.80, bass: 'C3' },

  // "I'm covered in blue..."
  { note: 'E4', dur: 0.45, bass: 'A3' },
  { note: 'D4', dur: 0.45 },
  { note: 'C4', dur: 0.95, bass: 'F3' },

  // "I'm running home to you..."
  { note: 'C4', dur: 0.35, bass: 'F3' },
  { note: 'E4', dur: 0.35 },
  { note: 'G4', dur: 0.40 },
  { note: 'A4', dur: 0.45 },
  { note: 'G4', dur: 0.90, bass: 'C3' },

  // "All I've got is you..."
  { note: 'E4', dur: 0.45, bass: 'G3' },
  { note: 'D4', dur: 0.45 },
  { note: 'C4', dur: 1.15, bass: 'C3' },

  // "You give me a reason..."
  { note: 'E4', dur: 0.35, bass: 'C3' },
  { note: 'G4', dur: 0.35 },
  { note: 'A4', dur: 0.40 },
  { note: 'C5', dur: 0.60, bass: 'A3' },

  // "Something to believe in..."
  { note: 'B4', dur: 0.40 },
  { note: 'A4', dur: 0.40 },
  { note: 'G4', dur: 0.95, bass: 'G3' },

  // Điệp khúc: "Oh, I wish I was there with you..."
  { note: 'G4', dur: 0.45, bass: 'F3' },
  { note: 'A4', dur: 0.45 },
  { note: 'C5', dur: 0.65, bass: 'C3' },
  { note: 'D5', dur: 0.45 },
  { note: 'C5', dur: 0.50 },
  { note: 'A4', dur: 0.50, bass: 'F3' },
  { note: 'G4', dur: 1.15, bass: 'C3' },

  // "Oh, I wish I was there with you..."
  { note: 'G4', dur: 0.45, bass: 'F3' },
  { note: 'A4', dur: 0.45 },
  { note: 'C5', dur: 0.65, bass: 'A3' },
  { note: 'D5', dur: 0.45 },
  { note: 'E5', dur: 0.55 },
  { note: 'D5', dur: 0.50, bass: 'G3' },
  { note: 'C5', dur: 1.65, bass: 'C3' }
];

// Giai điệu mộc mạc da diết của ca khúc "Colour Me In" (Damien Rice)
// Dành riêng cho quyển sách đặc biệt của Jenny: "Vệt Mực Mùa Thu"
const COLOUR_ME_IN_NOTES = [
  // Phiên khúc 1: "I tried to erase it, but the ink just bled right through..."
  { note: 'G4', dur: 0.45, bass: 'C3' },
  { note: 'G4', dur: 0.35 },
  { note: 'E4', dur: 0.45 },
  { note: 'D4', dur: 0.45 },
  { note: 'C4', dur: 0.75, bass: 'C3' },

  { note: 'C4', dur: 0.38 },
  { note: 'D4', dur: 0.38 },
  { note: 'E4', dur: 0.45, bass: 'G3' },
  { note: 'G4', dur: 0.45 },
  { note: 'E4', dur: 0.38 },
  { note: 'D4', dur: 0.85, bass: 'G3' },

  // "Almost lost my mind, when the words led me to you..."
  { note: 'G4', dur: 0.45, bass: 'A3' },
  { note: 'G4', dur: 0.35 },
  { note: 'E4', dur: 0.45 },
  { note: 'D4', dur: 0.45 },
  { note: 'C4', dur: 0.75, bass: 'A3' },

  { note: 'C4', dur: 0.38 },
  { note: 'D4', dur: 0.38 },
  { note: 'E4', dur: 0.45, bass: 'F3' },
  { note: 'D4', dur: 0.45 },
  { note: 'C4', dur: 1.15, bass: 'F3' },

  // "All the sleepless nights, and the dreams of a solitary life..."
  { note: 'G4', dur: 0.45, bass: 'C3' },
  { note: 'G4', dur: 0.35 },
  { note: 'E4', dur: 0.45 },
  { note: 'D4', dur: 0.45 },
  { note: 'C4', dur: 0.75, bass: 'C3' },

  { note: 'C4', dur: 0.38 },
  { note: 'D4', dur: 0.38 },
  { note: 'E4', dur: 0.45, bass: 'G3' },
  { note: 'G4', dur: 0.45 },
  { note: 'E4', dur: 0.40 },
  { note: 'D4', dur: 0.85, bass: 'G3' },

  // "Like a stubborn fool..."
  { note: 'G4', dur: 0.45, bass: 'F3' },
  { note: 'E4', dur: 0.45 },
  { note: 'D4', dur: 0.45 },
  { note: 'C4', dur: 1.35, bass: 'C3' },

  // Điệp khúc: "So let me love you..."
  { note: 'E4', dur: 0.50, bass: 'F3' },
  { note: 'G4', dur: 0.45 },
  { note: 'A4', dur: 0.80, bass: 'F3' },
  { note: 'G4', dur: 0.50 },
  { note: 'E4', dur: 0.95, bass: 'C3' },

  // "Let me love you..."
  { note: 'E4', dur: 0.50, bass: 'F3' },
  { note: 'G4', dur: 0.45 },
  { note: 'A4', dur: 0.80, bass: 'F3' },
  { note: 'G4', dur: 0.50 },
  { note: 'D4', dur: 0.95, bass: 'G3' },

  // "And colour me in..."
  { note: 'C4', dur: 0.45, bass: 'A3' },
  { note: 'D4', dur: 0.45 },
  { note: 'E4', dur: 0.55 },
  { note: 'D4', dur: 0.45 },
  { note: 'C4', dur: 1.85, bass: 'C3' },

  // Đoạn đệm piano êm dịu
  { note: 'E4', dur: 0.45, bass: 'F3' },
  { note: 'G4', dur: 0.45 },
  { note: 'C5', dur: 0.90, bass: 'C3' },
  { note: 'B4', dur: 0.45 },
  { note: 'A4', dur: 0.45 },
  { note: 'G4', dur: 1.60, bass: 'G3' }
];

function stopCurrentAudio() {
  // Hủy toàn bộ timeout giai điệu đang chờ
  if (melodyTimeouts && melodyTimeouts.length > 0) {
    melodyTimeouts.forEach(t => clearTimeout(t));
    melodyTimeouts = [];
  }

  // Dập tắt các nốt synthesizer đang ngân
  if (activeOscillators && activeOscillators.length > 0) {
    activeOscillators.forEach(item => {
      try {
        if (item && item.gain && audioCtx) {
          item.gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1);
        }
        setTimeout(() => {
          try { if (item && item.osc) item.osc.stop(); } catch (e) { }
        }, 120);
      } catch (e) { }
    });
    activeOscillators = [];
  }

  // Dừng synthOsc ambient nếu có
  if (synthOsc) {
    try { synthOsc.stop(); } catch (e) { }
    synthOsc = null;
  }

  // Dừng bài hát MP3 thực tế nếu đang phát
  if (realAudioPlayer) {
    try {
      realAudioPlayer.pause();
      realAudioPlayer.currentTime = 0;
    } catch (e) { }
    realAudioPlayer = null;
  }
}

function playPianoNote(freq, duration, startTime, volume = 0.22) {
  if (!audioCtx || !masterGain || !freq) return;

  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const noteGain = audioCtx.createGain();

  // Âm sắc đàn Acoustic Piano / Music Box ấm áp
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(freq, startTime);

  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(freq * 2, startTime); // Họa âm lấp lánh nhẹ

  noteGain.gain.setValueAtTime(0.001, startTime);
  noteGain.gain.exponentialRampToValueAtTime(volume, startTime + 0.02);
  noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + Math.max(0.25, duration * 1.25));

  osc1.connect(noteGain);
  osc2.connect(noteGain);
  noteGain.connect(masterGain);

  osc1.start(startTime);
  osc2.start(startTime);

  const stopTime = startTime + duration * 1.35;
  osc1.stop(stopTime);
  osc2.stop(stopTime);

  activeOscillators.push({ osc: osc1, gain: noteGain });
  activeOscillators.push({ osc: osc2, gain: noteGain });
}

function playDemThoiGianMelody() {
  initAudioSynth();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  stopCurrentAudio();

  let currentTimeOffset = 0.15;
  const loopStartTime = audioCtx.currentTime;

  DEM_THOI_GIAN_NOTES.forEach((item) => {
    const noteTime = loopStartTime + currentTimeOffset;
    const freq = NOTE_FREQS[item.note];

    // Nốt giai điệu chính
    if (freq) {
      playPianoNote(freq, item.dur, noteTime, 0.24);
    }

    // Nốt bass trầm đệm cùng lúc
    if (item.bass && NOTE_FREQS[item.bass]) {
      playPianoNote(NOTE_FREQS[item.bass], item.dur * 1.8, noteTime, 0.14);
    }

    currentTimeOffset += item.dur;
  });

  // Lặp lại bản nhạc nếu vẫn đang mở sách
  const totalDurationMs = (currentTimeOffset + 1.2) * 1000;
  const loopTimer = setTimeout(() => {
    if (isPlaying && currentBook && currentBook.melodyType === 'dem-thoi-gian') {
      playDemThoiGianMelody();
    }
  }, totalDurationMs);

  melodyTimeouts.push(loopTimer);
}

function playHomesickMelody() {
  initAudioSynth();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  stopCurrentAudio();

  let currentTimeOffset = 0.15;
  const loopStartTime = audioCtx.currentTime;

  HOMESICK_NOTES.forEach((item) => {
    const noteTime = loopStartTime + currentTimeOffset;
    const freq = NOTE_FREQS[item.note];

    // Nốt giai điệu piano chính
    if (freq) {
      playPianoNote(freq, item.dur, noteTime, 0.22);
    }

    // Nốt bass trầm đệm cùng lúc
    if (item.bass && NOTE_FREQS[item.bass]) {
      playPianoNote(NOTE_FREQS[item.bass], item.dur * 1.8, noteTime, 0.13);
    }

    currentTimeOffset += item.dur;
  });

  // Lặp lại bản nhạc nếu vẫn đang mở sách
  const totalDurationMs = (currentTimeOffset + 1.2) * 1000;
  const loopTimer = setTimeout(() => {
    if (isPlaying && currentBook && currentBook.melodyType === 'homesick') {
      playHomesickMelody();
    }
  }, totalDurationMs);

  melodyTimeouts.push(loopTimer);
}

function playColourMeInMelody() {
  initAudioSynth();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  stopCurrentAudio();

  let currentTimeOffset = 0.35;

  COLOUR_ME_IN_NOTES.forEach((item) => {
    const noteTime = audioCtx.currentTime + currentTimeOffset;
    const freq = NOTE_FREQS[item.note];

    // Nốt giai điệu piano chính (tiếng đàn mộc, âm lượng vừa phải, sâu lắng)
    if (freq) {
      playPianoNote(freq, item.dur, noteTime, 0.24);
    }

    // Nốt bass trầm đệm cùng lúc
    if (item.bass && NOTE_FREQS[item.bass]) {
      playPianoNote(NOTE_FREQS[item.bass], item.dur * 1.8, noteTime, 0.14);
    }

    currentTimeOffset += item.dur;
  });

  // Lặp lại bản nhạc nếu vẫn đang mở sách
  const totalDurationMs = (currentTimeOffset + 1.2) * 1000;
  const loopTimer = setTimeout(() => {
    if (isPlaying && currentBook && currentBook.melodyType === 'colour-me-in') {
      playColourMeInMelody();
    }
  }, totalDurationMs);

  melodyTimeouts.push(loopTimer);
}

function playSynthMelody() {
  initAudioSynth();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  stopCurrentAudio();

  // 1. Nếu cuốn sách được chọn là "Những Vệt Mưa Đêm" hoặc có bài hát "Đếm Thời Gian"
  if (currentBook && currentBook.melodyType === 'dem-thoi-gian') {
    if (currentBook.audioSrc) {
      try {
        const audio = new Audio(currentBook.audioSrc);
        audio.volume = 0.85;
        realAudioPlayer = audio;

        let hasFallenBack = false;
        const fallbackToSynth = () => {
          if (hasFallenBack) return;
          hasFallenBack = true;
          realAudioPlayer = null;
          playDemThoiGianMelody();
        };

        audio.addEventListener('error', fallbackToSynth);

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            fallbackToSynth();
          });
        }
        return;
      } catch (e) {
        playDemThoiGianMelody();
        return;
      }
    } else {
      playDemThoiGianMelody();
      return;
    }
  }

  // 2. Nếu cuốn sách được chọn là "Cuốn Sổ Dở Dang" hoặc có bài hát "Homesick"
  if (currentBook && currentBook.melodyType === 'homesick') {
    if (currentBook.audioSrc) {
      try {
        const audio = new Audio(currentBook.audioSrc);
        audio.volume = 0.85;
        realAudioPlayer = audio;

        let hasFallenBack = false;
        const fallbackToSynth = () => {
          if (hasFallenBack) return;
          hasFallenBack = true;
          realAudioPlayer = null;
          playHomesickMelody();
        };

        audio.addEventListener('error', fallbackToSynth);

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            fallbackToSynth();
          });
        }
        return;
      } catch (e) {
        playHomesickMelody();
        return;
      }
    } else {
      playHomesickMelody();
      return;
    }
  }

  // 3. Nếu cuốn sách được chọn là quyển đặc biệt của Jenny hoặc có bài hát "Colour Me In"
  if (currentBook && currentBook.melodyType === 'colour-me-in') {
    if (currentBook.audioSrc) {
      try {
        const audio = new Audio(currentBook.audioSrc);
        audio.volume = 0.85;
        realAudioPlayer = audio;

        let hasFallenBack = false;
        const fallbackToSynth = () => {
          if (hasFallenBack) return;
          hasFallenBack = true;
          realAudioPlayer = null;
          playColourMeInMelody();
        };

        audio.addEventListener('error', fallbackToSynth);

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            fallbackToSynth();
          });
        }
        return;
      } catch (e) {
        playColourMeInMelody();
        return;
      }
    } else {
      playColourMeInMelody();
      return;
    }
  }

  // 4. Mặc định cho các cuốn sách khác: Ambient pad ấm áp theo cung bậc
  const osc1 = audioCtx.createOscillator();
  const osc2 = audioCtx.createOscillator();
  const synthGain = audioCtx.createGain();

  const baseFreqs = [261.63, 329.63, 392.00, 493.88];
  const freq = baseFreqs[currentBookIndex % baseFreqs.length];

  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(freq, audioCtx.currentTime);

  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(freq * 1.5, audioCtx.currentTime);

  synthGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
  synthGain.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 1);

  osc1.connect(synthGain);
  osc2.connect(synthGain);
  synthGain.connect(masterGain);

  osc1.start();
  osc2.start();

  synthOsc = {
    stop: () => {
      synthGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
      setTimeout(() => {
        try { osc1.stop(); osc2.stop(); } catch (e) { }
      }, 500);
    }
  };
}

function toggleAmbientRain() {
  initAudioSynth();
  isAmbientRainOn = !isAmbientRainOn;

  const btnToggle = document.getElementById('btnAmbientRain');
  if (btnToggle) {
    btnToggle.classList.toggle('active', isAmbientRainOn);
  }

  if (isAmbientRainOn) {
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1000;

    const rainGain = audioCtx.createGain();
    rainGain.gain.value = 0.08;

    whiteNoise.connect(filter);
    filter.connect(rainGain);
    rainGain.connect(masterGain);

    whiteNoise.start();
    rainNoiseNode = {
      stop: () => {
        rainGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        setTimeout(() => whiteNoise.stop(), 300);
      }
    };
  } else {
    if (rainNoiseNode) {
      rainNoiseNode.stop();
      rainNoiseNode = null;
    }
  }
}

function initVisualizerCanvas() {
  const canvas = document.getElementById('audioVisualizer');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);

    const width = canvas.width = canvas.clientWidth;
    const height = canvas.height = canvas.clientHeight;
    ctx.clearRect(0, 0, width, height);

    const bufferLength = analyserNode ? analyserNode.frequencyBinCount : 32;
    const dataArray = new Uint8Array(bufferLength);

    if (analyserNode && isPlaying) {
      analyserNode.getByteFrequencyData(dataArray);
    } else {
      for (let i = 0; i < bufferLength; i++) {
        dataArray[i] = Math.sin(Date.now() * 0.003 + i * 0.2) * 15 + 20;
      }
    }

    const barWidth = (width / bufferLength) * 1.8;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * height * 0.85 + 4;

      const gradient = ctx.createLinearGradient(0, height, 0, 0);
      gradient.addColorStop(0, 'rgba(201, 168, 76, 0.2)');
      gradient.addColorStop(0.5, 'rgba(201, 168, 76, 0.8)');
      gradient.addColorStop(1, '#778beb');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, height - barHeight, barWidth - 2, barHeight);

      x += barWidth;
    }
  }

  drawVisualizer();
}

const PLAY_MASTER_ICON_SVG = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="transform: translateX(1.5px);"><polygon points="6 4 20 12 6 20"></polygon></svg>`;
const PAUSE_MASTER_ICON_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"></rect><rect x="14" y="4" width="4" height="16" rx="1"></rect></svg>`;

let tonearmTweenTimeline = null;

function animateTonearm(playState, onNeedleDrop) {
  const tonearm = document.getElementById('tonearm');
  const vinyl = document.getElementById('vinylRecord');
  if (!tonearm || !window.gsap) {
    if (playState && typeof onNeedleDrop === 'function') onNeedleDrop();
    return;
  }

  if (tonearmTweenTimeline) {
    tonearmTweenTimeline.kill();
  }

  if (playState) {
    if (vinyl) vinyl.classList.add('spinning');

    // Quá trình hạ kim chân thật:
    // 1. Nhấc cần kim khỏi bệ nghỉ (0.22s)
    // 2. Xoay cần kim qua phía đĩa than (0.45s)
    // 3. Hạ nhẹ nhàng đầu kim chạm vào rãnh đĩa than (0.35s) -> KHI CHẠM THÌ MỚI BẮT ĐẦU PHÁT NHẠC
    tonearmTweenTimeline = gsap.timeline({
      onComplete: () => {
        if (isPlaying && typeof onNeedleDrop === 'function') {
          onNeedleDrop();
        }
      }
    })
      .to(tonearm, { rotate: -36, y: -12, scale: 1.05, duration: 0.22, ease: 'power2.out' })
      .to(tonearm, { rotate: 2, y: -5, duration: 0.45, ease: 'power2.inOut' })
      .to(tonearm, { rotate: 0, y: 0, scale: 1, duration: 0.35, ease: 'power2.in' });
  } else {
    if (vinyl) vinyl.classList.remove('spinning');

    // Dừng phát ngay: nhấc kim lên và xoay trở lại giá đỡ nghỉ
    tonearmTweenTimeline = gsap.timeline()
      .to(tonearm, { y: -10, duration: 0.2, ease: 'power2.out' })
      .to(tonearm, { rotate: -36, y: 0, duration: 0.45, ease: 'power2.inOut' });
  }
}

function togglePlayMaster() {
  isPlaying = !isPlaying;
  const btnPlay = document.getElementById('btnPlayMaster');

  if (btnPlay) {
    btnPlay.innerHTML = isPlaying ? PAUSE_MASTER_ICON_SVG : PLAY_MASTER_ICON_SVG;
    btnPlay.setAttribute('title', isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc');
  }

  if (isPlaying) {
    // Cần kim di chuyển và tiếp xúc bề mặt đĩa than rồi mới bắt đầu phát âm thanh
    animateTonearm(true, () => {
      playSynthMelody();
    });
  } else {
    // Tắt âm thanh ngay lập tức và nhấc cần kim về
    stopCurrentAudio();
    animateTonearm(false);
  }
}

function updateDeckDisplay(track) {
  if (!track) return;
  const tagEl = document.getElementById('deckTagId');
  if (tagEl) {
    tagEl.className = `tag-badge ${track.tagClass || 'enc-1'}`;
    tagEl.textContent = track.tagId || '@Encounter_001';
  }
  const titleEl = document.getElementById('deckTrackTitle');
  if (titleEl) {
    if (track.songTitle) {
      titleEl.textContent = `${track.songTitle} — ${track.songArtist || 'Nhạc Ký Ức'}`;
    } else {
      titleEl.textContent = track.title ? track.title.replace('\n', ' ') : 'Cuốn Sách Ký Ức';
    }
  }
  const aliasEl = document.getElementById('deckTrackAlias');
  if (aliasEl) {
    aliasEl.textContent = `"${track.tagAlias || 'Ký Ức'}"`;
  }
  const durationEl = document.getElementById('deckDuration');
  if (durationEl) {
    durationEl.textContent = track.duration || '03:45';
  }
}

function setupFilterListeners() {
  const filterPills = document.querySelectorAll('.filter-pills .filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterCategory = pill.getAttribute('data-filter') || 'all';
      renderTracklist(getFilteredDrafts(filterCategory));
    });
  });

  const searchInput = document.getElementById('albumSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activePill = document.querySelector('.filter-pills .filter-pill.active');
      const activeFilter = activePill ? activePill.getAttribute('data-filter') : 'all';
      renderTracklist(getFilteredDrafts(activeFilter));
    });
  }
}

function unlockSecretNote() {
  const secretText = document.getElementById('modalSecretText');
  const btnUnlock = document.getElementById('btnUnlockSecret');

  if (secretText) {
    secretText.classList.remove('secret-text-hidden');
    secretText.classList.add('secret-text-unlocked');
  }

  if (btnUnlock) {
    btnUnlock.style.display = 'none';
  }
}

function sendWhisper() {
  const input = document.getElementById('whisperInput');
  if (!input || !input.value.trim()) return;

  const whisperText = input.value.trim();
  const whispers = JSON.parse(localStorage.getItem('cara_album_whispers') || '[]');
  whispers.push({ bookTitle: currentBook ? currentBook.title : '', text: whisperText, date: new Date().toISOString() });
  localStorage.setItem('cara_album_whispers', JSON.stringify(whispers));

  input.value = '';

  const btnSend = document.getElementById('btnSendWhisper');
  if (btnSend) {
    const origText = btnSend.innerHTML;
    btnSend.innerHTML = '✨ Đã thả lời nhắn!';
    setTimeout(() => {
      btnSend.innerHTML = origText;
    }, 2000);
  }
}

// ==========================================================================
// 6. QUẢN LÝ CHẾ ĐỘ XEM BẢN THẢO (DÒNG CHẢY SCROLL NGANG vs LƯỚI GRID)
// ==========================================================================
let updateStreamNavArrows = function () { };

function setupManuscriptViewStream() {
  const gridContainer = document.getElementById('tracklistGrid');
  const sectionEl = document.querySelector('.manuscript-section');
  const viewToggle = document.getElementById('viewModeToggle');
  const navPrev = document.getElementById('streamNavPrev');
  const navNext = document.getElementById('streamNavNext');

  if (!gridContainer) return;

  // 1. Chế độ xem mặc định: 'stream' (Dòng Chảy Ngang Mênh Mang)
  let currentMode = localStorage.getItem('caraflow_manuscript_view_mode') || 'stream';

  function applyViewMode(mode) {
    currentMode = mode;
    localStorage.setItem('caraflow_manuscript_view_mode', mode);

    if (viewToggle) {
      viewToggle.querySelectorAll('.btn-view-mode').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
      });
    }

    if (mode === 'grid') {
      gridContainer.classList.remove('mode-stream');
      gridContainer.classList.add('mode-grid');
      if (sectionEl) sectionEl.classList.add('is-grid-mode');
    } else {
      gridContainer.classList.remove('mode-grid');
      gridContainer.classList.add('mode-stream');
      if (sectionEl) sectionEl.classList.remove('is-grid-mode');
      updateArrowsState();
    }
  }

  // 2. Chuyển đổi khi click nút toggle
  if (viewToggle) {
    viewToggle.querySelectorAll('.btn-view-mode').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-mode');
        applyViewMode(mode);
      });
    });
  }

  // 3. Mũi tên điều hướng trái / phải
  function updateArrowsState() {
    if (!navPrev || !navNext || currentMode !== 'stream') return;
    const scrollLeft = gridContainer.scrollLeft;
    const maxScroll = Math.max(0, gridContainer.scrollWidth - gridContainer.clientWidth - 10);

    navPrev.classList.toggle('is-disabled', scrollLeft <= 10);
    navNext.classList.toggle('is-disabled', scrollLeft >= maxScroll || gridContainer.scrollWidth <= gridContainer.clientWidth);
  }
  updateStreamNavArrows = updateArrowsState;

  if (navPrev) {
    navPrev.addEventListener('click', () => {
      gridContainer.scrollBy({ left: -340, behavior: 'smooth' });
    });
  }

  if (navNext) {
    navNext.addEventListener('click', () => {
      gridContainer.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }

  gridContainer.addEventListener('scroll', () => {
    updateArrowsState();
  }, { passive: true });

  // 4. Kéo chuột để cuộn ngang trên máy tính (Mouse Drag-to-Scroll)
  let isDown = false;
  let startX = 0;
  let scrollStart = 0;
  let hasMoved = false;

  gridContainer.addEventListener('mousedown', (e) => {
    if (currentMode !== 'stream') return;
    if (e.target.closest('button')) return;
    isDown = true;
    hasMoved = false;
    startX = e.pageX - gridContainer.offsetLeft;
    scrollStart = gridContainer.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    setTimeout(() => { hasMoved = false; }, 50);
  });

  gridContainer.addEventListener('mousemove', (e) => {
    if (!isDown || currentMode !== 'stream') return;
    const x = e.pageX - gridContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 8) {
      hasMoved = true;
    }
    gridContainer.scrollLeft = scrollStart - walk;
  });

  // Chặn mở đọc nếu vừa kéo chuột
  gridContainer.addEventListener('click', (e) => {
    if (hasMoved) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);

  // Áp dụng chế độ xem khởi tạo
  applyViewMode(currentMode);
  window.addEventListener('resize', updateArrowsState);
}

document.addEventListener('DOMContentLoaded', () => {
  initDOMElements();
  initEventListeners();
  initCursorSpotlight();
  initAmbientCanvas();
  initVisualizerCanvas();
  buildShelf(bookshelf);
  renderTracklist(ALBUM_TRACKS);
  setupFilterListeners();
  setupManuscriptViewStream();
  updateDeckDisplay(ALBUM_TRACKS[0]);
});
