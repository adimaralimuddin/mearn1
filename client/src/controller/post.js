
import axios from "axios"
import useMainContext from '../MainContext'
const url = 'http://localhost:8080'

export default function usePostController() {

    const { setPost, post: Post } = useMainContext();

    function post(body) {
        const data = {
            body,
            author: 'james',
            date: new Date().toDateString(),
            comments: [],
            likes: 0
        }

        axios.post('http://localhost:8080/feeds/post', data)
            .then(res => {
                console.log(res.data)
                setPost([...Post, res.data])
            })
    }

    function update(id, body) {
        console.log(body)
        axios.put('http://localhost:8080/feeds/post/' + id, { body })
            .then(res => {
                setPost(Post.map(p => {
                    if (p._id == id) {
                        p.body = body
                    }
                    return p
                }))
            })

    }

    function trash(id) {
        axios.delete('http://localhost:8080/feeds/post/' + id)
            .then(res => {
                console.log(Post)
                setPost(Post.filter(p => p._id != id))
            })
    }

    function like(id) {
        axios.put(url + '/feeds/post/like/' + id)
            .then(res => {
                console.log(res.data)
                setPost(Post.map(p => {
                    if (p._id == id) {
                        p.likes += 1
                    }
                    return p;
                }))
            })
    }

    return {
        post,
        trash,
        update,
        like,
    }
}