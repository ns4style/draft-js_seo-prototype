import React from 'react';
import CustomChip from '../../Components/CustomChip';


const blockRenderFn = (block, ES, onChangeES) => {
    if (block.getType() === 'atomic') {
        return {
            component: ({...props}) => <CustomChip {...props} ES={ES} onChangeES={onChangeES}/>,
            editable: false,
        };
    }
    return null;
};

export {
    blockRenderFn
}
