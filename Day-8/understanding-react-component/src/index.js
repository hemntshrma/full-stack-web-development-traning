// importing react-dom module
import  { MyComponents } from './MyComponents';
import ReactDOM from 'react-dom/client';

// getting division tag by id 'root'
const divTag = document.getElementById('root');

// creating react dom which use to connect/render our component on browser
const myDom = ReactDOM.createRoot(divTag);

// rendering component 
myDom.render(<MyComponents />)

