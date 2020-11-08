import React from 'react'
import PropTypes from 'prop-types';
import a from '../images/כותרת/b1.jpg'
import b from '../images/כותרת/b2.jpg'
import c from '../images/כותרת/b3.jpg'
import d from '../images/כותרת/b4.jpg'

export default function Activity({activity}) {
    const {icon,title,description} = activity;
        return (
            <>
            <article className="activity">
                <div className="img-container-activity">
                    <img src={icon} alt="act"/>
                    <div className="img__description"/>
                </div> 
                <p className="activity-name">{title}</p>   
            </article>
            <p>{description}</p>  
            </>                   
        );
    }
    
    Activity.prototype={
        activity:PropTypes.shape({
            name:PropTypes.string.isRequired,
            slug:PropTypes.string.isRequired,
            image:PropTypes.arrayOf(PropTypes.string).isRequired
        })
};