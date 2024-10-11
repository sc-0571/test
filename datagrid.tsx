import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  greenRow: {
    color: 'green', // 字体颜色改为绿色
  },
  redRow: {
    color: 'red', // 字体颜色改为红色
  },
});

const ReadOnlyTable = () => {
  const classes = useStyles();

  const rows = [
    { id: 1, col1: 'Hello', col2: 'World', status: 'green' },
    { id: 2, col1: 'DataGrid', col2: 'Material UI', status: 'red' },
    { id: 3, col1: 'Foo', col2: 'Bar', status: 'green' },
    { id: 4, col1: 'Baz', col2: 'Qux', status: 'red' },
  ];

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Column 1</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Column 2</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr
            key={row.id}
            className={row.status === 'green' ? classes.greenRow : classes.redRow}
          >
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.col1}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.col2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReadOnlyTable;
