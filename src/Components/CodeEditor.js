import React from 'react';
import AceEditor from 'react-ace';


import "brace/snippets/javascript";
import "brace/ext/language_tools";
import 'brace/mode/javascript';
import 'brace/theme/monokai';

function CodeEditor(props) {
    return (
        <div>
            <AceEditor
                value={props.code}
                mode="javascript"
                theme="monokai"
                onChange={(code)=> props.onCodeChange(code)}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                enableBasicAutocompletion={true}
                enableLiveAutocompletion={true}
                enableSnippets={true}
            />
        </div>
    );
}

export default CodeEditor;
