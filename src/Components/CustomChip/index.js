import React from 'react';

export default function CustomChip({...props}){
    const {block, contentState} = props;
    const data = contentState.getEntity(block.getEntityAt(0)).getData().data;
    console.log(data);
    return <div>{data.label}</div>
}



