import React, { useState } from 'react';
// import {} from '../'
function WebView(props: any) {
    const renderDocument = props.renderDocument;
    return (
        <React.Fragment>
            <div className="code-editor-container w-100 h-100">
                <iframe className="h-100 w-100"srcDoc={renderDocument}></iframe>
            </div>
        </React.Fragment>
    );
}

export default WebView;