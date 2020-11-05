import React from 'react';
import {ContainerItem,Item} from './styles';


function ItemNavbar(){
    const TitleConcatenador = '<C>';
    const Versao = 'Versão 0.1'
    return (
        <ContainerItem>
            <Item to="/Concatenador">{TitleConcatenador}</Item>
            <Item>{Versao}</Item>
        </ContainerItem>
    );
}

export default ItemNavbar;