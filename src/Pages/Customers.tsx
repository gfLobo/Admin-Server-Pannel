import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Navigator from '../components/Navigator';
import ContentCustomer from '../components/Contents/ContentCustomer';
import Header from '../components/Header';
import { Alert, Backdrop, Button, ButtonGroup, CircularProgress, Divider, Grid, InputLabel, MenuItem, Select, Skeleton, Snackbar, TextField } from '@mui/material';
import axios from 'axios';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Copyright from '../components/Copyright';









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

export default function Customers() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [id, setID] = React.useState('');
  const [name, setName] = React.useState('');
  const [role, setRole] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [region, setRegion] = React.useState('');
  const [state, setState]: any = React.useState('info')
  const [getCustomers, setCustomers] = React.useState<Array<any>>([])
  const [alert, setAlert] = React.useState('Loading...')
  const [open, setOpen] = React.useState(false);
  const [resToring, setresToring] = React.useState(false);



  const handleChangeRegion = (event: any) => {
    setRegion(event.target.value);
  };





  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const handOpenAdd = () => {
    if (id.length == 0) {
      setOpen(true);
      setAlert("ERROR. ID Required.");
      setState("error");
    } else {
      axios.post("http://localhost:3001/NCustomer",

        {
          setter: `${id}`,
          Name: `${name}`,
          Region: `${region}`,
          Phone: `${phone}`,
          Role: `${role}`
        }).then(() => {
          setOpen(true)
          setAlert("Saved successfully!")
          setState("success");
        })
    }

  }


  const handOpenDel = () => {
    if (id.length == 0) {
      setOpen(true);
      setAlert("ERROR. ID Required.");
      setState("error");
    } else {
      axios.delete(`http://localhost:3001/DCustomer/${id}`).then(data => {
        setOpen(true);
        setAlert("Deleted successfully!");
        setState("success");

      })
    }
  }


  const handRestart = () => {
    
    setresToring(true);
    axios.get("http://localhost:3001/Reset").then(() => {
      setOpen(false);
      setresToring(false);

    }).catch(() => {
      setAlert("Error trying to restore data")
      setState("error");
    })
  }

  React.useEffect(() => {
    var xhttpRegions = new XMLHttpRequest();
    xhttpRegions.open("GET", "http://localhost:3001/regions", false);
    xhttpRegions.send();
    var jsonRegions = JSON.parse(xhttpRegions.responseText);

    setCustomers([...getCustomers, jsonRegions])
  }, [open])
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
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1 }}
              alignItems="center"
              justifyContent="center">
              <Grid item >
                <TextField
                  id="outlined-error"
                  label="ID"
                  style={{ width: 100 }}
                  onChange={(e: any) => {
                    setID(e.target.value);
                  }}
                />
              </Grid>
              <Grid item >
                <TextField

                  id="outlined-error"
                  label="Name"
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item >
                <TextField
                  id="outlined-error"
                  label="Role"
                  onChange={(e: any) => {
                    setRole(e.target.value);
                  }}
                />
              </Grid>
              <Grid item >
                <TextField
                  id="outlined-error"
                  label="Phone"
                  onChange={(e: any) => {
                    setPhone(e.target.value);
                  }}
                />
              </Grid>
              <Grid item   >
                <TextField
                  id="demo-simple-select"
                  value={region}
                  select
                  onChange={handleChangeRegion}
                  style={{ width: 200 }}
                  label="Region"
                >
                  {getCustomers.map((val: any, idx: any) => {
                    return (
                      <MenuItem value={val.Region}>{val.Region}</MenuItem>
                    )
                  })}
                </TextField>
              </Grid>
              <Grid item >
                <ButtonGroup variant="contained" fullWidth={true} >
                  <Button onClick={handOpenAdd} color="success" >ADD / UPDATE</Button>
                  <Button color="error" onClick={handOpenDel}>DEL</Button>
                  <Button color="info" onClick={handRestart}><RestartAltIcon /></Button>
                </ButtonGroup>
              </Grid>

            </Grid>

            {resToring ? <Skeleton animation="wave" width={"100%"} height={500} />
              : <ContentCustomer />
            }

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} color={state} variant="filled">
                ID = {id}
                <Divider style={{ margin: 5 }} />
                {alert}
              </Alert>
            </Snackbar>
            <Backdrop
              sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <Copyright />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}