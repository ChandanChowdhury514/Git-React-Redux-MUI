import React, { useState } from 'react';
//import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { TableSortLabel } from '@material-ui/core';
import { TablePagination, TableSortLabel } from '@material-ui/core';

import { deleteUser } from '../redux/action';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
     backgroundColor: theme.palette.common.black,

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





const ViewEmp = (records, headcells) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => {
    return state.emp.items;
  })

  const pages = [5, 10, 25];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  const handleChangePage = (event, newPage) =>{
        setPage(newPage)
     }

     const handleChangeRowPerPage = event =>{
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0)
       }


       const TblPagination = () =>(<TablePagination
            component = 'div'
            page = {page}
            rowsPerPageOptions={pages}
            rowsPerPage = {rowsPerPage}
            count ={records.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowPerPage}
          />)

          const recordsAfterPagingAndSorting = () =>{
            return records.slice(page*rowsPerPage, (page+1)*rowsPerPage)
          }

  const confirm = () => {
    navigate("/addUser")
  }


  const handleDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete the card?")) {
      dispatch(deleteUser(id))
    }
  }

  // const {empName, email, phone,sales, id} = emp;
  return (

    <div>
    <h2>View All Staff</h2>
      <div className='btn'>
        <Button variant='contained'
          color="primary"
          onClick={confirm}
        >Back</Button>
      </div>
      <br/>
    
      <TableContainer component={Paper}>
        
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Employee Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>
              <StyledTableCell align="center"> Sales</StyledTableCell>
              {/* <TableSortLabel
                // active = {orderBy === users.id}
                // direction={orderBy === users.id ? order : 'asc'}
                // onClick={() =>{handleSortRequest(users.id)}}
                >
                  Sales
                </TableSortLabel> */}



              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((empData) => (
              <StyledTableRow key={empData.id}>

                <StyledTableCell align="center">{empData.empName}</StyledTableCell>
                <StyledTableCell align="center">{empData.email}</StyledTableCell>
                <StyledTableCell align="center">{empData.phone}</StyledTableCell>
                <StyledTableCell align="center">{empData.sales}</StyledTableCell>
                <StyledTableCell align="center">
                  <ButtonGroup variant="contained"
                    aria-label="contained primary button group">
                    <Button
                      style={{ marginRight: "5px" }}
                      onClick={() => handleDelete(empData.id)}
                      color="secondary">Delete</Button>
                    {/* <Button color="primary">Edit</Button> */}

                  </ButtonGroup>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       <TblPagination /> 
    </div>
  )
}


export default ViewEmp;