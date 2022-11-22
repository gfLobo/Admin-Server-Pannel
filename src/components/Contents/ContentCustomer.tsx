import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import * as React from 'react';

const columns: any = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 190 },
  { field: 'ContactTitle', headerName: 'Role', width: 190 },
  { field: 'Phone', headerName: 'Phone', width: 190 },
  { field: 'Region', headerName: 'Region', width: 190 },

];






export default function ContentCustomer() {

  const [rows, setRows] = React.useState<Array<any>>([])


  React.useEffect(() => {
    var xhttpCustomers = new XMLHttpRequest();
    xhttpCustomers.open("GET", "http://localhost:3001/customers", false);
    xhttpCustomers.send();
    var jsonCustomers = JSON.parse(xhttpCustomers.responseText);

    let Mrows = []

    for (let index = 0; index < jsonCustomers.length; index++) {
      const element = jsonCustomers[index];

      Mrows.push(
        JSON.parse(JSON.stringify({
          id: element.CustomerID, name: element.ContactName, ContactTitle: element.ContactTitle, Phone: element.Phone, Region: element.Region
        }))
      );
    }

    setRows(Mrows)
  }, [])



  return (
    <Box sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }} height={500}>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        components={{ Toolbar: GridToolbar }}
        style={{ backgroundColor: 'white', height: "100%" }}
      />
    </Box>
  );
}