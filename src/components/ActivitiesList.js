import React, { Component } from 'react'
import Title from './Title';
import Activity from "./Activity";
import a from '../images/reco/kuala.jpg'
import b from '../images/reco/crazy.jpg'
import c from '../images/reco/meni.jpg'
import d from '../images/reco/cold.jpg'
import { FaStarHalf, FaStar, FaStarHalfAlt, FaStarAndCrescent} from 'react-icons/fa';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

export default class ActivitiesList extends Component {
        state={
            reco: [
                {
                    icon:a,
                    name:"קאלי",
                    description:"היא באמת לוחשת לכלבים! מאז שפטי הייתה אצלנו, קאלי האהובה שלנו לא מפסיקה לדבר. אנחנו שמחים שהיא מצאה את הקול הייחודי שלה ולאחרונה אף התחילה ללמוד צרפתית. היא כלבה מאוד עסוקה בימים אלה.",
                    stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
                },
                {
                    icon:b,
                    name:"סארוול",
                    description:"הבעלים שלי מעולם לא הבינו אותי כמו שצריך. כשפטי הגיעה הרגשתי סופסוף סיכויי לפרוח ולגלות מי עוד אני באמת. סיפרנו צ'יזבאטים לאור ניצוצות הטירוף שבעיניים שלי, והרגשתי שאני באמת באמת פורחת. ארצה גם לציין שפטי מעולם מעולם לא דיווחה על הגופות שנעלמו באותו לילה. פשוט מסרו אותי לאימוץ אחר כך.",
                    stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
                },
                {
                    icon:c,
                    name:" מני האפרוח",
                    description:"לא יודע. אני לא זוכר.",
                    stars: [<FaStarHalfAlt/>, <FaStar/>],
                },
                {
                    icon:d,
                    name:"גור",
                    description:"הייתי מאוד קטן, ופטי הצילה אותי מלהיות קטן.",
                    stars: [<FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>, <FaStar/>],
                }
            ]
        }
        render () {
            return (
                <section className="recolist">

                    <h1>המלצות לבביות</h1>
                    <div className="cats"/>
                    <div className="recolist-center">
                        {this.state.reco.map(activity => {
                            return <Activity key={activity.id} activity={activity}/>;
                        })}
                    </div>
                </section>
            );
        }
}
