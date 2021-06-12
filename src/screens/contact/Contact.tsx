import React, { Suspense, useEffect, useState } from "react";
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
import { schemaDataForScreens } from "../../utils/services/Schema.service";
import { SchemaConstants } from "../../utils/constants/Schema.constants";
import DEFAULT_CONTACT_US from "./Contact.constants";
import { clone, get } from "lodash";
import { useForm, Controller } from "react-hook-form";
import { sendEmail } from "../../utils/services/Email.service";

const Contact = () => {
  const [contactUs, setContactUs] = useState(DEFAULT_CONTACT_US);
  const [emailDetails, setEmailDetails] = useState();
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    const serviceId = get(
      emailDetails.find((detail: any) => detail.key === "serviceId"),
      "defaultValue"
    );
    const templateId = get(
      emailDetails.find((detail: any) => detail.key === "templateId"),
      "defaultValue"
    );
    const userId = get(
      emailDetails.find((detail: any) => detail.key === "userId"),
      "defaultValue"
    );
    const emailData = {
      from_name: data.senderName,
      message: data.message,
      reply_to: data.emailAddress,
    };
    sendEmail(userId, serviceId, templateId, emailData).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    const contactUsObservable = schemaDataForScreens(
      SchemaConstants.BioDataSchema
    ).subscribe((data: any) => {
      const contactDetails = clone(DEFAULT_CONTACT_US);
      data.fields.forEach((field: any) => {
        switch (field.key) {
          case "address":
            contactDetails["address"] = field.defaultValue;
            break;
          case "phoneNumber":
            contactDetails["phoneNumber"] = field.defaultValue;
            break;
          case "email":
            contactDetails["email"] = field.defaultValue;
            break;
        }
      });
      setContactUs(contactDetails);
    });

    const emailDetailsObservable = schemaDataForScreens(
      SchemaConstants.EmailDetailsSchema
    ).subscribe((data: any) => {
      setEmailDetails(data.fields);
    });

    return () => {
      contactUsObservable.unsubscribe();
      emailDetailsObservable.unsubscribe();
    };
  }, []);

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
                <div>{contactUs.phoneNumber}</div>
              </dd>
              <dt className="col-2">
                <Avatar className="background-default-icon-color">
                  <LocationOnIcon />
                </Avatar>
              </dt>
              <dd className="col-10">
                <h5>Address</h5>
                <div>{contactUs.address}</div>
              </dd>
              <dt className="col-2">
                <Avatar className="background-default-icon-color">
                  <AlternateEmailIcon />
                </Avatar>
              </dt>
              <dd className="col-10">
                <h5>Email</h5>
                <div>{contactUs.email}</div>
              </dd>
            </dl>
          </Grid>

          <Grid container item xs={6}>
            <Grid container direction="column">
              <h3 className="mb-4">How can I help you?</h3>

              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Grid container item xs={6} className="mb-4">
                  <Controller
                    render={(field) => (
                      <TextField
                        {...field}
                        variant="outlined"
                        label="Your name"
                        className="w-100"
                      />
                    )}
                    name="senderName"
                    control={control}
                    defaultValue=""
                  />
                </Grid>

                <Grid container item xs={6} className="mb-4">
                  <Controller
                    render={(field) => (
                      <TextField
                        {...field}
                        variant="outlined"
                        label="Email address"
                        className="w-100"
                      />
                    )}
                    name="emailAddress"
                    control={control}
                    defaultValue=""
                  />
                </Grid>

                <Grid container item xs={6} className="mb-4">
                  <Controller
                    render={(field) => (
                      <TextareaAutosize
                        {...field}
                        placeholder="Message"
                        rowsMax={4}
                        rowsMin={4}
                        className="w-100"
                      />
                    )}
                    name="message"
                    control={control}
                    defaultValue=""
                  />
                </Grid>

                <Grid container item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
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
