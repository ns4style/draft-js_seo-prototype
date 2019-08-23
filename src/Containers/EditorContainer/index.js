import React, {useState, useEffect} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import Draft, { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.css';
import {editorToolbarConfig} from "../../configs/editorToolbar";
import CustomDropdownContainer from '../CustomDropdownContainer';
import {blockRenderFn} from "./blockRendererFn";
import {blockRenderMap} from "./blockRenderMap";
import {blockStylesFn} from "./blockStylesFn";

function EditorContainer() {
    let editorRef = null;

    const [currentES, setES] = useState(
        EditorState.createEmpty()
    );

    useEffect(() => {
        editorRef.focus();
    }, []);

    const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);

    return (
        <div className={'editorWindow'}>
            <Editor editorClassName='editor'
                    editorRef={ER => editorRef = ER}
                    editorState={currentES}
                    onEditorStateChange={(ES) => setES(ES)}
                    toolbar={editorToolbarConfig}
                    toolbarCustomButtons={[<CustomDropdownContainer/>]}
                    blockRendererFn={(block) => blockRenderFn(block, currentES, (ES) => setES(ES))}
                    blockRenderMap={extendedBlockRenderMap}
                    blockStyleFn={(block) => blockStylesFn(block, currentES.getCurrentContent())}
            />
        </div>
    );
}

export default EditorContainer;
