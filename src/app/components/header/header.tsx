import React, { useState } from 'react';
import './header.scss';
function Header(props: any) {
    return (
        <React.Fragment>
            <div className="page-header text-left w-100 py-1 px-3">
                <span className="header-title font-weight-bold">
                    Online Html Editor
                </span>
            </div>
        </React.Fragment>
    );
}

export default Header;