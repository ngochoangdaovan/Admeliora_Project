import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import News from './pages/News/News'
import Contact from './pages/Contact/Contact'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/product" component={Product}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/news" component={News}></Route>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
