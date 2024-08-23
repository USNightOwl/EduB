# Cách thêm hỗ trợ một ngôn ngữ mới trong ứng dụng

- **Bước 1:** Tại thư mục này thêm file ngôn ngữ hỗ trợ (định dạng ab.json) VD: `fr.json` để hỗ trợ tiếng Pháp (tên file
  json nên là 2 kí tự viết tắt).
- **Bước 2:** Tại file json mới tạo ta copy nội dung từ file `en.json`, sau đó thay phần value theo nghĩa mà ngôn ngữ
  mới hỗ trợ.
- **Bước 3:** Tại file `locales.ts` (path: ~/src/utils/locales.ts) ta cập nhật mảng **locales** (thêm tên file ngôn ngữ
  mới - không gồm phần extension). Đồng thời cập nhật mảng **fullLocales**, _lưu ý_ phần **prefix** sẽ là cụm từ viết
  tắt (2 ký tự in hoa) theo lá cờ nước tương ứng theo [flagsapi](https://flagsapi.com/).
