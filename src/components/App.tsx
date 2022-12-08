import React from 'react';
import WebpackLogo from "../assets/image/webpack-logo.png"
import "./App.scss"

const App = ()=> {
    return (
        <div className='App'>
            <img src={WebpackLogo as string} width={264} height={264} />
            <h1 className="title">Webpack React template</h1>
            <p className="subtitle">Start your project fast with <span>Prod</span> and <span>Dev</span> setups.</p>

            <div className='section-out-of-the-box'>
                <h3> Out of the box:</h3>
                <ul>
                    <li>Typescript <span>.tsx .ts</span></li>
                    <p>Build better code with typescript</p>
                    <li>Scss preprocessor <span>.tsx .ts</span></li>
                    <p>Keep your style clean and smart with <span>Scss</span></p>
                    <li>Handle files
                        <ul>
                            <li>Image <span>png, jpg and svg</span></li>
                            <li><span>Json</span></li>
                            <li>Fonts <span>ttf</span></li>
                        </ul>
                    </li>
                    <li>Code split</li>
                    <p>Optimize your bundle with code splitting</p>
                    <li>Eslint Typescript</li>
                    <p>Empower your typescript with eslint</p>
                    <li>Husky pre-commit: eslint</li>
                    <p>Make sure only the <span>best code is committed</span></p>
                    <li>Jest + React testing library</li>
                    <p>Test your code <span>out of the box</span></p>
                </ul>
            </div>
        </div>
    )
}

export default App;