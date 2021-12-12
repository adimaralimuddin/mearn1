import { useRef } from "react";
import Avatar1 from "./Avatar1";


export default function CommentWriter({ onSubmit, onChange = () => { } }) {
    const body = useRef();
    return (
        <div className="flx itemCenter">
            <Avatar1 />
            <input ref={body} onChange={e => onChange(e)} className="flx1 mlr5 br50 gains" type="text" />
            <button onClick={e => onSubmit(body.current.value, e)}>submit</button>
        </div>
    )
}