import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { ScrollView, StyleSheet } from "react-native"
import fetch from "node-fetch"
import { Section } from "./Section"
import DropDownPicker from "react-native-dropdown-picker";
import { Footer } from "./Footer"
const Styled = {
    Wrap: styled.View`
        width:${wp(100)}px;
        height:${hp(100)}px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:column;
    `,
    InputBox: styled.View`
        width:80%;
        height:45px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        border:1px solid #000;
        margin-top:10px;
    `,
    SearchInput: styled.TextInput`
        width:80%;
        height:35px;
        font-size:17px;
        padding:0;
        border-radius:10px;
    `,
    SearchBtn: styled.TouchableOpacity`
        width:6%;
        height:100%;
        background-color:#fff;
    `,
    Image: styled.Image`
        width:99%;
        height:99%;
    `,

}
const styles = StyleSheet.create({
    Scroll: {
        display: "flex",
        justifyContent: "flex-start",
        height: "auto",
        alignItems: "center",
        flexDirection: "column",
        width: wp(100),
        backgroundColor: "#fff",
    },
});
const Mybook = () => {
    const [value, setValue] = useState()
    const [List, setList] = useState()
    const [bool, setBool] = useState(false)
    // const [touch, setTouch] = useState([])
    const touch =[]
    const [color, setColor] = useState("")    //footer 버튼색 바꿈
    const setBookApi = () => {
        fetch("https://dapi.kakao.com/v3/search/book?query=" + value, {
            method: "GET",
            headers: { "Authorization": "KakaoAK d7eb76da176f2cfbe1a4485e4d66bf2d" }
        })
            .then(response => response.json())
            .then(json => {
                setList(json.documents)
            })
    }
    useEffect(() => {
        setBookApi()
        console.log(value)
    }, [])
    const Press = () => {
        if (value === "") {
            alert("검색어를 입력해주세요")
        } else {
            setBookApi()
        }
    }
    const [name, setName] = useState()
    return (
        <Styled.Wrap>
            <ScrollView
                contentContainerStyle={styles.Scroll}
            >
                <Styled.InputBox>
                    <Styled.SearchInput
                        value={value}
                        onChangeText={
                            text => { setValue(text), console.log(text) }}
                    />
                    <DropDownPicker
                        showArrow={true}
                        selectedLabelStyle={{
                            color: '#39739d',
                        }}
                        style={{ width: wp(10), height: 40 }}
                        dropDownStyle={{ zIndex: 1 }}
                        items={[
                            { label: "선택", value: "선택", hidden: true },
                            { label: "영상", value: "영상" },
                            { label: "책", value: "책" },
                        ]}
                        itemStyle={{
                            justifyContent: 'flex-start',
                            zIndex: 1,
                        }}
                        defaultValue={name}
                        onChangeItem={item => {
                            setName(item.value);
                            alert(item.value)
                        }}
                    />
                    <Styled.SearchBtn
                        onPress={() => { Press(), setBool(true) }}
                    >
                        <Styled.Image 
                            source={{ uri: "data:image/png;base64,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" }} 
                        />
                    </Styled.SearchBtn>
                </Styled.InputBox>
                <Section 
                    List={List} 
                    bool={bool} 
                    color={color}
                    touch={touch}
                />
            </ScrollView>
            <Footer 
                color={color} 
                setColor={setColor}
            />
        </Styled.Wrap>
    )
}
export { Mybook }