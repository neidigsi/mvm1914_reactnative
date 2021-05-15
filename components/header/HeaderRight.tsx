import * as React from 'react';
import Colors from '../../constants/Colors';
import Style from '../../constants/Style';
import useColorScheme from '../../hooks/useColorScheme';
import { Text, View } from '../Themed';
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

export default function HeaderRight() {
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
        <TouchableOpacity onPress={onPress} >
            <View style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.0)",
                alignItems: 'center',
            }}>
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
            </View>
        </TouchableOpacity>
    );
}