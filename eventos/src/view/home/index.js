import React, { useState, useEffect } from 'react';
import Card from '../../components/card';
import firebase from '../../config/firebase';
import './home.css';

const Home = () => {

    const [event, setEvent] = useState([]);
    const eventList = [];

    useEffect(() => {
        firebase.firestore().collection("BigDataSenac2021").get()
            .then(async(snapshot) => {
              await  snapshot.docs.forEach(doc => {
                    console.log(doc.data())
                })
            })
    },[]);
        
    return (
        <div>
            teste
        </div>
    )
}
export default Home;
