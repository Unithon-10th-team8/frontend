const webpack = require("webpack");

/**
 * next/image 허용 호스트 배열
 * @type {string[]}
 * @description Protocol을 제외한 Domain 문자열을(Sub-domain 포함) 배열로 작성하면, `nextConfig.images.remotePatterns`에 자동으로 추가됩니다.
 */
const allowImageHosts = [
  "assets-unithon-10th-team8-prod.betaman.xyz",
  "assets-unithon-10th-team8-dev.betaman.xyz",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    remotePatterns: allowImageHosts.map((host) => ({
      protocol: "https",
      hostname: host,
      port: "",
      pathname: "/**",
    })),
  },
  webpack: (config, { dev, isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.RELEASE_ENV": JSON.stringify(
          process.env.RELEASE_ENV ?? "development",
        ),
      }),
    );

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    return config;
  },
  transpilePackages: [],
};

module.exports = nextConfig;
