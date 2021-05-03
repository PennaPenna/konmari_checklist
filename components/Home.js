import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProgressClothes from './Charts/ProgressClothes';
import ProgressBooks from './Charts/ProgressBooks';
import ProgressPapers from './Charts/ProgressPapers';
import ProgressMiscellaneous from './Charts/ProgressMiscellaneous';
import ProgressMementos from './Charts/ProgressMementos';


export default function Home ({navigation}) {

 // Header components 
 const LeftComponent = () => {
 return (
   <View>
     <Button  type="clear" 
              icon={{ type:"menu", name: "menu", size: 30, color:'#ffffff' }} 
              onPress={() => navigation.openDrawer()}/>
   </View>
 )
 };
 const RightComponent = () => {
  return (
    <View>
      <Button  type="clear" 
               icon={{ type:"home", name: "home", size: 30, color:'#ffffff' }} 
               onPress={() => navigation.jumpTo('Home')}/>
    </View>
  )
  };


   return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
      <Header
        placement="left"
        leftComponent= {<LeftComponent />}
        //centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={<RightComponent />}
        containerStyle={{
        backgroundColor: '#fbd9cb',
        justifyContent: 'space-around',
  }}
/>

    <View style={styles.container}>   
      <View style={styles.headerContainer}>
        <Text style={styles.header}>KonMari</Text>
      </View>
     <Text style={styles.subhead} onPress={() => navigation.jumpTo('Clothes')}>Clothes</Text>
      <View style={styles.pie}>
      <ProgressClothes /></View>
      <Text style={styles.subhead} onPress={() => navigation.jumpTo('Books')}>Books</Text>
      <View style={styles.pie}>
      <ProgressBooks /></View>
      <Text style={styles.subhead} onPress={() => navigation.jumpTo('Papers')}>Papers</Text>
      <View style={styles.pie}>
      <ProgressPapers /></View>
      <Text style={styles.subhead} onPress={() => navigation.jumpTo('Miscellaneous')}>Miscellaneous</Text>
      <View style={styles.pie}>
      <ProgressMiscellaneous /></View>
      <Text style={styles.subhead} onPress={() => navigation.jumpTo('Mementos')}>Mementos</Text>
      <View style={styles.pie}>
      <ProgressMementos /></View>
     <StatusBar hidden = {true} />
    </View>
    </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  //paddingTop:80,
  backgroundColor:'#ffffff',//'#FEF3EF'
 },
 headerContainer: {
  backgroundColor:'#ffeae2',
  padding:22,
  height:230,
  width:230,
  borderRadius:120,
  margin:15,
  borderColor:'#fbd9cb',
  borderBottomWidth:7,
  borderTopWidth:0,
  borderLeftWidth:2,
  borderRightWidth:2,
 },
 header: { 
  fontFamily:'Montez_400Regular', 
  fontSize:45,
  margin:15,
  paddingTop:40,
  color:'#034755',
},
subhead: { 
  fontFamily:'Montez_400Regular', 
  fontSize:25,
  //margin:15,
  paddingTop:25,
  color:'#034755',
},
pie: { 
  margin:10,
  height:250,
  width:250,
  //paddingTop:40,
},
});
