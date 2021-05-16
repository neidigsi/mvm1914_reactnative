import * as React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Text, View } from '../Themed';

interface IProps {
  title: String,
  back: Boolean,
}

const Header = ({ title, back } : IProps) => {
  const colorScheme = useColorScheme();

  return (
    <View style={{
      width: "100%",
      height: 300,
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
  );
}

export default Header;