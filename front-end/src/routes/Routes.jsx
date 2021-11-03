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
      <Route path="/" exact component={Home} />
      <Route path="/Product" component={Catalogs} />
      <Route path="/cart" component={Cart} />
      <Route path="/Contacts" component={Contacts} />
      <Route path="/News" component={News} />
      <Route path="/"  component={Product} />


      
    


      
    </Switch>
  )
}

export default Routes
