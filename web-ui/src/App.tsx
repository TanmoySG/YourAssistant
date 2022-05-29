import React from 'react';
import { Container, MantineProvider } from '@mantine/core';
import { HeaderSimple } from "./components/headers.component"
import './App.css';
import ChatBox from './components/chatBox.component';


function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <HeaderSimple />
        <ChatBox />
    </MantineProvider>
  );
}

export default App;
