import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "darkblue",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Notes', 159, 6.0, 24, 4.0),
  createData('Final Advised Price', 237, 9.0, 37, 4.3),
  createData('Override price', 262, 16.0, 24, 6.0),
  createData('Benchmark', 305, 3.7, 67, 4.3),
  createData('Own Rate', 356, 16.0, 49, 3.9),
];

const all_rows = {
  "Final Advised Rates": [{name: "Notes", }, {name: "Final Advised Price"}, {name: "Override price"}, {name: "Benchmark"}, {name: "Own Rate"}, {name: "ADR NOW"}, {name: "Occupancy %"}, {name: "Own Rate"}],
  "Overall Pace": [{name: "Today", }, {name: "-24 hrs"}, {name: "-48 hrs"}, {name: "Benchmark"}, {name: "Own Rate"}],
  "Today vs YearAgo": [{name: "Now Individual Sold", }, {name: "Now Group Sold"}, {name: "Now Allotment Sold"}, {name: "Now Group Tentative Sold"}, {name: "Now Allotment Tentative Sold"}, {name: "Now Total"}, {name: "Year Ago Individual Sold"}, {name: "Year Ago Group Sold"}, {name: "Year Ago Allotment Sold"}],
}

const calendarDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]

export default function CustomizedTables({title}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="Main Yield">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ minWidth: 100 }}>{title}</StyledTableCell>
            {calendarDays.map(day => (
              <StyledTableCell align="right">{day}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {all_rows[title]?.map((row) => (
            <StyledTableRow key={row?.name}>
              <StyledTableCell component="th" scope="row">
                {row?.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row?.calories}</StyledTableCell>
              <StyledTableCell align="right">{row?.fat}</StyledTableCell>
              <StyledTableCell align="right">{row?.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row?.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
