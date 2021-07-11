import React from 'react';
import './web-view.scss';
function WebView(props: any) {
    const renderDocument = props.renderDocument;
    return (
        <React.Fragment>
            <div className="code-editor-container w-100 h-100 py-1">
                <iframe className="web-iframe w-100" srcDoc={renderDocument}></iframe>
            </div>
        </React.Fragment>
    );
}

export default WebView;