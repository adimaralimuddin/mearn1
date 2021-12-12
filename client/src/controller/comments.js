import axios from "axios"
import { copyFileSync } from "fs"
import useMainContext from "../MainContext";
import usePostController from "./post"


export default function useCommentController() {

    const { setPost, post } = useMainContext();

    function submit(id, body, e) {

        const data = {
            author: 'mike',
            body,
            date: new Date().toDateString(),
            comments: [],
            likes: 0
        }
        axios.post('http://localhost:8080/post/' + id + '/comments', { data })
            .then(res => {
                setPost(post.map(p => {
                    if (id == p._id) {
                        p.comments.push(data)
                    }
                    return p
                }))
            })
    }


    return {
        submit,
    }
}