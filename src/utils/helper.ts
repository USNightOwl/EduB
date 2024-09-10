import { locales } from "./locales";

export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export function toCapitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function convertToVND(money: number) {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(money);
}

export function calcDiscount(money: number, discount: number) {
  return (money * (100 - discount)) / 100;
}

export function replaceNewLang(pathname: string, newLang: string) {
  if (!locales.includes(newLang)) return pathname;
  let path = pathname.endsWith("?") ? pathname.slice(0, pathname.length - 1) : pathname;
  path = path + (path.endsWith("/") ? "" : "/");
  for (const locale of locales) {
    if (path.startsWith(`/${locale}/`)) {
      path = path.slice(locale.length + 1, path.length - 1);
      return `/${newLang}${path}`;
    }
  }

  return path;
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const validateEmail = (email: string) => {
  const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
  return email.match(regex);
};

export const validateOTPcode = (otp: string) => {
  if (otp.length !== 5) return false;
  return /^\d+$/.test(otp);
};

export function generateOTP(otpLen = 5) {
  const digits = "0123456789";
  const len = digits.length;

  let OTP = "";
  for (let i = 0; i < otpLen; i++) {
    OTP += digits[Math.floor(Math.random() * len)];
  }

  return OTP;
}

export function toSlug(str: string) {
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize("NFD") // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ""); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, "d");

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, "-");

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, "");

  return str;
}
