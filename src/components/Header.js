import React,{useState} from 'react'
import { AppBar, Toolbar, IconButton, Typography, Select } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import Logo from '../assets/images/Logo.png';

const languages=['English','Suomi','Svenska','norsk','Français','Español','Deutsch','Italiano','Nederlands','Русский язык'];

const Header = () => {
    const classes = useStyles();
    const [menuOpen, setMenuOpen] = useState(false);
    const [lang, setLang] = useState('')
    

    const handleToggle = () => {
		setMenuOpen(!menuOpen);
    }

    const handleChange = event => {
        setLang(event.target.value);
      };

    // console.log(languages)
    return (
        <AppBar position="sticky" elevation={0} color="inherit">
            <Toolbar className={classes.header}>
                <div className={classes.headPart}>
                <IconButton
                onClick={handleToggle}
                className={classes.menuButton}
                color="inherit"
                >
                    <Menu />
                </IconButton>
                <img src= {Logo} alt= "meetingPackage_LOGO" className={classes.logo} />
                </div>
                <div className={classes.headPart}>
                    <Select
                    native
                    value={lang}
                    onChange={handleChange}
                    className={classes.select}
                    autoWidth
                    >
                    {languages.map( (lang,i) => <option 
                        key={i} 
                        value={lang}
                        style={{textAlign:'center'}}
                        >
                        {lang}
                        </option>  
                   )}
                    </Select>   
                <Typography className={classes.user}>Mostafa Hazareh</Typography>
                </div>
            </Toolbar>
        </AppBar>
    )
};
export default Header;


const useStyles = makeStyles( theme =>({
    header:{
        flexGrow:1,
        justifyContent:'space-between',
        margin: theme.spacing(3,0),
    },
    headPart:{
        display:'flex', 
        justifyContent:'flex-start', 
        alignItems:'center'
    },
    logo:{
        height: '100%',
		width: '18vw',
    },
    menuButton: {
		color: 'white',
		'&:hover': {
			color: '#ffb503',
			background: 'none',
		},
    },
    user:{
        marginLeft: theme.spacing(3),
        fontSize:'calc(8px + .4vw)',
        fontWeight:'bold'
    },
    select: {
        maxWidth: 140,
        borderWidth:1,
        borderColor:'#555',
        borderStyle:'solid',
        borderRadius: 5,
        paddingLeft: theme.spacing(4),
        [theme.breakpoints.down('xs')]:{
            maxWidth:100,
            paddingLeft: theme.spacing(1),
        },
        
    },
}));
