import React from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const Styled ={
    Wrap: styled.View`
        width:${wp(100)}px;
        height:${hp(100)}px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;
    `,
}
const Picker=()=>{
    return()
}
export {Picker}