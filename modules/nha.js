HUGO.add({
  id: 'nha', order: 5.5, name: 'Nhà, tài sản & giấy tờ',
  blurb: 'Sổ thiết bị và hạn bảo hành, hạn giấy tờ, lịch bảo trì xe và thú cưng. Hugo nhắc trước 30 và 7 ngày.',
  fg: '#5B6B12', bg: '#EEF3D2', ico: 'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  chips: ['.taisan', '.giayto', '.baotri'],
  badges: ['Chỉ trong nhóm gia đình', 'Thêm, sửa, xóa cần gõ ok', 'Không dùng AI'],
  cmds: [
    ['.taisan', 'Sổ thiết bị, xe, thú cưng; ngày mua và hạn bảo hành', '.taisan máy giặt mua 01/11/2026 bảo hành 24 tháng'],
    ['.giayto', 'Hạn CCCD, hộ chiếu, bằng lái, đăng kiểm, bảo hiểm, thuế', '.giayto hộ chiếu anh hạn 01/06/2027'],
    ['.baotri', 'Việc lặp lại: thay nhớt, vệ sinh máy lạnh, tẩy giun', '.baotri thay nhớt xe lặp 6 tháng hạn 01/12/2026']
  ],
  sections: [
    { id: 'them', title: 'Thêm mục mới',
      text: 'Viết câu tiếng Việt, không cần nhớ tên trường. Hugo tự nhận loại từ tên (hộ chiếu, đăng kiểm, xe máy, mèo...) và ghi loại đó trên thẻ để bạn kiểm tra.',
      rows: [['.giayto hộ chiếu anh hạn 01/06/2027', 'Giấy tờ: bắt buộc có hạn'], ['.giayto đăng kiểm xe máy hạn 15/03/2027', 'Hugo nhận ra loại Đăng kiểm'], ['.taisan máy giặt mua 01/11/2026 bảo hành 24 tháng', 'Hugo tự tính hạn bảo hành 01/11/2028'], ['.taisan tủ lạnh bảo hành đến 01/05/2028', 'Ghi thẳng ngày hết bảo hành'], ['.baotri tẩy giun Miu lặp 3 tháng hạn 01/12/2026', 'Bảo trì: cần hạn và chu kỳ lặp'], ['Hugo thêm giấy tờ bằng lái anh hạn 20/08/2030', 'Gọi tên Hugo cũng được']],
      chat: [['u', '.giayto hộ chiếu anh hạn 01/06/2027'], ['b', '╭─ 🏠 〔CHƯA GHI〕\n│ TẠO · ID: sẽ cấp khi xác nhận ok\n│ Hạn giấy tờ: 01/06/2027\n│ Loại (suy ra): Hộ chiếu\n│ Tên: hộ chiếu anh\n│ Chỉ người đề xuất gõ ok trong 10 phút; 0/huy để hủy.\n╰────────'], ['u', 'ok'], ['b', '╭─ 🏠 〔ĐÃ GHI〕\n│ Đã ghi dữ liệu home theo đề xuất. ID: G1\n╰────────']] },
    { id: 'xem', title: 'Xem, sửa, xóa',
      text: 'Mỗi mục có ID ngắn: T cho tài sản, G cho giấy tờ, B cho bảo trì. Gõ chữ thường hoặc chỉ phần số đều được.',
      rows: [['.giayto', 'Danh sách, sắp đến hạn lên trước, 10 mục mỗi trang'], ['.giayto trang 2', 'Trang tiếp theo'], ['.giayto xem G1', 'Chi tiết một mục'], ['.giayto sua G1 hạn 02/06/2027', 'Đổi hạn'], ['.taisan xoa 3', 'Xóa tài sản T3']],
      chat: [['u', '.giayto'], ['b', '╭─ 🏠 〔GIẤY TỜ〕\n│ Trang 1 · tối đa 10 mục/trang\n│ • hộ chiếu anh\n│   ID: G1\n│   Hạn giấy tờ: 01/06/2027\n│ .giayto xem <id> để xem chi tiết.\n╰────────']] },
    { id: 'xong', title: 'Làm xong bảo trì',
      text: 'Làm xong thì báo Hugo để tính hạn kỳ sau. Hugo không tự dời hạn chỉ vì đã nhắc.',
      rows: [['.baotri xong B1', 'Hoàn tất hôm nay, hạn mới = kỳ kế tiếp'], ['.baotri xong 1 ngày 05/11/2026', 'Hoàn tất vào một ngày đã qua']],
      chat: [['u', '.baotri xong 1'], ['b', '╭─ 🏠 〔CHƯA GHI〕\n│ XONG · ID: B1\n│ Tên: tẩy giun Miu\n│ Ngày hoàn tất: — → 08/11/2026\n│ Hạn bảo trì: 01/12/2026 → 01/03/2027\n│ Chỉ người đề xuất gõ ok trong 10 phút; 0/huy để hủy.\n╰────────']] },
    { id: 'tunhan', title: 'Hugo tự nhắn',
      rows: [['−30 ngày', 'Nhắc vào nhóm khi còn 30 ngày tới hạn giấy tờ, bảo hành hoặc bảo trì'], ['−7 ngày', 'Nhắc lần hai khi còn 7 ngày'], ['07:00', 'Bản tin sáng có mục Nhà, tài sản, giấy tờ: các mục quá hạn hoặc tới hạn trong 30 ngày']] },
    { id: 'gioihan', title: 'Giới hạn cần biết',
      notes: ['Chỉ ghi biệt danh và hạn. Hugo từ chối số giấy tờ (chuỗi từ 6 chữ số), đường link và mật khẩu, nhưng bộ lọc không bắt được mọi trường hợp.', 'Đừng gửi mật khẩu, số giấy tờ hay bí mật cho Hugo trong chat. Câu tự do không theo mẫu trên sẽ được chuyển cho AI trả lời.', 'Nhắc gửi trong khung 07:00 đến 10:00. Thêm mục khi chỉ còn ít hơn 7 ngày thì không có tin nhắc riêng, chỉ có trong bản tin sáng.', 'Nhắc lỗi thì mất: Hugo đánh dấu đã gửi trước khi nhắn, nếu mạng lỗi thì không gửi lại để tránh nhắc lặp.', 'Chưa có: chụp hóa đơn để tự tạo thiết bị và ghi chi, nối hạn bảo hiểm/đăng kiểm với quỹ để dành.'] }
  ]
});
