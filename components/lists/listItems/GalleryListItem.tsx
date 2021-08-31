import * as React from 'react';
import { View, Text } from '../../Themed';
import Style from '../../../constants/Style';
import useColorScheme from '../../../hooks/useColorScheme';
import { ImageBackground, TouchableOpacity } from 'react-native';

const transparent = "rgba(0,0,0,0.0)";

const GalleryListItem = ({
    id,
    navigation,
    year,
    title,
    thumbnailLink
}: any) => {
    const colorScheme = useColorScheme();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("SingleGalleryScreen", { id: id })} >
            <View style={Style.listItem.item[colorScheme]}>
                <ImageBackground
                    source={{ uri: thumbnailLink.toString() }}
                    style={Style.listItem.image}
                    imageStyle={Style.listItem.imageStyle}>
                    <Text style={Style.listItem.category}>
                        { year }
                    </Text>
                    <Text style={Style.listItem.title}>
                        {title.length > 90 ?
                            title.slice(0, 80) + '...' :
                            title
                        }
                    </Text>
                    <View style={{ flexDirection: 'row', backgroundColor: transparent, alignItems: "flex-end", flex: 1, marginBottom: 15 }}>
                        <View style={{ backgroundColor: transparent, width: "70%" }}/>
                        <TouchableOpacity style={Style.listItem.button} onPress={() => navigation.navigate("SingleGalleryScreen", { id: id })} >
                            <Text style={Style.listItem.buttonText}>Ansehen</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

export default GalleryListItem;