// If you delete this component, Next.js will crush
// This is like App.js of create-react-app
// Global setting will be done in here.
// You can use this component for error hundle HOC, redux provider and so on.
import '../styles/globals.scss'
import Layout from "../components/organisms/Layout";

function App({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default App
