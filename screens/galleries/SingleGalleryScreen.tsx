
import React, { useState, useEffect } from 'react';
import { API } from "@env";
import { http } from '../../networking/HttpRequest';
import {
    ActivityIndicator,
    Animated,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    useWindowDimensions,
    FlatList,
    Image
} from 'react-native';
import { View } from '../../components/Themed';
import { ChevronLeft} from "react-native-feather";
import Style from '../../constants/Style';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';
import Gallery from 'react-native-awesome-gallery';


const HEADER_EXPANDED_HEIGHT = 450;
const HEADER_COLLAPSED_HEIGHT = 60;

interface IGallery {
    id: string;
    title: string;
    imagePreviewLinks: string[]
    imageLinks: string[]
}


const SingleGalleryScreen = ({ navigation, route }: any) => {
    const [scrollY, setScrollY] = useState(new Animated.Value(0));
    const [loading, setLoading] = useState<boolean>(true);
    const [gallery, setGallery] = useState<IGallery>();
    const [singleImageView, setSingleImageView] = useState<boolean>(false);
    const [imageId, setImageId] = useState<number>(0)
    const colorScheme = useColorScheme();


    useEffect(() => {
        setLoading(true);

        const getGallery = async () => {
            const galleryFromServer = await fetchGallery();
            setGallery(galleryFromServer);
            setLoading(false);
        }
        getGallery();
        setLoading(false);
    }, []);

    // Fetch gallery from rest-api
    const fetchGallery = async () => {
        setLoading(true);
        if (route.params.id !== undefined && route.params.id !== "") {
            const data = await http(`${API}/gallery/` + route.params.id, "GET", {});
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

    const contentWidth = useWindowDimensions().width;

    const renderImages = (item: any) => {
        return (
            <TouchableOpacity onPress={() => {
                setSingleImageView(true);
                setImageId(item.index);
            }
            }>
                <Image
                    source={{ uri: item.item }}
                    style={Style.galleryPost.galleryPreview}
                />
            </TouchableOpacity>
        );
    };

    return (
        <>
            {
                loading ?
                    // Show loading spinner if the event is still loading
                    <View style={Style.spinnerView[colorScheme]}>
                        <ActivityIndicator color={Colors[colorScheme].dark} />
                    </View> :
                    <>
                        {
                            singleImageView && gallery !== undefined ?
                                <Gallery
                                    data={gallery.imageLinks}
                                    initialIndex={imageId}
                                    onSwipeToClose={() => { 
                                        setSingleImageView(false);
                                        setScrollY(new Animated.Value(0));
                                     }}
                                    onIndexChange={(newIndex) => {
                                        setImageId(newIndex);
                                    }}
                                />
                                :
                                // Else show the event
                                <View style={Style.singlePost.container[colorScheme]}>
                                    {/* 
                                        Header
                                    */}
                                    <Animated.View style={[Style.singlePost.header[colorScheme], { height: headerHeight }]}>
                                        <ImageBackground
                                            source={{ uri: gallery?.imageLinks[0].toString() }}
                                            style={Style.singlePost.image}
                                            imageStyle={Style.singlePost.imageStyle}>
                                            {/* 
                                                Small header if the view is scrolled down
                                            */}
                                            <Animated.View style={[Style.singlePost.smallHeaderBackground[colorScheme], { opacity: headerTitleOpacity }]}>
                                                <TouchableOpacity style={{ flex: 1, width: "10%", alignItems: "center", justifyContent: "center" }} onPress={() => navigation.goBack()} >
                                                    <ChevronLeft name="header-back" color={Colors[colorScheme].dark} width="20" height="20" style={{ alginItems: "center", justifyContent: "center" }} />
                                                </TouchableOpacity>
                                                <Animated.Text style={Style.singlePost.smallHeaderText[colorScheme]}>
                                                    {
                                                        gallery !== undefined && gallery.title !== undefined &&
                                                        <>
                                                            {
                                                                gallery.title.length > 50 ?
                                                                    gallery.title.slice(0, 50) + '...' :
                                                                    gallery.title
                                                            }
                                                        </>
                                                    }
                                                </Animated.Text>
                                            </Animated.View>
                                            {/* 
                                                Large header if the view is scrolled up
                                            */}
                                            <Animated.Text style={[Style.singlePost.largeHeaderText[colorScheme], { opacity: heroTitleOpacity }]}>
                                                {
                                                    gallery !== undefined && gallery.title !== undefined &&
                                                    <>
                                                        <View style={{ backgroundColor: Colors[colorScheme].transparent, height: 40, width: "100%", alignItems: "center", justifyContent: "center" }}>
                                                            <TouchableOpacity style={{ flex: 1, width: "10%", alignItems: "center", justifyContent: "center" }} onPress={() => navigation.goBack()} >
                                                                <ChevronLeft name="back" color={Colors[colorScheme].light} width="40" height="40" style={{ alignItems: "center", justifyContent: "center" }} />
                                                            </TouchableOpacity>
                                                        </View>
                                                        {"\n"}
                                                        <Animated.Text style={[Style.singlePost.categories[colorScheme], { opacity: heroTitleOpacity }]}>
                                                            {route.params.year !== undefined && route.params.year}
                                                        </Animated.Text>
                                                        {"\n"}
                                                        {
                                                            gallery.title.length > 90 ?
                                                                gallery.title.slice(0, 90) + '...' :
                                                                gallery.title
                                                        }
                                                        {"\n\n"}
                                                        <Animated.View style={{ width: contentWidth - 20, flexDirection: "row", justifyContent: 'space-around', backgroundColor: Colors[colorScheme].transparent, opacity: heroTitleOpacity }}>
                                                        </Animated.View>
                                                    </>
                                                }
                                            </Animated.Text>
                                        </ImageBackground>
                                    </Animated.View>
                                    {/* 
                                        Body
                                    */}
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

                                        <FlatList
                                            horizontal={false}
                                            numColumns={3}
                                            data={gallery?.imagePreviewLinks}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={renderImages}
                                        />
                                        <View
                                            style={{
                                                height: 55
                                            }}
                                        >
                                        </View>

                                    </ScrollView>
                                </View >
                        }
                    </>
            }
        </>
    );
}

export default SingleGalleryScreen;