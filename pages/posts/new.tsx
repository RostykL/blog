import axios from "axios";
import { GetServerSideProps } from "next";
import { Container } from "../styled/global";
import React, { useState } from "react";
import { Input, Button, Form, Label, TextArea } from "../styled/styledNewPost";
import { useRouter } from "next/router";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length > 0 && body.length > 0) {
      await axios
        .post("https://simple-blog-api.crew.red/posts", {
          title,
          body,
        })
        .finally(() => setMsg("Good job! You have just added a new post"))
        .catch(() => setMsg("Something went wrong, check your informatio!"));
      setTitle("");
      setBody("");
    } else {
      setMsg("Something went wrong, check your informatio!");
    }
  };
  return (
    <Container top={50}>
      <Form onSubmit={(e) => handleSubmission(e)}>
        <Label htmlFor="title">
          title
          <Input
            type="text"
            id={"title"}
            placeholder={"title"}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Label>
        <Label htmlFor="body">
          body
          <TextArea
            id={"body"}
            placeholder={"body"}
            onChange={(e) => setBody(e.target.value)}
          />
        </Label>
        <Button type="submit">CREATE</Button>
        <Button type="button" onClick={() => router.push("/")}>
          BACK
        </Button>
        {msg}
      </Form>
    </Container>
  );
}
