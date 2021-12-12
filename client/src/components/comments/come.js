import { useState } from "react";
import CommentItem from "../CommentItem";


export default function Come() {
    const length = 2
    var cur = length;

    function Layout({ data }) {

        const [start, setStart] = useState(data.length - cur)
        const end = data.length

        console.log('paint')
        console.log(cur)

        function prevHandler() {
            setStart(data.length - (cur += length))
        }

        return (
            <div>
                <button onClick={prevHandler}>preve</button>
                {
                    data && data.map((comment, index) => {
                        return index >= start && index < end ? <CommentItem data={comment} /> : ''
                    })
                }
            </div>
        )
    }

    // const Layout = <div>
    //     <button onClick={prevHandler}>preve</button>
    //     {
    //         data && data.map((comment, index) => {
    //             return index >= start && index < end ? <CommentItem data={comment} /> : ''
    //         })
    //     }
    // </div>

    return { Layout };

    // return {
    //     Layout,
    // }
} 