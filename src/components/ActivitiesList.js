import React, { Component } from 'react'
import Title from './Title';
import Activity from "./Activity";
import {FaUtensils,FaAngellist, FaMapMarked, FaRegSmileBeam} from 'react-icons/fa';

export default class ActivitiesList extends Component {
        state={
            activities: [
                {
                    icon:<FaUtensils/>,
                    title:"מטבח משותף מאובזר וביתי"
                },
                {
                    icon:<FaRegSmileBeam/>,
                    title:"צוות אדיר"
                },
                {
                    icon:<FaMapMarked/>,
                    title:"מיקום מרכזי"
                },
                {
                    icon:<FaAngellist/>,
                    title:"גג עם נוף לכנרת ולהרי הגולן"
                }
            ]
        }
        render () {
            return (
                <section className="activitylist">
                    <Title title="פעילויות מים"/> 
                    <div className="activitylist-center">
                        {this.state.activities.map(activity => {
                            return <Activity key={activity.id} activity={activity}/>;
                        })}
                    </div>
                </section>
            );
        }
}
