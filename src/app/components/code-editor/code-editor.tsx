import React from 'react';
import AceEditor from "react-ace";
import CodeEditorHeader from './code-editor-header/code-editor-header';
import './code-editor.scss';
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";

function CodeEditor(props: any) {

    let userInput = '';
    function onChange(newValue: any) {
        props.onUserInputChange(newValue);
    }
    const onDownload = () => {
        props.onDownload();
    }
    const onRun = () => {
        props.onRun();
    }
    const theme = props.currentTheme === 'theme-light' ? 'xcode' : 'monokai';
    return (
        <div className="editor-container h-100">
            <div className="d-flex flex-column h-100">
                <CodeEditorHeader onDownload={onDownload} onRun={onRun}></CodeEditorHeader>
                <div className="py-1 h-100 edit-section">
                    <AceEditor
                        mode="html"
                        theme={theme}
                        onChange={onChange}
                        name="ace-editor-id"
                        editorProps={{ $blockScrolling: true }}
                    />
                </div>
            </div>

        </div>
    );
}

export default CodeEditor;