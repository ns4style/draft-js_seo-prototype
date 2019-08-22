import React from 'react';
import CustomChip from '../../Components/CustomChip';


const blockRenderFn = (block) => {
    if (block.getType() === 'atomic') {
        return {
            component: CustomChip,
            editable: false,
            props : {
                test : "1243"
            }
        };
    }
    return null;
};

export {
    blockRenderFn
}
