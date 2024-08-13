import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { GlobalContextProvider } from "@/context/GlobalContext";

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true} className="bg-gray-100">
        <GlobalContextProvider>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
