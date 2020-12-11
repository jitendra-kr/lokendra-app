import React from "react";
class Editor extends React.Component {

    CKEditor;
    Editor
    state = {isServer: true};

    componentDidMount() {
        this.CKEditor = require("@ckeditor/ckeditor5-react");
        this.Editor = require('@ckeditor/ckeditor5-custom-build/build/ckeditor');
        this.setState({ isServer: false });

    }

    editorConfiguration = {
        toolbar: [
            // 'heading',
            // '|',
            'bold',
            // 'italic',
            // 'link',
            // 'bulletedList',
            // 'numberedList',
            // '|',
            // '|',
            // 'blockQuote',
            // 'insertTable',
            // 'undo',
            // 'redo',
            // 'codeBlock',
            // 'fontColor',
            // 'fontBackgroundColor',
            // 'fontFamily',
            // 'underline',
            // 'fontSize',
            // 'highlight',
            // 'horizontalLine'
      ]
    };

     onChange = (event, editor) => {
        this.props.sendData(editor.getData());
    }

    render()  {
        return this.CKEditor ? <this.CKEditor.CKEditor
            id = "editor"
            editor={this.Editor}
            data= {this.props.data}
            config={ this.editorConfiguration }
            onChange={this.onChange}
        /> : <div>Editor loading</div>
    };
};

export default Editor;
