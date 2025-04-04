import styled from 'styled-components/native';


const StyledImage = styled.Image.attrs((props) => ({
    source: props.source,
}))`
       width: 35px;
       height: 35px;
       border-radius: 100px; 
   `;

const Textt = styled.Text
    `
       color: ${(props) => props.theme.text};
       font-size: 20px;
   `;


export { StyledImage, Textt };