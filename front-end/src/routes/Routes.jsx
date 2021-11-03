import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Catalogs from '../pages/Catalogs'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Contacts from '../pages/Contacts'
import News from '../pages/News'

const Routes = () => {
  return (
    <Switch>
      <Route path="/Product/detail/:product_line_id/:color_id"  component={Product} />
      <Route path="/Home" exact component={Home} />
      <Route path="/Product" component={Catalogs} />
      <Route path="/cart" component={Cart} />
      <Route path="/Contacts" component={Contacts} />
      <Route path="/News" component={News} />

     


      
    


      
    </Switch>
  )
}

export default Routes