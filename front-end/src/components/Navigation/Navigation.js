import classes from './Navigation.module.css'
import { NavLink, withRouter } from 'react-router-dom'
import { Badge } from '@material-ui/core'
import {
  NotificationsNone,
  ShoppingCartOutlined,
  SearchOutlined,
  PersonOutlineOutlined,
} from '@material-ui/icons'

import { ReactComponent as Logo } from '../../assets/logo.svg'

const MainNav = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <Logo
            style={{
              width: '150',
              height: '70',
              cursor: 'pointer',
            }}
          />

          <nav>
            <ul>
              <li>
                <NavLink to="/home" activeClassName="active">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/product" activeClassName="active">
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/news" activeClassName="active">
                  News
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={classes.menu__item}>
            <Badge badgeContent={4} color="primary">
              <NotificationsNone color="action" />
            </Badge>
          </div>

          <div className={classes.menu__item}>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </div>

          <div className={classes.menu__item}>
            <SearchOutlined />
          </div>

          <div className={classes.menu__item}>
            <PersonOutlineOutlined />
          </div>
        </div>
      </div>
    </header>
  )
}

export default withRouter(MainNav)