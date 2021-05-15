
import React, { useState } from 'react';
import { Text, View } from '../components/Themed';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Style from '../constants/Style';
import useColorScheme from '../hooks/useColorScheme';

const AllRoute = () => (
  <View style={[Style.tabs.container, { backgroundColor: '#ff4081' }]} />
);
const GrossesOrchesterRoute = () => (
  <View style={[Style.tabs.container, { backgroundColor: '#673ab7' }]} />
);
const JugendRoute = () => (
  <View style={[Style.tabs.container, { backgroundColor: '#ff4081' }]} />
);
const HorschEmollRoute = () => (
  <View style={[Style.tabs.container, { backgroundColor: '#673ab7' }]} />
);

export default function PostsScreen() {
  const colorScheme = useColorScheme();
  const [state, setState] = useState({
    index: 0,
    routes: [
      { key: 'all', title: 'Alle' },
      { key: 'go', title: 'Großes Orchester' },
      { key: 'j', title: 'Jugend' },
      { key: 'hem', title: 'Horsch e-mol(l)' },
    ],
  });

  const _handleIndexChange = (i: number) => {
    let newState = { ...state };
    newState["index"] = i;
    setState(newState);
  }

  const _renderTabBar = (props : any) => {
    return (
      <TabBar
        scrollEnabled={true}
        style={Style.tabs.tabBar}
        indicatorStyle={{ opacity: 0 }}
        renderLabel={({ route, focused, color }) => (
          focused ?
            <View style={Style.transparentView}>
              <Text style={Style.tabs.tabItemFocused}>
                {route.title}
              </Text>
              <View style={Style.dot[colorScheme]}>
                <FontAwesomeIcon icon={faCircle} size={6} style={{
                  opacity: 1
                }} />
              </View>
            </View>
            :
            <View style={Style.transparentView}>
              <Text style={Style.tabs.tabItemNotFocused}>
                {route.title}
              </Text>
              <View style={Style.dot[colorScheme]}>
                <FontAwesomeIcon icon={faCircle} size={6} style={{
                  opacity: 0
                }} />
              </View>
            </View>
        )} 
        {...props}>
      </TabBar>
    );
  };

  const _renderScene = SceneMap({
    all: AllRoute,
    go: GrossesOrchesterRoute,
    j: JugendRoute,
    hem: HorschEmollRoute
  });

  return (
    <TabView
      navigationState={state}
      renderScene={_renderScene}
      renderTabBar={_renderTabBar}
      onIndexChange={_handleIndexChange}
    />
  );
}