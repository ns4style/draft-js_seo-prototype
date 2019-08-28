import React from 'react';
import Select from 'react-select';
import './index.css';


const customStyles = {
    menu : (provided) => ({
        ...provided,
        zIndex : 100000
    })
}

function CustomDropdown({selectOptions, onChange, placeholder, value}) {
    return (
        <div className={'selectWrapper'}>
            <Select
                value={!!value ? value : null}
                options={selectOptions}
                onChange={onChange}
                placeholder={placeholder}
                styles={customStyles}
                isClearable={true}
            />
        </div>

    );
}

export default CustomDropdown;
