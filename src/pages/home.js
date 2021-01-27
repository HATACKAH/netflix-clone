import React from 'react'

import OptForm from '../components/opt-form'
import Feature from '../components/feature'
import HeaderContainer from "../containers/header";
import FaqsContainer from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import JumbotronContainer from '../containers/jumbotron';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title> Unlimited films, TV programmes and more. </Feature.Title>
                    <Feature.SubTitle> Watch anywhere. Cancel at anytime. </Feature.SubTitle>
                    <OptForm>

                        
                        <OptForm.Input placeholder='Email adress' />
                        <OptForm.Button>Try it now</OptForm.Button>

                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership.
                        </OptForm.Text>

                    </OptForm>

                </Feature>

            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    )
}