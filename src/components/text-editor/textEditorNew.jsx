import React, { Component } from "react";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "", theme: "snow" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme });
  }
  render() {
    console.log(this.state.editorHtml);
    return (
      <div className="text-editor-main-container">
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={TextEditor.modules}
          formats={TextEditor.formats}
          bounds={".app"}
          placeholder="Veuillez entrer le contenu de votre Article"
          className="text-editor"
        />
      </div>
    );
  }
}

TextEditor.modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ direction: "rtl" }],
    [{ align: [] }],
    [{ script: "sub" }, { script: "super" }, { font: [] }],

    [{ size: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],

    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "rtl",
  "blockquote",
  "list",
  "align",
  "direction",
  "code-block",
  "bullet",
  "color",
  "background",
  "indent",
  "link",
  "image",
  "video",
  "script",
];

export default TextEditor;
