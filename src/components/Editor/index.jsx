import React from "react";


class Editor extends React.Component {

    CKEditor;
    ClassicEditor;
    state = {isServer: true};

    componentDidMount() {
        this.CKEditor = require("@ckeditor/ckeditor5-react");
        this.ClassicEditor = require("@ckeditor/ckeditor5-build-classic");
        this.setState({ isServer: false });

    }

     onChange = (event, editor) => {
        this.props.sendData(editor.getData());
    }

    render()  {
        return this.CKEditor ? <this.CKEditor.CKEditor
            id = "editor"
            editor={this.ClassicEditor}
            data= {this.props.data}

            onChange={this.onChange}
        /> : <div>Editor loading</div>
    };
};

export default Editor;
