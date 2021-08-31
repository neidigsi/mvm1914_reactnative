
import { Dimensions, ImageStyle, ViewStyle } from "react-native";
import Colors from "./Colors";

const transparent = "rgba(0,0,0,0.0)";
const { width: SCREEN_WIDTH } = Dimensions.get("screen")


export default {
    eventsPost: {
        footer: {
            alignItems: "center", 
            justifyContent: "center", 
            height: 600, 
            backgroundColor: Colors.light.primary, 
            borderTopLeftRadius: 30, 
            borderTopRightRadius: 30
        } as ViewStyle,
        footerButtonMenu: { 
            alignItems: "center", 
            justifyContent: "center", 
            flexDirection: "row", 
            height: 40, 
            backgroundColor: Colors.light.primary, 
            borderTopLeftRadius: 30, 
            borderTopRightRadius: 30 
    } as ViewStyle,
        maps: {
            height: 500,
            width: SCREEN_WIDTH,
            flex: 1,
            borderRadius: 30
        } as ViewStyle,
        button: {
            flex: 1,
            marginBottom: 0,
            marginRight: 15,
            paddingTop: 5,
            paddingBottom: 5,
            height: 30,
            width: SCREEN_WIDTH / 2,
            backgroundColor: Colors.light.secondary,
            borderRadius: 15,
        } as ViewStyle,
    },
    singlePost: {
        header: {
            light: {
                backgroundColor: Colors.light.light,
                borderColor: Colors.light.light,
                elevation: 0,
                position: 'absolute',
                width: SCREEN_WIDTH,
                top: 0,
                left: 0,
                zIndex: 9999,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                alignItems: "flex-end",
                justifyContent: "flex-end"
            } as ViewStyle,
            dark: {
                backgroundColor: Colors.light.light,
                borderColor: Colors.light.light,
                elevation: 0,
                position: 'absolute',
                width: SCREEN_WIDTH,
                top: 0,
                left: 0,
                zIndex: 9999,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                alignItems: "flex-end",
                justifyContent: "flex-end"
            } as ViewStyle,
        },
        smallHeaderText: {
            light: {
                textAlign: 'center',
                fontSize: 18,
                width: "80%",
                color: Colors.light.dark,
                backgroundColor: transparent,
                fontFamily: "montserrat-semibold",
            } as ViewStyle,
            dark: {
                textAlign: 'center',
                fontSize: 18,
                width: "80%",
                color: Colors.light.dark,
                backgroundColor: transparent,
                fontFamily: "montserrat-semibold",
            } as ViewStyle,
        },
        smallHeaderBackground: {
            light: {
                backgroundColor: Colors.light.light,
                height: 60,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            } as ViewStyle,
            dark: {
                backgroundColor: Colors.light.light,
                height: 60,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                flexDirection: "row"
            } as ViewStyle,
        },
        largeHeaderText: {
            light: {
                textAlign: 'left',
                fontSize: 36,
                color: Colors.light.light,
                position: 'absolute',
                fontFamily: "montserrat-semibold",
                paddingBottom: 10,
                paddingTop: 5,
                marginLeft: 10,
                marginRight: 10
            } as ViewStyle,
            dark: {
                textAlign: 'left',
                fontSize: 36,
                color: Colors.light.light,
                position: 'absolute',
                fontFamily: "montserrat-semibold",
                paddingBottom: 10,
                paddingTop: 5,
                marginLeft: 10,
                marginRight: 10
            } as ViewStyle,
        },
        categories: {
            light: {
                fontSize: 15,
                color: Colors.light.primary,
                fontFamily: "montserrat-semibold",
            } as ViewStyle,
            dark: {
                fontSize: 15,
                color: Colors.light.primary,
                fontFamily: "montserrat-semibold",
            } as ViewStyle,
        },
        author: {
            light: {
                fontSize: 13,
                color: Colors.light.light,
                fontFamily: "montserrat-regular",
            } as ViewStyle,
            dark: {
                fontSize: 13,
                color: Colors.light.light,
                fontFamily: "montserrat-regular",
            } as ViewStyle,
        },
        date: {
            light: {
                fontSize: 13,
                color: Colors.light.light,
                fontFamily: "montserrat-regular",
            } as ViewStyle,
            dark: {
                fontSize: 13,
                color: Colors.light.light,
                fontFamily: "montserrat-regular",
            } as ViewStyle,
        },
        container: {
            light: {
                flex: 1,
                backgroundColor: Colors.light.background,
            } as ViewStyle,
            dark: {
                flex: 1,
                backgroundColor: Colors.dark.background,
            } as ViewStyle,
        },
        image: {
            flex: 1,
            backgroundColor: Colors.light.dark,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            justifyContent: "flex-end",
            flexDirection: "column"
        } as ViewStyle,
        imageStyle: {
            opacity: 0.6,
            resizeMode: "cover",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
        } as ImageStyle,
    },
    listItem: {
        item: {
            light: {
                backgroundColor: transparent,
                height: 225,
                flex: 1
            } as ViewStyle,
            dark: {
                backgroundColor: transparent,
                height: 225,
                flex: 1
            } as ViewStyle,
        },
        image: {
            flex: 1,
            justifyContent: "flex-start",
            backgroundColor: Colors.light.dark,
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10,
            borderRadius: 30,
        } as ViewStyle,
        button: {
            flex: 1,
            marginBottom: 0,
            marginRight: 15,
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
            resizeMode: "cover",
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
        } as any,
        dateWithoutSidePadding: {
            fontFamily: "montserrat-regular",
            fontSize: 12,
            paddingTop: 2,
            color: Colors.light.light,
        } as any,

    },
    transparentView: {
        backgroundColor: transparent
    } as ViewStyle,
    spinnerView: {
        light: {
            height: 200,
            justifyContent: "flex-end"
        } as ViewStyle,
        dark: {
            height: 200,
            justifyContent: "flex-end"
        } as ViewStyle
    },
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
