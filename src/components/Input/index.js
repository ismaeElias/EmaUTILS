import React from 'react'
import { InputStyled, Container,LabelStyled,SpanStyled } from './styles';

function Input(props) {
    return (
        <Container>
            <LabelStyled htmlFor="inicial">
                <InputStyled type="text" id="inicial" name="inicial"  placeholder={props.textPlaceholder} maxLength="10" />
                <SpanStyled>{props.title}</SpanStyled>
            </LabelStyled>
        </Container>
    );
}

export default Input;