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
import SigUp from '../pages/SigUp'


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
      <Route path="/SigUp" component={SigUp} />
    </Switch>
  )
}

export default Routes