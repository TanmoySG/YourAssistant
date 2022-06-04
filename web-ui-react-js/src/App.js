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
import Container from '@mui/material/Container';
import './App.css';

function App() {

  const YourAssistantEndpoint = compile('https://yourassistantmax.azurewebsites.net/interact?query={0}')

  const [messageList, setMessageList] = useState({});

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: '#00384b', padding: "20px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px" }}>
        <Typography variant="h5" style={{ color: "white" }}>YourAssistant<sup>web</sup></Typography>
      </Box>
      <Stack spacing={2}>
        <Box style={{ height: "65vh" }}>
          <ScrollArea height="100%">
            <Stack spacing={2} style={{ paddingTop: "10px", paddingBottom: "10px", width: "100%" }}>
              <Paper variant='outlined' elevation={3} style={{ backgroundColor: "#bcdcff", padding: "10px", width: "50%", alignSelf: "flex-start", borderRadius: "10px", borderTopLeftRadius: "0px" }}>
                djnjnbjknb
              </Paper>
              <Paper variant='outlined' style={{ backgroundColor: "rgb(255 235 188)", padding: "10px", width: "50%", alignSelf: "flex-end", borderRadius: "10px", borderTopRightRadius: "0px" }}>
                djnjnbjknb
              </Paper>
            </Stack>
          </ScrollArea>
        </Box>
        <Paper elevation={2} style={{ padding: "20px" }}>
          <Stack spacing={2}>
            <TextField id="outlined-basic" label="Your Query" variant="outlined" />
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}

export default App;
