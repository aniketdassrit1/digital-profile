import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import "./About.scss";
import { schemaDataForScreens } from "../../utils/services/Schema.service";
import { SchemaConstants } from "../../utils/constants/Schema.constants";
import { merge } from "rxjs";
import { motion } from "framer-motion";
import { WhatIdo } from "./About.interface";

const About = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [whatIdo, setWhatIdo] = useState([]);

  useEffect(() => {
    const personalAboutMe = merge(
      schemaDataForScreens(SchemaConstants.AboutUsSchema),
      schemaDataForScreens(SchemaConstants.BioDataSchema),
      schemaDataForScreens(SchemaConstants.WhatIDoSchema)
    ).subscribe((data: any) => {
      if (data.id === SchemaConstants.WhatIDoSchema) {
        setWhatIdo(data.fields);
      } else {
        setAboutUs(data);
      }
    });

    return () => {
      personalAboutMe.unsubscribe();
    };
  });

  const setAboutUs = (data: any) => {
    data.fields.forEach((field: any) => {
      switch (field.key) {
        case "title":
          setTitle(field.defaultValue);
          break;
        case "description":
          setDescription(field.defaultValue);
          break;
        case "birthday":
          setBirthDay(field.defaultValue);
          break;
        case "age":
          setAge(field.defaultValue);
          break;
        case "address":
          setAddress(field.defaultValue);
          break;
        case "email":
          setEmail(field.defaultValue);
          break;
      }
    });
  };

  return (
    <div className="ml-5 mt-3">
      <Grid container direction="column">
        <h1>
          About <span className="text-default-color">me</span>
        </h1>

        <Grid container direction="row" className="mt-5 mb-5 pb-5">
          <Grid container item xs={6}>
            <Grid container direction="column">
              <h3 className="mb-4">
                I'm <span className="text-default-color">{title}</span>
              </h3>

              <Grid container item xs={10}>
                <p>{description}</p>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item xs={4}>
            <dl className="row w-100">
              <dt className="col-3 text-default-color">Birthday</dt>
              <dd className="col-9">{birthday}</dd>
              <dt className="col-3 text-default-color">Age</dt>
              <dd className="col-9">{age}</dd>
              <dt className="col-3 text-default-color">Address</dt>
              <dd className="col-9">{address}</dd>
              <dt className="col-3 text-default-color">Email</dt>
              <dd className="col-9">{email}</dd>
            </dl>
          </Grid>
        </Grid>

        <h3 className="mb-5">
          <span className="text-underline">What I Do</span>
        </h3>

        <Grid container direction="row" xs={12}>
          {whatIdo.map((task: WhatIdo) => {
            return (
              <Grid container item xs={4} className="mr-5">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card className="w-100 bg-dark" raised={true}>
                    <CardContent>
                      <h1 className="text-card-color">{task.description}</h1>
                      <p className="text-card-color">{task.defaultValue}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
