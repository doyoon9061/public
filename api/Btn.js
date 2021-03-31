import React, { useState } from "react"
import styled from "styled-components"


const Btn = (props) => {
    const { link, name, index, color, setColor } = props
    const Setting =()=>{
        if(color === index){
            setColor("")
        }else{
            setColor(index)
            console.log(color)
        }
    }
    const Styled = {
        Btn: styled.TouchableOpacity`
            width:44px;
            height:44px;
            margin-top:5px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:column;
            background-color:${color === index ? "gold":"#fff"}
        `,
        Img: styled.Image`
            width:30px;
            height:25px;
        `,
        Text: styled.Text`
            font-size:12px;
        `,
    }
    return (
        <Styled.Btn onPress={Setting}>
            <Styled.Img source={{ uri: link }} />
            <Styled.Text>{name}</Styled.Text>
        </Styled.Btn>
    )
}
export { Btn }