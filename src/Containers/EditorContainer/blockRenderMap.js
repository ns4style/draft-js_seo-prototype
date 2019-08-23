import Immutable from 'immutable';
import CustomChip from '../../Components/CustomChip'

const blockRenderMap = Immutable.Map({
    'unstyled': {
        element: 'span',
    },
    'atomic' : {
        element : 'span'
    }
});

export {
    blockRenderMap
}
