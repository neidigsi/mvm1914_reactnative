
import React, { useState, useEffect } from 'react';
import { API } from "@env";
import TabLayout from '../../components/tabs/TabLayout';
import PostList from '../../components/lists/tabLists/PostList';
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
    const data = await http(`${API}/post`, "GET", {})
    return data;
  }

  const renderScene = ({ route, jumpTo }: any) => {
    switch (route.key) {
      case "all":
        return <PostList index={0} navigation={navigation} posts={posts} loading={loading} />;
      case "go":
        return <PostList index={1} navigation={navigation} posts={posts.filter(post => post.categories.includes("Großes Orchester"))} loading={loading} />;
      case "j":
        return <PostList index={2} navigation={navigation} posts={posts.filter(post => post.categories.includes("Jugend"))} loading={loading} />;
      case "hem":
        return <PostList index={3} navigation={navigation} posts={posts.filter(post => post.categories.includes("Horsch e-mol(l)"))} loading={loading} />;
    }
  };

  return (
      <TabLayout
        title="Berichte"
        scene={renderScene}
        state={state}
        setState={setState}
      />
  );
}

export default PostsScreen;