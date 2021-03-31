import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { AddBtn } from "./AddBtn"

const Styled = {
    Section1: styled.View`
        width:80%;
        height:200px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        flex-wrap:wrap;
        margin-top:100px;
    `,
    Section: styled.View`
        width:80%;
        height:auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        flex-wrap:wrap;
        margin-top:30px;
        margin-bottom:100px;
    `,
    Book: styled.TouchableOpacity`
        width:300px;
        height:400px;
        background-color:#fff;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        border:1px solid #000;
        margin-bottom:40px
    `,
    Thumbnail: styled.Image`
        width:120px;
        height:175px;
        background-color:red;
    `,
    Title: styled.Text`
        font-size:18px;
        font-weight:500;
        color:#1b2c49;
    `,
    Title1: styled.Text`
        font-size:16px;
        font-weight:500;
        color:#1b2c49;
    `,
    Text: styled.Text`
        font-size:14px;
        font-weight:400;
        color:#1b2c49;
    `,
    Sub: styled.View`
        width:100%;
        height:50px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-direction:row;
        margin-bottom:3px;
    `,

    PriceWrap: styled.View`
        width:105px;
        height:100%;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-direction:column;
    `,
    Price: styled.Text`
        font-size:13px;
        color:#666;
        text-decoration:line-through;
    `,
    SalePrice: styled.Text`
        font-size:17px;
        color:#000;
    `,
    Red: styled.View`
        width:300px;
        height:300px;
        background-color:red;
    `,
}
const Section = (props) => {
    const { List, search, color, touch } = props
    if (color === 0) {
        //재생목록
        return (
            <Styled.Section>

            </Styled.Section>
        )
    } else if (color === 1) {
        //장바구니
        console.log(touch.props)
        return (
            <Styled.Section>
                {touch.map((v) => {
                    return (
                        <Styled.Red></Styled.Red>
                    )
                })}
            </Styled.Section>
        )
    } else {
        if (search === false) {
            return (
                <Styled.Section1>
                    <Styled.Text>검색결과가 없습니다</Styled.Text>
                </Styled.Section1>
            )
        } else {
            return (
                <Styled.Section>
                    {List.map((v, index) => {
                        return (
                            <Styled.Book>
                                <Styled.Thumbnail source={{ uri: v.thumbnail }} />
                                <Styled.Title1>{v.title.substr(0, 24)}</Styled.Title1>
                                <Styled.Text>저자: {v.authors}</Styled.Text>
                                <Styled.Text>{v.contents.substring(0, 150)}</Styled.Text>
                                <Styled.Sub>
                                    <Styled.PriceWrap>
                                        <Styled.Price>{v.price}</Styled.Price>
                                        <Styled.SalePrice>{v.sale_price === -1 ? "품절상품입니다":v.sale_price+"원"}</Styled.SalePrice>
                                    </Styled.PriceWrap>
                                    <AddBtn
                                        touch={touch}
                                        index={index}
                                        price={v.sale_price}
                                        thumbnail={v.thumbnail}
                                        title={v.title.substr(0, 24)}
                                        authors={v.authors}
                                    />
                                </Styled.Sub>
                            </Styled.Book>
                        )
                    })}
                </Styled.Section>
            )
        }
    }
}
export { Section }