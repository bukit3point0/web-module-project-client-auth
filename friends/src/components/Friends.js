import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {axiosWithAuth} from '../utilities/axiosWithAuth'

const Page = styled.div``

const Friends = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get('/api/friends')
            .then(res => {
                console.log(res.data)
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    console.log(friends)
    

    return(
        <Page>
            {friends.map(friend => {
                return(
                    <div>
                        {friend.name}
                    </div>
                )
            })}
        </Page>
    )
}

export default Friends