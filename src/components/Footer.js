import React from 'react'

import { List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
        <div className={classes.footer}>
        <div className={classes.links}>
            <img src={Logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.links}>
        <h2>Solutions</h2>
          <List>
              <ListItem button>Hotel Chains</ListItem>
              <ListItem button>Independent Hotels</ListItem>
              <ListItem button>Partners</ListItem>
              <ListItem button>Unique venues and Events spaces</ListItem>
          </List>
        </div>
        <div className={classes.links}>
        <h2>Products</h2>
          <List>
              <ListItem button>Online Booking Engine</ListItem>
              <ListItem button>Global Distribution System</ListItem>
              <ListItem button>Sales & Catering</ListItem>
              <ListItem button>Integrations</ListItem>
              <ListItem button>Analytics</ListItem>
          </List>
        </div>
        <div className={classes.links}>
        <h2>More</h2>
          <List>
              <ListItem button>Company</ListItem>
              <ListItem button>Contact</ListItem>
          </List>
        </div>
        </div>
        </div>
    )
}

export default Footer

const useStyles = makeStyles(theme => ({
    container:{
        backgroundColor:'#d3d3d3',
        padding:theme.spacing(3,0)
    },
    footer:{
        maxWidth:'90%',
        margin:'auto',
        marginTop: theme.spacing(5),
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',

    },
    logo:{
        height: '20px',
		width: '80px',
    },
    links:{
        flex:1,
        [theme.breakpoints.down('xs')]:{
            minWidth:'100%',
            marginLeft:theme.spacing(4)
        },
    }
  }));