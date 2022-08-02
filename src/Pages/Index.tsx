import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigator from '../components/Navigator';
import Header from '../components/Header';
import { Button, Container, Divider, Paper, Stack } from '@mui/material';
import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function myFunction(clip: any) {
    console.log(clip.innerText)
    navigator.clipboard.writeText(clip.innerText);

}



const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

let theme = createTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#081627',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                contained: {
                    boxShadow: 'none',
                    '&:active': {
                        boxShadow: 'none',
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    marginLeft: theme.spacing(1),
                },
                indicator: {
                    height: 3,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    backgroundColor: theme.palette.common.white,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    margin: '0 16px',
                    minWidth: 0,
                    padding: 0,
                    [theme.breakpoints.up('md')]: {
                        padding: 0,
                        minWidth: 0,
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 4,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgb(255,255,255,0.15)',
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#4fc3f7',
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontSize: 14,
                    fontWeight: theme.typography.fontWeightMedium,
                },
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    minWidth: 'auto',
                    marginRight: theme.spacing(2),
                    '& svg': {
                        fontSize: 20,
                    },
                },
            },
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    width: 32,
                    height: 32,
                },
            },
        },
    },
};

const drawerWidth = 256;


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function Index() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
                <CssBaseline />
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                >
                    {isSmUp ? null : (
                        <Navigator
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        />
                    )}
                    <Navigator
                        PaperProps={{ style: { width: drawerWidth } }}
                        sx={{ display: { sm: 'block', xs: 'none' } }}
                    />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Header onDrawerToggle={handleDrawerToggle} />
                    <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
                        <div >

                            <h1 style={{ textAlign: "center" }}>
                                Admin Server Pannel
                            </h1>

                            <Divider />

                            <div style={{ marginBottom: 100 }}>

                                <h2>

                                    🚀Getting Started

                                </h2>
                                Initialize the server:
                                <blockquote >

                                    <div id="clip1"> <BootstrapButton variant="contained" disableRipple onClick={() => myFunction(document.getElementById("clip1"))} startIcon={<ContentCopyIcon />}>   cd server;  npm install;  npm run dev  </BootstrapButton ></div>

                                </blockquote>

                                Running the client side:
                                <blockquote>

                                    <div id="clip2"> <BootstrapButton variant="contained" disableRipple onClick={() => myFunction(document.getElementById("clip2"))} startIcon={<ContentCopyIcon />}>   npm install;  npm run dev  </BootstrapButton ></div>

                                </blockquote>

                            </div>




                            <h2 style={{ textAlign: "center" }}>
                                🚏 API Routes
                            </h2>
                            <Divider style={{ height: 20 }} />
                            <Box style={{ backgroundColor: '#cfe8fc' }}>
                                <h3 style={{ padding: 20 }}> GET </h3>
                            </Box>
                            <blockquote>

                                <div id="clip1"><a style={{ textDecoration: 'none' }}><BootstrapButton variant="contained" disableRipple onClick={() => myFunction(document.getElementById("clip3"))} startIcon={<ContentCopyIcon />}>  http://localhost:3001/customers</BootstrapButton ></a></div>

                            </blockquote>
                            <blockquote>

                                <div id="clip2"><a style={{ textDecoration: 'none' }}><BootstrapButton variant="contained" disableRipple onClick={() => myFunction(document.getElementById("clip4"))} startIcon={<ContentCopyIcon />}>  http://localhost:3001/employees</BootstrapButton ></a></div>

                            </blockquote>
                            <blockquote>

                                <div id="clip3"><a style={{ textDecoration: 'none' }}><BootstrapButton variant="contained" disableRipple onClick={() => myFunction(document.getElementById("clip5"))} startIcon={<ContentCopyIcon />}>  http://localhost:3001/regions</BootstrapButton ></a></div>

                            </blockquote>
                            <blockquote>

                                <div id="clip4"><a style={{ textDecoration: 'none' }}><BootstrapButton variant="contained" disableRipple onClick={() => myFunction(document.getElementById("clip6"))} startIcon={<ContentCopyIcon />}>  http://localhost:3001/Reset</BootstrapButton ></a></div>

                            </blockquote>

                            <Divider style={{ height: 20 }} />
                            <Box style={{ backgroundColor: '#cfe8fc' }}>
                                <h3 style={{ padding: 20 }}> POST </h3>
                            </Box>
                            <blockquote>

                                <div id="clip5"><a style={{ textDecoration: 'none' }}><BootstrapButton variant="contained" disableRipple onClick={() => myFunction(document.getElementById("clip7"))} startIcon={<ContentCopyIcon />}>  http://localhost:3001/NCustomer</BootstrapButton ></a></div>

                            </blockquote>

                            <Divider style={{ height: 20 }} />



                            <Box style={{ backgroundColor: '#cfe8fc' }}>
                                <h3 style={{ padding: 20 }}> DELETE </h3>
                            </Box>
                            <div>

                                <blockquote>
                                    <h3>CustomerID = setter.</h3>
                                    <div id="clip"><a style={{ textDecoration: 'none' }}><BootstrapButton variant="contained" disableRipple onClick={() => myFunction(document.getElementById("clip8"))} startIcon={<ContentCopyIcon />}>  http://localhost:3001/DCustomer/:setter</BootstrapButton ></a></div>

                                </blockquote>



                            </div>

                        </div>
                    </Box>
                    <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
                        <Copyright />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

