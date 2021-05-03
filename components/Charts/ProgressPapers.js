import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import MyPieChart from './MyPieChart';


const ProgressPapers=()=> {
  var category = 'papers';
  const[categoryData, setCategoryData] = useState([]);
  var done=0;
  
  useEffect(() => {
    firebase.database().ref(category+'/').on('value', snapshot => {
      const data = snapshot.val();
      const items = data ? Object.keys(data).map(key => ({ key, ...data[key] })) : [];
      setCategoryData(items);
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
export default ProgressPapers
