import * as monaco from "monaco-editor";

monaco.editor.create(document.getElementById("container"), {
  language: "yaml",
  value: `
aa:
  a: 123
  b: true
`.trimLeft(),
});

globalThis.monaco = monaco
monaco.languages.getLanguages()
