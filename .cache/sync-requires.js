const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-js": hot(preferDefault(require("/Users/tannersmith/medium_landing/stackbit-www-components/src/templates/page.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tannersmith/medium_landing/stackbit-www-components/.cache/dev-404-page.js")))
}

