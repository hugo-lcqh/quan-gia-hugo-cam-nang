HUGO.add({
  id: 'lich', order: 5, name: 'Lịch & nhắc hẹn',
  blurb: 'Xem lịch gia đình, tạo nhắc hẹn bằng tiếng Việt tự nhiên, đồng bộ Google Calendar.',
  fg: '#B3361B', bg: '#FDE4DD', ico: 'M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM4 11h16M9 3v4M15 3v4',
  chips: ['.lich', '.nhac'],
  badges: ['Nhóm gia đình và chat riêng', 'Thêm, sửa, xóa cần gõ ok', 'Hỏi theo mẫu không dùng AI'],
  cmds: [
    ['.lich', 'Xem lịch hôm nay, ngày mai, 7 ngày tới, hoặc sửa/xóa theo ID', '.lich mai · .lich tuan'],
    ['.nhac', 'Tạo nhắc hẹn, hiểu giờ tiếng Việt', '.nhac đón bé 17h mai']
  ],
  sections: [
    { id: 'hoi', title: 'Hỏi tự nhiên',
      text: 'Không cần nhớ lệnh: trong chat riêng nhắn thẳng, trong nhóm gọi "Hugo" trước câu. Các câu dưới đây được Hugo tra ngay tại máy, không tốn lượt AI.',
      rows: [['hôm nay có lịch gì', 'Sự kiện hôm nay, giống .lich'], ['ngày mai có hẹn gì không', 'Sự kiện ngày mai, giống .lich mai'], ['tuần này có lịch gì', '7 ngày tới tính từ hôm nay, không phải tuần thứ hai–chủ nhật'], ['lịch tuần này', 'Cũng xem 7 ngày tới, giống .lich tuan'], ['hôm nay có gì', 'Cách hỏi ngắn để xem lịch hôm nay'], ['mai có gì', 'Cách hỏi ngắn để xem lịch ngày mai']],
      chat: [['u', 'Hugo hôm nay có lịch gì'], ['b', '╭─ 📅 〔LỊCH GIA ĐÌNH〕\n│ 08/11/2026 → 08/11/2026\n│ Giờ Asia/Ho_Chi_Minh\n│ • Họp phụ huynh\n│   08/11/2026 08:00 → 08/11/2026 09:00 · Google (chỉ đọc)\n│   ID: a1b2\n╰────────']],
      notes: ['Câu lạ hơn Hugo chuyển AI trả lời khi AI đang bật và còn lượt (tốn lượt AI). Hỏi xem lịch không làm thay đổi dữ liệu; mọi thao tác thêm/sửa/xóa vẫn qua thẻ đề xuất rồi gõ ok.'] },
    { id: 'xem', title: 'Xem lịch',
      text: 'Mỗi sự kiện có một ID ngắn để sửa hoặc xóa.',
      rows: [['.lich', 'Sự kiện hôm nay'], ['.lich mai', 'Ngày mai'], ['.lich tuan', '7 ngày tới, tính từ hôm nay'], ['.lich 15/11', 'Một ngày cụ thể (dd/mm hoặc dd/mm/yyyy)']],
      chat: [['u', '.lich mai'], ['b', '╭─ 📅 Lịch Thứ 4, 04/11\n│ 08:00  Họp phụ huynh    [a1b2]\n│ 17:00  Đón bé           [c3d4]\n│ Cả ngày  Sinh nhật bạn  [Google]\n╰────────']] },
    { id: 'tao', title: 'Tạo nhắc hẹn',
      text: 'Viết như nói chuyện. Hugo hiểu giờ tiếng Việt; thiếu sáng hay chiều thì Hugo hỏi lại, không tự đoán.',
      rows: [['.nhac đón bé 17h mai', 'Một lần, 17:00 ngày mai'], ['.nhac họp 8h sáng thứ 7 này', 'Thứ 7 tuần này'], ['Hugo nhắc tưới cây mỗi ngày 6h sáng', 'Lặp hằng ngày'], ['.lich them sinh nhật bạn cả ngày 20/11', 'Sự kiện cả ngày']],
      chat: [['u', '.nhac đón bé 17h mai'], ['b', '╭─ 📝 Đề xuất tạo lịch\n│ Đón bé\n│ 17:00 · Thứ 4, 04/11\n│ Gõ ok để tạo · 0 để hủy\n╰────────'], ['u', 'ok'], ['b', '╭─ ✅ Đã tạo\n│ Đón bé · 17:00 mai\n│ Nhắc trước 15 phút\n╰────────']] },
    { id: 'suaxoa', title: 'Sửa và xóa',
      text: 'Lấy ID từ kết quả của .lich. Hugo chỉ sửa và xóa sự kiện do chính Hugo tạo.',
      rows: [['.lich sua <id> 17:30', 'Đổi giờ'], ['.lich sua <id> đi siêu thị 18h mai', 'Đổi nội dung và giờ'], ['.lich xoa <id>', 'Xóa sự kiện']],
      notes: ['Sự kiện tạo thẳng trên Google Calendar hiện là Google (chỉ đọc). Hugo từ chối sửa hoặc xóa để không ghi đè lịch riêng của bạn.'],
      chat: [['u', '.lich sua c3d4 17:30'], ['b', '╭─ 📝 Đề xuất sửa lịch\n│ Đón bé\n│ 17:00 → 17:30\n│ Gõ ok để sửa · 0 để hủy\n╰────────']] },
    { id: 'ok', title: 'Xác nhận bằng ok',
      text: 'Mọi thao tác thêm, sửa, xóa đều qua ba bước. Hugo không ghi gì vào lịch trước khi bạn đồng ý.',
      rows: [['Bước 1', 'Hugo gửi thẻ đề xuất: tiêu đề, giờ bắt đầu, giờ kết thúc, chu kỳ lặp'], ['Bước 2', 'Bạn gõ ok trong 10 phút. Đúng chữ ok, không nhận ok 1. Chỉ người yêu cầu xác nhận được'], ['Bước 3', 'Hugo ghi vào Google Calendar. Gõ 0 hoặc huy để hủy']] },
    { id: 'tunhan', title: 'Hugo tự nhắn',
      rows: [['07:00', 'Bản tin gia đình: lịch hôm nay, khoản định kỳ đến hạn chưa ghi, ngân sách và cảnh báo. Chạy bằng code tại máy'], ['−15 phút', 'Nhắc sự kiện có giờ vào nhóm. Mỗi nhắc chỉ gửi một lần']] },
    { id: 'gioihan', title: 'Giới hạn cần biết',
      notes: ['Chat riêng chỉ dành cho thành viên gia đình, khi tính năng chat riêng đã bật.', 'Tin nhắc và bản tin 07:00 chỉ gửi vào nhóm gia đình, không gửi vào chat riêng.', 'Nhắc lỗi thì mất: Hugo đánh dấu đã gửi trước khi nhắn, nếu mạng lỗi thì không gửi lại để tránh nhắc lặp.', 'Lặp lại chỉ đơn giản: hằng ngày, hằng tuần, theo thứ, đủ số lần hoặc đến một ngày. Chuỗi phức tạp chỉ xem được.', 'Hugo tắt thông báo mặc định của Google cho sự kiện do Hugo tạo. Cài đặt riêng trên máy từng người thì Hugo không biết.'] }
  ]
});
