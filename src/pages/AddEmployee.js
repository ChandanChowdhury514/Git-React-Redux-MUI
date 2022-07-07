import React, { useState } from 'react';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';

import { useDispatch } from 'react-redux';
import { empRegister } from '../redux/action';




const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '45ch',
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(62),
            padding: theme.spacing(0)
        }
    }
}))



const AddEmployee = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(
        {
            name: '',
            empName: '',
            email: '',
            phone: '',
            sales: ''
        })

        let navigate = useNavigate();


    const contacts = useSelector((state) => state);

    const classes = useStyles();

    const { empName, email, phone, sales } = user;


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })

    }

    const handleSubmit =  async() => {
        Object.assign(user,{id:shortid.generate()})
        dispatch(empRegister(user));
        //e.preventDefault();
        //console.log(user)
        navigate("/");
       // if (!empName || !email || !phone || !sales) {
            // setError("Please input all input field")
        //   } else {
        //     // dispatch(addUser(state));
            
        //     // setError("");
        //   }
        
    }

    return (
        <div>
            <h1>Add New Staff</h1>
            <form className={classes.root} onSubmit={handleSubmit}>
                <Grid container>

                    <Grid item xs={6}>
                        <TextField
                            variant='outlined'
                            name='empName'
                            label='Emp Name'
                            value={empName}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant='outlined'
                            label='Email'
                            name='email'
                            value={email}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant='outlined'
                            label='Phone'
                            name='phone'
                            value={phone}
                            onChange={handleInputChange}
                        />
                        <TextField
                            variant='outlined'
                            label='Sales'
                            name='sales'
                            value={sales}
                            onChange={handleInputChange}
                        />
                      <br/><br/>
                        <Button
                            
                            style={{ width: "100px", marginLeft:'500px' }}
                            variant='contained'
                            type="submit"
                            color="primary"
                            onChange={handleInputChange}

                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>

        </div>
    )
}

export default AddEmployee