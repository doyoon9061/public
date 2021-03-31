import React from "react"
import styled from "styled-components"
import { useState } from "react"
const Styled ={
    AddBtn: styled.TouchableOpacity`
        width:70px;
        height:50px;
        border:1px solid #eee;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    `,
    AddBtnText: styled.Text`
        font-size:16px;
        color:#000;
    `,
}
const AddBtn = (props) => {
    const {touch, index, price, thumbnail, title, authors} = props;
    const [press, setPress] = useState(false)
    const Add=()=>{
        // console.log(index)
        touch.splice(0, 0, {
                                index:index, 
                                price:price, 
                                title:title, 
                                authors:authors, 
                            })
        console.log(touch)
    }
    const Del=()=>{
        touch.splice(touch.indexOf(index),1)
        console.log(touch)
    }
    if(press===true){
        return(
            <Styled.AddBtn onPress={()=>{Del(), setPress(!press)}}>
                <Styled.AddBtnText>장바구니 삭제</Styled.AddBtnText>
            </Styled.AddBtn>
        )
    }else{
        return (
            <Styled.AddBtn onPress={()=>{Add(), setPress(!press)}}>
                <Styled.AddBtnText>장바구니</Styled.AddBtnText>
            </Styled.AddBtn>
        )
    }

}
export { AddBtn }