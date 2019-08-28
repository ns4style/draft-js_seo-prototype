import React from 'react';
import CustomChipContainer from '../CustomChipContainer';


const blockRenderFn = (block, ES, onChangeES) => {
    if (block.getType() === 'atomic') {
        return {
            component: ({...props}) => <CustomChipContainer {...props} ES={ES} onChangeES={onChangeES}/>,
            editable: false,
            readOnly : true
        };
    }
    return null;
};

export {
    blockRenderFn
}
