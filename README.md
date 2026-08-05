# AthenaCM Product Operating System v4

## Điểm mới
- Dùng logo AthenaCM thật trong top menu và sidebar.
- Hệ màu lấy cảm hứng từ KV “Lễ Vinh Danh H1.2026”: vàng, cam, hồng/tím và ink đậm.
- Hero có visual KV AthenaCM ở dạng nền nhẹ.
- Pitch Generator thu thêm Account/Owner và Team.
- Mỗi lần bấm “Tạo Pitch Zalo 30s”, dữ liệu có thể gửi về Google Sheets.
- Dữ liệu cũng được lưu tạm trên trình duyệt để tránh mất bản ghi khi endpoint chưa cấu hình.

## Quan trọng: HTML tĩnh không ghi trực tiếp vào Excel
GitHub Pages chỉ là frontend. Nó không thể ghi trực tiếp vào một file `.xlsx` trên máy tính.

Luồng đề xuất:
Website → Google Apps Script → Google Sheets → Download Microsoft Excel (.xlsx)

## Cấu hình nhận dữ liệu
1. Tạo một Google Sheet mới.
2. Mở Extensions → Apps Script.
3. Paste file `google-apps-script.gs`.
4. Deploy → New deployment → Web app.
5. Copy Web App URL.
6. Mở `index.html`, tìm:
   `const SHEET_ENDPOINT = "";`
7. Dán URL:
   `const SHEET_ENDPOINT = "https://script.google.com/macros/s/.../exec";`
8. Upload lại `index.html` lên GitHub Pages.

## Cột dữ liệu nhận được
- Timestamp
- Account / Owner
- Team
- Brand
- Product
- Goal
- Budget
- Page
- User Agent

Sau đó trong Google Sheets chọn:
File → Download → Microsoft Excel (.xlsx)

## Lưu ý
- KPI/case demo trong site chưa phải số liệu đã xác minh.
- Khung giá cần đối chiếu rate card được duyệt.
