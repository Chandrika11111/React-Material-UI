import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('	Comprehensive program introduction', "In-depth study of front-end technologies", "Meet our experienced instructors", "Job placement assistance and guidance", "Eligibility criteria"),
  createData('Duration and key objectives',"Explore back-end programming courses", "Profiles of industry experts", "Internship opportunities", "Application process"),
  createData('Skills you will acquire', "Master database management systems","Faculty credentials and achievements", "Networking events and career fairs", "Important dates and deadlines"),
  createData('Unique program features', "Hands-on projects and real-world scenarios", "Learn from guest speakers", "Career counseling and resume building", "Required documents"),
  createData('Benefits of full-stack expertise', "Comprehensive curriculum overview", "Instructor-led workshops and labs","Alumni success stories and testimonials", "Financial aid and scholarship options"),
];

export default function FirstTab() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Program Overview</TableCell>
            <TableCell align="right">Course Details</TableCell>
            <TableCell align="right">Faculty&nbsp;</TableCell>
            <TableCell align="right">Career Pathways&nbsp;</TableCell>
            <TableCell align="right">	Admissions&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}