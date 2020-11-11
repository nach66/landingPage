import React, { Component } from 'react'
import Title from './Title';
import Activity from "./Activity";
import a from '../images/reco/kuala.jpg'
import b from '../images/reco/crazy.jpg'
import c from '../images/reco/meni.jpg'
import d from '../images/reco/cold.jpg'

export default class ActivitiesList extends Component {
        state={
            activities: [
                {
                    icon:a,
                    title:"קאלי",
                    description:"היא באמת לוחשת לכלבים! מאז שפטי הייתה אצלנו, קאלי האהובה שלנו לא מפסיקה לדבר. אנחנו שמחים שהיא מצאה את הקול הייחודי שלה ולאחרונה אף התחילה ללמוד צרפתית. היא כלבה מאוד עסוקה בימים אלה."
                },
                {
                    icon:b,
                    title:"סארוול",
                    description:"הבעלים שלי מעולם לא הבינו אותי כמו שצריך. כשפטי הגיעה הרגשתי סופסוף סיכויי לפרוח ולגלות מי עוד אני באמת. סיפרנו צ'יזבאטים לאור ניצוצות הטירוף שבעיניים שלי, והרגשתי שאני באמת באמת פורחת. ארצה גם לציין שפטי מעולם מעולם לא דיווחה על הגופות שנעלמו באותו לילה. פשוט מסרו אותי לאימוץ אחר כך."
                },
                {
                    icon:c,
                    title:" מני האפרוח",
                    description:"לא יודע. אני לא זוכר."
                },
                {
                    icon:d,
                    title:"גור",
                    description:"הייתי מאוד קטן, ופטי הצילה אותי מלהיות קטן."
                }
            ]
        }
        render () {
            return (
                <section className="activitylist">
<br/>
                    <Title title="המלצות לבביות"/> 
                    <div className="cats"/>
                    <div className="activitylist-center">
                        {this.state.activities.map(activity => {
                            return <Activity key={activity.id} activity={activity}/>;
                        })}
                    </div>
                </section>
            );
        }
}
