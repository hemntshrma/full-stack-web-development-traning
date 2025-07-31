import './index.css'
import {AddingTailwind } from './AddingTailwind';

function App() {
    return (
        <div>
            {/* inline css */}
            <style>
                {`p {
                    color: red;
                }`}
            </style>
            <h1 style={{color: "blue"}}>  my react is working</h1>
            <p>this is my p tag </p>
            <h2>this is my external css styling</h2>
            <AddingTailwind /> 
        </div>
    )
}

export { App };