import React, {useRef, useState} from 'react'

export default function Crat(){
    let [Size, setSize] = useState(16)
    let [color, setColor] = useState()

    
    const onClickUpSize = () => {
        let newSize = Size + 1
        setSize(newSize)
        
    }
    const onClickDownSize = () => {
        if (Size > 0){
            setSize(Size - 1)
        }
    }
    const onClickColor = (ev) => {
        let c = ev.target.innerText
        setColor(c)
    }

    const dStyle = {
        fontSize: Size,
        color: color
    }

    return(
        <div>
            <div style={dStyle}>ขนาด Font : {Size}</div>
            <button onClick={onClickUpSize}>เพิ่ม Size</button>
            <button onClick={onClickDownSize}>ลด Size</button>
            <button onClick={onClickColor}>red</button>
            <button onClick={onClickColor}>green</button>
            <button onClick={onClickColor}>blue</button>
        </div>
    )
}