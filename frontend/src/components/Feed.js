import React from 'react'
import '../css/feed.css'
import MessageSender from './MessageSender'
import NewFriendSuggestions from './NewFriendSuggestions'
import Post from './Post'
import StoryReel from './StoryReel'

export default function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                ProfilePic="https://lh3.googleusercontent.com/ogw/ADGmqu_N4hTd9mcxp_qxRpud7p7CyoGQRYliMZ_8Qlp4=s192-c-mo"
                message="My World!"
                image={require('../images/couple2.jpg')}
                userName="Chanuka Sandeepa"
                timestamp={new Date()}
            />
            <NewFriendSuggestions />
            <Post
                ProfilePic="https://lh3.googleusercontent.com/ogw/ADGmqu8Ie_CPlc0IsQfE7F2Jaa6udMbRdhUTy96H6oH4=s192-c-mo"
                message="Hello World! jandfajdf adufhaisdfia fadhofhaodsif oiajdfoijadoijf oiajdofijaodsif oiahoifjaoidf oijadofijadoisf oaijdfoijadiof oiajdfoijado oadfoijad oiajdfoi"
                // image="https://www.filmibeat.com/ph-big/2019/07/ismart-shankar_156195627930.jpg"
                userName="Chanuka Sandeepa"
                timestamp={new Date()}
            />


        </div>
    )
}
