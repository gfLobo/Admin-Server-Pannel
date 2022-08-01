import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import Axios from 'axios';
import { useLocation } from 'react-router-dom';







var rows: any = [];


const columns: any = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'Phone', headerName: 'Phone', width: 190 },
    { field: 'Region', headerName: 'Region', width: 190 },
];




export default function ContentCustomer() {
    rows = [];
    
    var xhttpEmployees = new XMLHttpRequest();
    xhttpEmployees.open("GET", "http://localhost:3001/employees", false);
    xhttpEmployees.send();
    var jsonEmployees = JSON.parse(xhttpEmployees.responseText);


    for (let index = 0; index < jsonEmployees.length; index++) {
        const element = jsonEmployees[index];

        rows.push(
            JSON.parse(JSON.stringify({
                id: index + 1, name: element.Name, Phone: element.HomePhone, Region: element.Region
            }))
        );
    }



    return (
        <Box sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }} height={500}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                disableSelectionOnClick
                components={{ Toolbar: GridToolbar }}
                style={{ backgroundColor: 'white' }}
            />
        </Box>
    );
}