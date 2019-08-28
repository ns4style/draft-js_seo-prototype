import React from 'react';
import CustomDropdown from '../CustomDropdown';
import './index.css';

export default function FilterModal({...props}) {

    const {data, selectOptions, onChange} = props;
    let currentSelectedFilter = data.get('filter');
    console.log(currentSelectedFilter);
    return <div className={'filtersModal'}>
        <h1 className={'filtersModal__header'}>
            {`Редактирование ${data.get('label')}`}
        </h1>
        <div className={'filtersModal__close'} onClick={() => props.onClose(false)}>
            <span>x</span>
        </div>
        <div className={'filtersModal__dropdown'}>
            <CustomDropdown
                value={!!currentSelectedFilter ? currentSelectedFilter : null}
                placeholder={'Выбрать фильтр'}
                selectOptions={selectOptions}
                onChange={onChange}
            />
        </div>
    </div>
}
