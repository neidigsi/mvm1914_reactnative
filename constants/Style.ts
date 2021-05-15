
import { ViewStyle } from "react-native";
import Colors from "./Colors";

const transparent = "rgba(0,0,0,0.0)";

export default {
    headerStyle: {
        light: {
            borderWidth: 0.5,
            borderTopWidth: 1,
            height: 200,
            backgroundColor: Colors.light.light,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            borderColor: Colors.dark.background
        } as ViewStyle,
        dark: {
            borderWidth: 0.5,
            borderTopWidth: 1,
            height: 200,
            backgroundColor: Colors.light.light,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            borderColor: Colors.dark.background
        } as ViewStyle,
    },
    standardText: {
        light: {
            fontFamily: "montserrat-regular",
            color: Colors.light.dark,
        } as ViewStyle,
        dark: {
            fontFamily: "montserrat-regular",
            color: Colors.dark.dark,
        } as ViewStyle,
    },
    icons: {
        light: {
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            backgroundColor: transparent
        } as ViewStyle,
        dark: {
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            backgroundColor: transparent
        } as ViewStyle,
    },
    screen: {
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        } as ViewStyle,
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        } as ViewStyle,
        separator: {
            marginVertical: 30,
            height: 1,
            width: '80%',
        } as ViewStyle,
    }
};
