import { Logout, MenuBookTwoTone, Notifications, Settings } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";

function AppHeader() {
    return( 
        <AppBar position="sticky" sx={styles.appBar}>
            <Toolbar>
                <IconButton onClick={() => console.log("clicked")} color="secondary">
                    <MenuBookTwoTone></MenuBookTwoTone>
                </IconButton>
                <Box 
                    component='img'
                    sx={styles.appLogo}
                    src="/src/assets/sample-logo.png"
                />
                <IconButton title='Notification' color="secondary">
                    <Badge badgeContent={4} color="error">
                        <Notifications/>
                    </Badge>
                </IconButton>
                <IconButton title="Settings" color="secondary">
                    <Settings />
                </IconButton>
                <IconButton title="Sign Out" color="secondary">
                    <Logout />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}



/**@type {import{"@mui/material"}.SxProps} */

const styles = {
    appBar: {
        bgcolor: 'neutral.main'
    },
    appLogo :{
        borderRadius: 2,
        width : 80,
        ml: 2,
        cursor : 'pointer'
    }
}

export default AppHeader