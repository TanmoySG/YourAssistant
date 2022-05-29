import React from 'react';
import { MantineProvider } from '@mantine/core';
import { HeaderSimple } from "./components/headers.component"
import './App.css';

const links = [
  {
    "link": "/about",
    "label": "Features"
  },
  {
    "link": "/pricing",
    "label": "Pricing"
  },
  {
    "link": "/learn",
    "label": "Learn"
  },
  {
    "link": "/community",
    "label": "Community"
  }
]

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'light' }}>
      <HeaderSimple/>
    </MantineProvider>
  );
}

export default App;
