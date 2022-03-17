/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["images.pexels.com", "s3-us-west-2.amazonaws.com"],
	},
	extends: "next",
	rules: {
		"react/no-unescaped-entities": "off",
		"@next/next/no-page-custom-font": "off",
	},
};

module.exports = nextConfig
