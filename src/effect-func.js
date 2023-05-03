import React, {useRef, useState} from 'react'

export default function Crat(){
    let [numItem, setnumItem] = useState(0)
    let stock = 10
    
    const onClickAddCart = () => {
        if (numItem < stock){
        let newItem = numItem + 1
        setnumItem(newItem)
        }
    }
    const onClickDeleteCart = () => {
        if (numItem > 0){
            setnumItem(numItem - 1)
        }
    }
    React.useEffect(function(){
        alert('อัปเดปสินค้าเรียบร้อยแล้ว')
    },[numItem]
    )

    return(
        <div>
            <div>จำนวนสินค้าในตะกร้า : {numItem}</div>
            <button onClick={onClickAddCart}>เพิ่มสินค้าในตะกร้า</button>
            <button onClick={onClickDeleteCart}>ลบสินค้าในตะกร้า</button>
        </div>
    )
}