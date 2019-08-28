import React, {useState, useEffect} from 'react';
import CustomDropdown from '../../Components/CustomDropdown';
import {seoTagVariants} from "../../configs/seoTagVariants";
import {EditorState, Modifier, AtomicBlockUtils, SelectionState} from 'draft-js';
import {Map} from "immutable";

function CustomDropdownContainer({...props}) {

    function onChangeSelect(item) {
        const { editorState, onChangeCallback } = props;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'CustomChip',
            'IMMUTABLE',
            {data: {...item}},
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        let newEditorState = EditorState.set(
            editorState,
            {currentContent: contentStateWithEntity},
        );
        let block = null;
        newEditorState = AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, 'CustomChip');
        newEditorState.getCurrentContent().getBlocksAsArray().forEach((itemBlock) => {
            let entity = itemBlock.getEntityAt(0);
            if (!!entity){
                let entityData = contentState.getEntity(itemBlock.getEntityAt(0)).getData();
                if (entityData.data.label === item.label){
                    block = itemBlock;
                }
            }

        });
        if (block){
            let targetRange = new SelectionState({
                anchorKey: block.getKey(),
                anchorOffset: 0,
                focusKey: block.getKey(),
                focusOffset: block.getLength(),
            });


            let newBlock = Modifier.setBlockData(newEditorState.getCurrentContent(), targetRange, new Map({
                ...item,
                isShowModal : false
            }));
            newEditorState = EditorState.push(newEditorState, newBlock, 'change-block-data');
        }
        onChangeCallback(newEditorState);
    }

    return (
        <CustomDropdown
            onChange={(item) => onChangeSelect(item)}
            selectOptions={seoTagVariants}
            placeholder={'Выбрать сеотэг'}
        />
    );
}

export default CustomDropdownContainer;
