import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Page = styled.div`
    margin: 2rem 0 0;
    display: flex;
    justify-content: center;
`
const Form = styled.form``
const User = styled.input``
const Password = styled.input``
const LogInButton = styled.button``

const initialValues = {
    username: "",
    password: ""
}

const Login = () => {

    const [logInInfo, setLogInInfo] = useState(initialValues)
    
    const history = useHistory()

    const handleChange = e => {
        setLogInInfo({
            ...logInInfo,
            [e.target.name]: e.target.value
        })
        console.log(logInInfo)
    }

    const login = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', 
            logInInfo
        )
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.payload)
            history.push('/friends')
        })
        .catch(err => {
            console.log(err, logInInfo)
        })
    }


    return (
        <Page>
            <Form onSubmit={login}>
                <User
                    name="username"
                    type="text"
                    placeholder="username"
                    onChange={handleChange}
                />
                <Password
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                />
                <LogInButton>Log In</LogInButton>
            </Form>
        </Page>
    )
}

export default Login