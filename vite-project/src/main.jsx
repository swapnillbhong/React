import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>hello this is my function ! </h1>
        </div>
    )
}

// const ReactElement ={
//     type : 'a',
//     props: {
//         href : 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement= (
    <a href ="hhtps://google.com" target='_blank'>visit google</a>
)

const anotherUser ="hello i am user "

const reactElement= React.createElement(
    'a',
    {href:'https//google.com', target: '_blank'},
    'click me to visit google',
    anotherUser
    //hello world
    
)


createRoot(document.getElementById('root')).render(
  
   //<App/> 
   reactElement
 
)
