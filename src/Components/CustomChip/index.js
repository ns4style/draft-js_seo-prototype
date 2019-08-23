import React from 'react';
import {SelectionState, Modifier, EditorState} from 'draft-js';
import {Map} from "immutable";
import './index.css';

export default function CustomChip({...props}){

    function removeChip() {
        let targetRange = new SelectionState({
            anchorKey: block.getKey(),
            anchorOffset: 0,
            focusKey: block.getKey(),
            focusOffset: block.getLength(),
        });

        let withoutTeX = Modifier.removeRange(contentState, targetRange, 'backward');
        let resetBlock = Modifier.setBlockType(
            withoutTeX,
            withoutTeX.getSelectionAfter(),
            'unstyled',
        );
        let newState = EditorState.push(ES, resetBlock, 'remove-range');
        onChangeES(EditorState.forceSelection(newState, resetBlock.getSelectionAfter()));
    }

    function changeData() {
        let targetRange = new SelectionState({
            anchorKey: block.getKey(),
            anchorOffset: 0,
            focusKey: block.getKey(),
            focusOffset: block.getLength(),
        });


        let newBlock = Modifier.setBlockData(contentState, targetRange, new Map({
            filter : true
        }));
        console.log('here');
        onChangeES(EditorState.push(ES, newBlock, 'change-block-data'));
    }

    const {block, contentState, ES , onChangeES} = props;
    const data = contentState.getEntity(block.getEntityAt(0)).getData().data;
    console.log(data);
    console.log(props);
    console.log(block.getData());
    return <div className={'chips'}>
        <span onClick={() => changeData()}>{data.label}</span>
        <div className={'chips__close-area'} onClick={() => removeChip()}>
            x
        </div>
    </div>
}



