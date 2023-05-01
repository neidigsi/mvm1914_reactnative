
import React from 'react';
import { Text, View } from '../../components/Themed';
import { StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Style from '../../constants/Style';
import useColorScheme from '../../hooks/useColorScheme';
import PostList from '../../components/lists/tabLists/PostList';
import { Tabs, MaterialTabBar } from 'react-native-collapsible-tab-view'
import Header from '../header/Header';
import TabItem from './TabItem';
import Colors from '../../constants/Colors';

const TabLayout = ({ title, state, setState, navigation, posts, loading }: any): JSX.Element => {
    const colorScheme = useColorScheme();

    const renderTabBar = (props: any) => {
        return (
            /*<>
                {state.routes.map((route: any, index: any) => {


                    return (
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
                    );
                })
                }
            </>*/
            <MaterialTabBar
                scrollEnabled={true}
                style={Style.tabs.tabBar}
                TabItemComponent={(props: any) => {
                    console.log(props)
                    return (
                        <TabItem {...props} />
                    )
                }}
                getLabelText={(name) => name}
                renderLabel={({ route, focused, color }: any) => {
                    return (
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
                    )
                }}
                {...props}
            />
            /**<TabBar
                scrollEnabled={true}
                style={Style.tabs.tabBar}
                indicatorStyle={{ opacity: 0, borderColor: Colors[colorScheme].light }}
                renderLabel={({ route, focused, color }) => {
                    return (
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
                    )
                }}
                {...props} />*/
        );
    };

    return <>{
        state !== undefined && state.routes !== undefined && state.routes.length > 0 &&
        <Tabs.Container
            renderHeader={() => <Header title={title} back={false} />}
            renderTabBar={renderTabBar}
        >
            {
                state.routes.map((tab: any) => (
                    <Tabs.Tab key={tab.key} name={tab.title}>
                        <PostList
                            key={tab.key}
                            navigation={navigation}
                            posts={
                                tab.key === 'all' ?
                                    posts :
                                    posts.filter((post: any) => post.categories.includes(tab.title))
                            }
                            loading={loading}
                        />
                    </Tabs.Tab>
                ))
            }
        </Tabs.Container>
    }</>;
}

const styles = StyleSheet.create({
    box: {
        height: 250,
        width: '100%',
    },
    boxA: {
        backgroundColor: 'white',
    },
    boxB: {
        backgroundColor: '#D8D8D8',
    },
    header: {
        width: '100%',
        backgroundColor: '#2196f3',
    },
})


export default TabLayout;