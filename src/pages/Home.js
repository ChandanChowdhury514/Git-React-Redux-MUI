import React, { useEffect, useState } from 'react';
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
import { deleteUser, loadUsers } from '../redux/action';
import { useNavigate} from 'react-router-dom';
import { TablePagination, TableSortLabel } from '@material-ui/core';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
   // backgroundColor: theme.palette.common.black,
     
    color: theme.palette.common.black,
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





const Home = () => {
  const userList = [{id:1, empName:'test'}]
  // let dispatch = useDispatch();
  // let navigate = useNavigate();
  const data = useSelector((state) => {
    console.log(state)
  })

  //for Pagination
  // const pages = [5, 10, 25];
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

  //for Sorting the heading
  // const [order, setOrder] = useState();
  // const [orderBy, setOrderBy] = useState();

  // useEffect(() => {
  //   dispatch(loadUsers());
  // }, [])

  // const handleDelete = (id) => {
  //   if (window.confirm("Are you sure wanted to delete the card?")) {
  //     dispatch(deleteUser(id))
  //   }
  // }
 
  // const confirm = () =>{
  //   navigate("/addUser")
  // }
  
  // for pagination
  // const handleChangePage = (event, newPage) =>{
  //    setPage(newPage)
  // }

  //for pagination
  // const handleChangeRowPerPage = event =>{
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0)
  // }

  // for Page by page pagination
  // const TblPagination = () =>(<TablePagination
  //   component = 'div'
  //   page = {page}
  //   rowsPerPageOptions={pages}
  //   rowsPerPage = {rowsPerPage}
  //   count ={users.length}
  //   onChangePage={handleChangePage}
  //   onChangeRowsPerPage={handleChangeRowPerPage}
  // />)

// for next page after end first page

//  function stableSort(array, comparator){
//    const stabilizedThis = array.map((el, index) => [el, index]);
//    stabilizedThis.sort((a,b) =>{
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//    });
//    return  stabilizedThis.map((el) =>el[0]);
//  }

//  function getComparator(order, orderBy) {
//   return order === 'desc'
//   ? (a, b) =>descendingComparator(a, b, orderBy)
//   : (a, b) => -descendingComparator(a, b, orderBy);
//  }

//  function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if(b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
//  }


  
//  const recordsAfterPagingAndSorting = () =>{
//   return stableSort(users, getComparator(order, orderBy)).slice(page*rowsPerPage, (page+1)*rowsPerPage)
//  }

//  // for Sorting
//  const handleSortRequest = cellId =>{
//   const isAsc = orderBy === cellId && order === "asc";
//   setOrder(isAsc? 'desc' : 'asc');
//   setOrderBy(cellId)
//  }


  return (

    <div>
      <div className='btn'>
        {/* <Button variant='contained' 
        color="primary" 
        onClick={confirm}>Back</Button> */}
      </div>

      <TableContainer component={Paper}>
      
        <Table sx={{ minWidth: 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Employee Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Phone</StyledTableCell>

             <StyledTableCell align="center"> 
                <TableSortLabel
                // active = {orderBy === users.id}
                // direction={orderBy === users.id ? order : 'asc'}
                // onClick={() =>{handleSortRequest(users.id)}}
                >
                  Sales
                </TableSortLabel>
               </StyledTableCell> 


              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user) => (          
              <StyledTableRow key={user.id}>
                 {/* <StyledTableCell component="th" scope="row">
                  {user.empName} 
                </StyledTableCell>   */}
                 <StyledTableCell align="center">{user.empName}</StyledTableCell>
                <StyledTableCell align="center">{user.email}</StyledTableCell>
                <StyledTableCell align="center">{user.phone}</StyledTableCell>
                <StyledTableCell align="center">{user.sales}</StyledTableCell> 
                 <StyledTableCell align="center">
                  <ButtonGroup variant="contained"
                    aria-label="contained primary button group">
                   <Button
                      style={{ marginRight: "5px" }}
                      // onClick={() => handleDelete(user.id)}
                      color="secondary">Delete</Button>
                    {/* <Button color="primary">Edit</Button>  */}

                  </ButtonGroup>
                </StyledTableCell> 
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TblPagination /> */}
    </div>
  )
}

export default Home;