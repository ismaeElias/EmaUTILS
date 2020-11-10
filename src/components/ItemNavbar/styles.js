import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Version = styled.p`
    align-items: center;
    color: var(--main-text);
    display: flex;
    font-size : 14px;
    font-weight: bold;
    height: 60px;
    justify-content:center;
`;

const Item = styled(Link)`
    align-items: center;
    border-bottom : 2px solid var(--main-border);
    color: var(--main-text);
    display: flex;
    font-size : 20px;
    font-weight: bold;
    height: 60px;
    justify-content:center;
    transition: all 0.20s ease-in-out;
    text-decoration : none;
    cursor: pointer;

    &:hover{
        border-left: 5px solid var(--main-color);
        color :  var(--main-color);
        font-weight : bold;    
    }
`;

const ContainerItem = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    flex-direction : column;

    & ${Version}:last-child{
        margin-top:auto;

        &:hover{
            color: var(--main-text);
            cursor: default;
        }
    }
`;


export { ContainerItem, Item, Version };