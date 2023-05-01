
import React from 'react';
import { Text, View } from '../../components/Themed';
import { Dimensions, ListRenderItem } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Style from '../../constants/Style';
import useColorScheme from '../../hooks/useColorScheme';
//import { CollapsibleHeaderTabView } from 'react-native-tab-view-collapsible-header'
import { Tabs } from 'react-native-collapsible-tab-view'
import { TabBar } from 'react-native-tab-view';
import Header from '../header/Header';
import Colors from '../../constants/Colors';

const initialLayout = { width: Dimensions.get('window').width };

const TabLayout = ({ title, scene, state, setState }: any): JSX.Element => {
    const colorScheme = useColorScheme();

    const handleIndexChange = (i: number) => {
        let newState = { ...state };
        console.log(i)
        newState["index"] = i;
        setState(newState);
    }

    const renderTabBar = (props: any) => {
        return (
            <TabBar
                scrollEnabled={true}
                style={Style.tabs.tabBar}
                indicatorStyle={{ opacity: 0, borderColor: Colors[colorScheme].light }}
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

    return <>{
        state !== undefined && state.routes !== undefined && state.routes.length > 0 &&
        <Tabs.Container
            renderHeader={() => <Header title={title} back={false} />}
        >

        </Tabs.Container>
        /*<CollapsibleHeaderTabView
            renderScrollHeader={() => <Header title={title} back={false} />}
            navigationState={state}
            renderScene={scene}
            onIndexChange={handleIndexChange}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
        />*/
    }</>;
}

export default TabLayout;