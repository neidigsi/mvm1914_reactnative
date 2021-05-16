import * as React from 'react';
import { useEffect } from 'react';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Text, View } from '../Themed';


const TabBarItem = (props: any) => {
  const colorScheme = useColorScheme();
  useEffect(() => {
    // Update the document title using the browser API
    console.log(props)
    console.log("sbd")
  });

  return (
    <View >
      <Text style={{
        fontSize: 10,
        color: Colors[colorScheme].dark,
        fontFamily: "montserrat-semibold"
      }} >
        asd
      </Text>
    </View>
  );
}

export default TabBarItem;