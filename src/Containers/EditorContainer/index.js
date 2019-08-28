import React, {useState, useEffect} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import Draft, {EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.css';
import {editorToolbarConfig} from "../../configs/editorToolbar";
import CustomDropdownContainer from '../CustomDropdownContainer';
import {blockRenderFn} from "./blockRendererFn";
import {blockRenderMap} from "./blockRenderMap";
import {blockStylesFn} from "./blockStylesFn";
import {stateToHTML} from 'draft-js-export-html';
import {convertHTMLOptions} from "./converHTMLOptions";

function EditorContainer() {
    let editorRef = null;

    const [currentES, setES] = useState(
        EditorState.createEmpty()
    );

    // useEffect(() => {
    //     editorRef.focus();
    // }, []);

    const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);
    let readOnly = false;

    currentES.getCurrentContent().getBlocksAsArray().forEach((itemBlock) => {
        let data = itemBlock.getData();
        if (!!data.get('isShowModal')) {
            readOnly = true;
        }

    });


    let TAValue = stateToHTML(currentES.getCurrentContent(), convertHTMLOptions);

    return (
        <>
            <div className={'editorWindow'}>
                <Editor editorClassName='editor'
                        editorRef={ER => editorRef = ER}
                        editorState={currentES}
                        onEditorStateChange={(ES) => setES(ES)}
                        toolbar={editorToolbarConfig}
                        toolbarCustomButtons={[<CustomDropdownContainer onChangeCallback={(ES) => setES(ES)}/>]}
                        blockRendererFn={(block) => blockRenderFn(block, currentES, (ES) => setES(ES))}
                        blockRenderMap={extendedBlockRenderMap}
                        blockStyleFn={(block) => blockStylesFn(block, currentES.getCurrentContent())}
                        onFocus={() => console.log('focus')}
                        readOnly={readOnly}
                />
            </div>
            <div>
                <textarea style={{marginTop : '30px', width : '1000px', height : '100px'}}
                          value={TAValue}
                />

            </div>

        </>
    );
}

export default EditorContainer;
