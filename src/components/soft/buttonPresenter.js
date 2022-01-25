import React from 'react';

import FramedPicture from './framedPicture';

export default function ButtonPresenter(props) {
    return(
        <button className="button-style1" onClick={ props.onClick }>
            <FramedPicture img={ props.img } squared />
            <p>{ props.name }</p>
        </button>
    );
}