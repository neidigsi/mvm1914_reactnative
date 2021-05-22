
import React, { useState, useEffect } from 'react';
import { View, Text } from '../components/Themed';
import { SceneMap } from 'react-native-tab-view';
import { API } from "@env";
import TabLayout from '../components/tabs/TabLayout';
import { HScrollView, HFlatList } from 'react-native-head-tab-view'
import Style from '../constants/Style'
import PostListItem from '../components/lists/listItems/PostListItem';
import PostList from '../components/lists/tabLists/PostList';
import { http } from '../networking/HttpRequest';


const GrossesOrchesterRoute = () => (
  <HScrollView index={1}>
    <View style={Style.tabs.container} />
  </HScrollView>
);

const JugendRoute = () => (
  <HScrollView index={2}>
    <View style={Style.tabs.container} />
  </HScrollView>
);

const HorschEmollRoute = () => (
  <HScrollView index={3}>
    <View style={Style.tabs.container} />
  </HScrollView>
);

interface IPost {
  id: number;
  title: string;
  extract: string;
  date: string;
  categories: string[];
  author: string;
  thumbnailLink: string;
}

const PostsScreen = () => {
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
        return <PostList index={0} posts={posts} loading={loading} />;
      case "go":
        return <PostList index={1} posts={posts.filter(post => post.categories.includes("Großes Orchester"))} loading={loading} />;
      case "j":
        return <PostList index={2} posts={posts.filter(post => post.categories.includes("Jugend"))} loading={loading} />;
      case "hem":
        return <PostList index={3} posts={posts.filter(post => post.categories.includes("Horsch e-mol(l)"))} loading={loading} />;
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