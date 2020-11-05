import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderPage = styled.header`
    background-color: var(--main-color);
    color: var(--main-text-light);
    display: flex;
    grid-area: HD;
    width: 100%;
    padding: 5px 30px;
    align-items: center;
`;

const Image = styled.img`
    max-width: 45px;
    max-height : 60px;
    width : auto;
    height : auto;
`;

const Title = styled(Link)`
    color: var(--main-text-light);
    font-weight:bold;
    font-size: 20px;
    text-decoration : none;
    margin-left : 20px;
`;



export {HeaderPage,Image,Title}