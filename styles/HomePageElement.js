import styled from 'styled-components';


export const Container = styled.View
    `
    flex: 1;
    align-items: center;
    background-color: #1C202C;
`;

export const ImageBlock = styled.View`
    width: 320px;
    height: 230px;
    border-radius: 15px;
    margin: 4px;
    margin-top: 90px;
`;

export const BigImage = styled.Image.attrs((props) => ({
    source: props.source,
}))`
    flex: 1;
    border-radius: 15px;
    width: auto;
    height: auto;
    resize-wode: cover;
`;

export const TitleImage = styled.Text`
    position: absolute;
    bottom: 64px;
    left: 15px;
    font-weight: bold;
    color: #FFFFFF;
    font-family: Gilroy DontWork; 
    font-size: 20px;
`;

export const DescriptionImage = styled.Text`
    position: absolute;
    bottom: 47px;
    left: 15px;
    color: #FFFFFF;
    font-family: ABeeZee DontWork;
    font-size: 13px;
`;

export const TextDiscount = styled.Text`
    position: absolute;
    bottom: 16px;
    left: 15px;
    color: #ffffff;
    background-color: #00D44B80;
    font-size: 16px;
    border-radius: 4px 0px 0px 4px;
    padding: 2px 4px;
`;

export const TextPrice = styled.Text`
    position: absolute;
    bottom: 16px;
    left: 63px;
    color: #C1BCB5;
    background-color: #000000A4;
    font-size: 16px;
    text-decoration-line: line-through;
    padding: 2px 4px;
`;

export const TextPriceWithDiscound = styled.Text`
    position: absolute;
    bottom: 16px;
    left: 94px;
    color: #ffffff;
    background-color: #000000A4;
    font-size: 16px;
    border-radius: 0px 4px 4px 0px;
    padding: 2px 8px 2px 6px;
`;

export const IconLogos = styled.View`
    position: absolute;
    bottom: 18px;
    right: 18px;
`;

export const IconOS = styled.View`
    flex-direction: row;
    padding: 6px 4px;
    align-items: center;
`;


export const HomeElement = styled.View`
    flex-direction: row;
    margin-vertical: 5px;
    padding-vertical: 8px;
    padding-horizontal: 6px;
    width: 340px;
    background-color: #1C202C;
    border-radius: 5px;
`;

export const TextElement = styled.View`
    padding-horizontal: 6px;
    flex-direction: column;
    background-color: #1C202C;
`;

export const ImageElement = styled.Image.attrs((props) => ({
    source: props.source,
}))`
    width: 80px;
    height: 60px;
    margin: 0px 2px 0px 5px;
    resize-wode: cover;
    border-radius: 8px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #ffffff;  
    font-family: ABeeZee DontWork;
`;

export const Description = styled.Text`
    color: #7B8D9D;
    font-size: 16px;
`;



export const TextDiscountTovar = styled.Text`
    position: absolute;
    top: 36px;
    right: 12px;
    font-family: PingFang SC;
    color: #ffffff;
    background-color: #00D44B80;
    font-size: 14px;
    border-radius: 4px;
    padding: 2px 7px;
`;

export const TextPriceWithDiscoundTovar = styled.Text`
    position: absolute;
    top: 13px;
    right: 49px;
    font-family: PingFang SC;
    color: #C1BCB5;
    font-size: 12px;
    text-decoration-line: line-through;
    padding: 2px 4px;
`;

export const TextPriceTovar = styled.Text`
    position: absolute;
    top: 5px;
    right: 11px;
    font-family: PingFang SC;
    color: #ffffff;
    font-size: 19px;
    padding: 2px 8px 2px 6px;
`;


export const ButtonContainer = styled.ScrollView`
    flex-direction: row;
    margin: 4px;
    height: 120px;
    margin: 0px 16px;
`;

export const PressableButton = styled.Pressable`
    border-radius: 8px;
    align-items: center;
    width: auto;
    height: 36px;
    background-color: #303649; 
    margin: 4px 6px;
    padding: 6px 10px;
`;

export const ButtonText = styled.Text` 
    font-family: ABeeZee;
    color: #ffffff; 
    font-size: 15px; 
`; 