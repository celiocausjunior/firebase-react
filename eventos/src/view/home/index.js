import React, { useState, useEffect } from 'react';
import Card from '../../components/card';
import firebase from '../../config/firebase';
import './home.css';

const Home = () => {

    const [eventResponse, setEventResponse] = useState([]);
    const eventList = [];

    console.log(eventList)


    useEffect(() => {
        firebase.firestore().collection("BigDataSenac2021").get()
            .then(async (snapshot) => {
                await snapshot.docs.forEach(doc => {
                    eventList.push({
                        id: doc.id,
                        ...doc.data
                    })
                })
                setEventResponse(eventList)
            })
    }, []);

    return (
        <>
            <div className="row">
                {eventResponse.map(item => <Card  />)}
            </div>
        </>
    )
}
export default Home;
