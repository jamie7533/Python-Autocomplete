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