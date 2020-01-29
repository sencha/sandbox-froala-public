// index.js - App source file

// 1. Import the Froala Editor
import FroalaEditor from 'froala-editor';

// 2. Import a Froala Editor plugin(s)
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/lists.min.js';  
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/image.min.js';

// 3. Import the Froala Editor css
// The webpack style-loader & css-loader are required to import css here. 
import 'froala-editor/css/froala_editor.pkgd.min.css';

// 4. Import Wiris MathType
// Be sure FroalaEditor is delclard in webpack.providePlugin
import '@wiris/mathtype-froala3/wiris.js';

// 5. Render the Froala editor in the <div/> with id of `editor`.
// More: https://www.npmjs.com/package/@wiris/mathtype-froala3
new FroalaEditor('#editor', {
  toolbar: ['wirisEditor', 'wirisChemistry'],
  toolbarButtons: ['wirisEditor', 'wirisChemistry'],
  toolbarButtonsMD: ['wirisEditor', 'wirisChemistry'],
  toolbarButtonsSM: ['wirisEditor', 'wirisChemistry'],
  toolbarButtonsXS: ['wirisEditor', 'wirisChemistry'],
  imageEditButtons: ['wirisEditor', 'wirisChemistry'],
  htmlAllowedTags:  ['.*'],
  htmlAllowedAttrs: ['.*'],
  useClasses: false
});