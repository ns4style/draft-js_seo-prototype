import React from 'react';
import Select from 'react-select';
import './index.css';


const customStyles = {
    menu : (provided) => ({
        ...provided,
        zIndex : 100000
    })
}

function CustomDropdown({selectOptions, onChange}) {
    return (
        <div className={'selectWrapper'}>
            <Select
                value={null}
                options={selectOptions}
                onChange={onChange}
                placeholder={'Вставить сеотэг'}
                styles={customStyles}
            />
        </div>

    );
}

export default CustomDropdown;
