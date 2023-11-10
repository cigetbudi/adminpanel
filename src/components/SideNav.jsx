
import { AnalyticsOutlined, DashboardOutlined, SourceOutlined, StyleOutlined } from "@mui/icons-material"
import { Avatar, Box, Typography, useTheme } from "@mui/material"
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar"

function SideNav() {

    const {collapsed} = useProSidebar();

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
                {!collapsed ? <Typography variant="body" sx={styles.yourChannel}>Kodok Zuma</Typography> : null}
                {!collapsed ? <Typography variant="overline" > React With Kadal</Typography> : null }
                
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