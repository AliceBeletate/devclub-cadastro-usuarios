import styled from "styled-components";

export const Button = styled.button `
    border: ${(props) => props.theme === 'primary' ? 'none' : '1px solid #DC143C'};
    background: ${(props) => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    border-radius: 30px;

    &:hover {
        background: ${(props) => props.theme === 'primary' ? 'transparent' : 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)'};
        border: ${(props) => props.theme === 'primary' ? '1px solid #DC143C' : 'none'};
    }

    &:active {
        opacity: 0.5;
    }
`