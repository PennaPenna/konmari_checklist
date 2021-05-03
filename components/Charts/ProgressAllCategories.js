import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import MyPieChartCategories from './MyPieChartCategories';


const ProgressAllCategories=()=> {
  
  var categories = ['clothes', 'books', 'papers', 'miscellaneous', 'mementos'];
  var categoryDone=0;
  const[categoryData, setCategoryData] = useState([]);
  var done=0;

  function countProgress() {
    for (i = 0; i < categories.length; ++i) {

    useEffect(() => {
        firebase.database().ref(categories[i]+'/').on('value', snapshot => {
          const data = snapshot.val();
          const items = data ? Object.keys(data).map(key => ({ key, ...data[key] })) : [];
          setCategoryData(items);
        });
      }, []); 
  if (categoryData.status == 'done') {
   done=done+1; 
  }
  if (categoryData.length==done) {
    categoryDone=categoryDone+1;
 }console.log(categoryDone) }
return categoryDone

};
var categoryDone=countProgress();
 //var progressArray = new Array(clothes.length, done);
 return (
  <MyPieChartCategories progress={categoryDone} />
 )
}
export default ProgressAllCategories
