import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons'
import React, { useState } from 'react'
import '../css/messageSender.css'

export default function MessageSender() {

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()

        setImageUrl('')
        setInput('')
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_N4hTd9mcxp_qxRpud7p7CyoGQRYliMZ_8Qlp4=s192-c-mo"/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender_input" placeholder="What's on your mind"/>
                    {/* <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL"/> */}
                    <button onClick={formSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender_button">
                <div className="messageSender_option">
                    <Videocam style={{color : 'red'}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibrary style={{color : 'green'}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticon style={{color : 'orange'}}/>
                    <h3>Feeling?Activity</h3>
                </div>
            </div>
        </div>
    )
}
