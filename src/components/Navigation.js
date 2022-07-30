import { Link } from "react-router-dom"
import { Button, Grid } from "@mui/material"

const NavigationButton = ({text, path}) => {

    return (
        <Button className='navButton' variant="contained" color="neutral"><Link className='navLink' to={path}>{text}</Link></Button>
    )

}

const NavigationItem = ({text, path}) => {

    return (
        <Grid item className='navigation-item'>
            <NavigationButton text={text} path={path} />
        </Grid>
    )

}

export { NavigationButton, NavigationItem }