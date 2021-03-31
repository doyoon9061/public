import React, { useState } from "react"
import styled from "styled-components"
import {Btn} from "./Btn"
const Footer = (props) => {
    const {color, setColor, touch} = props
    const [FooterList, setFooterList] = useState([
        { name: "재생목록", src: "https://postfiles.pstatic.net/MjAyMTAzMzBfMTY5/MDAxNjE3MDgwNDQxODEz.hk0MmUJyCE8sFGZwlSeJDCZTaO1p1RI_8PgUiHf6lqEg.AC24jlp7uaLi1BrvVU1v_qeEhwz2pdGvuSr-N3wqdtQg.PNG.doyoon9601/list.png?type=w773" },
        { name: "장바구니", src: "https://postfiles.pstatic.net/MjAyMTAzMzBfODgg/MDAxNjE3MDgwNDM3MjE0.jOfEY3io7RCP3KpDDQ9b4vkjYOAVTog7wrkNd4Y8tN4g.kr70FcqdoX5BQYCJqzC8ANVFNvzIvVL7tmgNkOxB3qMg.PNG.doyoon9601/myshopping.png?type=w773" }
    ])
    const Styled = {
        Footer: styled.View`
            width:100%;
            height:80px;
            background-color:#fff;
            position:absolute;
            bottom:0;
            border-top-width:1px;
            border-color:#555;
            display:flex;
            justify-content:space-around;
            align-items:flex-start;
            flex-direction:row;
        `,
        
    }
    return (
        <Styled.Footer>
            {FooterList.map((v, idx) => {
                return (
                    <Btn name={v.name} link={v.src} index={idx} color={color} setColor={setColor} touch={touch}/>
                )
            })}
        </Styled.Footer>
    )
}
export { Footer }