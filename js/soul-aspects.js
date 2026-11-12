/* ==========================================================================
   SOUL ASPECTS INTERACTIVE LOGIC (Những Góc Tâm Hồn Của Tình)
   ========================================================================== */

let currentAspectKey = "cat";
let currentActivePet = "orange-cat";
const petClickCounters = {
  "orange-cat": 0,
  "tabby-cat": 0,
  "black-cat": 0,
  "duck": 0,
  "bird": 0,
  "chicken": 0
};

const petsData = {
  "orange-cat": {
    name: "Mèo Cam",
    tag: "CON VẬT TỪNG NUOI • BÉ MÈO CAM",
    heading: "Bé Mèo Cam: Vệt nắng ấm cuộn tròn bên hiên",
    subheading: "Lười biếng, ấm áp và luôn bên tớ những lúc chênh vênh",
    paragraphs: [
      "Chú mèo cam này là người bạn bốn chân gắn liền với những buổi trưa tĩnh lặng. Chú có bộ lông màu cam ấm áp, chiếc đuôi cuộn tròn và biệt tài ngủ say sưa bất kể trời đất.",
      "Mỗi khi tớ ngồi một mình làm việc hay có tâm sự, chú lại lững thững bước đến, dụi đầu vào chân rồi nằm kẹp bên cạnh, thỉnh thoảng hé mở mắt ngước nhìn như muốn bảo: 'Đừng lo, có tớ ở đây bên bạn rồi nè!'."
    ],
    quote: "“Một chú mèo cam ấm áp như một vệt nắng chiều sưởi dịu lòng người.”",
    sleepImg: "images/about/cosmic_cat.png",
    awakeImg: "images/about/cosmic_cat_awake.png",
    defaultBubble: "meoww.. zzz 🐾",
    sounds: [
      "meoww.. zzz ✨",
      "meow~ 🐾",
      "nằm sưởi nắng ấm quá... ☀️",
      "meo meoo... tớ là mèo cam nè! 🌸",
      "purrrr... gừ gừ ✨",
      "méo mẻo meoww 🐾"
    ],
    easterEggs: [
      "ôm bạn một cái thật chặt nè~ 🤗 ✨",
      "mèo cam chúc bạn 1 ngày dịu dàng nha! 🌸",
      "cho tớ ngủ nướng thêm 5 phút nha... 💤",
      "bạn là người bạn tuyệt vời nhất! 🐾💖"
    ]
  },
  "tabby-cat": {
    name: "Mèo Mướp",
    tag: "CON VẬT TỪNG NUOI • BÉ MÈO MƯỚP",
    heading: "Bé Mèo Mướp: Chiến thần nghịch ngợm đáng yêu",
    subheading: "Nhanh nhẹn, tinh nghịch nhưng cực kỳ nũng nịu khi được nựng cằm",
    paragraphs: [
      "Chú mèo mướp vằn này là 'cây hài' trong nhà. Chú có những đường vằn màu tro xám dũng mãnh như một chú hổ con, đôi tai vểnh lên nghe ngóng và đôi mắt to tròn sáng quắc.",
      "Chú thích nhất là rình bắt những chiếc lá vàng bay trước sân, leo trèo thoăn thoắt lên mọi góc bàn. Nhưng cứ hễ được vuốt ve gãi cằm là chú lại nhắm tịt mắt, phát ra tiếng rừ rừ giòn tan hạnh phúc."
    ],
    quote: "“Sự hiếu động vô tư của chú nhắc tớ luôn giữ lấy niềm vui trẻ thơ giữa cuộc sống người lớn.”",
    sleepImg: "images/about/pet_tabby.jpg",
    awakeImg: "images/about/pet_tabby_awake.jpg",
    defaultBubble: "meo meoo~ 🐯✨",
    sounds: [
      "meo meoo~ 🐯✨",
      "chuyên gia bắt lá vàng nè! 🍂",
      "rừ rừ... nựng cằm tớ đi 🐾",
      "meoww! tớ nhảy lên bàn nha~ 🐾",
      "gừ gừ... thích quá à! ✨",
      "mèo mướp dũng mãnh chào bạn! 🐯"
    ],
    easterEggs: [
      "tớ vừa rình bắt được một vệt nắng nè! ☀️",
      "xoa đầu tớ thêm chút nữa đi bạn ơi~ 🐯💖",
      "mướp nhỏ chúc bạn luôn tràn đầy năng lượng nha! 🌟",
      "bạn cũng thích khám phá như tớ đúng không? 🐾"
    ]
  },
  "black-cat": {
    name: "Mèo Mun",
    tag: "CON VẬT TỪNG NUOI • BÉ MÈO MUN",
    heading: "Bé Mèo Mun: Đôi mắt ngọc bích giữa màn đêm",
    subheading: "Trầm tĩnh, bí ẩn nhưng quấn người và tình cảm vô cùng",
    paragraphs: [
      "Nhiều người nghĩ mèo mun đen tuyền bí ẩn hay xa cách, nhưng với tớ, chú mèo mun này lại là người bạn tình cảm và quấn quýt nhất. Bộ lông đen mịn màng như nhung cùng đôi mắt ngọc lục bảo trong vắt.",
      "Có những đêm tớ sợ ẻm vô cùng vì ẻm lẩn vào bóng tối, ngày xưa nhà tớ ngủ là tắt hết đèn nên không thể nào thấy ẻm được, chỉ có thấy hai con mắt ẻm thôi. Nhiều lúc tớ hốt hoảng vì không biết đấy là gì?"
    ],
    quote: "“Bí ẩn và tĩnh lặng, chú dạy tớ trân trọng những vẻ đẹp thầm lặng không cần ồn ào.”",
    sleepImg: "images/about/pet_black.jpg",
    awakeImg: "images/about/pet_black_awake.jpg",
    defaultBubble: "meowww bí ẩn~ 🐈‍⬛✨",
    sounds: [
      "meowww~ 🐈‍⬛✨",
      "mắt ngọc lục bảo long lanh ✨",
      "purrrr... may mắn tới bạn nè! 🍀",
      "meo meo quấn quýt 🐾",
      "lông đen mịn như nhung nè~ ✨",
      "ngồi bên bạn bình yên ghê! 🌙"
    ],
    easterEggs: [
      "tớ là bùa hộ mệnh may mắn cho bạn đó! 🐈‍⬛🍀",
      "đêm tối dù mờ mịt, mắt tớ vẫn thấy ánh sao ✨",
      "tựa vào tớ cho ấm lòng nha bạn tốt! 🤗",
      "chúc bạn một giấc ngủ thật an lành và ngon giấc 🌙💤"
    ]
  },
  "duck": {
    name: "Con Vịt",
    tag: "CON VẬT TỪNG NUOI • BÉ VỊT BẦU",
    heading: "Bé Vịt Bầu: Những bước chân lạch bạch rộn ràng",
    subheading: "Lông vàng tơ óng ả, thích vẫy cánh và bơi lội mát rượi dưới ao",
    paragraphs: [
      "Bé vịt nhỏ này gắn liền với khoảng sân sau và cái ao nhỏ thơm mùi hoa sen. Chú có bộ lông tơ vàng mềm mại, chiếc mỏ cam chúm chím và đôi bàn chân màng lúc nào cũng lạch bạch chạy theo gót chân tớ.",
      "Mỗi lần tớ mang nắm thóc ra sân là chú lại đập đập đôi cánh nhỏ, cạp cạp ríu rít mừng rỡ. Được nhìn chú vịt con thỏa thích bơi lội tung tăng khiến bao mệt mỏi trong lòng đều tan biến."
    ],
    quote: "“Cứ thảnh thơi lạch bạch bước đi, rồi niềm vui trong trẻo sẽ tự tìm đến.”",
    sleepImg: "images/about/pet_duck.jpg",
    awakeImg: "images/about/pet_duck_awake.jpg",
    defaultBubble: "cạp cạp cạp~ 🦆💦",
    sounds: [
      "cạp cạp cạp~ 🦆💦",
      "quạc quạc... có thóc thơm hông? 🌾",
      "bơi lội mát rượi dưới ao luôn! 🌊",
      "lạch bạch theo chân bạn nè~ 🐾",
      "cạp cạp... vẫy cánh mừng bạn ghé chơi! 🦆",
      "nước mát thích quá đi! 💦"
    ],
    easterEggs: [
      "tặng bạn một đóa sen thơm ngát nghen! 🌸💦",
      "hôm nay nước ao mát lành lắm, bạn cùng thư giãn nha! 🦆",
      "cạp cạp! Chúc bạn lội qua mọi thử thách nhẹ tênh! ✨",
      "đi dạo lạch bạch với tớ một vòng hông? 👣"
    ]
  },
  "bird": {
    name: "Con Chim",
    tag: "CON VẬT TỪNG NUOI • BÉ CHIM NHỎ",
    heading: "Bé Chim Nhỏ: Chú chim \"bị ngốc\" và cái duyên khó tin bên cành mận",
    subheading: "Tay không bắt chim trên cành ổi, thả không chịu bay và câu chuyện kỳ diệu đến tận hôm nay",
    paragraphs: [
      "Một hôm tớ lên vườn thì nhìn thấy một chú chim đang đậu trên cành ổi, tớ mới rón rén đi nhè nhẹ lại để bắt. Lúc đó trong đầu tớ đinh ninh là hễ mình lại gần là chú sẽ bay vút đi ngay, chứ đời nào tay không mà bắt được chim trời! Vậy mà tớ lại chộp bắt được bằng tay thật — cảm giác lúc ấy vừa sướng run người, vừa không dám tin vào mắt mình.",
      "Tớ hớn hở đem chú đi khoe thì mẹ bảo: 'Chắc là chú chim này bị ngốc rồi!' =))) Nhưng lạ kỳ thay, từ hôm đó chú cứ theo tớ suốt, tớ ngồi đâu là chú sà xuống ngồi kế đó, cố tình thả đi rồi mà chú nhất quyết không chịu bay. Vì mẹ không cho nuôi trong nhà vì vấn đề vệ sinh, nên tớ đem chú ra cây mận cạnh chiếc mương nhỏ, lúc đó cái mương ấy tớ cũng đang nuôi 2 con vịt nữa. Ôi thật tuyệt vời, chú chim cứ thế sống luôn ở ngay cây mận đó. Đến tận hôm nay, đó vẫn là một câu chuyện kỳ diệu khó tin nhất đối với tớ!"
    ],
    quote: "“Có những mối duyên đến một cách ngây ngô và khó tin nhất, nhưng lại ở lại bên ta ấm áp vô cùng.”",
    sleepImg: "images/about/pet_bird.jpg",
    awakeImg: "images/about/pet_bird_awake.jpg",
    defaultBubble: "chíp chíp líu lo~ 🐦🍃",
    sounds: [
      "chíp chíp líu lo~ 🐦🍃",
      "chú chim cây mận chào bạn nè! 🌿",
      "chíp chíp... không thèm bay đi đâu! 🐦",
      "tay không bắt tớ siêu ghê á! ✨",
      "chíp chíp... rủ 2 bạn vịt dưới mương lên chơi nha 🦆",
      "chíp chíp đón gió lành! 🌸"
    ],
    easterEggs: [
      "mẹ bảo tớ 'bị ngốc' nhưng tớ thương chủ tiệm lắm đó! =))) 💖",
      "cây mận cạnh bờ mương là góc bình yên nhất trần đời! 🍃",
      "tớ gửi tặng bạn cả một khúc ca ban mai trong trẻo nè! 🎶✨",
      "chúc bạn luôn có những điều kỳ diệu ghé thăm mỗi ngày nha! 🌸"
    ]
  },
  "chicken": {
    name: "Con Gà",
    tag: "CON VẬT TỪNG NUOI • BÉ GÀ NHỎ",
    heading: "Bé Gà Nhỏ: Nhiệm vụ tối quan trọng mang tên \"Cho gà ăn\"",
    subheading: "Nhiệm vụ sánh ngang quét nhà rửa chén, câu hỏi cửa miệng của cha và nghệ thuật phân chia khẩu phần",
    paragraphs: [
      "Ngày xưa nhà tớ nuôi nhiều gà lắm, nhiều đến nỗi việc cho gà ăn trở thành một công việc chính thức trong ngày, quan trọng tương đương với quét nhà, lau nhà hay rửa chén =)) Mỗi lần cha đi đâu về tới nhà là câu đầu tiên bao giờ cũng hỏi: 'Ở nhà có cho gà ăn chưa?'. Vì thế nhiệm vụ này trọng đại lắm, tớ luôn phải thức thật sớm vì mấy bạn gà này dậy sớm kinh khủng =)).",
      "Cho gà ăn cũng là cả một nghệ thuật: vì phải thức thật sớm,  phải phân nhóm gà ra cho ăn đàng hoàng — gà trống lớn được ăn thức ăn gì, gà mái ăn thức ăn gì, rồi gà con ăn thức ăn gì... Đã vậy còn phải ngồi canh chừng để không có gà nhà hàng xóm lẻn qua ăn ké, lại phải canh các con gà lớn hay tranh giành thức ăn với gà con (chắc có lẽ vì thức ăn của gà con ngon hơn nhỉ? haha). Nhìn đàn gà chen nhau mổ thóc tí tách rộn ràng cả góc sân, bao nhiêu tất bật sớm mai bỗng hóa thành niềm vui êm đềm."
    ],
    quote: "“Có những trách nhiệm nhỏ xíu ngày ấu thơ lại dạy cho ta biết quan sát, kiên nhẫn và thương yêu từng điều bình dị xung quanh.”",
    sleepImg: "images/about/pet_chicken.jpg",
    awakeImg: "images/about/pet_chicken_awake.jpg",
    defaultBubble: "ò ó o o~ 🐔☀️",
    sounds: [
      "ò ó o o~ cho tụi tớ ăn chưa? 🐔☀️",
      "cục ta cục tác... thức ăn gà con ngon ghê! 🥚",
      "mổ thóc tí tách vui tai ghê~ 🌾",
      "gà hàng xóm đừng có hòng qua ăn ké nha! 🚫🐔",
      "dậy sớm cùng đàn gà đón nắng mai nào! ☀️",
      "cục cục... no căng bụng rồi! 🌾"
    ],
    easterEggs: [
      "cha vừa về tới cổng kìa: 'Ở nhà có cho gà ăn chưa?' =))) 🌾",
      "gà lớn đừng giành phần của gà con nữa nha! 🐣💖",
      "gà cưng chúc chủ tiệm một ngày tràn đầy năng lượng và no nê nha! 🐔✨",
      "sáng rồi, nhớ ăn bữa sáng thật ngon miệng nghen! 🌾"
    ]
  }
};

const soulAspectsData = {
  cat: {
    tag: "TUỔI MÈO • MỘT GÓC NHỎ",
    heading: "Lý do tớ ở đây: Một chú mèo nhỏ cuộn tròn bên hiên",
    subheading: "Sự nhạy cảm, ấm áp và góc nhà tĩnh lặng mà tớ ẩn mình đâu đó",
    paragraphs: [
      "Tớ sinh năm Mão, là người nhạy cảm hay suy tư và thích lo chuyện bao đồng. Giữa thế giới ngập tràn sự vội vã, tớ thích cuộn tròn ở một góc nhỏ tĩnh lặng, ngắm nhìn ánh nắng chiều rọi qua ô cửa và lắng nghe nhịp thở của vạn vật.",
      "Website <strong>Tiệm Nhỏ Suy Tư</strong> này ra đời không phải để phô trương thành tựu hay khẳng định bản thân. Nó giống như một chiếc góc sân nhỏ rợp bóng mát, nơi một chú mèo hiền lành đang nằm sưởi nắng, nơi tớ có thể gom lại những suy nghĩ trong đầu mình và là không gian mà tớ muốn chìm đắm vào."
    ],
    quote: "“Tớ ở đây, không muốn làm phiền ai, cũng không muốn gây áp lực, tớ sẵn sàng ngồi bên bạn trong những câu chuyện mà bạn muốn có người lắng nghe.”",
    image: "images/about/soul_cat.jpg"
  },
  pets: {
    tag: "BẠN NHỎ ẤU THƠ • KỶ NIỆM DỊU DÀNG",
    heading: "Những người bạn nhỏ từng đi qua năm tháng cùng Tình",
    subheading: "6 người bạn nhỏ với 6 nét tính cách, để lại trong tớ những góc ký ức êm đềm",
    paragraphs: [
      "Trong hành trình lớn lên, tớ may mắn được bầu bạn cùng nhiều loài động vật hiền lành. Mỗi bạn nhỏ — từ ba chú mèo cam, mướp, mun cho đến bé vịt con, chú chim chuyền cành hay chú gà sớm mai — đều có một câu chuyện riêng.",
      "Bạn hãy nhấn vào từng bạn nhỏ bên dưới để ghé thăm và chạm vào để nghe tiếng kêu cùng những lời nhắn nhủ đáng yêu nhé!"
    ],
    quote: "“Yêu thương một con vật nhỏ bé cũng là cách chúng ta giữ cho trái tim mình luôn ấm áp và mềm mại.”",
    image: "images/about/soul_pets.jpg"
  },
  lantern: {
    tag: "SUY NGHĨ • MỘT NƠI DỪNG CHÂN",
    heading: "Mong muốn của tớ: Một góc dịu dàng lắng nghe",
    subheading: "Không lời khuyên áp đặt, chỉ là nơi để thấu hiểu và sẻ chia",
    paragraphs: [
      "Tớ tin rằng thế giới ngoài kia đã có quá đủ những lời khuyên dạy bảo, những công thức ép buộc bạn phải vươn lên hay thành công rực rỡ. Nhưng tớ hiểu, đôi khi cái chúng ta cần chỉ là một nơi cho phép mình được mệt mỏi và yếu đuối.",
      "<strong>Tiệm Nhỏ Suy Tư</strong> ra đời như một ngọn đèn dầu nhỏ tỏa ánh sáng màu hổ phách dịu nhẹ giữa đêm muộn. Ngọn đèn ấy không chói lóa như mặt trời, nhưng đủ ấm để bạn không thấy cô độc."
    ],
    quote: "“Tớ ở đây để có thể thấu hiểu và hoàn toàn không muốn dạy đời hay lên lớp bất kỳ ai.”",
    image: "images/about/soul_lantern.jpg"
  },
  number259: {
    tag: "CON SỐ 259 • LỜI NHẮC CỦA TỚ",
    heading: "Con số 259: Nhắc tớ tập trung vào chính mình",
    subheading: "Cơ duyên tạo nên website này",
    paragraphs: [
      "Con số <strong>259</strong> là một cột mốc ý niệm đặc biệt trong cuộc đời của tớ. Đó là con số nhắc nhở tớ ngừng dòm ngó xung quanh, ngừng so sánh mình với hào quang của người khác để quay về vun vén cho khu vườn nội tâm của chính mình."
    ],
    quote: "“Mỗi khi thấy con số 259, tớ tự nhủ: Hãy kiên nhẫn, hãy tập trung vào bản thân, bởi vì con đường bình phàm của chính mình mới là nơi hoa nở rực rỡ nhất.”",
    image: "images/about/soul_259.jpg"
  },
  letter: {
    tag: "LÁ THƯ • VÀI DÒNG GỬI BẠN",
    heading: "Gửi bạn: Người vừa bước chân ghé qua góc nhỏ này",
    subheading: "Một lời chào ấm áp và chúc bạn luôn bình yên",
    paragraphs: [
      "Cảm ơn bạn rất nhiều vì đã dành vài phút quý giá giữa cuộc sống nhộn nhịp để dừng chân tại đây. Tớ không biết bạn đang trải qua những gì, niềm vui hay nỗi buồn, sự hứng khởi hay cảm giác chông chênh...",
      "Nhưng tớ mong rằng, dù chỉ là vài dòng chữ hay một hình ảnh dịu mát, nơi đây có thể giúp bạn hít một hơi thật sâu, mỉm cười nhẹ nhàng và cảm thấy lòng mình dịu lại."
    ],
    quote: "“Dù bạn là ai, đang ở đâu trên thế giới này, chúc bạn luôn tìm thấy sự bình yên và yêu thương trọn vẹn trên con đường riêng mà mình đang bước đi.”",
    image: "images/about/soul_letter.jpg"
  },
  tree: {
    tag: "THẦN TƯỢNG • HÌNH MẪU CỦA TỚ",
    heading: "Thần tượng của tớ: Khương Thái Công",
    subheading: "Học sự điềm tĩnh và kiên nhẫn trong cuộc sống hàng ngày",
    paragraphs: [
      "Hình mẫu mà tớ luôn ngưỡng mộ là <strong>Khương Thái Công</strong>, tớ thích sự tử tế, điềm tĩnh và kiên nhẫn của ông. Tớ không mong mình phải làm điều gì quá cao xa, chỉ mong trước mỗi chuyện xảy đến trong cuộc sống, tớ có đủ sự bình tĩnh để nhìn nhận, xử lý và nhẹ nhàng vượt qua."
    ],
    quote: "“Mong rằng trước mọi điều xảy đến, tớ luôn giữ được sự bình tĩnh để đón nhận, xử lý và vượt qua.”",
    image: "images/about/soul_tree.png"
  },
  writing: {
    tag: "VIẾT & CODE • THÓI QUEN CỦA TỚ",
    heading: "Chuyện viết lách và niềm vui khi code",
    subheading: "Dở dang khi viết lách, nhưng kiên trì tới cùng khi lập trình",
    paragraphs: [
      "Nói về viết lách, tớ có những câu chuyện không có hồi kết và chẳng mấy khi được xuất bản. Bỏ dở giữa chừng có vẻ là điểm yếu trong tớ, hay là do tớ có quá nhiều ước mơ, quá nhiều vai diễn muốn được sống hết mình chăng?",
      "Nhưng từ đó tớ lại nhận ra, trong code tớ lại quyết tâm ngược lại — không bao giờ từ bỏ dự án chính mình đã làm. Khi bắt đầu code cho cái gì đó, cơ thể tớ như tăng thêm sức mạnh và stresssssss hahaha. Còn những kỷ niệm nhỏ siêu đáng nhớ và đáng yêu đằng sau đó, tớ xin giữ lại làm góc riêng cho chính mình."
    ],
    quote: "“Dở dang nơi trang viết, nhưng luôn quyết tâm đi đến dòng code cuối cùng.”",
    image: "images/about/soul_writing.jpg"
  },
  reading: {
    tag: "ĐỌC SÁCH & TÔ MÀU • KHI BỐI RỐI",
    heading: "Khi bối rối trước nhiều quyết định",
    subheading: "Đọc sách và tô màu giúp tớ lắng lòng lại",
    paragraphs: [
      "Khi bối rối trước nhiều quyết định không biết nên làm gì, tớ thường chọn đọc sách và tô màu.",
      "Những trang sách mở ra thế giới tĩnh lặng, còn từng nét màu vẽ giúp tớ lấy lại sự tập trung, xoa dịu những lo âu và sáng tỏ lối đi."
    ],
    quote: "“Mỗi khi tâm trí quá ồn ào trước những lựa chọn, tớ nép vào những trang sách và các gam màu để tìm lại sự bình yên.”",
    image: "images/about/soul_reading.jpg"
  }
};

/* Sparkle Particles Burst */
function spawnCosmicSparkles(container) {
  if (!container) return;
  const particleCount = 6;
  const symbols = ["✨", "🌟", "💫", "✦", "🌸"];

  for (let i = 0; i < particleCount; i++) {
    const sparkle = document.createElement("span");
    sparkle.className = "cosmic-sparkle";
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() * 60 + 20;
    sparkle.style.left = `${left}%`;
    sparkle.style.top = `${top}%`;
    sparkle.style.animationDelay = `${i * 0.08}s`;

    container.appendChild(sparkle);
    setTimeout(() => {
      if (sparkle.parentNode) sparkle.parentNode.removeChild(sparkle);
    }, 1400);
  }
}

/* Switch Pet Inside "Con Vật Từng Nuôi" */
function switchPet(petKey, triggerAnimation = true) {
  const pet = petsData[petKey];
  if (!pet) return;

  currentActivePet = petKey;

  // Update tab buttons
  const petTabBtns = document.querySelectorAll(".pet-tab-btn");
  petTabBtns.forEach(btn => {
    if (btn.getAttribute("data-pet") === petKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Update detail card content
  const tagBadge = document.getElementById("soulDetailTag");
  const heading = document.getElementById("soulDetailHeading");
  const subheading = document.getElementById("soulDetailSubheading");
  const textContainer = document.getElementById("soulDetailText");
  const quoteContainer = document.getElementById("soulDetailQuote");
  const catImg = document.getElementById("cosmicCatImg");
  const catAwakeImg = document.getElementById("cosmicCatAwakeImg");
  const bubble = document.getElementById("catMeowBubble");
  const cosmicContainer = document.getElementById("soulDetailCard");
  const catContainer = document.getElementById("soulCatInteractive");

  if (tagBadge) tagBadge.innerHTML = pet.tag;
  if (heading) heading.innerHTML = pet.heading;
  if (subheading) subheading.innerHTML = pet.subheading;
  if (textContainer) {
    textContainer.innerHTML = pet.paragraphs.map(p => `<p>${p}</p>`).join("");
  }
  if (quoteContainer) quoteContainer.innerHTML = pet.quote;

  // Update pet living graphics
  if (catImg) {
    catImg.src = pet.sleepImg;
    catImg.alt = `${pet.name} đang nằm ngủ`;
  }
  if (catAwakeImg) {
    catAwakeImg.src = pet.awakeImg;
    catAwakeImg.alt = `${pet.name} mở mắt tò mò`;
  }

  // Set default sound bubble
  if (bubble) {
    bubble.textContent = pet.defaultBubble;
  }

  if (triggerAnimation) {
    // Bounce effect
    [catImg, catAwakeImg].forEach(img => {
      if (img) {
        img.classList.remove("cat-bounce");
        void img.offsetWidth;
        img.classList.add("cat-bounce");
      }
    });

    // Sparkles
    if (cosmicContainer) {
      spawnCosmicSparkles(cosmicContainer);
    }

    // Wake up pet briefly
    if (catContainer) {
      catContainer.classList.add("cat-is-awake");
      setTimeout(() => {
        catContainer.classList.remove("cat-is-awake");
      }, 2500);
    }

    // Show speech bubble briefly
    if (bubble) {
      bubble.classList.remove("show-meow");
      void bubble.offsetWidth;
      bubble.classList.add("show-meow");
      clearTimeout(window.meowTimer);
      window.meowTimer = setTimeout(() => {
        bubble.classList.remove("show-meow");
      }, 3000);
    }
  }
}

/* Handle Clicking on the Living Animal / Kitten */
function handleLivingPetClick() {
  const slideBox = document.getElementById("cosmicDarkSlidebox");
  const bubble = document.getElementById("catMeowBubble");
  const catImg = document.getElementById("cosmicCatImg");
  const catAwakeImg = document.getElementById("cosmicCatAwakeImg");
  const cosmicContainer = document.getElementById("soulDetailCard");
  const catContainer = document.getElementById("soulCatInteractive");

  // If we are on number259 aspect, open the 259 modal/slidebox
  if (currentAspectKey === "number259") {
    toggle259DarkBox();
    return;
  }

  // Determine active pet (if on 'cat', it's 'orange-cat'; if on 'pets', it's currentActivePet)
  const petKey = (currentAspectKey === "pets") ? currentActivePet : "orange-cat";
  const pet = petsData[petKey] || petsData["orange-cat"];

  petClickCounters[petKey] = (petClickCounters[petKey] || 0) + 1;
  const clickCount = petClickCounters[petKey];

  // Spawn Dust Sparkles
  if (cosmicContainer) {
    spawnCosmicSparkles(cosmicContainer);
  }

  // Wake up animal
  if (catContainer) {
    catContainer.classList.add("cat-is-awake");
    clearTimeout(window.petAwakeTimer);
    window.petAwakeTimer = setTimeout(() => {
      catContainer.classList.remove("cat-is-awake");
    }, 3500);
  }

  // Sound Bubble Generator & Easter Eggs
  if (bubble) {
    let soundsPool = pet.sounds;
    if (clickCount >= 5 && pet.easterEggs && pet.easterEggs.length) {
      soundsPool = pet.easterEggs;
    }

    const currentText = bubble.textContent;
    let randomText = soundsPool[Math.floor(Math.random() * soundsPool.length)];
    while (soundsPool.length > 1 && randomText === currentText) {
      randomText = soundsPool[Math.floor(Math.random() * soundsPool.length)];
    }

    bubble.textContent = randomText;
    bubble.classList.remove("show-meow");
    void bubble.offsetWidth;
    bubble.classList.add("show-meow");

    clearTimeout(window.meowTimer);
    window.meowTimer = setTimeout(() => {
      bubble.classList.remove("show-meow");
    }, 3200);
  }

  // Bounce animation
  [catImg, catAwakeImg].forEach(img => {
    if (img) {
      img.classList.remove("cat-bounce");
      void img.offsetWidth;
      img.classList.add("cat-bounce");
    }
  });
}

/* Switch Main Soul Aspect */
function switchAspect(key) {
  currentAspectKey = key;
  const data = soulAspectsData[key];
  const detailCard = document.getElementById("soulDetailCard");
  const tagBadge = document.getElementById("soulDetailTag");
  const heading = document.getElementById("soulDetailHeading");
  const subheading = document.getElementById("soulDetailSubheading");
  const textContainer = document.getElementById("soulDetailText");
  const quoteContainer = document.getElementById("soulDetailQuote");
  const imageElement = document.getElementById("soulDetailImg");

  const staticImgWrap = document.getElementById("soulStaticImgWrap");
  const catInteractive = document.getElementById("soulCatInteractive");
  const actionWrap = document.getElementById("soul259ActionWrap");
  const petsSelectorWrap = document.getElementById("petsSelectorWrap");
  const catImg = document.getElementById("cosmicCatImg");
  const catAwakeImg = document.getElementById("cosmicCatAwakeImg");

  if (!data || !detailCard) return;

  // Fade out transition
  detailCard.classList.add("soul-fade-switching");

  setTimeout(() => {
    if (key === "pets") {
      // Show pet selector bar & interactive living pet
      if (petsSelectorWrap) petsSelectorWrap.style.display = "block";
      if (catInteractive) catInteractive.style.display = "block";
      if (staticImgWrap) staticImgWrap.style.display = "none";
      if (actionWrap) actionWrap.style.display = "none";

      // Activate current pet
      switchPet(currentActivePet, false);
    } else {
      // All other aspects (cat, lantern, number259, letter, tree, writing, reading) use static artwork frame
      if (petsSelectorWrap) petsSelectorWrap.style.display = "none";
      if (catInteractive) catInteractive.style.display = "none";
      if (actionWrap) actionWrap.style.display = (key === "number259") ? "block" : "none";
      if (staticImgWrap) {
        staticImgWrap.style.display = "block";
        if (imageElement) {
          imageElement.src = data.image;
          imageElement.alt = data.heading;
        }
      }

      if (tagBadge) tagBadge.innerHTML = data.tag;
      if (heading) heading.innerHTML = data.heading;
      if (subheading) subheading.innerHTML = data.subheading;
      if (textContainer) {
        textContainer.innerHTML = data.paragraphs.map(p => `<p>${p}</p>`).join("");
      }
      if (quoteContainer) quoteContainer.innerHTML = data.quote;
    }

    // Fade in transition
    detailCard.classList.remove("soul-fade-switching");
  }, 200);
}

/* Interactive Cosmic 259 Slidebox */
function toggle259DarkBox() {
  const slideBox = document.getElementById("cosmicDarkSlidebox");
  const bubble = document.getElementById("catMeowBubble");
  const catImg = document.getElementById("cosmicCatImg");
  const catAwakeImg = document.getElementById("cosmicCatAwakeImg");
  const btn = document.getElementById("btn259Trigger");
  const cosmicContainer = document.getElementById("soulDetailCard");
  const catContainer = document.getElementById("soulCatInteractive");

  let isOpen = false;
  if (slideBox) {
    isOpen = slideBox.classList.toggle("open");
  }

  if (btn) {
    if (isOpen) {
      btn.textContent = "Đóng Lời Nhắc ✕";
      btn.classList.add("is-active");
    } else {
      btn.textContent = "Nhận Lời Nhắc 259 ✨";
      btn.classList.remove("is-active");
    }
  }

  if (cosmicContainer) {
    spawnCosmicSparkles(cosmicContainer);
  }

  if (catContainer) {
    catContainer.classList.add("cat-is-awake");
    setTimeout(() => {
      if (!slideBox || !slideBox.classList.contains("open")) {
        catContainer.classList.remove("cat-is-awake");
      }
    }, 3500);
  }

  if (bubble) {
    const sounds = [
      "meoww.. 259 kìa! ✨",
      "tập trung vào bản thân nha! 🌸",
      "quên hào quang đi, vun vén khu vườn mình thôi 🐾",
      "259 nhắc bạn thở sâu một hơi nè 💤"
    ];
    bubble.textContent = sounds[Math.floor(Math.random() * sounds.length)];
    bubble.classList.remove("show-meow");
    void bubble.offsetWidth;
    bubble.classList.add("show-meow");

    clearTimeout(window.meowTimer);
    window.meowTimer = setTimeout(() => {
      bubble.classList.remove("show-meow");
    }, 3200);
  }

  [catImg, catAwakeImg].forEach(img => {
    if (img) {
      img.classList.remove("cat-bounce");
      void img.offsetWidth;
      img.classList.add("cat-bounce");
    }
  });
}

function close259DarkBox() {
  const slideBox = document.getElementById("cosmicDarkSlidebox");
  const btn = document.getElementById("btn259Trigger");

  if (slideBox) {
    slideBox.classList.remove("open");
  }
  if (btn) {
    btn.textContent = "Nhận Lời Nhắc 259 ✨";
    btn.classList.remove("is-active");
  }
}

/* Document Ready Setup */
document.addEventListener("DOMContentLoaded", () => {
  const thumbItems = document.querySelectorAll(".soul-thumb-item");
  const petTabBtns = document.querySelectorAll(".pet-tab-btn");
  const btn259 = document.getElementById("btn259Trigger");
  const catContainer = document.getElementById("soulCatInteractive");

  // Thumbnail clicks
  thumbItems.forEach(item => {
    item.addEventListener("click", function () {
      const key = this.getAttribute("data-aspect");
      thumbItems.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
      switchAspect(key);
    });
  });

  // Pet selector tab clicks
  petTabBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const petKey = this.getAttribute("data-pet");
      switchPet(petKey, true);
    });
  });

  // 259 button hover awakens cat
  if (btn259 && catContainer) {
    btn259.addEventListener("mouseenter", () => {
      catContainer.classList.add("cat-is-awake");
    });
    btn259.addEventListener("mouseleave", () => {
      const slideBox = document.getElementById("cosmicDarkSlidebox");
      if (!slideBox || !slideBox.classList.contains("open")) {
        catContainer.classList.remove("cat-is-awake");
      }
    });
  }

  // Preload pet images for instant responsiveness
  const preloadImages = [
    "images/about/cosmic_cat.png",
    "images/about/cosmic_cat_awake.png",
    "images/about/pet_tabby.jpg",
    "images/about/pet_tabby_awake.jpg",
    "images/about/pet_black.jpg",
    "images/about/pet_black_awake.jpg",
    "images/about/pet_duck.jpg",
    "images/about/pet_duck_awake.jpg",
    "images/about/pet_bird.jpg",
    "images/about/pet_bird_awake.jpg",
    "images/about/pet_chicken.jpg",
    "images/about/pet_chicken_awake.jpg"
  ];
  preloadImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});
