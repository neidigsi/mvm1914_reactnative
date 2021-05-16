
import { ViewStyle } from "react-native";
import Colors from "./Colors";

const transparent = "rgba(0,0,0,0.0)";

export default {
    transparentView: {
        backgroundColor: transparent
    } as ViewStyle,
    dot: {
        light: {
            justifyContent: "center", 
            alignItems: "center", 
            backgroundColor: transparent
        } as ViewStyle,
        dark: {
            justifyContent: "center", 
            alignItems: "center", 
            backgroundColor: transparent
        } as ViewStyle,
    },
    headerStyle: {
        light: {
            height: 140,
            backgroundColor: Colors.light.light,
            borderColor: Colors.light.light,
            shadowOpacity: 0
        } as ViewStyle,
        dark: {
            height: 140,
            backgroundColor: Colors.light.light,
            borderColor: Colors.light.light,
            shadowOpacity: 0
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
    },
    tabs: {
        container: {
            flex: 1,
            backgroundColor: Colors.light.background
        } as ViewStyle,
        tabBar: {
            flexDirection: 'row',
            backgroundColor: Colors.light.light,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            borderColor: Colors.light.background,
            fontColor: Colors.light.dark,
            position: "fixed"
        } as unknown as ViewStyle,
        tabItemFocused: {
            color: Colors.light.dark,
            fontSize: 12,
            fontFamily: "montserrat-regular",
            alignItems: 'center',
            justifyContent: "center",
            textAlign: 'center',
            margin: 5,
            backgroundColor: transparent
        } as ViewStyle,
        tabItemNotFocused: {
            color: Colors.light.grey,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: "montserrat-regular",
            margin: 5,
            backgroundColor: transparent
        } as ViewStyle,
    }
};
