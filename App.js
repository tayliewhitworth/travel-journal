import React from 'react'
import Nav from "./components/Nav"
import Main from "./components/Main"
import data from "./data"

export default function App() {
    const mainCard = data.map(item => {
        return (
            <Main 
                key={item.title}
                item={item}
            />
        )
    })
    
    return (
        <div>
            <Nav />
            <section className='main-list'>
                {mainCard}
            </section> 
        </div>
    )
}