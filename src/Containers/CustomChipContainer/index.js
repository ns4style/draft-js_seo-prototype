import React, {useState} from 'react';
import {SelectionState, Modifier, EditorState} from 'draft-js';
import {Map} from "immutable";
import CustomChip from '../../Components/CustomChip';
import ModalContainer from '../Modal';
import FiltersModal from '../../Components/FiltersModal';
import {filtersVariants} from "../../configs/filtersVariants";


export default class CustomChipContainer extends React.Component{

    removeChip(){
        const {block, contentState, ES, onChangeES} = this.props;
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


    setShowModal(value){
        const {block, contentState, ES, onChangeES} = this.props;
        let targetRange = new SelectionState({
            anchorKey: block.getKey(),
            anchorOffset: 0,
            focusKey: block.getKey(),
            focusOffset: block.getLength(),
        });

        const obj = {};
        block.getData().forEach((v, k) => {
            obj[k] = v
        });


        let newBlock = Modifier.setBlockData(contentState, targetRange, new Map({
            ...obj,
            isShowModal : value
        }));
        onChangeES(EditorState.push(ES, newBlock, 'change-block-data'));
    }

    changeFilter(item) {
        const {block, contentState, ES, onChangeES} = this.props;
        let targetRange = new SelectionState({
            anchorKey: block.getKey(),
            anchorOffset: 0,
            focusKey: block.getKey(),
            focusOffset: block.getLength(),
        });

        const obj = {};
        block.getData().forEach((v, k) => {
            obj[k] = v
        });


        let newBlock = Modifier.setBlockData(contentState, targetRange, new Map({
            ...obj,
            filter : item
        }));
        onChangeES(EditorState.push(ES, newBlock, 'change-block-data'));
    }

    render(){
        const {block, contentState, ES, onChangeES} = this.props;
        const data = block.getData();
        let isShowModal = data.get('isShowModal');

        return <>
            <CustomChip
                data={data}
                changeData={() => this.changeData()}
                onClickHandler={() => this.setShowModal(true)}
                removeChip={() => this.removeChip()}
            />
            <ModalContainer
                isOpen={isShowModal}
            >
                <FiltersModal
                    data={data}
                    onClose={() => this.setShowModal(false)}
                    selectOptions={filtersVariants}
                    onChange={(item) => this.changeFilter(item)}
                />
            </ModalContainer>
        </>
    }
}




