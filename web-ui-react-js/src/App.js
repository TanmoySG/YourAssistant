import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ScrollArea from '@xico2k/react-scroll-area';
import { Typography, Stack, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: '#00384b', padding: "20px", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px" }}>
        <Typography variant="h5" style={{ color: "white" }}>YourAssistant<sup>web</sup></Typography>
      </Box>
      <Stack spacing={2}>
        <Box style={{ height: "75vh", backgroundColor: "black" }}>
          <ScrollArea height="100%">

          </ScrollArea>
        </Box>
        <Paper elevation={2} style={{ padding: "20px" }}>
          <Typography>Hi</Typography>
        </Paper>
      </Stack>
    </Container>
  );
}

export default App;
