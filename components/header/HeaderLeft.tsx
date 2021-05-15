import * as React from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Text, View } from '../Themed';
import useCachedResources from '../../hooks/useCachedResources';

interface IProps {
  title: String,
  back: Boolean,
}

export default function HeaderLeft({ title, back } : IProps) {
  const colorScheme = useColorScheme();
  const cachedResources = useCachedResources()

  return (
    <View style={{
      width: "100%",
      height: "100%",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      backgroundColor: Colors[colorScheme].light,
      borderBottomLeftRadius: 40,
    }}>
      <Text style={{ height: 40 }}></Text>
      <Text style={{
        fontSize: 40,
        color: Colors[colorScheme].dark,
        fontFamily: "montserrat-semibold"
      }} >
        {"  "}
        {title}
      </Text>
    </View>
  );
}