import React from 'react'
import ActivitiesList from './ActivitiesList';
import {ActivityConsumer} from '../contextActivities';
import Loading from './Loading';
import Title from './Title';

export default function ActivitiesContainer() {  
    return (
        <>
            <Title title="פעילויות מים"/> 
            <ActivitiesList activities={waterActivities}/>
        </>
    );
}