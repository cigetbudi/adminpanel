
import { AnalyticsOutlined, DashboardOutlined, SourceOutlined, StyleOutlined } from "@mui/icons-material"
import { Avatar, Box, Typography, useTheme } from "@mui/material"
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar"

function SideNav() {

    const theme = useTheme();
    return (
        <Sidebar style={{
            height :"100%",
            top: "auto"
        }}
            breakPoint="md"
            backgroundColor={theme.palette.neutral.light}
        >
            <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} alt="Channel Kadal" src="src/assets/avatars/avatar.jpeg" />
                <Typography variant="body" sx={styles.yourChannel}>Kodok Zuma</Typography>
                <Typography variant="overline" > React With Kadal</Typography>
                
            </Box>
            <Menu>
                <MenuItem active icon={<DashboardOutlined />}>
                    <Typography variant="body2">Dashboard</Typography>
                </MenuItem>
                <MenuItem active icon={<SourceOutlined />}>
                    <Typography variant="body2">Content</Typography>
                </MenuItem>
                <MenuItem active icon={<AnalyticsOutlined />}>
                    <Typography variant="body2">Analytics</Typography>
                </MenuItem>
                <MenuItem active icon={<StyleOutlined />}>
                    <Typography variant="body2">Customization</Typography>
                </MenuItem>
            </Menu>
        </Sidebar>
    )
}

/**@type {import{"@mui/material"}.SxProps} */

const styles = {
    avatarContainer: {
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        my: 5 
    },
    avatar : {
        width: "40%",
        height: "auto"
    },
    yourChannel : {
        mt: 1
    }
}

export default SideNav