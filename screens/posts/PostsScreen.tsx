
import React, { useState, useEffect } from 'react';
import { API } from "@env";
import TabLayout from '../../components/tabs/TabLayout';
import { http } from '../../networking/HttpRequest';

interface IPost {
  id: number;
  title: string;
  extract: string;
  date: string;
  categories: string[];
  author: string;
  thumbnailLink: string;
}

const PostsScreen = ({ navigation }: any) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [state, setState] = useState({
    index: 0,
    routes: [
      { key: 'all', title: 'Alle' },
      { key: 'go', title: 'Großes Orchester' },
      { key: 'j', title: 'Jugend' },
      { key: 'hem', title: 'Horsch e-mol(l)' },
    ]
  });

  useEffect(() => {
    const getPosts = async () => {
      const postsFromServer = await fetchPosts();
      setPosts(postsFromServer);
      setLoading(false);
    }
    getPosts();
  }, []);

  // Fetch posts from rest-api
  const fetchPosts = async () => {
    const data = await http(`${API}/post`, "GET", {});
    return data;
  }

  return (
      <TabLayout
        title="Berichte"
        state={state}
        navigation={navigation}
        posts={posts}
        loading={loading}
        setState={setState}
      />
  );
}

export default PostsScreen;