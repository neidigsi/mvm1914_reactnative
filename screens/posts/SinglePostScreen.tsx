
import React, { useState, useEffect } from 'react';
import { API } from "@env";
import { http } from '../../networking/HttpRequest';
import { Animated, ImageBackground, ScrollView } from 'react-native';
import { View, Text } from '../../components/Themed';
import Style from '../../constants/Style';
import useColorScheme from '../../hooks/useColorScheme';

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
        if (route.params.id !== undefined && route.params.id !== "") {
            const data = await http(`${API}/post/` + route.params.id, "GET", {});
            return data;
        } else {
            return undefined;
        }
    }

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

    return (
        <View style={Style.singlePost.container[colorScheme]}>
            <Animated.View style={[Style.singlePost.header[colorScheme], { height: headerHeight }]}>
                <ImageBackground
                    source={{ uri: post?.thumbnailLink.toString() }}
                    style={Style.singlePost.image}
                    imageStyle={Style.singlePost.imageStyle}>
                    <Animated.View style={[Style.singlePost.smallHeaderBackground[colorScheme], { opacity: headerTitleOpacity }]}>
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
                    </Animated.View>

                    <Animated.Text style={[Style.singlePost.largeHeaderText[colorScheme], { opacity: heroTitleOpacity }]}>
                        {
                            post !== undefined && post.title !== undefined &&
                            <>
                                {
                                    post.title.length > 90 ?
                                        post.title.slice(0, 90) + '...' :
                                        post.title
                                }
                            </>
                        }
                    </Animated.Text>
                </ImageBackground>
            </Animated.View>
            <ScrollView
                contentContainerStyle={[Style.singlePost.scrollContainer[colorScheme], { paddingTop: HEADER_EXPANDED_HEIGHT }]}
                onScroll={Animated.event(
                    [{
                        nativeEvent: {
                            contentOffset: {
                                y: scrollY
                            }
                        }
                    }])
                }
                scrollEventThrottle={16}>
                <Text >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

                Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.

At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</Text>
            </ScrollView>
        </View >
    );
}

export default SinglePostScreen;