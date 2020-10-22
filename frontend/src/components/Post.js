import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, MoreHoriz, MoreVert, NearMe, Settings, ThumbUp } from '@material-ui/icons'
import React from 'react'
import '../css/post.css'

export default function Post({ ProfilePic, image, userName, timestamp, message }) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={ProfilePic} className="post_avatar" />
                <div className="post_topInfo">
                    <h3>{userName}</h3>
                    <div>
                        <p>10min</p>
                        <Settings />
                    </div>

                </div>
                <MoreHoriz className="more" />
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt="" />
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutline />
                    <p>Comments</p>
                </div>
                <div className="post_option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post_option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}
