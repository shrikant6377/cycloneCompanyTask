import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    email: '',
    phone: '',
    DOB: '',
    dateOfEmployement: '',

    city: '',
    pincode: '',
    address1: ''


}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, email, phone, DOB, dateOfEmployement, city, pincode, address1 } = user;

    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date of Employeement</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='dateOfEmployement' value={dateOfEmployement} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date of birth</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='DOB' value={DOB} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Pincode</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='pincode' value={pincode} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address1' value={address1} id="my-input" />

            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Employees</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;