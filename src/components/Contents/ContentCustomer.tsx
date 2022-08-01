import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns: any = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 190 },
  { field: 'ContactTitle', headerName: 'Role', width: 190 },
  { field: 'Phone', headerName: 'Phone', width: 190 },
  { field: 'Region', headerName: 'Region', width: 190 },

];



var rows: any = [];



export default function ContentCustomer() {
  rows = [];

  var xhttpCustomers = new XMLHttpRequest();
  xhttpCustomers.open("GET", "http://localhost:3001/customers", false);
  xhttpCustomers.send();
  var jsonCustomers = JSON.parse(xhttpCustomers.responseText);


  for (let index = 0; index < jsonCustomers.length; index++) {
    const element = jsonCustomers[index];

    rows.push(
      JSON.parse(JSON.stringify({
        id: element.CustomerID, name: element.ContactName, ContactTitle: element.ContactTitle, Phone: element.Phone, Region: element.Region
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
        components={{ Toolbar: GridToolbar }}
        style={{ backgroundColor: 'white', height:"100%" }}
      />
    </Box>
  );
}