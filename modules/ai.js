HUGO.add({
  id: 'ai', order: 6, name: 'Hỏi Hugo (AI)',
  blurb: 'Hỏi bằng lời thường: số liệu, nhận xét, có nên mua không. Hugo nhớ ý bạn dặn.',
  fg: '#0A6577', bg: '#D9F0F5', ico: 'M5 6h14v9h-9l-4 4v-4H5z',
  chips: ['@Hugo', '.ai', '.nho'],
  badges: ['Cần bật AI', 'Hết lượt AI vẫn dùng được lệnh'],
  cmds: [
    ['@Hugo', 'Hỏi số liệu, nhận xét, có nên mua không', '@Hugo tháng này ăn uống hết bao nhiêu?'],
    ['.nho', 'Xem hoặc xóa những ý Hugo đã nhớ', 'Hugo nhớ giúp: tiền nhà trả ngày 1'],
    ['.ai', 'Xem trạng thái AI; .ai tat / .ai bat để tắt, bật chat', '.ai']
  ],
  sections: [
    { id: 'hoi', title: 'Hỏi Hugo',
      text: 'Trong nhóm, tag Hugo hoặc gọi tên ở đầu tin. Trong chat riêng, hỏi thẳng. Tên Hugo nằm giữa câu thì không tính là gọi.',
      rows: [['@Hugo tháng này ăn uống hết bao nhiêu rồi em?', 'Hỏi số liệu'], ['Quản gia ơi ngân sách cafe còn bao nhiêu?', 'Gọi tên cũng được'], ['@Hugo so với tháng trước tiêu nhiều hơn không?', 'Hỏi nối, Hugo nhớ 8 lượt gần nhất'], ['@Hugo nhận xét chi tiêu tháng này', 'Nhận xét, gợi ý hành động'], ['@Hugo cách đối soát số dư?', 'Hỏi cách dùng bot']],
      notes: ['Nếu AI lỗi hoặc hết lượt, Hugo vẫn trả lời các câu rõ nghĩa bằng số do code tính. Gõ .help để xem lệnh nhanh.'],
      chat: [['u', '@Hugo tháng này ăn uống hết bao nhiêu rồi em?'], ['b', '╭─ 🍜 Ăn uống tháng 11\n│ Đã chi 3.200.000 đ\n│ Ngân sách 3.800.000 đ (84%)\n╰────────']] },
    { id: 'nhieu', title: 'Ghi nhiều khoản một lần',
      text: 'Hugo gửi thẻ, chính người nhắn gõ ok để ghi hết, hoặc ok 1 3 để chọn khoản.',
      rows: [['@Hugo sáng cafe 45k, trưa cơm gà 55k với đổ xăng 80k', 'Ba khoản trong một tin'], ['@Hugo sửa khoản cafe sáng nay thành 50k', 'Sửa qua Hugo, kiểm thẻ rồi gõ ok']],
      notes: ['Sửa, xóa, thêm định kỳ và rút quỹ luôn hỏi xác nhận.'] },
    { id: 'mua', title: 'Có nên mua không?',
      text: 'Hugo tính dư trung bình từ tối đa ba tháng gần nhất, rồi so với giá mua và số tháng trả góp.',
      rows: [['@Hugo có nên mua tủ lạnh 12tr trả góp 6 tháng không?', 'Trả góp 1 đến 36 tháng'], ['@Hugo muốn có 50tr vào tháng 06/2027 thì mỗi tháng để bao nhiêu?', 'Lập kế hoạch để dành']],
      notes: ['Tiền góp chưa gồm lãi và phí. Đây là mô phỏng, Hugo không tự ghi gì và không khuyến nghị đầu tư.'] },
    { id: 'nho', title: 'Bộ nhớ của Hugo',
      rows: [['Hugo nhớ giúp: tiền nhà trả ngày 1', 'Lưu một ý'], ['.nho', 'Xem hồ sơ và các ý đã dặn'], ['.nho xoa 2', 'Xóa ý số 2 (hoặc nhắn quên ý số 2)']],
      notes: ['Tối đa 30 ý, mỗi ý 200 ký tự. Lưu tại máy, không ghi sheet. Chỉ dặn những điều gia đình muốn lưu.'] }
  ]
});
