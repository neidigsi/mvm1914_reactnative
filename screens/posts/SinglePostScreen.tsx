
import React, { useState, useEffect } from 'react';
import { API } from "@env";
import { http } from '../../networking/HttpRequest';
import { ActivityIndicator, Animated, ImageBackground, ScrollView, Share, TouchableOpacity, useWindowDimensions } from 'react-native';
import { View, Text } from '../../components/Themed';
import { ChevronLeft, Share as ShareIcon } from "react-native-feather";
import Style from '../../constants/Style';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import HTML from 'react-native-render-html';

const HEADER_EXPANDED_HEIGHT = 450;
const HEADER_COLLAPSED_HEIGHT = 60;

interface IPost {
    id: number;
    title: string;
    url: string;
    content: string;
    date: string;
    author: string;
    thumbnailLink: string;
}

const SinglePostScreen = ({ navigation, route }: any) => {
    const [scrollY, setScrollY] = useState(new Animated.Value(0));
    const [loading, setLoading] = useState<boolean>(true);
    const [post, setPost] = useState<IPost>();
    const colorScheme = useColorScheme();

    useEffect(() => {
        setLoading(true);

        const getPost = async () => {
            const postFromServer = await fetchPost();
            setPost(postFromServer);
            setLoading(false);
        }

        getPost();
        setLoading(false);
    }, []);

    // Fetch posts from rest-api
    const fetchPost = async () => {
        setLoading(true);
        if (route.params.id !== undefined && route.params.id !== "") {
            const data = await http(`${API}/post/` + route.params.id, "GET", {});
            return data;
        } else {
            return undefined;
        }
    }

    const onShare = async () => {
        try {
            const result = await Share.share({
                message: post !== undefined && post?.title !== undefined && post.url !== undefined ? "Schau dir mal diesen Bericht des Musikvereins an: " + post?.title + "\n" + post?.url : "",
            });
        } catch (error) {
            alert(error.message);
        }
    };

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    });
    const headerTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    });
    const heroTitleOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    });

    const contentWidth = useWindowDimensions().width;

    return (
        <>
            {
                loading ?
                    <View style={Style.spinnerView[colorScheme]}>
                        <ActivityIndicator color={Colors[colorScheme].dark} />
                    </View> :
                    <View style={Style.singlePost.container[colorScheme]}>
                        <Animated.View style={[Style.singlePost.header[colorScheme], { height: headerHeight }]}>
                            <ImageBackground
                                source={{ uri: post?.thumbnailLink.toString() }}
                                style={Style.singlePost.image}
                                imageStyle={Style.singlePost.imageStyle}>
                                <Animated.View style={[Style.singlePost.smallHeaderBackground[colorScheme], { opacity: headerTitleOpacity }]}>
                                    <TouchableOpacity style={{ flex: 1, width: "10%", alignItems: "center", justifyContent: "center" }} onPress={() => navigation.goBack()} >
                                        <ChevronLeft name="header-back" color={Colors[colorScheme].dark} width="20" height="20" style={{ alginItems: "center", justifyContent: "center" }} />
                                    </TouchableOpacity>
                                    <Animated.Text style={Style.singlePost.smallHeaderText[colorScheme]}>
                                        {
                                            post !== undefined && post.title !== undefined &&
                                            <>
                                                {
                                                    post.title.length > 50 ?
                                                        post.title.slice(0, 50) + '...' :
                                                        post.title
                                                }
                                            </>
                                        }
                                    </Animated.Text>
                                    <TouchableOpacity style={{ flex: 1, width: "10%", alignItems: "center", justifyContent: "center" }} onPress={() => onShare()} >
                                        <ShareIcon name="header-share" color={Colors[colorScheme].dark} width="20" height="20" style={{ alginItems: "center", justifyContent: "center" }} />
                                    </TouchableOpacity>
                                </Animated.View>
                                <Animated.Text style={[Style.singlePost.largeHeaderText[colorScheme], { opacity: heroTitleOpacity }]}>
                                    {
                                        post !== undefined && post.title !== undefined &&
                                        <>
                                            <View style={{ backgroundColor: Colors[colorScheme].transparent, height: 40, width: "100%", alignItems: "center", justifyContent: "center" }}>
                                                <TouchableOpacity style={{ flex: 1, width: "10%", alignItems: "center", justifyContent: "center" }} onPress={() => navigation.goBack()} >
                                                    <ChevronLeft name="back" color={Colors[colorScheme].light} width="40" height="40" style={{ alignItems: "center", justifyContent: "center" }} />
                                                </TouchableOpacity>
                                            </View>
                                            {"\n"}
                                            <Animated.Text style={[Style.singlePost.categories[colorScheme], { opacity: heroTitleOpacity }]}>
                                                {route.params.categories !== undefined && route.params.categories.filter((c: string) => c === "Jugend" || c === "Großes Orchester" || c === "Horsch e-mol(l)").join(" | ")}
                                            </Animated.Text>
                                            {"\n"}
                                            {
                                                post.title.length > 90 ?
                                                    post.title.slice(0, 90) + '...' :
                                                    post.title
                                            }
                                            {"\n\n"}
                                            <Animated.View style={{ width: contentWidth - 20, flexDirection: "row", justifyContent: 'space-around', backgroundColor: Colors[colorScheme].transparent, opacity: heroTitleOpacity }}>
                                                <Text>
                                                    <Animated.Text style={[Style.singlePost.author[colorScheme], { opacity: heroTitleOpacity }]}>
                                                        {post.author !== undefined && post.author}
                                                    </Animated.Text>
                                                    {"\n"}
                                                    <Animated.Text style={[Style.singlePost.date[colorScheme], { opacity: heroTitleOpacity }]}>
                                                        {post.date !== undefined && post.date}
                                                    </Animated.Text>
                                                </Text>
                                                <TouchableOpacity style={{ flex: 1, width: "10%", alignItems: "flex-end", justifyContent: "center" }} onPress={() => onShare()} >
                                                    <ShareIcon name="share" color={Colors[colorScheme].light} width="20" height="20" style={{ alginItems: "center", justifyContent: "center" }} />
                                                </TouchableOpacity>
                                            </Animated.View>
                                        </>
                                    }
                                </Animated.Text>
                            </ImageBackground>
                        </Animated.View>
                        <ScrollView
                            contentContainerStyle={{ paddingTop: HEADER_EXPANDED_HEIGHT }}
                            onScroll={Animated.event(
                                [
                                    {
                                        nativeEvent: {
                                            contentOffset: {
                                                y: scrollY
                                            }
                                        }
                                    }
                                ],
                                { useNativeDriver: false })
                            }
                            scrollEventThrottle={16}>
                            <View style={{ padding: 16 }} >
                                <HTML source={{ html: post !== undefined && post.content !== undefined ? post.content : "<p></p>" }} contentWidth={contentWidth} />
                            </View>
                            <View style={{ height: 40 }}></View>
                        </ScrollView>
                    </View >
            }
        </>
    );
}

export default SinglePostScreen;