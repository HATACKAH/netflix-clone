import React from 'react';
import Accordion from '../components/accordion'
import faqsData from '../fixtures/faqs.json'
import OptForm from "../components/opt-form";

export default function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(item =>
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            )}
            <Accordion.Item />
            <OptForm>
                <OptForm.Input placeholder='Email adress' />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Text>
                Ready to watch? Enter your email to create or restart your membership.
                </OptForm.Text>
            </OptForm>

        </Accordion>
    )
}