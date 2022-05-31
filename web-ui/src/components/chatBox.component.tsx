import React, { useState, useEffect } from 'react';
import { InputWrapper, Input, Container, Grid, Button, Space } from '@mantine/core';
import { Stack, Paper, Text, ScrollArea, ActionIcon } from '@mantine/core';
import { Send } from 'tabler-icons-react';
import compile from "string-template/compile";

export default function ChatBox() {

    var endpoint = compile(`https://yourassistantmax.azurewebsites.net/interact?query="{0}"`)

    const [messages, setMessages] = useState<string[]>([]);
    const [query, setQuery] = useState("");

    const interact = () => {
        console.log(query)
        const messagesList: string[] = messages;
        messagesList.push(query)
        setMessages(messagesList);

        const normalizedQuery = endpoint(query)
        console.log(normalizedQuery)
        fetch(normalizedQuery, {
            method: "POST",
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            console.log(response, response.json())
            return response.json()
        }).then(json => {
            console.log(json)
            const messagesList: string[] = messages;
            messagesList.push(json.response)
            setMessages(messagesList);
            setQuery("");
        })
        return
    }



    return (
        <Container style={{ height: "90vh", }}>
            <Stack sx={{ height: "100%" }}>
                <Container style={{ width: "100%" }}>
                    <ScrollArea style={{ height: 500 }}>
                        <Stack sx={{ height: "100%" }}>
                            {
                                messages ? messages.map(function (item, key) {
                                    if (key % 2 == 0) {
                                        return (
                                            <Paper shadow="xs" radius="md" p="md" sx={{ width: "45%", backgroundColor: "lightblue", alignSelf: "flex-start" }}>
                                                <Text>{item}</Text>
                                            </Paper>
                                        )
                                    } else {
                                        return (
                                            <Paper shadow="xs" radius="md" p="md" sx={{ width: "45%", backgroundColor: "lightsalmon", alignSelf: "flex-end" }}>
                                                <Text>{item}</Text>
                                            </Paper>
                                        )
                                    }
                                }) : undefined
                            }
                        </Stack>
                    </ScrollArea>
                </Container>
                <Container style={{ width: "100%" }}>
                    <InputWrapper
                        id="query"
                        required
                        label="Enter Query Here"
                    >
                        <Input id="query" placeholder="Query" onChange={(e: React.ChangeEvent<{ value: string }>) => { setQuery(e.target.value); }} />
                    </InputWrapper>
                    <Space h="xs" />
                    <Button onClick={interact}>Send</Button>
                </Container>
            </Stack>
        </Container>


    );
}

{/* <Paper shadow="xs" radius="md" p="md" sx={{ width: "45%", backgroundColor: "lightblue", alignSelf: "flex-start" }}>
                                <Text>Paper is the most basic ui component</Text>
                            </Paper>
                            <Paper shadow="xs" radius="md" p="md" sx={{ width: "45%", backgroundColor: "lightsalmon", alignSelf: "flex-end" }}>
                                <Text>Paper is the most basic ui component sdfvhgfvgvgcvdgcvgvgsvdgdsvgcdvchgdsvch</Text>
                            </Paper> */}