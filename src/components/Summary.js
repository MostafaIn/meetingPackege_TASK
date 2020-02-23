import React from 'react'

import { Card, CardContent, Typography, Divider, Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import SlideShow from './SlidesShow'

const Summary = () => {
    const classes = useStyles();

    return (
        <div className={classes.summary}>
            <Typography variant="h5">Booking Request Summary</Typography>
			<Divider style={{marginBottom:25}} />
        <Card variant="outlined">
            <SlideShow />
            <CardContent>
                <Typography variant="h5">
                    Venue Luna House
                </Typography>
                <Divider />
                <Typography variant="caption">
                Friday, February 14, 2019 - 09:00 to 17:00
                </Typography>
                <Table>
                    <TableBody>
                    <TableRow>
                        <TableCell style={{fontWeight:'bold'}}>room: </TableCell>
                        <TableCell>Lounge</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{fontWeight:'bold'}}>Delegates: </TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{fontWeight:'bold'}}>price per delegate: </TableCell>
                        <TableCell>55 €</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{fontWeight:'bolder'}}>Total price: </TableCell>
                        <TableCell>550 €</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        </div>
    )
}

export default Summary

const useStyles = makeStyles(theme => ({
    summary:{
        width:'40%',
		[theme.breakpoints.down('sm')]: {
            minWidth: '70%',
            marginTop:theme.spacing(4)
        },
    }
  }));