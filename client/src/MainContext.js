import { createContext, useContext, useState } from "react";


const MainContext = createContext();

// console.log('maincontext loaded')

export function MainContextProvider(props) {
    // console.log('maincontext render')
    const [db, setDb] = useState();
    const [post, setPost] = useState();

    const value = {
        db,
        setDb,
        post,
        setPost
    }
    return <MainContext.Provider value={value}>
        {props.children}
    </MainContext.Provider>
}

const useMainContext = () => useContext(MainContext)

export default useMainContext;