/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process?.env?.IS_STATIC_BUILD ? 'export' : undefined,
}

export default nextConfig
