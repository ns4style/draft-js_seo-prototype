const convertHTMLOptions = {
    defaultBlockTag: 'span',
    blockRenderers: {
        atomic: (block) => {
            let data = block.getData();
            let strData = '';
            block.getData().forEach((v, k, index) => {
                if (k === 'isShowModal') {
                    return;
                }

                if (k === 'filter') {
                    strData = `${strData} ${k} : ${v.label};`
                    return;
                }

                strData = `${strData} ${k} : ${v};`
            });
            return `<SEOTAG> ${strData}</SEOTAG>`;
        },
    },
};


export {
    convertHTMLOptions
}
