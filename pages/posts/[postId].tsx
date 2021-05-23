import axios from "axios";
import { GetServerSideProps } from "next";
import { Container } from "../../styled/global";

import Post from "../../components/Post/Post";
import React from "react";

import Link from "next/link";

function SinglePost({ post }: any): JSX.Element {
  return (
    <Container>
      <Post key={post.id}>
        <Post.Title>
          <>
            <Link href="/">
              <a>back</a>
            </Link>{" "}
            {post.title}
          </>
        </Post.Title>
        <Post.Body>{post.body}</Post.Body>
      </Post>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: any,
): Promise<any> => {
  let id = ctx.query.postId;
  if (!ctx.req) id = JSON.parse(localStorage.getItem("postId") || "");
  const get_post = await axios.get(
    "https://simple-blog-api.crew.red/posts/" + id
  );
  return {
    props: { post: get_post.data },
  };
};
export default SinglePost;
