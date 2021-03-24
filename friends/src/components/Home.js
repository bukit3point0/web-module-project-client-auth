import React from 'react'
import styled from 'styled-components'

import Login from './Login'

const Page = styled.div`
    margin: 4rem 0 0;
`

const Title = styled.h1`
    font-size: 5rem;
    text-align: center;
`
const Disclaimer = styled.h3`
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0 0; 
`

const Home = () => {
    return (
        <Page>
            <Title>I'll Be There For You</Title>
            <Disclaimer>as long as you sign in first</Disclaimer>
            <Login/>
        </Page>
    )
}

export default Home