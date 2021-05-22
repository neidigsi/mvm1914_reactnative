import * as React from 'react';
import { View, Text } from '../../Themed';
import Style from '../../../constants/Style';
import useColorScheme from '../../../hooks/useColorScheme';
import { ImageBackground, TouchableOpacity } from 'react-native';

const transparent = "rgba(0,0,0,0.0)";

const PostListItem = ({ key, title, date, categories, author, thumbnailLink }: any) => {
    const colorScheme = useColorScheme();

    return (
        <View style={Style.listItem.item[colorScheme]}>
            <ImageBackground
                source={{ uri: thumbnailLink.toString() }}
                style={Style.listItem.image}
                imageStyle={Style.listItem.imageStyle}>
                <Text style={Style.listItem.category}>
                    {categories.filter((c: string) => c === "Jugend" || c === "Großes Orchester" || c === "Horsch e-mol(l)").join(" | ")}
                </Text>
                <Text style={Style.listItem.title}>
                    {title.length > 90 ?
                        title.slice(0, 80) + '...' :
                        title
                    }
                </Text>
                <View style={{ flexDirection: 'row', backgroundColor: transparent, alignItems: "flex-end", flex: 1, marginBottom: 15 }}>
                    <View style={{ backgroundColor: transparent, width: "70%" }}>
                        <Text style={Style.listItem.author}>
                            {author}
                        </Text>
                        <Text style={Style.listItem.date}>
                            {date}
                        </Text>
                    </View>
                    <TouchableOpacity style={Style.listItem.button} >
                        <Text style={Style.listItem.buttonText}>Ansehen</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

export default PostListItem;