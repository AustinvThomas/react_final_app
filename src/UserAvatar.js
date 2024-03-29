import { Avatar } from '@mui/material'
import React from 'react'
import './UserAvatar.css'


function UserAvatar(props) {
    return (
        <div id='UserCard'>
        <Avatar sx={{ width: 40, height: 40 }}>{props.image}</Avatar>
        <div id = 'userdetails'>
            <div className='text bold'>
            {props.userName}
            </div>
             <div className='text grey'>
             {props.designation}
            </div>   
            
        </div>
            
    </div>
        
    )
}

export default UserAvatar

