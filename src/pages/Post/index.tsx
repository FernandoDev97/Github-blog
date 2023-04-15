import { useCallback, useEffect, useState } from "react";
import { PostHeader } from "./components/PostHeader";
import { IPost } from "../Blog";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { PostContent } from "./components/PostContent";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Post() {
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setLoading(true);

      const response = await api.get(
        `repos/${username}/${repoName}/issues/${id}`
      );
      setPostData(response.data);
    } finally {
      setLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <>
      <PostHeader loading={loading} postData={postData} />
      {!loading && <PostContent content={postData.body} />}
    </>
  );
}
