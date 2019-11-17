// index.js - App source file

// 1. Import the Froala Editor
import FroalaEditor from 'froala-editor';

// 2. Import a Froala Editor plugin(s)
import 'froala-editor/js/plugins/align.min.js';  

// 3. Import the css
// The webpack style-loader & css-loader are required to import css here. 
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';

// 4. Render the Froala editor in the <div/> with id of `editor`.
new FroalaEditor('#editor');