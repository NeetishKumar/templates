export default forBlock =>{
    const bm = editor.BlockManager
    bm.add("List", {
        label: "List",
        category: "Basic",
        attributes: {
            class: "fa fa-list"
        },
        content: {
            type: "list"
        }
        // content: `
        //     <ul>
        //         <li>List Item 1</li>
        //         <li>List Item 2</li>
        //         <li>List Item 3</li>
        //     </ul>
        // `
    })
}

export default forDomComponent =>{
    const domc = editor.DomComponents

    {
        domc.addType('list', {
            model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                'custom-name': 'List',
                droppable: true,
                traits: defaultModel.prototype.defaults.traits.concat([
                {
                    type: 'select',
                    label: 'Type',
                    name: 'tagName',
                    options: [
                    { value: 'ul', name: 'Unordered' },
                    { value: 'ol', name: 'Ordered' }
                    ],
                    changeProp: 1
                },
                {
                    type: 'select-class',
                    label: 'Style',
                    options: [
                    { value: '', name: 'none' },
                    { value: 'list-unstyled', name: 'Unstyled' },
                    { value: 'list-inline', name: 'Inline' }
                    ]
                }
                ])
            })
            }, {
            isComponent (el) {
                if (el && el.tagName && (el.tagName === 'UL' || el.tagName === 'OL')) {
                return { type: 'list' }
                }
            }
            }),
            view: defaultView
        })
        
        domc.addType('list-item', {
            model: textModel.extend({
            defaults: Object.assign({}, textModel.prototype.defaults, {
                'custom-name': 'Item',
                tagName: 'li',
                draggable: 'ul, ol'
            })
            }, {
            isComponent (el) {
                if (el && el.tagName && el.tagName === 'LI') {
                return { type: 'list-item' }
                }
            }
            }),
            view: textView
        })
    }
}






// export const ListBlock = (bm, label) => {
//     bm.add('list', {
//         label: label,
//         category: 'Basic',
//         attributes: {class:'fa fa-list'},
//         content: {
//             type: 'list'
//         }
//     });
// };

// export default (domc) => {
//     const defaultType = domc.getType('default');
//     const defaultModel = defaultType.model;
//     const defaultView = defaultType.view;

//     domc.addType('list', {
//         model: defaultModel.extend({
//             defaults: Object.assign({}, defaultModel.prototype.defaults, {
//                 'custom-name': 'List',
//                 tagName: 'ul',
//                 resizable: 1,
//                 traits: [
//                     {
//                         type: 'select',
//                         options: [
//                             {value: 'ul', name: 'No'},
//                             {value: 'ol', name: 'Yes'}
//                         ],
//                         label: 'Ordered?',
//                         name: 'tagName',
//                         changeProp: 1
//                     }
//                 ].concat(defaultModel.prototype.defaults.traits)
//             })
//         }, {
//             isComponent: function(el) {
//                 if(el && ['UL','OL'].includes(el.tagName)) {
//                     return {type: 'list'};
//                 }
//             }
//         }),
//         view: defaultView
//     });
// }
