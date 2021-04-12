export default (editor) => {
    const blockManager = editor.BlockManager;
    blockManager.add("list", {
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