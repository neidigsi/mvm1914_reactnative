
import { ImageStyle, ViewStyle, ButtonProps } from "react-native";
import Colors from "./Colors";

const transparent = "rgba(0,0,0,0.0)";

export default {
    listItem: {
        item: {
            light: {
                backgroundColor: transparent,
                height: 225,
            } as ViewStyle,
            dark: {
                backgroundColor: transparent,
                height: 225,
            } as ViewStyle,
        },
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "flex-start",
            backgroundColor: Colors.light.dark,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 30,
        } as ViewStyle,
        button: {
            marginLeft: 130,
            marginTop: 60,
            paddingTop: 5,
            paddingBottom: 5,
            height: 30,
            backgroundColor: Colors.light.primary,
            borderRadius: 15,
        } as ViewStyle,
        buttonText: {
            color: Colors.light.dark,
            fontFamily: "montserrat-semibold",
            fontSize: 14,
            textAlign: 'center',
            paddingLeft: 13,
            paddingRight: 13
        } as ViewStyle,
        imageStyle: {
            opacity: 0.6,
            borderRadius: 30
        } as ImageStyle,
        category: {
            fontFamily: "montserrat-semibold",
            fontSize: 14,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 14,
            paddingBottom: 6,
            color: Colors.light.primary,
        } as ViewStyle,
        title: {
            fontFamily: "montserrat-semibold",
            fontSize: 23,
            paddingLeft: 10,
            paddingRight: 10,
            color: Colors.light.light,
        } as ViewStyle,
        author: {
            fontFamily: "montserrat-regular",
            fontSize: 12,
            paddingLeft: 10,
            paddingTop: 60,
            paddingRight: 10,
            color: Colors.light.light,
        } as ViewStyle,
        date: {
            fontFamily: "montserrat-regular",
            fontSize: 12,
            paddingLeft: 10,
            paddingTop: 2,
            paddingRight: 10,
            color: Colors.light.light,
        } as ViewStyle,

    },
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
            elevation: 0
        } as ViewStyle,
        dark: {
            height: 140,
            backgroundColor: Colors.light.light,
            borderColor: Colors.light.light,
            elevation: 0
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
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderColor: Colors.light.light,
            fontColor: Colors.light.dark,
            elevation: 0
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
