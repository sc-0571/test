import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  greenRow: {
    backgroundColor: 'lightgreen',
  },
  redRow: {
    backgroundColor: 'lightcoral',
  },
});

const ReadOnlyGrid = () => {
  const classes = useStyles();

  const rows = [
    { id: 1, col1: 'Hello', col2: 'World', status: 'green' },
    { id: 2, col1: 'DataGrid', col2: 'Material UI', status: 'red' },
    { id: 3, col1: 'Foo', col2: 'Bar', status: 'green' },
    { id: 4, col1: 'Baz', col2: 'Qux', status: 'red' },
  ];

  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        getRowClassName={(params) =>
          params.row.status === 'green' ? classes.greenRow : classes.redRow
        }
      />
    </div>
  );
};

export default ReadOnlyGrid;
