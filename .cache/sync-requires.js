
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/work/git/grekz-com/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/work/git/grekz-com/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/work/git/grekz-com/src/pages/index.tsx"))
}

