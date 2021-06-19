import React from 'react';
function CodeEditorHeader(props: any) {
    const onDownload = () => {
        props.onDownload();
        console.log('Save clicked');
    }

    const onRun = () => {
        props.onRun();
        console.log('Run clicked');
    }
    return (
        <div className="editor-header w-100">
            <div className="float-right">
                <button className="btn btn-secondary rounded-pill px-3 mx-1" onClick={() => onDownload()}>Download</button>
                <button className="btn btn-primary rounded-pill px-3 mx-1" onClick={() => onRun()}>Run</button>
            </div>
        </div>
    );
}

export default CodeEditorHeader;