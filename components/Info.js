import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, StatusBar, ScrollView } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Info ({navigation}) {
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
// Alert // SPARK JOY
        function alertSpark () {
          Alert.alert(
          "This is the basis of the whole KonMari method!",
          " Sparking Joy is a beautiful way to think about what we should and should not keep. Marie Kondo suggests that you hold each item and if that item speaks to your heart and sparks joy, then you should keep it. If it doesn’t… then you get rid of it!",
       [
         {
           text: "OK",
           //onPress: () => Alert.alert("Cancelled"),
           style: "cancel",
         }
       ],
       {
         cancelable: true,
       }
     )
      };

return (
    <SafeAreaProvider>
       <Header
          placement="left"
          leftComponent= {<LeftComponent />}
          //centerComponent={{ text: 'KONMARI CHECKLIST', style: { color: '#fff', paddingTop:10 } }}
          rightComponent={<RightComponent />}
          containerStyle={{ backgroundColor: '#ffeae2', justifyContent: 'space-around' }}
/>
    <ScrollView>
      <View  style={styles.container}>
 <Text style={{fontFamily:'Montez_400Regular', textTransform:'capitalize', fontSize:40, color:'#034755' }}>Info</Text>
 <View style={styles.infoContainer}><Text style={styles.h1}>About KonMari</Text>
 <Text style={styles.info}> 



Clearing out our spaces is difficult. It can be very hard to part with some items, even though we know we should. By following the KonMari checklist order, you will help ease yourself into the difficult decisions.

Marie Kondo suggests a very particular order in which to tackle your home. You are supposed to go through your clothing first and mementos last. The reason for this is that as you progress through the process, you will become better at assessing what is important and what you should keep.{'\n'}

So what is this special order that Marie suggests?{'\n'}

    1. Clothing{'\n'}
    2. Books{'\n'}
    3. Papers{'\n'}
    4. Miscellaneous aka Komono{'\n'}
    5. Mementos
   </Text>
  <Text style={styles.h1}>How to use KonMari Checklist</Text><Text style={styles.info}>
Get all the items that belong to the chosen category in one single pile. Hold each item for a while, to see if it <Text style={{textTransform:'uppercase', textDecorationLine:'underline'}} onPress={() => alertSpark()}> sparks joy</Text>. Then put it to one of three other piles: 
 <Text style={{textTransform:'uppercase'}}> keep, donate</Text> or <Text style={{textTransform:'uppercase'}}>trash.</Text></Text>
 </View>
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
       paddingTop:80,
       backgroundColor:'#ffffff',//'#FEF3EF'
      },
      infoContainer: {
        width:'90%',
        marginTop:20,
        marginBottom:20,
       },
       h1: {
        fontFamily:'Pompiere_400Regular',
        paddingBottom:15,
        paddingTop:25,
        color:'#034755',
        fontSize:20,
        textTransform:'uppercase',
       },
       info: {
        fontFamily: 'Pompiere_400Regular',
        color:'#034755',
        fontSize:20,
      },
     });
     
    