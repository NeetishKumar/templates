function myPlugin (editor){
    editor.BlockManager.add('list', {
        label: 'List',
        category: "Basic",
        attributes: {
            class: "fa fa-list"
        },
        content: {
            type: "list"
        }
    })

    //let defaultView = getView(editor, 'default')
    
    // editor.DomComponent.addType('list', {
    //     model: defaultModel.extend({
    //         defaults: Object.assign({}, defaultModel.prototype.defaults, {
    //             'custom-name': 'List',
    //             droppable: true,
    //             traits: defaultModel.prototype.defaults.traits.concat([
    //             {
    //                 type: 'select',
    //                 label: 'Type',
    //                 name: 'tagName',
    //                 options: [
    //                 { value: 'ul', name: 'Unordered' },
    //                 { value: 'ol', name: 'Ordered' }
    //                 ],
    //                 changeProp: 1
    //             },
    //             {
    //                 type: 'select-class',
    //                 label: 'Style',
    //                 options: [
    //                 { value: '', name: 'none' },
    //                 { value: 'list-unstyled', name: 'Unstyled' },
    //                 { value: 'list-inline', name: 'Inline' }
    //                 ]
    //             }
    //             ])
    //         })
    //         }, {
    //         isComponent (el) {
    //             if (el && el.tagName && (el.tagName === 'UL' || el.tagName === 'OL')) {
    //             return { type: 'list' }
    //             }
    //         }
    //         }),
    //         view: 'default'
    // })
}


const editor = grapesjs.init({
    container: "#editor",
    fromElement: true,
    width: "auto",
    StorageManager: false,
    plugins: ["gjs-preset-webpage", "grapesjs-custom-code", "grapesjs-custom-plugin", myPlugin],
    pluginsOpts: {
        "gjs-preset-webpage": {},
        "grapesjs-custom-code":{},
        "grapesjs-custom-plugin":{},
    },
});