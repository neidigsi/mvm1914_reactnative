import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'montserrat-regular': require('../assets/fonts/Montserrat-Regular.ttf'),
          'montserrat-semibold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
          'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
          'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
          'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
