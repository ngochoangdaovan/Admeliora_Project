import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Product from '../pages/Product/Product'
import News from '../pages/News/News'
import Contact from '../pages/Contact/Contact'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/product" component={Product}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/news" component={News}></Route>
    </Switch>
  )
}

export default Routes
