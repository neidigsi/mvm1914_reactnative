import * as React from 'react';
import { View } from '../../components/Themed';
import { SceneMap } from 'react-native-tab-view';
import { HScrollView } from 'react-native-head-tab-view'
import TabLayout from '../../components/tabs/TabLayout';
import Style from '../../constants/Style';

const FirstRoute = () => (
    <HScrollView index={0}>
        <View style={Style.tabs.container} />
    </HScrollView>
);

const SecondRoute = () => (
    <HScrollView index={1}>
        <View style={Style.tabs.container} />
    </HScrollView>
);

const GalleriesScreen = () => {
    const [state, setState] = React.useState({
        index: 0,
        routes: [
            { key: 'first', title: '2021' },
            { key: 'second', title: '2020' },
        ]
    });

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });

    return (
        <TabLayout
            title="Galerie"
            scene={renderScene}
            state={state}
            setState={setState}
        />
    );
}

export default GalleriesScreen;