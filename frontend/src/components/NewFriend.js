import { requirePropFactory } from '@material-ui/core'
import React from 'react'
import '../css/newfriend.css'

export default function NewFriend() {
    return (
        <div className="new-friend">
            <div className="new-friend-top">
                <img src={require('../images/me.jpg')} />
            </div>
            <div className="new-friend-bottom">
                <span>Add Feriend</span>
            </div>
        </div>
    )
}
