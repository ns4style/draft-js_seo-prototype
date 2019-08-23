const blockStylesFn = (block, contentState) => {
    const type = block.getType();
    const blockAfter = contentState.getBlockAfter(block.getKey());
    const blockBefore = contentState.getBlockBefore(block.getKey());

    if (!!blockAfter && blockAfter.getType() === 'atomic'){
        return 'inlineFlex';
    }

    if (!!blockBefore && blockBefore.getType() === 'atomic'){
        return 'inlineFlex';
    }

    if (!!block && block.getType() === 'atomic'){
        return 'inlineFlex';
    }

};


export {
    blockStylesFn
}
