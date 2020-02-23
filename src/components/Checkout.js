import React,{Fragment} from 'react'
import PersonalInfo from './PersonalInfo'
import Summary from './Summary'

import { makeStyles } from '@material-ui/core/styles'
import { Typography, Divider } from '@material-ui/core'


const Checkout = () => {
    const classes = useStyles()
    return (
        <Fragment>
            <div className={classes.subject}>
                <Typography variant="h3" className={classes.title}>Check out</Typography>
            </div>
            <div className={classes.body} >
                <PersonalInfo />
                <Summary /> 
            </div>
            <Divider style={{marginTop:30}} />
        </Fragment>
    )
}

export default Checkout

const useStyles = makeStyles( theme =>({
    subject:{
        minHeight:90,
        minWidth:'100%',
        [theme.breakpoints.down('xs')]:{
            minHeight:60
        },
    },
    title:{
        margin:theme.spacing(2,9),
        fontWeight:'bolder',
        fontSize:'calc(12px + 2vw)',
        fontFamily:'Impact,Times New Roman,Sans Serif',
    },
    body:{
        display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        maxWidth:'90%',
        margin:'auto',
    }
}));