import React, { Suspense } from "react";
import {
  Avatar,
  CircularProgress,
  Grid,
  TextField,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import SendIcon from "@material-ui/icons/Send";

const Contact = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <div className="ml-5 mt-5">
        <h1>Contact</h1>

        <Grid container direction="row" className="mt-5 mb-5 pb-5">
          <Grid container item xs={4} className="mr-5">
            <dl className="row w-100">
              <dt className="col-2">
                <Avatar className="background-default-icon-color">
                  <CallIcon />
                </Avatar>
              </dt>
              <dd className="col-10">
                <h5>Call</h5>
                <div>+91-8177807506</div>
              </dd>
              <dt className="col-2">
                <Avatar className="background-default-icon-color">
                  <LocationOnIcon />
                </Avatar>
              </dt>
              <dd className="col-10">
                <h5>Address</h5>
                <div>1050, Gupteshwar, Shaktinagar, Jabalpur, M.P - 482001</div>
              </dd>
              <dt className="col-2">
                <Avatar className="background-default-icon-color">
                  <AlternateEmailIcon />
                </Avatar>
              </dt>
              <dd className="col-10">
                <h5>Email</h5>
                <div>aniketdassrit1990@gmail.com</div>
              </dd>
            </dl>
          </Grid>

          <Grid container item xs={6}>
            <Grid container direction="column">
              <h3 className="mb-4">How can I help you?</h3>

              <form noValidate autoComplete="off">
                <Grid container item xs={6} className="mb-4">
                  <TextField
                    variant="outlined"
                    label="Your name"
                    className="w-100"
                  />
                </Grid>

                <Grid container item xs={6} className="mb-4">
                  <TextField
                    variant="outlined"
                    label="Email address"
                    className="w-100"
                  />
                </Grid>

                <Grid container item xs={6} className="mb-4">
                  <TextField
                    variant="outlined"
                    label="Subject"
                    className="w-100"
                  />
                </Grid>

                <Grid container item xs={6} className="mb-4">
                  <TextareaAutosize
                    placeholder="Message"
                    rowsMin={4}
                    className="w-100"
                  />
                </Grid>

                <Grid container item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon>Send</SendIcon>}
                  >
                    Send
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Suspense>
  );
};

export default Contact;
