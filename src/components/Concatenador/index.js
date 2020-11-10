import React from 'react'
import { Layout, Header, SectionMain, ContainerHeader, TextAreaStyled } from './style';
import Input from '../Input';
import api from '../../services/api';

function PageConcatenador() {


    return (
        <Layout>
            <form>
                <Header>
                    <ContainerHeader>
                        <Input title='Inicial' textPlaceholder='Caracter Inicial' />
                        <Input title='Final' textPlaceholder='Caracter Final' />
                    </ContainerHeader>
                </Header>
                <SectionMain>
                    <TextAreaStyled />
                    <button>Teste</button>
                    <TextAreaStyled disabled/>
                </SectionMain>
            </form>
        </Layout>
    );
}

export default PageConcatenador