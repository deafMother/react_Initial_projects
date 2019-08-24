import './season-display.css';
import React from 'react';


const seasonConfig = {
    summer :{
        text : 'summer',
        iconName: 'sun'
    },
    winter:{
        text: 'winter',
        iconName:'snowflake'
    }
}

const getSeason = (lat,month)=>{

    if(month>3 && month<8){
        return lat > 0 ?'summer':'winter'
    }else{
        return lat > 0 ? 'winter' : 'summer'

    }

}

export default function SeasonDisplay(props) {
    let season = getSeason(props.lat,new Date().getMonth());
    const {text,iconName} = seasonConfig[season];
    return (
        <div className={` season-display  ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1> Season: {text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
}
