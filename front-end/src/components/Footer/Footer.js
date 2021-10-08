import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import { Typography } from '@material-ui/core'
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Public,
  Room,
  Twitter,
} from '@material-ui/icons'

import classes from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Box
        px={{ xs: 3, sm: 3 }}
        py={{ xs: 3, sm: 3 }}
        bgcolor="#f1f1f1"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item sm={6}>
              <Box display="flex" pb="10px" alignItems="center">
                <Phone style={{ marginRight: '10px' }} />
                <Typography>Hỗ trợ / Mua hàng: </Typography>
                <Link
                  href="tel:+0326626065"
                  style={{
                    color: 'red',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  0326626065
                </Link>
              </Box>
              <Box display="flex" pb="10px" alignItems="center">
                <MailOutline style={{ marginRight: '10px' }} />
                <Link
                  href="mailto:admeloria@gmail.com"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  admeloria@gmail.com
                </Link>
              </Box>
              <Box display="flex" pb="10px" alignItems="center">
                <Room style={{ marginRight: '10px' }} />
                <Typography>Bình Tân - thành phố Hồ Chí Minh</Typography>
              </Box>
              <Box display="flex" pb="10px" alignItems="center">
                <Public style={{ marginRight: '10px' }} />
                <Typography>Admeloria.com</Typography>
              </Box>
            </Grid>

            <Grid item sm={6}>
              <Box display="flex" justifyContent="center" pb="10px">
                <Typography>Follow us:</Typography>
              </Box>
              <Box display="flex" justifyContent="center">
                <Link
                  href="https://www.facebook.com/admelioravn-102986068104573"
                  className={classes.icon}
                  style={{ marginRight: '10px', color: 'white' }}
                  target="_blank"
                >
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/admeliora.vn/"
                  className={classes.icon}
                  style={{ marginRight: '10px', color: 'white' }}
                  target="_blank"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://shopee.vn/admeliora"
                  className={classes.icon}
                  style={{ marginRight: '10px', color: 'white' }}
                  target="_blank"
                >
                  <Twitter />
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Box textAlign="center" pt={{ xs: 5, sm: 1 }} pb={{ xs: 5, sm: 1 }}>
            &reg; {new Date().getFullYear()} ADMELORIA Studio. All rights
            reserved
          </Box>
        </Container>
      </Box>
    </footer>
  )
}
