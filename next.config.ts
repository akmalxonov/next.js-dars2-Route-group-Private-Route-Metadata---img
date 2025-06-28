import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"https://codewithmosh.com",
        port:"",
      }
    ]
  }
};

export default nextConfig;
