import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import MyPieChart from './MyPieChart';


const ProgressClothes=()=> {
  var category = 'clothes';
  const[categoryData, setcategoryData] = useState([]);
  var done=0;
  
  useEffect(() => {
    firebase.database().ref(category+'/').on('value', snapshot => {
      const data = snapshot.val();
      const items = data ? Object.keys(data).map(key => ({ key, ...data[key] })) : [];
      setcategoryData(items);
    });
  }, []); 

  categoryData.forEach(countProgress);
  function countProgress(categoryData) {
    
  if (categoryData.status == 'done') {
   done=done+1; 
  }
 }
 var categoryLength=categoryData.length;
 
 return (
  <MyPieChart progress={done} categoryLength={categoryLength}/>
 )
}
export default ProgressClothes
