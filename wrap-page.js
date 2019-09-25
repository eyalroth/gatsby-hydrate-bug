const React = require(`react`)


const preferDefault = m => (m && m.default) || m
const Layout = preferDefault(require(`./src/components/layout.js`))

module.exports = ({element, props}) => <Layout {...props}>{element}</Layout>