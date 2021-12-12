import Chat from "../pages/Chat"
import Feed from "../pages/Feed"
import Home from "../pages/Home"
import Profile from "../pages/Profile"



export default function useRoute(props) {

    const home = {
        main: {
            path: '/',
            element: <Home />
        }
    }

    const feed = {
        main: {
            path: '/',
            element: <Feed />
        }
    }

    const chat = {
        main: {
            path: '/chat',
            element: <Chat />
        }
    }

    const profile = {
        main: {
            path: '/profile',
            element: <Profile />
        }
    }



    return { home, feed, chat, profile }
}