import * as React from "react";
import Post from "../Post"

interface IPost {
    username: string;
    code: string;
    language: string;
    id: number;
  }

interface Props {
    posts: IPost[]
}


const MainContent: React.FC<Props> = (props) => {
    return (
        <div className="main-content    ">
            <div className="posts-feed">
                {props.posts.map(post => {
                    return <Post username={post.username} language={post.language} id={post.id} code={post.code} />
                })}
            </div>
        </div>
    );
};

export default MainContent;