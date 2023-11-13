import styled from "styled-components/native"
import ComponentBar from "../../components/componentBar/ComponentBar";


export const Container = styled.View`
    flex: 1;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #060d17;
`
export const ContainerPerfil = styled.View`
    margin-top: 100px;
    align-items: center;
`
export const ContainerImage = styled.View`
    width: 120px;
    height: 120px;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    background-color: #060D17;
    border: 3px solid #F7C710;
    border-radius: 100%;
`
export const Image = styled.Image`
    width: 100px;
    height: 100px;
`

export const TextName = styled.Text`
    color: #f0f0f0;
    font-size: 18px;
`
export const ContainerButton = styled.View`
    margin-top: 30px; 
    align-items: center;
    justify-content: center;
`

export const ContainerButtonEdit = styled.TouchableOpacity`
    background-color: #413e48;
    width: 35%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

`
export const TextNameBold = styled.Text`
    color: #f0f0f0;
    font-size: 18px;
    font-weight: bold;
`

export const Line = styled.View`
    height: 2px;
    width: 100%;
    background-color: #f0f0f0;
`
export const ContainerInfo = styled.View`
    margin-top: 50px;
    align-items: center;
    gap: 10px;
`
export const ItalicText = styled.Text`
    font-size: 14px;
    font-style: italic;
    color: #f0f0f0;
`
export const ContainerUserData = styled.View`
    flex: 1;
    margin-top: 20px;
    gap: 10px;
`

export const ContainerButtonExit = styled.View`
    margin-top: 100px; 
    align-items: center;
    justify-content: center;
`
export const ButtonExit = styled.TouchableOpacity`
    background-color: #413e48;
    width: 35%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`