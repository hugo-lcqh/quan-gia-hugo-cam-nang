HUGO.add({
  id: 'nha', order: 5.5, name: 'Nhà, tài sản & giấy tờ',
  blurb: 'Sổ thiết bị và hạn bảo hành, hạn giấy tờ, lịch bảo trì xe và thú cưng. Hugo nhắc trước 30 và 7 ngày.',
  fg: '#5B6B12', bg: '#EEF3D2', ico: 'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  chips: ['.taisan', '.giayto', '.baotri'],
  badges: ['Nhóm gia đình và chat riêng', 'Thêm, sửa, xóa cần gõ ok', 'Hỏi theo mẫu không dùng AI'],
  cmds: [
    ['.taisan', 'Sổ thiết bị, xe, thú cưng; ngày mua và hạn bảo hành', '.taisan máy giặt mua 01/11/2026 bảo hành 24 tháng'],
    ['.giayto', 'Hạn CCCD, hộ chiếu, bằng lái, đăng kiểm, bảo hiểm, thuế', '.giayto hộ chiếu anh hạn 01/06/2027'],
    ['.baotri', 'Việc lặp lại: thay nhớt, vệ sinh máy lạnh, tẩy giun', '.baotri thay nhớt xe lặp 6 tháng hạn 01/12/2026']
  ],
  sections: [
    { id: 'hoi', title: 'Hỏi tự nhiên',
      text: 'Không cần nhớ lệnh: trong chat riêng nhắn thẳng, trong nhóm gọi "Hugo" trước câu. Các câu dưới đây được Hugo tra ngay tại máy, không tốn lượt AI.',
      rows: [['giấy tờ nào sắp hết hạn?', 'Giấy tờ quá hạn hoặc tới hạn trong 30 ngày'], ['xem tài sản', 'Danh sách tài sản, 10 mục mỗi trang'], ['xem giấy tờ', 'Danh sách giấy tờ và hạn'], ['nhà mình có gì cần bảo trì không', 'Bảo trì quá hạn hoặc tới hạn trong 30 ngày'], ['đồ nào sắp hết bảo hành', 'Bảo hành quá hạn hoặc tới hạn trong 30 ngày'], ['có gì sắp tới hạn không', 'Tổng hợp hạn Nhà trong 30 ngày (kể cả quá hạn) và lịch 7 ngày tới']],
      chat: [['u', 'Hugo giấy tờ nào sắp hết hạn?'], ['b', '╭─ 📄 〔SẮP TỚI HẠN〕\n│ 📄 hộ chiếu anh (G1) · 15/11/2026 · 🟠 Còn 7 ngày\n│ 👉 Xem danh sách: .taisan / .giayto / .baotri (trang 2 để xem tiếp).\n╰────────']],
      notes: ['Câu tự do hơn như "ghi giúp anh cái máy hút bụi mới mua hôm qua, bảo hành 2 năm": khi AI đang bật và còn lượt, Hugo nhờ AI hiểu (tốn lượt AI), hiện thẻ để chính người gửi kiểm tra rồi gõ ok; tính năng này đang chờ deploy.', 'Hugo chưa hiểu hết câu thì nhờ AI hiểu và hỏi lại; AI tắt/hết lượt thì hiện hướng dẫn cách gõ (thay đổi đang chờ deploy). Sửa/xóa vẫn dùng các mẫu bên dưới.'] },
    { id: 'them', title: 'Thêm mục mới',
      text: 'Nhắn như nói chuyện, bắt đầu bằng "thêm". Có chữ "bảo hành" thì Hugo hiểu là tài sản; tên giấy tờ kèm "hạn" thì là giấy tờ. Lệnh .taisan/.giayto vẫn dùng được. Hugo tự nhận loại từ tên (hộ chiếu, đăng kiểm, xe máy, mèo...) và ghi loại đó trên thẻ để bạn kiểm tra.',
      rows: [['thêm hộ chiếu anh hạn 01/06/2027', 'Giấy tờ: bắt buộc có hạn'], ['thêm đăng kiểm xe máy hạn 15/03/2027', 'Hugo nhận ra loại Đăng kiểm'], ['thêm máy giặt mua 01/11/2026 bảo hành 24 tháng', 'Hugo tự tính hạn bảo hành 01/11/2028'], ['thêm macbook bảo hành 3 năm từ 26/02/2025', 'Ngày "từ" là ngày mua; hạn 26/02/2028'], ['thêm tủ lạnh bảo hành đến 01/05/2028', 'Ghi thẳng ngày hết bảo hành'], ['.baotri tẩy giun Miu lặp 3 tháng hạn 01/12/2026', 'Bảo trì: cần hạn và chu kỳ lặp'], ['Hugo thêm giấy tờ bằng lái anh hạn 20/08/2030', 'Gọi tên Hugo cũng được']],
      chat: [['u', '.giayto hộ chiếu anh hạn 01/06/2027'], ['b', '╭─ 📝 〔CHƯA GHI〕\n│ TẠO GIẤY TỜ · ID cấp khi ok\n│ 🏷️ Tên: hộ chiếu anh\n│ 🔗 Tài sản liên kết: —\n│ 📅 Hạn giấy tờ: 01/06/2027\n│ 🗂️ Loại (suy ra): Hộ chiếu\n│ 👤 Chủ: —\n│ ✅ Gõ ok trong 10 phút để ghi · ❌ huy hoặc 0 để hủy\n│ Chỉ người đề xuất xác nhận được.\n╰────────'], ['u', 'ok'], ['b', '╭─ ✅ ĐÃ GHI GIẤY TỜ\n│ hộ chiếu anh\n│ ID: G1\n│ 📅 01/06/2027 · 🟢 Còn ~6 tháng\n│ 👉 ↩️ Sai? .giayto sửa G1 … · .giayto xóa G1\n╰────────']] },
    { id: 'xem', title: 'Xem, sửa, xóa',
      text: 'Mỗi mục có ID ngắn: T cho tài sản, G cho giấy tờ, B cho bảo trì. Gõ chữ thường hoặc chỉ phần số đều được.',
      rows: [['.giayto', 'Danh sách, sắp đến hạn lên trước, 10 mục mỗi trang'], ['.giayto trang 2', 'Trang tiếp theo'], ['.giayto xem G1', 'Chi tiết một mục'], ['.giayto sua G1 hạn 02/06/2027', 'Đổi hạn'], ['.taisan xoa 3', 'Xóa tài sản T3']],
      chat: [['u', '.giayto'], ['b', '╭─ 📄 GIẤY TỜ\n│ Trang 1 · 1 mục\n│\n│ 🛂 hộ chiếu anh  G1\n│    📅 Hạn giấy tờ: 01/06/2027 · 🟢 Còn ~6 tháng\n│\n│ 👉 .giayto xem G1 để xem chi tiết.\n╰────────']] },
    { id: 'xong', title: 'Làm xong bảo trì',
      text: 'Làm xong thì báo Hugo để tính hạn kỳ sau. Hugo không tự dời hạn chỉ vì đã nhắc.',
      rows: [['.baotri xong B1', 'Hoàn tất hôm nay, hạn mới = kỳ kế tiếp'], ['.baotri xong 1 ngày 05/11/2026', 'Hoàn tất vào một ngày đã qua']],
      chat: [['u', '.baotri xong 1'], ['b', '╭─ 📝 〔CHƯA GHI〕\n│ XONG BẢO TRÌ · ID: B1\n│ 🏷️ Tên: tẩy giun Miu\n│ ⚓ Ngày neo chu kỳ: 01/09/2026\n│ 🔗 Tài sản liên kết: —\n│ 🔁 Số kỳ lặp: 3\n│ 🔁 Đơn vị lặp: tháng\n│ ✅ Ngày hoàn tất: — → 08/11/2026\n│ 📅 Hạn bảo trì: 01/12/2026 → 01/03/2027\n│ ✅ Gõ ok trong 10 phút để ghi · ❌ huy hoặc 0 để hủy\n│ Chỉ người đề xuất xác nhận được.\n╰────────']] },
    { id: 'tunhan', title: 'Hugo tự nhắn',
      rows: [['−30 ngày', 'Nhắc vào nhóm khi còn 30 ngày tới hạn giấy tờ, bảo hành hoặc bảo trì'], ['−7 ngày', 'Nhắc lần hai khi còn 7 ngày'], ['07:00', 'Bản tin sáng có mục Nhà, tài sản, giấy tờ: các mục quá hạn hoặc tới hạn trong 30 ngày']] },
    { id: 'gioihan', title: 'Giới hạn cần biết',
      notes: ['Chat riêng chỉ dành cho thành viên gia đình, khi tính năng chat riêng đã bật.', 'Chỉ ghi biệt danh và hạn. Hugo từ chối số giấy tờ (chuỗi từ 6 chữ số), đường link và mật khẩu, nhưng bộ lọc không bắt được mọi trường hợp.', 'Đừng gửi mật khẩu, số giấy tờ hay bí mật cho Hugo trong chat, kể cả khi hỏi tự nhiên. Câu hỏi trong mục Hỏi tự nhiên được tra tại máy; câu lạ hơn có thể dùng AI và tốn lượt.', 'Tin nhắc và bản tin 07:00 chỉ gửi vào nhóm gia đình, không gửi vào chat riêng.', 'Nhắc gửi trong khung 07:00 đến 10:00. Thêm mục khi chỉ còn ít hơn 7 ngày thì không có tin nhắc riêng, chỉ có trong bản tin sáng.', 'Nhắc lỗi thì mất: Hugo đánh dấu đã gửi trước khi nhắn, nếu mạng lỗi thì không gửi lại để tránh nhắc lặp.', 'Chưa có: chụp hóa đơn để tự tạo thiết bị và ghi chi, nối hạn bảo hiểm/đăng kiểm với quỹ để dành.'] }
  ]
});
