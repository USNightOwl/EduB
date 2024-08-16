import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { GlobalContextProvider } from "@/context/GlobalContext";

export const metadata: Metadata = {
  title: "EduB - Choose your course, master your future",
  description: "Choose your course, master your future",
  icons: "/logo.svg",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true}>
        <GlobalContextProvider>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
