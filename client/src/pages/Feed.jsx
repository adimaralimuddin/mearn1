import { useEffect } from "react"
import axios from 'axios'
import useMainContext from "../MainContext"
import PostItem from "../components/PostItem";
import PostWriter from "../components/PostWriter";

const url = 'http://localhost:8080/feeds/'


export default function Feed() {

    const { setPost, post } = useMainContext();

    useEffect(() => {
        axios.get(url).then(res => {
            setPost(res.data)
        })
    }, [])

    return (
        <div className="flxC itemCenter">
            <div className="w100per mxw600">
                <PostWriter />

                {
                    post && post.map(p => <PostItem key={p?._id} data={p} />)
                }
            </div>
        </div>
    )
}

