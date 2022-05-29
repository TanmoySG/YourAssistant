import React from 'react';
import { Container, MantineProvider, Space } from '@mantine/core';
import { HeaderSimple } from "./components/headers.component"
import './App.css';
import ChatBox from './components/chatBox.component';


function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <HeaderSimple />
      <Space h="xs" />
      <ChatBox />
    </MantineProvider>
  );
}

export default App;
