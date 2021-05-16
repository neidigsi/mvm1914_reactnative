
import React, { useState } from 'react';
import { View, Text } from '../components/Themed';
import { SceneMap } from 'react-native-tab-view';
import TabLayout from '../components/tabs/TabLayout';
import { HScrollView, HFlatList } from 'react-native-head-tab-view'
import Style from '../constants/Style'
import PostListItem from '../components/PostListItem';

const renderItem = (itemInfo: { item: any, index: number }) => {
  const { item, index } = itemInfo
  return (
    <PostListItem title={item.title} author={item.author} date={item.date} categories={item.categories} thumbnailLink={item.thumbnailLink} />
  )
}
const AllRoute = () => (
  <HFlatList
    index={0}
    data={[{
      "id": 3764,
      "title": "Horsch e-mol(l) horscht und spielt wieder!",
      "extract": "Nach einer betriebsbedingt längeren Pause trifft sich unser Anfänger- und Wiedereinsteigerorchester Horsch e-mol(l) wieder online zu Rhythmustrainings und Spielproben. In einer ersten Aktion fand ein virtueller Stammtisch statt, um Neuigkeiten aus dem Verein zu ",
      "date": "2021-05-09 20:16:06",
      "categories": [
          "Horsch e-mol(l)",
          "Probenarbeit"
      ],
      "author": "Andrea Gloss",
      "thumbnailLink": "https://mvm1914.de/wp-content/uploads/2021/05/HEMonline-scaled.jpg"
  }]}
    renderItem={renderItem}
  />
);

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

const PostsScreen = () => {
  const [state, setState] = useState({
    index: 0,
    routes: [
      { key: 'all', title: 'Alle' },
      { key: 'go', title: 'Großes Orchester' },
      { key: 'j', title: 'Jugend' },
      { key: 'hem', title: 'Horsch e-mol(l)' },
    ]
  });

  const renderScene = SceneMap({
    all: AllRoute,
    go: GrossesOrchesterRoute,
    j: JugendRoute,
    hem: HorschEmollRoute
  });

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