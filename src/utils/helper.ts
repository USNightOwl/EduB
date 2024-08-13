export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return String(error);
}

export function toCapitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
