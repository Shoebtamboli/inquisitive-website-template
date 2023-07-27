import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";
import SimpleBreadcrumb from "../components/SimpleBreadcrumb";
import Appbar from "../components/Appbar";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import IconButton from "@mui/material/IconButton";
import { contactData } from "../data";
import { contactImage } from "../constant";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required")
});

const defaultValues = {
  email: "",
  phone: "",
  message: ""
};

const Contact = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { handleSubmit, control, reset } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    setOpen(true);
    reset();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme.palette.common.white,
          backgroundImage: `url(${contactImage})`,
          backgroundAttachment: "fixed"
        }}
      >
        <Container maxWidth="lg">
          <Appbar />
          <Box
            sx={{
              mt: 10,
              mb: 10
            }}
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="h2" align="center">
                Contact
              </Typography>
              <SimpleBreadcrumb />
            </Stack>
          </Box>
        </Container>
      </Box>

      <Box
        id="#contact"
        sx={{
          bgcolor: "background.paper",
          p: 2
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            mt: 10,
            mb: 4
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Box>
                <Typography component="h1" variant="h4" align="center">
                  Let's Connect
                </Typography>
                <Typography
                  component="h1"
                  variant="body1"
                  align="center"
                  gutterBottom
                >
                  We're open for any suggestion or just to have a chat
                </Typography>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Controller
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    render={({
                      field: { onChange, value, onBlur },
                      fieldState: { error }
                    }) => {
                      return (
                        <TextField
                          helperText={error ? error.message : null}
                          size="medium"
                          error={!!error}
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value}
                          fullWidth
                          label="Email"
                          type="email"
                          required
                        />
                      );
                    }}
                  />

                  <Controller
                    name="phone"
                    control={control}
                    render={({
                      field: { onChange, value, ref },
                      fieldState: { error }
                    }) => {
                      return (
                        <TextField
                          margin="normal"
                          fullWidth
                          inputRef={ref}
                          label="Phone No"
                          type="phone"
                          id="phone"
                          autoComplete="phone"
                          onChange={onChange}
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                        />
                      );
                    }}
                  />

                  <Controller
                    name="message"
                    control={control}
                    render={({
                      field: { onChange, value, ref },
                      fieldState: { error }
                    }) => {
                      return (
                        <TextField
                          margin="normal"
                          fullWidth
                          multiline
                          rows={10}
                          inputRef={ref}
                          label="What would you like to say ?"
                          type="message"
                          id="message"
                          autoComplete="message"
                          onChange={onChange}
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                        />
                      );
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2
                      // "&:hover": {
                      //   "&:after": {
                      //     opacity: 1,
                      //     right: "10px"
                      //   },
                      //   transition: "0.5s",
                      //   background: "green",
                      //   paddingRight: "24px",
                      //   paddingLeft: "8px"
                      // }
                    }}
                  >
                    {"Send Message"}
                    <SendIcon />
                  </Button>
                </form>
                <Snackbar
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    The message has been sent. We will contact you as soon as
                    possible.
                  </Alert>
                </Snackbar>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                sx={{ m: 12 }}
              >
                {contactData.map((item, index) => (
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    key={index}
                  >
                    <IconButton color="inherit" edge="start">
                      {item.icon}
                    </IconButton>
                    <Typography variant="body2">{item.text}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
