/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  images: {
    domains: ["flagsapi.com", "cdn-icons-png.flaticon.com"],
  },
};

export default withNextIntl(nextConfig);
