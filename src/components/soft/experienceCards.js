import React from 'react';

export default function ExperienceCards(props) {
    const {data} = props;
    return(
        <div className='card experience-card'>
            <div className='valign-middle'>
            <p className='title-4'>{data.jobTitle}@{data.jobPlace}</p>
            <em className='card-date'>"{data.dateStr} - {data.dateEnd}"</em>
            <ul className='card-responsa'>
                {data.resp.map((re, idx) => {
                    return <li key={idx}>
                        {re}
                    </li>
                })}
            </ul>
            </div>
        </div>
    );
}