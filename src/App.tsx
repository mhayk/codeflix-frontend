import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { appTheme } from "./config/theme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box component="main" sx={{
        height: '100vh',
        backgroundColor: (theme) => theme.palette.grey[900],
      }}>

        <Header />
        <Layout>

        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App;
