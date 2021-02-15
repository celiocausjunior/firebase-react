import React, { useState, useEffect } from 'react';
import Card from '../../components/card';
import firebase from '../../config/firebase';
import './home.css';

const Home = () => {

    const [event, setEvent] = useState([]);
    const eventList = [];

    useEffect(() => {
        firebase.firestore().collection('BigDataSenac2021').get()
            .then(response => {
                response.docs.forEach(doc => {
                    eventList.push({
                        id: doc.id,
                        ...doc.data()
                    })
                })
                setEvent(eventList);
            })
    });

    return (
        <div className="row">
            {event.map(item => <Card key={item.id} id={item.id}  img={item.midia} title={item.title} details={item.details} views={item.views} />)}
        </div>
    );
}
export default Home;
