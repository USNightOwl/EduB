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
