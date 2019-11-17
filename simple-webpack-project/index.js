// index.js - App source file

// 1. Import the Froala Editor
import FroalaEditor from 'froala-editor';

// 2. Import a Froala Editor plugins
import 'froala-editor/js/plugins/align.min.js';  

// 3. Import the css
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';

// 4. Render the Froala editor in the <div/> with id of `editor`.
new FroalaEditor('#editor');