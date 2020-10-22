import React from 'react'
import '../css/Header.css'
import { Search, Home, Flag, Subscriptions, StorefrontOutlined, SupervisedUserCircle, SubscriptionsOutlined, Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'

export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
                <div className="header_input">
                    <Search />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>
            <div className="header_middle">
                <div className="header_option header_option_active">
                    <Home fontSize="large" />
                </div>
                <div className="header_option">
                    <Flag fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlined fontSize="large" />
                </div>
                <div className="header_option">
                    <StorefrontOutlined fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircle fontSize="large" />
                </div>

            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_N4hTd9mcxp_qxRpud7p7CyoGQRYliMZ_8Qlp4=s192-c-mo" />
                    {/* <h4>Chanuka Sandeepa</h4> */}
                </div>
                <IconButton>
                    <Add className="icon" />
                </IconButton>
                <IconButton>
                    <Forum className="icon" />
                </IconButton>
                <IconButton>
                    <NotificationsActive className="icon" />
                </IconButton>
                <IconButton>
                    <ExpandMore className="icon" />
                </IconButton>
            </div>
        </div>
    )
}
