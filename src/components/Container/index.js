import React from 'react';
import {ContainerPage} from './styles';
function Container (props) {
    return(
        <ContainerPage>
            {props.children}
        </ContainerPage>
    );
}

export default Container;