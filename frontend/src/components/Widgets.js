import { Avatar } from '@material-ui/core'
import { Cake, FiberManualRecord, Search } from '@material-ui/icons'
import React from 'react'
import '../css/widgets.css'
import OnlineUser from './OnlineUser'

export default function Widgets() {
    return (
        <div className="app-widgets">
            <div className="widget">
                <div className="birthdays-container">
                    <p>Birthdays</p>
                    <div className="bithdays-details">
                        <Cake />
                        <div><span style={{ fontWeight: 'bold' }}>Chanuka Sandeepa</span> and 2 others have birthdays today!</div>
                    </div>
                </div>
                <div className="online-users-container">
                    <div className="online-user-header">
                        <p>Contacts</p>
                        <Search />
                    </div>
                    <div className="online-users">
                        <OnlineUser name="Chanuka Sandeepa" />
                        <OnlineUser name="Prasheeth Rathanasekara Madusanka" />
                        <OnlineUser name="Suranga bandara" />
                        <OnlineUser name="Sana S Kumara" />
                    </div>
                </div>
            </div>
        </div>
    )
}
