import React from 'react'
import PropTypes from 'prop-types';
import {FaUtensils,FaAngellist, FaMapMarked, FaRegSmileBeam} from 'react-icons/fa';

export default function Activity({activity}) {
    const {icon,title} = activity;
        return (
            <article className="activity">
                <div className="img-container-activity">
                    <img src={icon} alt="act"/>
                    <div className="img__description">
                        <p>{title}</p>                     
                    </div>
                </div> 
                <p className="activity-name">name</p>   
            </article>
        );
    }
    
    Activity.prototype={
        activity:PropTypes.shape({
            name:PropTypes.string.isRequired,
            slug:PropTypes.string.isRequired,
            image:PropTypes.arrayOf(PropTypes.string).isRequired
        })
};