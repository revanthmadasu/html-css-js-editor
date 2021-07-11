import React from 'react';
import './header.scss';
import ToggleButton from '../toggle-button/toggle-button';
function Header(props: any) {
    return (
        <React.Fragment>
            <div className="page-header text-left w-100 py-1 px-3">
                <span className="header-title font-weight-bold">
                    Online Html Editor
                </span>
                <div className="float-right">
                    <ToggleButton onChange={props.onThemeChange}></ToggleButton>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;