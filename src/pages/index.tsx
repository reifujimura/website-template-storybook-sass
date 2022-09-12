import React from "react";
import type { HeadFC } from "gatsby";
import { Button } from "../components";

const IndexPage = () => {
  return (
    <main>
      <h1>Website Template with Gatsby.js Stotybook and Sass</h1>
      <Button onClick={() => alert("Hello, World!")}>Greet</Button>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Website</title>;
