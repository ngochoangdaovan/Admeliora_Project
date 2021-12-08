import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Catalogs from '../pages/Catalogs'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Contacts from '../pages/Contacts'
import News from '../pages/News'
import Login from '../pages/Login'
import order from '../pages/order'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import Refund_policy from '../pages/Refund_policy'


const Routes = () => {
  return (
    <Switch>
      <Route path="/Product/detail/:product_line_id/:color_id"  component={Product} />
      
      <Route path="/" exact component={Home} />
      <Route path="/Product" component={Catalogs} />
      <Route path="/cart" component={Cart} />
      <Route path="/Contacts" component={Contacts} />
      <Route path="/News" component={News} />
      <Route path="/Login" component={Login}/>
      <Route path="/order" component={order} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Profile" component={Profile} />
      <Route path="/Search" component={Search} />
      <Route path="/refund_policy" component={Refund_policy} />
    </Switch>
  )
}

export default Routes