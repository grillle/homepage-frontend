import { Grid } from "@mui/material"
import { NavigationItem } from "./Navigation"

const Header = () => {

    return (
        <Grid container className='navigation'>
            <NavigationItem text="Home" path="/"></NavigationItem>
            <NavigationItem text="Projects" path="/projects"></NavigationItem>
        </Grid>
    )
}

export default Header