import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { Grid, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewsLetter = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onSubmit = (e) => {
    console.log(e);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "mediumturquoise",
        borderTop: `1px solid ${theme.palette.divider}`,
        py: [3, 6]
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={8}>
            <Typography variant="h4" gutterBottom>
              Newsletter - Stay tune and get the latest update
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Subscribe and stay updated
            </Typography>
          </Grid>
          <Grid item xs={4} align="center">
            <Stack direction="row">
              <TextField
                label="Enter email address"
                variant="filled"
                placeholder="johndoe@gmail.com"
                required
              />
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={onSubmit}
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Thank you for the subscription.
            </Alert>
          </Snackbar>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsLetter;
