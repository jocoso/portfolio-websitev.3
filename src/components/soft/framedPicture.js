import React from 'react';

import classNames from 'classnames';

export default function FramedPicture(props) {
    const shape = classNames({
        'w7': true,
        'circled-framed': props.circled,
        'squared-framed': props.squared,
        'bordered': props.bordered
    });

    const style = {
        width: (props.width)?props.width+'rem':'6rem',
    }
    return(
        <div>
            <img src={ props.img } className={ shape } style={ style } />
            <p>{ props.name }</p>
        </div>
    );
}
