import { InputWrapper, Input, Container } from '@mantine/core';

export default function ChatBox() {
    return (

        <Container style={{ height: "90vh", }}>
            xs container with xs horizontal padding
        </Container>

        // <InputWrapper
        //     id="query"
        //     required
        //     label="Enter Query Here"
        //     // description="Please enter your credit card information, we need some money"
        //     // error="Your credit card expired"
        // >
        //     <Input id="query" placeholder="Query" />
        // </InputWrapper>
    );
}