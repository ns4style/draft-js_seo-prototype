import React, {useState, useEffect} from 'react';
import CustomDropdown from '../../Components/CustomDropdown';
import {seoTagVariants} from "../../configs/seoTagVariants";
import { EditorState, Modifier, AtomicBlockUtils, } from 'draft-js';

function CustomDropdownContainer({...props}) {

    function onChangeSelect(item) {
        console.log(item);
        const { editorState, onChange } = props;
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity(
            'TOKEN',
            'IMMUTABLE',
            {data: {...item}},
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(
            editorState,
            {currentContent: contentStateWithEntity},
        );
        onChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '))
    }

    return (
        <CustomDropdown
            onChange={(item) => onChangeSelect(item)}
            selectOptions={seoTagVariants}
        />
    );
}

export default CustomDropdownContainer;
