import React from "react";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import { IoIosQuote } from "react-icons/io";
import { IconContext } from "react-icons";
import {
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
  AiOutlineItalic,
  AiOutlineUnderline,
} from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";
import { BsTypeBold } from "react-icons/bs";
import { GrMonospace } from "react-icons/gr";
import "draft-js/dist/Draft.css";

let lastId = 0;
class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    this.focus = () => this.refs.editor.focus();
    // this.props.onChangeState = (editorState) => this.setState({ editorState });

    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
    this.toggleBlockType = this._toggleBlockType.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.props.onChangeState(newState);
      return true;
    }
    return false;
  }

  _mapKeyToEditorCommand(e) {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(
        e,
        this.props.editorState,
        4 /* maxDepth */
      );
      if (newEditorState !== this.props.editorState) {
        this.props.onChangeState(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  _toggleBlockType(blockType) {
    this.props.onChangeState(
      RichUtils.toggleBlockType(this.props.editorState, blockType)
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.props.onChangeState(
      RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle)
    );
  }

  render() {
    // const { editorState } = this.state;
    const { onChangeState, editorState } = this.props;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();

    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== "unstyled") {
        className += " RichEditor-hidePlaceholder";
      }
    }

    return (
      <>
        <div className="RichEditor-root">
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              customStyleMap={styleMap}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={onChangeState}
              placeholder="Veuillez entrer le contenu principale de l'article ici..."
              ref="editor"
              spellCheck={true}
            />
          </div>
        </div>
      </>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = "RichEditor-styleButton";
    if (this.props.active) {
      className += " RichEditor-activeButton";
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
  { label: "H5", style: "header-five" },
  { label: "H6", style: "header-six" },
  {
    label: (
      <IconContext.Provider value={{ className: "text-edito-block-item" }}>
        <IoIosQuote />
      </IconContext.Provider>
    ),
    style: "blockquote",
    id: 5,
  },
  {
    label: (
      <IconContext.Provider value={{ className: "text-edito-block-item" }}>
        <AiOutlineUnorderedList />
      </IconContext.Provider>
    ),
    style: "unordered-list-item",
    id: 6,
  },
  {
    label: (
      <IconContext.Provider value={{ className: "text-edito-block-item" }}>
        <AiOutlineOrderedList />
      </IconContext.Provider>
    ),
    style: "ordered-list-item",
    id: 7,
  },
  {
    label: (
      <IconContext.Provider value={{ className: "text-edito-block-item" }}>
        <BiCodeBlock />
      </IconContext.Provider>
    ),
    style: "code-block",
    id: 8,
  },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={type.id ? type.id : type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

var INLINE_STYLES = [
  {
    label: (
      <IconContext.Provider value={{ className: "text-edito-block-item" }}>
        <BsTypeBold />
      </IconContext.Provider>
    ),
    style: "BOLD",
    id: 1,
  },
  {
    label: (
      <IconContext.Provider value={{ className: "text-edito-block-item" }}>
        <AiOutlineItalic />
      </IconContext.Provider>
    ),
    style: "ITALIC",
    id: 2,
  },
  {
    label: (
      <IconContext.Provider value={{ className: "text-edito-block-item" }}>
        <AiOutlineUnderline />
      </IconContext.Provider>
    ),
    style: "UNDERLINE",
    id: 3,
  },
  {
    label: (
      <IconContext.Provider value={{ className: "text-edito-block-item" }}>
        <GrMonospace />
      </IconContext.Provider>
    ),
    style: "CODE",
    id: 4,
  },
];

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.id}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default TextEditor;
