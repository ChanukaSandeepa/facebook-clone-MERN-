import React from 'react'
import '../css/sidebar.css'
import SidebarRow from './SidebarRow'
import { LocalHospital, EmojiFlags, People, Chat, Storefront, VideoLibrary, ExpandMoreOutlined } from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-content">
                <SidebarRow
                    src="https://avatars3.githubusercontent.com/u/39334952?s=400&u=42061931996f972756c2705384a1fdad1c287885&v=4"
                    title="Chanuka Sandeepa" />
                <SidebarRow
                    Icon={LocalHospital}
                    title="COVID-19 Information Center"
                />
                <SidebarRow
                    title="Pages"
                    Icon={EmojiFlags}
                />
                <SidebarRow
                    title="Friends"
                    Icon={People}
                />
                <SidebarRow
                    title="Messenger"
                    Icon={Chat}
                />
                <SidebarRow
                    title="Marketplace"
                    Icon={Storefront}
                />
                <SidebarRow
                    title="Video"
                    Icon={VideoLibrary}
                />
                <SidebarRow
                    title="Marketplace"
                    Icon={ExpandMoreOutlined}
                />
                <SidebarRow
                    title="Video"
                    Icon={VideoLibrary}
                />
                <SidebarRow
                    title="Marketplace"
                    Icon={ExpandMoreOutlined}
                />
            </div>

        </div>
    )
}
