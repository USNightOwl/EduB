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

  let path = pathname + (pathname.endsWith("/") ? "" : "/");
  for (const locale of locales) {
    if (path.startsWith(`/${locale}/`)) {
      path = path.slice(locale.length + 1, path.length - 1);
      return `/${newLang}${path}`;
    }
  }

  return pathname;
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
