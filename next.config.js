/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    let compilerConfig = {
      styledComponents: false,
    };

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        reactRemoveProperties: {properties: ['^data-testid$']},
      };
    }
    return compilerConfig;
  })(),
  images: {
    domains: ['jejufriend.s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
