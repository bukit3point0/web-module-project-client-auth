import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utilities/axiosWithAuth'

const Page = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 2rem 1rem;
`
const Button = styled.button`
    margin: 0 1rem;
`

const Header = () => {

    const history = useHistory()

    const logIn = () => {
        history.push('/')
    }

    const logout = () => {

            localStorage.removeItem('token')
            window.location.href = '/'

    }

    return (
        <Page>
            <Button onClick={logIn}>Login</Button>
            <Button onClick={logout}>Log Out</Button>
        </Page>
    )
}

export default Header