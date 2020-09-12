import '../styles/globals.scss'

// If you delete this component, Next.js will crush
// This is like App.js of create-react-app
// Global setting will be done in here.
// You can use this component for error hundle HOC, redux provider and so on.
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default App
