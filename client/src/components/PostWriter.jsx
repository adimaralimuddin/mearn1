import { useRef, useState } from "react"
import { isatty } from "tty";
import usePostController from "../controller/post";
import ReactDom from "react-dom";


export default function PostWriter() {
    const [isAdding, setIsAdding] = useState(false);
    const feed = usePostController();

    function onToggleAdding() {
        console.log('tog')
        setIsAdding(!isAdding)
    }

    return (
        <div className="white m p10 br10 flxC b">
            {
                isAdding && <PostWriterPop onClick={feed.post} open={isAdding} onToggle={onToggleAdding} />
            }
            {/* <header> */}
            <input onClick={onToggleAdding} className="br50 gains" type="text" />
            {/* </header> */}
        </div>
    )
}

export function PostWriterPop({ open, onToggle, onClick, title }) {


    const [data, setData] = useState();
    const bodyRef = useRef();

    function onPost() {
        onClick(bodyRef.current.value)
        onToggle()
    }

    if (!open) return null;

    return ReactDom.createPortal((
        <div className="flxC itemCenter light p10 absolute l0 t0 h100per w100per">
            <div className="flxC white p20 br10 mt50 w100per mxw400 b shadow1">
                <div className="itemCenter flxBetween">
                    <h2>{title || 'create post'}</h2>
                    <button onClick={onToggle} className="br30 p0">x</button>
                </div>
                <textarea ref={bodyRef} className="br10 mtb10" type="text" rows={7} />
                {/* <footer> */}
                <button onClick={onPost} className="fs20 pointer">post</button>
                {/* </footer> */}
            </div>
        </div>
    ),
        document.getElementById('portal')
    )
}