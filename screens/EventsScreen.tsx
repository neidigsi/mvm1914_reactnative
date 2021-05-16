import * as React from 'react';
import { useState } from 'react';
import { HScrollView } from 'react-native-head-tab-view';
import { SceneMap } from 'react-native-tab-view';
import TabLayout from '../components/tabs/TabLayout';
import { View } from '../components/Themed';
import Style from '../constants/Style';

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

const JugendorchesterRoute = () => (
  <HScrollView index={2}>
    <View style={Style.tabs.container} />
  </HScrollView>
);

const HorschEmollRoute = () => (
  <HScrollView index={3}>
    <View style={Style.tabs.container} />
  </HScrollView>
);

const JuniorbandRoute = () => (
  <HScrollView index={4}>
    <View style={Style.tabs.container} />
  </HScrollView>
);

const FloetengruppeRoute = () => (
  <HScrollView index={5}>
    <View style={Style.tabs.container} />
  </HScrollView>
);

const FruehfoerderungRoute = () => (
  <HScrollView index={6}>
    <View style={Style.tabs.container} />
  </HScrollView>
);

const EventsScreen = () => {
  const [state, setState] = useState({
    index: 0,
    routes: [
      { key: 'all', title: 'Alle' },
      { key: 'go', title: 'Großes Orchester' },
      { key: 'jo', title: 'Jugendorchester' },
      { key: 'hem', title: 'Horsch e-mol(l)' },
      { key: 'jb', title: 'Juniorband' },
      { key: 'fg', title: 'Flötengruppe' },
      { key: 'ff', title: 'Frühförderung' },
    ]
  });

  const renderScene = SceneMap({
    all: AllRoute,
    go: GrossesOrchesterRoute,
    jo: JugendorchesterRoute,
    hem: HorschEmollRoute,
    jb: JuniorbandRoute,
    fg: FloetengruppeRoute,
    ff: FruehfoerderungRoute
  });

  return (
    <TabLayout
      title="Veranstaltungen"
      scene={renderScene}
      state={state}
      setState={setState}
    />
  );
}

export default EventsScreen;