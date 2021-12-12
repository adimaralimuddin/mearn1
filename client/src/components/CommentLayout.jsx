import axios from "axios";
import React, { useEffect, useMemo, useState, memo } from "react"
import CommentItem from "./CommentItem";

const length = 2
var cur = length

export default memo(function CommentLayout({ display, data, id }) {

    // console.log('com id: ', id)
    // const [cur, setCur] = useState(length)
    const [start, setStart] = useState(data.length - cur)
    const end = data.length

    // console.log('paint')
    // console.log(start)

    function prevHandler() {


        // setStart(data.length - (cur + ))
        setStart(data.length - (cur += length))
    }

    useEffect(() => {
        axios.get('http://localhost:8080/post/comments/' + id)
            .then(res => {
                console.log(res.data)
            })
    }, [])

    if (!display) return null;
    return (
        <div>
            <header>
                <p onClick={prevHandler} className="m fw6 pointer hov-line">See Previews Comments</p>
            </header>
            {
                data.map((comment, index) => {
                    return index >= start && index < end ? <CommentItem data={comment} /> : ''
                })
            }
        </div>
    )
}
)