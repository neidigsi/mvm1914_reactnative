
import React, { useState } from 'react';
import { View } from '../components/Themed';
import { SceneMap } from 'react-native-tab-view';
import TabLayout from '../components/tabs/TabLayout';
import { HScrollView } from 'react-native-head-tab-view'
import Style from '../constants/Style'

const AllRoute = () => (
  <HScrollView index={0}>
    <View style={Style.tabs.container} />
  </HScrollView>
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