// If you delete this component, Next.js will crush
// This is like App.js of create-react-app
// Global setting will be done in here.
// You can use this component for error hundle HOC, redux provider and so on.
import React from 'react';
import ReactDOM from 'react-dom';

if (process.env.CHECK_AXE) {
  import('react-axe').then((axe) => {
    axe.default(React, ReactDOM, 1000);
  });
}

import '../styles/globals.scss';
import Layout from '../components/templates/Layout';

function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
