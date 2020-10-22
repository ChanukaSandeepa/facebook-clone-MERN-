import { Avatar } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'
import React from 'react'
import '../css/online-user.css'

export default function OnlineUser({ name }) {
    return (
        <div className="online-user">
            <div className="online-user-profile-pic-container">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu-PPNtRAMk9L9PD8BfyedadmzJLZMH9TA0RqGgbwA=s64-c-mo" style={{
                    marginRight: '10px', width: '30px', height: '30px'
                }} />
                <div className="chat-online-status">
                    <FiberManualRecord />
                </div>
            </div>

            <p>{name}</p>
        </div>
    )
}
