import { requirePropFactory } from '@material-ui/core'
import React from 'react'
import '../css/storyreel.css'
import Story from './Story'

export default function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                profileSrc="https://lh3.googleusercontent.com/ogw/ADGmqu_N4hTd9mcxp_qxRpud7p7CyoGQRYliMZ_8Qlp4=s192-c-mo"
                image={require('../images/couple.jpg')}
                title="My Love"
            />
            <Story
                profileSrc="https://cdn.pixabay.com/photo/2017/07/31/22/45/fashion-2561753_960_720.jpg"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnPFtw8cmFyJFbAQiXx8nBQzaf9k7aECQyDA&usqp=CAU"
                title="Traveling is life"
            />
            <Story
                profileSrc="https://images.indianexpress.com/2018/07/delhi-boy-fb.jpg"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtPEgd9Xtofj14Ltf-O0-WOLth0fpuNAMFDQ&usqp=CAU"
                title="Abroad"
            />
            <Story
                profileSrc="https://i.pinimg.com/originals/a7/d7/eb/a7d7eb472f22e21687acc9d396a3a4b2.jpg"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdN8feNHoodAOlc5s8mnMlxIocgqYrPVK3OQ&usqp=CAU"
                title=""
            />
        </div>
    )
}
