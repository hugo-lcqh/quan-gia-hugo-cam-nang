HUGO.add({
  id: 'ghi', order: 1, name: 'Ghi chép thu chi',
  blurb: 'Nhắn một dòng, Hugo ghi vào Google Sheet. Có cả ảnh hóa đơn và sửa khi ghi nhầm.',
  fg: '#0B6B4A', bg: '#DDF3E8', ico: 'M4 20h4L18 10l-4-4L4 16z',
  chips: ['45k cafe', '.chi', '.thu'],
  badges: ['Nhóm gia đình hoặc chat riêng', 'Ghi ngay, sửa được'],
  cmds: [
    ['45k cafe', 'Ghi nhanh một khoản chi, không cần gõ lệnh', 'cafe 45k · +11tr3 lương'],
    ['.chi', 'Ghi khoản chi, có thể lùi ngày', '.chi 120k ăn tối hôm qua'],
    ['.thu', 'Ghi khoản thu', '.thu 18tr lương'],
    ['.no', 'Ghi trả nợ', '.no 1tr5 trả góp samsung'],
    ['.sua · .doi · .xoa', 'Sửa số tiền, đổi danh mục, xóa khoản bạn vừa ghi', '.sua 55k · .doi cafe · .xoa']
  ],
  sections: [
    { id: 'nhanh', title: 'Ghi nhanh, không cần lệnh',
      text: 'Nhắn số tiền kèm nội dung, Hugo tự đoán danh mục.',
      rows: [['45k cafe', 'Chi 45.000 đ, danh mục Cafe'], ['cafe 45k', 'Như trên'], ['+11tr3 lương', 'Thu 11.300.000 đ, vào đúng nguồn lương của người nhắn'], ['tk 2tr du lịch', 'Tiết kiệm 2.000.000 đ, quỹ Du lịch'], ['nợ 1tr5 trả góp', 'Trả nợ 1.500.000 đ']],
      notes: ['Hugo chỉ tự ghi khi số tiền có đơn vị (k, tr, đ) hoặc dấu chấm nghìn, và nằm ở đầu hoặc cuối câu. Nhờ vậy số điện thoại, năm hay câu chat thường không bị ghi nhầm.'],
      chat: [['u', '45k cafe'], ['b', '╭─ ✅ Đã ghi chi\n│ 45.000 đ · Cafe\n│ Ví Chồng · hôm nay\n│ 🟢 Ngân sách Cafe: 62%\n╰────────']] },
    { id: 'lenh', title: 'Ghi bằng lệnh',
      text: 'Dùng lệnh khi muốn chắc chắn loại khoản hoặc ghi lùi ngày.',
      rows: [['.chi 45k cafe', 'Ghi chi'], ['.thu 18tr lương', 'Ghi thu'], ['.no 1tr5 trả góp samsung', 'Ghi trả nợ'], ['.tk 2tr quỹ khẩn cấp', 'Gửi tiết kiệm'], ['.chi 120k ăn tối hôm qua', 'Lùi ngày: hôm qua, hôm kia hoặc 30/9']],
      notes: ['Cách viết tiền: 45k, 1tr2 (1.200.000), 2,5tr, 1.200.000. Gõ 45 trơn được hiểu là 45k. Hugo không nhận ngày chưa tới.'] },
    { id: 'anh', title: 'Ghi bằng ảnh',
      text: 'Gửi ảnh hóa đơn, biên lai hoặc ảnh chụp màn hình chuyển khoản vào nhóm. Hugo đọc số tiền, nội dung, ngày và danh mục, rồi chờ bạn gõ ok.',
      notes: ['Chỉ người gửi ảnh mới xác nhận được. Nếu Hugo đọc sai, bỏ qua tin đó và nhắn tay lại, ví dụ 120k bhx.', 'Ảnh bill được gửi nguyên lên Google (Gemini) để đọc. Cần bật khóa API AI thì tính năng này mới chạy.'],
      chat: [['u', '[ảnh hóa đơn]'], ['b', '⏳ Đang đọc ảnh...'], ['b', '╭─ 🧾 Đọc được từ ảnh\n│ 120.000 đ · BHX\n│ Danh mục: Chợ\n│ Gõ ok để ghi\n╰────────'], ['u', 'ok']] },
    { id: 'sua', title: 'Sửa khi ghi nhầm',
      rows: [['.xoa', 'Xóa khoản bạn vừa ghi (gõ tiếp để xóa khoản trước đó)'], ['.sua 55k', 'Sửa số tiền của khoản bạn vừa ghi'], ['.doi cafe', 'Đổi danh mục theo tên hoặc số, Hugo nhớ cho lần sau']],
      notes: ['Hugo không xóa hay sửa những dòng đã có người chỉnh tay trên Sheet.'] },
    { id: 'danhmuc', title: 'Khi Hugo không đoán được danh mục',
      text: 'Hugo gửi danh sách đánh số. Trả lời bằng số, gõ 0 để hủy. Lần sau nhắn cùng nội dung, Hugo tự xếp đúng danh mục.',
      chat: [['u', '200k linh tinh'], ['b', '╭─ ❓ Chọn danh mục\n│ 1. Chợ\n│ 2. Mua sắm\n│ 3. Khác\n│ Gõ số, hoặc 0 để hủy\n╰────────'], ['u', '2']] }
  ]
});
