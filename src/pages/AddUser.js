import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';




const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 15,
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



const AddUser = () => {
  // const classes = useStyles();


  const [state, setState] = useState({
    name: "",
    empName: "",
    email: "",
    phone: "",
    sales: "",
  });

  const [error, setError] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const { empName, email, phone, sales } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!empName || !email || !phone || !sales) {
      setError("Please input all input field")
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }

  }

  return (
    <div>
    <section>
    <div className='container'>
      <div className='left'></div>
      <div className='right'>
        <div className='content'>
        <h2>Add Employee</h2>
        {error && <h3 style={{ color: 'red' }}>{error}</h3>}

        <form  noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            className='txtField'
            id="standard-basic"
            label="Employee Name"
            value={empName}
            name="empName"
            type="text"
            onChange={handleInputChange}
          />

          <br />
          <TextField 
          className='txtField'
          id="standard-basic"
            label="Email"
            name="email"
            value={email}
            type='email'
            onChange={handleInputChange} />
          <br />

          <TextField 
          className='txtField'
          id="standard-basic"
            label="Phone"
            name="phone"
            value={phone}
            type='number'
            onChange={handleInputChange} />
          <br />

          <TextField 
          className='txtField'
          id="contained-basic"
          
            label="Sales"
            name="sales"
            value={sales}
            type='number'
            onChange={handleInputChange} />
          <br /><br/>
          <Button
          className="btn"
            style={{ width: "100px" }}
            variant='contained'
            type="submit"
            color="primary"
            onChange={handleInputChange}
            
          >
            Save
          </Button>
        </form>
        
      </div>
    </div>
    </div>
    </section>
    </div>
  )
}

export default AddUser;