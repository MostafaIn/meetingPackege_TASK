import React from 'react'

import { CssBaseline } from '@material-ui/core'

import Header from './components/Header';
import Checkout from './components/Checkout';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Checkout />
      <Footer />
    </div>
  )
};
export default App;