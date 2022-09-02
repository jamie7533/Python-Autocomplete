// import { Tooltip, hoverTooltip } from "@codemirror/view";

// export const wordHover = hoverTooltip((view, pos, side) => {
//   let {from, to, text} = view.state.doc.lineAt(pos)
//   let start = pos, end = pos
//   while (start > from && /\w/.test(text[start - from - 1])) start--
//   while (end < to && /\w/.test(text[end - from])) end++
//   if (start == pos && side < 0 || end == pos && side > 0)
//     return null
//   return {
//     pos: start,
//     end,
//     above: true,
//     create(view) {
//       let dom = document.createElement("div")
//       dom.textContent = text.slice(start - from, end - from)
//       return {dom}
//     }
//   }
// })

// Run this function after the page is loaded
window.addEventListener("load", function () {
    var editor = CodeMirror.fromTextArea(
        document.getElementById('editor'), {
        mode: "python",
        theme: "darcula",
        lineNumbers: true
    });
    editor.on('inputRead', function onChange(editor, input) {
        if (input.text[0] === ';' || input.text[0] === ' ' || input.text[0] === ":") {
            return;
        }
        editor.showHint({
            hint: CodeMirror.pythonHint
        });
    });
});