import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import { Link, useLocation } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;


  const location = useLocation().pathname;


  const categories = [
    {
      id: 'Tables',
      children: [
        {
          id: 'Customers',
          icon: <PeopleIcon />,
          active: location == '/customers',
          route:'/customers'
        },
        {
          id: 'Employees',
          icon: <DnsRoundedIcon />,
          active: location == '/employees',
          route:'/employees'
        },
        {
          id: 'Products',
          icon: <PermMediaOutlinedIcon />,
          active: location == '/products',
          route:'/products'
        },
      ],
    }
  ];

  const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
      bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
  };

  const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
  };


  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          <Box>
            <StorageIcon />
            <Box>
              Database
            </Box>
          </Box>
        </ListItem>
        <Link to={'/'} style={{ color: 'inherit', textDecoration: 'inherit' }} >
          <ListItem sx={{ ...item, ...itemCategory }}>
            <ListItemButton selected={location == '/'}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Project Overview</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, route }) => (
              <Link to={`${route}`}>
                <ListItem disablePadding key={childId}>
                  <ListItemButton selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}