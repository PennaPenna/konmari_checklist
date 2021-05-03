import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, StatusBar, ScrollView } from 'react-native';
import { Header, Button, Input, ListItem } from 'react-native-elements';
import firebase from '../firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function Clothes({navigation}) {

  const category = 'clothes';
  const[item, setItem] = useState('');
  const[clothes, setClothes] = useState([]);
  
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
  // Load and print list
  useEffect(() => {
    firebase.database().ref(category+'/').on('value', snapshot => {
      const data = snapshot.val();
      const items = data ? Object.keys(data).map(key => ({ key, ...data[key] })) : [];
      setClothes(items);
    });
  }, []);  

  const doneItem = (key) => {
    firebase.database().ref(category+'/'+key).update(
      { 'status': 'done' }
    );
};
  const statusCheck = (status) => {
    if (status=='done') {
      return(1);
    }
    else {
      return(0);
    }
  };

  const saveItem = () => {
    firebase.database().ref(category+'/').push(
      { 'item': item, 'status': 'undone' },
      () => {
      setItem('');
      }
    )
};

  const deleteItem = (key) => {
    firebase.database().ref(category+'/' + key).remove()
  };
 

   // ALERTS 
      // REMOVE
      function showAlert (itemName, key) {
      Alert.alert(
      "REMOVE",
      "Are you sure you want to remove " +itemName+ " from the list?",
   [
     {
       text: "No",
       //onPress: () => Alert.alert("Cancelled"),
       style: "cancel",
     },
     {
      text: "Yes",
      onPress: ()  =>  deleteItem(key),
    },
   ],
   {
     cancelable: true,
   }
 )
  };
        
   return (
    <SafeAreaProvider style={styles.container}>
       <Header
          placement="left"
          leftComponent= {<LeftComponent />}
          //centerComponent={{ text: 'KONMARI CHECKLIST', style: { color: '#fff', paddingTop:10 } }}
          rightComponent={<RightComponent />}
          containerStyle={{ backgroundColor: '#ffeae2', justifyContent: 'space-around' }}
/>
    <ScrollView>
      <View  style={styles.container}>
 <Text style={{fontFamily:'Montez_400Regular', textTransform:'capitalize', fontSize:40, color:'#034755' }}>{category}</Text>

       <View style={styles.listcontainer}>
  {
    clothes.map((l, i) => (
     <View key={i}>
        <ListItem 
        bottomDivider
        containerStyle={styles.row}
        >
        <ListItem.Content style={styles.listItem}>
          <ListItem.CheckBox 
            checked={statusCheck(l.status)}
            onPress={()  =>  doneItem(l.key)}
            checkedColor={'#fac6b2'}/>
          <ListItem.Title style={styles.listTitle}>{l.item}</ListItem.Title>
          <ListItem.Subtitle></ListItem.Subtitle>
        </ListItem.Content>
        <Button type="clear" 
                titleStyle={{fontSize: 10, color:'#ADCED7'}}
                icon={{ type:"material", name: "delete", size: 20, color:'#ADCED7' }} 
                title="Remove"
                onPress={() => showAlert(l.item, l.key) }/>
      </ListItem>
      </View>
      
    ))
  }
</View>
<View style={styles.inputRow}>
   <TextInput
        style={{fontSize: 14, width: '70%', margin:10, borderBottomWidth:1, padding:5}}
        value={item}
        placeholder="More"
        onChangeText={(item) => setItem(item)}
      />
    <View style={styles.button}>
       <Button type="clear" 
        titleStyle={{fontSize: 10, color:'#ADCED7'}}
        icon={{ type:"material", name: "add", size: 20, color:'#ADCED7' }} 
        title="Add" 
        onPress={saveItem}/>
       </View>
       </View>
     <StatusBar style="auto" />
    </View>
    </ScrollView>
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  //justifyContent: 'center',
  paddingTop:20,
  backgroundColor:'#ffeae2', //f5f5f5
  fontFamily: 'Pompiere_400Regular',
 },
 button: {
  width: '20%',
  margin:10,
  },
  listcontainer: { 
   width:'90%',
   marginTop:20,
   fontFamily: 'Pompiere_400Regular',
   //backgroundColor:'#546545',
 },
 infoContainer: {
  width:'85%',
  marginTop:20,
  marginBottom:20,
 },
 info: {
  fontFamily: 'Pompiere_400Regular',
  color:'#034755',
  fontSize:20,
},
 inputRow: { 
  backgroundColor:'#FFFFFF',
  flexDirection: 'row',
  width:'90%',
  color:'#ADCED7',
},
listItem: { 
  //backgroundColor:'#fac6b2',
  flexDirection: 'row',
  justifyContent: 'space-between',
  fontFamily: 'Pompiere_400Regular',
  color:'#034755',
},
row: { 
  //backgroundColor: {doneBgColor}, täytyy tehdä row()-funktiona....
},
listTitle: { 
  textAlign:'left',
  color:'#034755',
  fontFamily: 'Pompiere_400Regular',
  textTransform:'uppercase',
},
});
