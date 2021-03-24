import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Page = styled.div``

const Friends = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/api/friends")
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return(
        <Page>

        </Page>
    )
}

export default Friends