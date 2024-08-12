import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config

export default getRequestConfig(async () => {
  const locale = "vi";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
