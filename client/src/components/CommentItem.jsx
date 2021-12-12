
import { useState } from 'react'
import Avatar from './Avatar1'

export default function CommentItem({ data }) {
    // const [display, setDisplay] = useState(display || false)

    return (
        <div className='mtb20 flx '>
            <header>
                <Avatar></Avatar>
            </header>
            <div>
                <div className='flx itemCenter'>
                    <div className='p5 plr10 br10 mlr10 light1'>
                        <p className='hov-cdark pointer hov-bold'>{data?.author}</p>
                        <p>{data?.body}</p>
                    </div>
                    <div className=' textCenter pointer hov-light flxCenter itemCenter br90per mnw30 mnh30 mxw30 mxh30'>
                        ...
                    </div>
                </div>
                <div>
                    <small className='ml10 pointer hov-cdark'>like</small>
                    <small className='ml10 pointer hov-cdark'>reply</small>
                    <small className='ml10 pointer hov-cdark'>{data?.date}</small>
                </div>
            </div>

        </div>
    )
}