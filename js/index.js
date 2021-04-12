import loadBlocks from "./blocks"
import loadComponents from "./components"
import { grapesjs } from "./lib/grapes.min"

export default grapesjs.plugins.add('grapesjs-custom-plugin', (editor) => {
    loadBlocks(editor)
    loadComponents(editor)
})