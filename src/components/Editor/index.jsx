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
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            '|',
            'blockQuote',
            'insertTable',
            'undo',
            'redo',
            'codeBlock',
            'fontColor',
            'fontBackgroundColor',
            'fontFamily',
            'underline',
            'fontSize',
            'highlight',
            'horizontalLine'
      ],
        codeBlock: {
            languages: [
              { language: 'plaintext', label: 'Plain text' },
              { language: 'c', label: 'C' },
              { language: 'cs', label: 'C#' },
              { language: 'cpp', label: 'C++' },
              { language: 'css', label: 'CSS' },
              { language: 'diff', label: 'Diff' },
              { language: 'html', label: 'HTML' },
              { language: 'java', label: 'Java' },
              { language: 'javascript', label: 'JavaScript' },
              { language: 'php', label: 'PHP' },
              { language: 'python', label: 'Python' },
              { language: 'ruby', label: 'Ruby' },
              { language: 'typescript', label: 'TypeScript' },
              { language: 'xml', label: 'XML' }
            ]
          }
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
