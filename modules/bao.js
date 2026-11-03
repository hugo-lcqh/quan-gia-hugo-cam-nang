HUGO.add({
  id: 'bao', order: 2, name: 'Báo cáo & ngân sách',
  blurb: 'Xem thu chi theo ngày, tuần, tháng và ngân sách từng danh mục.',
  fg: '#3B3FB5', bg: '#E4E5FB', ico: 'M5 20V10M12 20V4M19 20v-7',
  chips: ['.thang', '.tuan', '.ns'],
  badges: ['Chỉ đọc, không đổi dữ liệu', 'Có báo cáo tự động'],
  cmds: [
    ['.thang', 'Báo cáo tháng: thu, chi, còn lại, so tháng trước', '.thang 09/2026'],
    ['.tuan', 'Báo cáo tuần, so với tuần trước', '.tuan truoc'],
    ['.homnay', 'Thu chi trong ngày (hoặc .homqua)', '.homnay'],
    ['.ns', 'Ngân sách từng danh mục: 🟢 🟠 🔴', '.ns'],
    ['.tim', 'Tìm giao dịch trong năm nay', '.tim highlands']
  ],
  sections: [
    { id: 'baocao', title: 'Báo cáo ngày, tuần, tháng',
      rows: [['.homnay · .homqua', 'Thu chi trong ngày'], ['.tuan · .tuan truoc', 'Tuần từ thứ 2 đến chủ nhật, so với tuần trước, ngày và khoản chi nhiều nhất'], ['.thang · .thang 9 · .thang 09/2026', 'Thu, chi, nợ, tiết kiệm, phần còn lại; so tháng trước; top chi và chia theo người'], ['.bieudo · .bd 9', 'Thẻ chữ thu chi và chi theo danh mục. Không có ảnh biểu đồ']],
      chat: [['u', '.thang'], ['b', '╭─ 📊 Tháng 11/2026\n│ Thu        18.000.000\n│ Chi         7.450.000\n│ Còn lại    10.550.000\n│ Chi nhiều nhất: Ăn uống\n╰────────']] },
    { id: 'ngansach', title: 'Ngân sách',
      text: 'Gõ .ns để xem đã chi bao nhiêu so với hạn mức từng danh mục.',
      rows: [['🟢', 'Dưới 80% hạn mức'], ['🟠', 'Từ 80% hạn mức'], ['🔴', 'Đã vượt hạn mức']],
      notes: ['Đổi hạn mức trong sheet Mục tiêu, rồi gõ .capnhat hoặc chờ khoảng 5 phút để Hugo tải lại.', 'Mỗi lần ghi chi, Hugo tự báo tiến độ ngân sách và cảnh báo khi danh mục dùng đến 80% hoặc vượt.'],
      chat: [['u', '.ns'], ['b', '╭─ 💰 Ngân sách tháng 11\n│ 🟢 Cafe        62%\n│ 🟠 Ăn uống     84%\n│ 🔴 Mua sắm    112%\n╰────────']] },
    { id: 'tim', title: 'Tìm giao dịch và danh mục',
      rows: [['.tim highlands', 'Tìm trong năm nay'], ['.tim highlands thang', 'Chỉ tháng này'], ['.tim highlands tatca', 'Toàn bộ lịch sử'], ['.dm', 'Danh sách danh mục']] }
  ]
});
