import React, { useState } from 'react';
import './toggle-button.scss';
function ToggleButton(props: any) {
    const checked = props.checked;
    const onChange = () => {
        props.onChange(!checked);
    }
    return (
        <React.Fragment>
            <label className="switch">
                <input type="checkbox" onClick={onChange} checked={checked}/>
                <span className="slider round"></span>
            </label>
        </React.Fragment>
    );
}

export default ToggleButton;