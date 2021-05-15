import * as React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Text, View } from '../Themed';
import useCachedResources from '../../hooks/useCachedResources';
import { Menu } from "react-native-feather";

export default function HeaderRight() {
    const colorScheme = useColorScheme();
    const cachedResources = useCachedResources();

    return (
        <View style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.0)",
        }}>
            <Text>
                {"\n"}
                <Menu name="bottombar-events" color={Colors[colorScheme].dark} /> {"       "}
            </Text>
        </View>
    );
}