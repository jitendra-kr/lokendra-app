import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class Editor extends React.Component {

     onChange = (event, editor) => {
        this.props.sendData(editor.getData());
    }

    render()  {
        return <CKEditor
            id = "editor"
            editor={ClassicEditor}
            data= {this.props.data}

            onChange={this.onChange}
        />
    };
};

export default Editor;
