import React from 'react';
import './index.css';

export default function CustomChip({...props}){

    const {data, removeChip,onClickHandler } = props;
    let strGenerated = `${data.get('label')}`;
    if (data.get('filter')){
        strGenerated = `${strGenerated} ${data.get('filter').label}`
    }

    return <div className={'chips'}>
        <span onClick={() => onClickHandler()}>{strGenerated}</span>
        <div className={'chips__close-area'} onClick={() => removeChip()}>
            x
        </div>
    </div>
}



