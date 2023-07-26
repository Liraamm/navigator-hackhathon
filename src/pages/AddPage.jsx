import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigatorContext } from "../contexts/NavigatorContext";

const defaultTheme = createTheme();

export default function AddPage() {
  const { addPlace } = useNavigatorContext();
  const [formValue, setFormValue] = React.useState({
    title: "",
    description: "",
    image: "",
    category: "",
  });

  function handleChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formValue.title.trim() ||
      !formValue.image.trim() ||
      !formValue.description.trim() ||
      !formValue.category.trim()
    ) {
      return;
    }
    addPlace({ ...formValue });
    setFormValue({
      title: "",
      description: "",
      image: "",
      category: "",
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add place
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Title"
              name="title"
              autoFocus
              value={formValue.title}
              onChange={handleChange}
              color="success"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              value={formValue.description}
              onChange={handleChange}
              color="success"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image"
              value={formValue.image}
              onChange={handleChange}
              color="success"
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                value={formValue.category}
                onChange={handleChange}
                name="category"
                label="Category"
                color="success"
              >
                <MenuItem value="Emergency">Emergency</MenuItem>
                <MenuItem value="Entertainment">Entertainment</MenuItem>
                <MenuItem value="Shopping">Shopping</MenuItem>
                <MenuItem value="Food">Food</MenuItem>
                <MenuItem value="Nature">Nature</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
            >
              Add new place
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
