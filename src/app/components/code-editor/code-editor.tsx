import React from 'react';
import AceEditor from "react-ace";
import CodeEditorHeader from './code-editor-header/code-editor-header';
import './code-editor.scss';
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
function CodeEditor(props: any) {

    let userInput = '';
    function onChange(newValue: any) {
        userInput = newValue;
        props.onUserInputChange(newValue);
        console.log("change", newValue);
    }
    const onDownload = () => {
        props.onDownload();
    }
    const onRun = () => {
        props.onRun();
    }
    return (
        <div className="editor-container h-100">
            <div className="d-flex flex-column">
                <CodeEditorHeader onDownload={onDownload} onRun={onRun}></CodeEditorHeader>
                <AceEditor
                    mode="html"
                    theme="monokai"
                    onChange={onChange}
                    name="ace-editor-id"
                    editorProps={{ $blockScrolling: true }}
                />
            </div>

        </div>
    );
}

export default CodeEditor;