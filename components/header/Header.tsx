import * as React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Text, View } from '../Themed';
import Style from '../../constants/Style';
import { Menu as MenuIcon, Send, Clock, Share, Info } from "react-native-feather";
import {
    View as PlainView,
    StyleProp,
    ViewStyle,
    TouchableOpacity,
} from 'react-native';
import {
    Menu,
    MenuItem,
    Position,
} from 'react-native-enhanced-popup-menu';

interface ElementToStickProps {
    style?: StyleProp<ViewStyle>;
}

const ElementToStick = React.forwardRef<PlainView, ElementToStickProps>(
    ({ style }, ref) => {
        const colorScheme = useColorScheme();
        return (
            <PlainView ref={ref} >
                <Text><MenuIcon name="bottombar-events" color={Colors[colorScheme].dark} /> {"     "} </Text>
            </PlainView>
        );
    },
)

interface IProps {
    title: String,
    back: Boolean,
}

const Header = ({ title, back }: IProps) => {
    const colorScheme = useColorScheme();
    let elementRef = React.createRef<PlainView>();
    let menuRef: Menu | null = null;

    const setMenuRef: (instance: Menu | null) => void = (ref) => (menuRef = ref);
    const hideMenu = () => menuRef?.hide();
    const showMenu = () => {
        menuRef?.show(elementRef.current, Position.TOP_LEFT);
    };

    const onPress = () => showMenu();

    return (
        <View style={{
            height: 200,
            alignItems: "flex-start",
            justifyContent: "flex-end",
            backgroundColor: Colors[colorScheme].light,
            shadowColor: 'transparent',
            borderColor: Colors[colorScheme].light,
            shadowOpacity: 0,
        }}>
            <View style={{
                width: "100%",
                alignItems: "flex-end",
                backgroundColor: Colors[colorScheme].light,
                shadowOpacity: 0
            }}>
                <TouchableOpacity onPress={onPress}>
                    <Text>
                        {"\n"}
                        <ElementToStick ref={elementRef} />
                        <Menu ref={setMenuRef} style={{
                            borderRadius: 20,
                        }}>
                            <Text style={{ fontSize: 5 }}>{"\n"}</Text>
                            <MenuItem onPress={hideMenu}>
                                <View style={Style.icons[colorScheme]} >
                                    <Text>{"  "}</Text>
                                    <Send name="header-contact" color={Colors[colorScheme].dark} width="18" height="18" />
                                    <Text>{"    "}</Text>
                                    <Text style={Style.standardText[colorScheme]}>
                                        Ansprechpartner
                                </Text>
                                </View>
                            </MenuItem>
                            <MenuItem onPress={hideMenu}>
                                <View style={Style.icons[colorScheme]} >
                                    <Text>{"  "}</Text>
                                    <Clock name="header-times" color={Colors[colorScheme].dark} width="18" height="18" />
                                    <Text>{"    "}</Text>
                                    <Text style={Style.standardText[colorScheme]}>
                                        Probezeiten
                                </Text>
                                </View>
                            </MenuItem>
                            <MenuItem onPress={hideMenu} disabled>
                                <View style={Style.icons[colorScheme]} >
                                    <Text>{"  "}</Text>
                                    <Share name="header-share" color={Colors[colorScheme].dark} width="18" height="18" />
                                    <Text>{"    "}</Text>
                                    <Text style={Style.standardText[colorScheme]}>
                                        Weiterempfehlen
                                </Text>
                                </View>
                            </MenuItem>
                            <MenuItem onPress={hideMenu}>
                                <View style={Style.icons[colorScheme]} >
                                    <Text>{"  "}</Text>
                                    <Info name="header-about" color={Colors[colorScheme].dark} width="18" height="18" />
                                    <Text>{"    "}</Text>
                                    <Text style={Style.standardText[colorScheme]}>
                                        About
                                </Text>
                                </View>
                            </MenuItem>
                        </Menu>
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: "flex-start",
                justifyContent: "flex-end",
                backgroundColor: Colors[colorScheme].light,
            }}>

                <Text style={{
                    fontSize: 40,
                    color: Colors[colorScheme].dark,
                    fontFamily: "montserrat-semibold",
                    paddingLeft: 20,
                    paddingBottom: 40
                }} >
                    {title}
                </Text>
            </View>
        </View>

    );
}

export default Header;