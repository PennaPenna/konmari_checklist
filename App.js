import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import Clothes from './components/Clothes';
import Books from './components/Books';
import Papers from './components/Papers';
import Miscellaneous from './components/Miscellaneous';
import Mementos from './components/Mementos';
import Info from './components/Info';
import { useFonts, Pompiere_400Regular } from '@expo-google-fonts/pompiere';
import { Montez_400Regular } from '@expo-google-fonts/montez';
import AppLoading from 'expo-app-loading';

const Drawer = createDrawerNavigator();

const App = () => {
  // LOAD FONTS 
  let [fontsLoaded] = useFonts({
    Pompiere_400Regular,
    Montez_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  };

  // DRAWER NAVI
  return (
    <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Home"  
          drawerContentOptions={{
          activeTintColor: '#ffffff',
          activeBackgroundColor: '#fac6b2',
          inactiveTintColor:'#034755',
          }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Clothes" component={Clothes} />
          <Drawer.Screen name="Books" component={Books} />
          <Drawer.Screen name="Papers" component={Papers} />
          <Drawer.Screen name="Miscellaneous" component={Miscellaneous} />
          <Drawer.Screen name="Mementos" component={Mementos} />
          <Drawer.Screen name="Info" component={Info} />
        </Drawer.Navigator>
      </NavigationContainer>
  )
};

export default App;
