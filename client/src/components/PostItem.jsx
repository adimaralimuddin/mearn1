import { useState } from "react";
import useCommentController from "../controller/comments";
import usePostController from "../controller/post";
import CommentLayout from "./CommentLayout";
import Come from "./comments/come";
import CommentWriter from "./CommentWriter";
import { PostWriterPop } from "./PostWriter";



export default function PostItem({ data }) {

    const feed = usePostController();
    const [showOption, setShowOption] = useState(false);
    const [commentLayoutDispaly, setCommentLayoutDisplay] = useState(true)
    const Com = Come();

    const comments = useCommentController();

    if (!data) return '';

    return (
        <div className=" br10 b white m flxC shadow1">

            {/* post heading */}
            <header className="p10  flxBetween ">
                <span>
                    <h3>{data?.author}</h3>
                    <small className="fss">{data?.date}</small>
                </span>
                <span className="relative">
                    <small onClick={() => setShowOption(!showOption)} className="pointer">option</small>
                    <OptionPop open={showOption} onToggle={() => setShowOption(!showOption)} id={data._id} />
                </span>
            </header>

            {/* post body */}
            <section className="p10 bb gains">
                <p>{data?.body}</p>
            </section>

            {/* post footer */}
            <footer className="p">
                <span className="flxBetween plr10 itemBetween">
                    <small>likes {data?.likes}</small>
                    <small>{data?.comments.length} comments</small>
                </span>
                <section className="flxBetween plr10  ">
                    <p onClick={e => feed.like(data._id, e)} className="pointer hov-bold">like</p>
                    <p onClick={() => setCommentLayoutDisplay(!commentLayoutDispaly)} className="pointer hov-bold">comment</p>
                    <p className="pointer hov-bold">share</p>
                </section>
                {/* <Com.Layout data={data.comments} /> */}
                <CommentLayout id={data._id} data={data.comments} display={commentLayoutDispaly} />
                <CommentWriter onSubmit={(body, e) => comments.submit(data._id, body, e)} />
            </footer>
        </div>
    )
}



export function OptionPop({ id, onToggle, open }) {
    const feed = usePostController();
    const [showOption, setShowOption] = useState(false);

    function onDelete() {
        feed.trash(id)
    }

    function onUpdateHandler(body) {
        feed.update(id, body)
        onToggle()
    }

    if (!open) return null;

    return (
        <div className="white p10 br10 b  shadow1 absolute r0 t20 flxC ">
            <button onClick={onDelete}>delete</button>
            <button onClick={() => setShowOption(!showOption)}>edit</button>
            {showOption && <PostWriterPop
                onClick={onUpdateHandler}
                open={showOption}
                onToggle={() => setShowOption(!showOption)}
                title='edit post'
            />}
        </div>
    )
}