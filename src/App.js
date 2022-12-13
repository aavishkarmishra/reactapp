import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Home from "./components/home";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Home />
        </Grid>
      </Grid>
    </Box>
  );
}
