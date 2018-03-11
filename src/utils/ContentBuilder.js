import React from 'react'
import TextEntry from "../components/TextEntry";

export function build(type, config){
        switch (type) {
            case "TextEntry":
                return <TextEntry {...config}/>
            case "Button":
                return <TextEntry {...config}/>
            case "Journal":
                return <TextEntry {...config}/>
            case "SharedWriting":
                return <TextEntry {...config}/>
            case "Post":
                return <TextEntry {...config}/>
            case "MultipleChoice":
                return <TextEntry {...config}/>
        }
    }
