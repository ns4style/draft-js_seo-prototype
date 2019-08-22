import React, {useState, useEffect} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.css';
import {editorToolbarConfig} from "../../configs/editorToolbar";
import CustomDropdownContainer from '../CustomDropdownContainer';
import {blockRenderFn} from "./blockRendererFn";

function EditorContainer() {
    let editorRef = null;

    const [currentES, setES] = useState(
        EditorState.createEmpty()
    );

    useEffect(() => {
        editorRef.focus();
    }, []);


    return (
        <div className={'editorWindow'}>
            <Editor editorClassName='editor'
                    editorRef={ER => editorRef = ER}
                    editorState={currentES}
                    onEditorStateChange={(ES) => setES(ES)}
                    toolbar={editorToolbarConfig}
                    toolbarCustomButtons={[<CustomDropdownContainer/>]}
                    blockRendererFn={blockRenderFn}
            />
        </div>
    );
}

export default EditorContainer;
