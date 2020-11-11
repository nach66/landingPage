import React from 'react'
import PropTypes from 'prop-types';
import {FaStar} from 'react-icons/fa';

export default function Activity({activity}) {
    const {icon,name,description,stars, s} = activity;
        return (
            <>
                <section className="reco">
                    <article style={{
                        textAlign: 'center'
                    }}>
                        <img src={icon} alt="pic"/>
                        <br/>
                        <h4>{name}</h4>
                    </article>
                    <article>
                        <p>"{description}"</p>
                        <br/>
                        <div>                            
                        {s}
                        {stars}
                        </div>
                    </article>
                </section>
            </>
        );
    }
    
//     Activity.prototype={
//         activity:PropTypes.shape({
//             name:PropTypes.string.isRequired,
//             description:PropTypes.string.isRequired,
//             image:PropTypes.arrayOf(PropTypes.string).isRequired
//         })
// };