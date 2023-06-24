// import '@/styles/globals.css'

import '@/styles/global-edit.css'
import Layout from "./comp/layout";

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}
