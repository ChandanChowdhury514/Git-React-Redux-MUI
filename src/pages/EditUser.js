// import React, { useState } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addUser } from '../redux/action';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: 30,
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '35ch',
//     },
//   },
// }));



// const EditUser = () => {
//   const classes = useStyles();


//   const [state, setState] = useState({
//     name: "",
//     cardnumber: "",
//     ownername: "",
//     expdate: "",
//     cvc: "",
//   });

//   const [error, setError] = useState("");
//   let navigate = useNavigate();
//   let dispatch = useDispatch();

//   const { cardnumber, ownername, expdate, cvc } = state;

//   const handleInputChange = (e) => {
//     let { name, value } = e.target;
//     setState({ ...state, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!cardnumber || !ownername || !expdate || !cvc) {
//       setError("Please input all input field")
//     } else {
//       dispatch(addUser(state));
//       navigate("/");
//       setError("");
//     }

//   }

//   return (

//     <div className='container'>
//       {/* <Button
//         style={{ width: "100px", marginTop: "20px" }}
//         variant='contained'
//         color="secondary"
//         onClick={() => navigate("/")}

//       >
//         Go Back
//       </Button> */}

//       <h2>Edit Card</h2>
//       {error &&  <h3 style={{color: 'red'}}>{error}</h3>}
//       <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>

//         <TextField
//           id="standard-basic"
//           label="CardNumber"
//           value={cardnumber}
//           name = "cardnumber"
//           type="number"
//           onChange={handleInputChange}
//         />

//         <br />
//         <TextField id="standard-basic"
//           label="OwnerName" 
//           name="ownername"
//           value={ownername} 
//           type='text' 
//           onChange={handleInputChange} />
//         <br />

//         <TextField id="standard-basic"
//           label="ExpDate"
//           name="expdate"
//           value={expdate} 
//           type='date' 
//           onChange={handleInputChange} />
//         <br />

//         <TextField id="standard-basic"
//           label="CVC"
//            name="cvc"
//           value={cvc} 
//           type='number' 
//           onChange={handleInputChange} />
//         <br />

//         <Button
//           style={{ width: "100px" }}
//           variant='contained'
//           type="submit"
//           color="primary"
//           onChange={handleInputChange}
//         >
//         Update
//         </Button>
//       </form>





//     </div>
//   )
// }

// export default EditUser;