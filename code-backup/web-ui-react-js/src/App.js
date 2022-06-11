import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState } from 'react';
import ScrollArea from '@xico2k/react-scroll-area';
import compile from "string-template/compile";
import { Typography, Stack, Paper, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Container from '@mui/material/Container';
import './App.css';

const Agents = {
  user: "agent.user",
  api: "agent.api"
}

const MessageTypes = {
  query: "message.query",
  options: "message.options"
}

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

function App() {

  const YourAssistantEndpoint = compile('https://yourassistantmax.azurewebsites.net/interact?query={0}')

  const [messageList, setMessageList] = useState([]);
  const [selectedOption, setSelectedOption] = useState();
  const [query, setQuery] = useState("");

  function sendQuery(query) {

    const messagePosted = messageList;
    messagePosted.push({
      from: Agents.user,
      message: query,
      type: MessageTypes.query
    })
    setMessageList(messagePosted);

    const endpoint = YourAssistantEndpoint(query)
    fetch(endpoint, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "content_type": "application/json",
      }
    }).then(response => {
      return response.json()
    }).then(res => {
      const messagesFetched = messageList
      messagesFetched.push({
        from: Agents.api,
        message: res.response,
        type: Array.isArray(res.response) ? MessageTypes.options : MessageTypes.query
      })
      setMessageList(messagesFetched);
      setQuery("")
    })

    console.log(messageList);
  }

  function handleOptionSelection(option) {
    setSelectedOption(option);
    setQuery(option);
    sendQuery(option);
    setSelectedOption();
  };




  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: '#00384b', padding: "20px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px" }}>
        <Typography variant="h5" style={{ color: "white" }}>YourAssistant<sup>web</sup></Typography>
      </Box>
      <Stack spacing={2}>
        <Box style={{ height: "65vh" }}>
          <ScrollArea height="100%">
            <Stack spacing={2} style={{ paddingTop: "10px", paddingBottom: "10px", width: "100%" }}>
              {
                messageList ? messageList.map((item) => {
                  if (item.from === Agents.api) {
                    if (item.type === MessageTypes.options) {
                      return (
                        <>
                          <Typography>Select </Typography>
                          <ToggleButtonGroup
                            color="primary"
                            value={selectedOption}
                            exclusive
                            onChange={e => { handleOptionSelection(e.target.value) }}
                          >
                            {
                              item.message ? item.message.map((opt) => {
                                return (
                                  <ToggleButton value={opt}>{titleCase(opt)}</ToggleButton>
                                )
                              }) : undefined
                            }
                          </ToggleButtonGroup>
                        </>
                      )
                    } else if (item.type === MessageTypes.query) {
                      return (
                        <Paper variant='outlined' elevation={3} style={{ backgroundColor: "#bcdcff", padding: "10px", width: "50%", alignSelf: "flex-start", borderRadius: "10px", borderTopLeftRadius: "0px" }}>
                          {item.message}
                        </Paper>
                      )
                    }
                  } else if (item.from === Agents.user) {
                    return (
                      <Paper variant='outlined' style={{ backgroundColor: "rgb(255 235 188)", padding: "10px", width: "50%", alignSelf: "flex-end", borderRadius: "10px", borderTopRightRadius: "0px" }}>
                        {item.message}
                      </Paper>
                    )
                  }
                }) : undefined
              }
            </Stack>
          </ScrollArea>
        </Box>
        <Paper elevation={2} style={{ padding: "20px" }}>
          <Stack spacing={2}>
            <TextField id="outlined-basic" label="Your Query" variant="outlined" onChange={e => { setQuery(e.target.value) }} />
            <Button variant="contained" endIcon={<SendIcon />} onClick={() => { sendQuery(query) }}>
              Send
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}

export default App;
