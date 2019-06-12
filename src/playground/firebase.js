// import * as firebase from 'firebase';

import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA19-vMaXI37CIBMNWBI0cu2NHtOOTvXZw",
    authDomain: "expensify-5b71c.firebaseapp.com",
    databaseURL: "https://expensify-5b71c.firebaseio.com",
    projectId: "expensify-5b71c",
    storageBucket: "expensify-5b71c.appspot.com",
    messagingSenderId: "500043996508",
    appId: "1:500043996508:web:fc346d89c2d9a8ec"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();


  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  

//   database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//     }, (e) => {
//           console.log('Error with pushing data', e);
//     });

  database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 93248462135
  });




//   database.ref('notes/-Lh7042-Nxg7cNoKKXqc').update({
//       body: 'Buy'
//   });

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'react'
// });


//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 3500);
  
//   setTimeout(() => {
//     database.ref().off('value', onValueChange);
//   }, 7000);
  
//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })


//   database.ref().set({
//       name: 'Mani',
//       age: 26,
//       stressLvl: 6,
//       job: {
//           title: 'SDE',
//           company: 'Google'
//       },
//       isSingle: false,
//       location: {
//           city: 'NY',
//           country: 'US'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//     console.log('This failed. ', e);
//   })

// database.ref().update({
//     stressLvl: 9,
//     'job/company': 'Amazon'
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });
    