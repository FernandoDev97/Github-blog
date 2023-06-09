import React, { useCallback, useEffect, useState } from "react";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostsListContainer } from "./styles";
import { Post } from "./components/Post";
import { api } from "../../lib/axios";
import { Spinner } from "../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;
export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export const Blog = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, seLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        seLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );
        setPosts(response.data.items);
      } finally {
        seLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {loading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  );
};
