import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';


export default function Progress() {
  const category = 'clothes';
  const[clothes, setClothes] = useState([]);
  var prog=0;
  
useEffect(() => {
    firebase.database().ref(category+'/').on('value', snapshot => {
      const data = snapshot.val();
      const items = data ? Object.keys(data).map(key => ({ key, ...data[key] })) : [];
      setClothes(items);
    });
  }, []);

  clothes.forEach(countProgress);
  function countProgress(clothes) {
    if (clothes.status == 'done') {
    prog=prog+1; 
  }
 } 
 return prog;
}
var progress=Progress();
export {progress};
