export default (editor) =>{
    const domComponent = editor.DomComponent;
    domComponent.addtype("list", {
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