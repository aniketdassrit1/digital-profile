import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import "./About.scss";
import { schemaDataForScreens } from "../../utils/services/Schema.service";
import { SchemaConstants } from "../../utils/constants/Schema.constants";
import { merge } from "rxjs";
import { BioData, WhatIdo } from "./About.interface";
import CakeSharpIcon from "@mui/icons-material/CakeSharp";
import BoySharpIcon from "@mui/icons-material/BoySharp";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import {
  calculateYears,
  formatBirthDate,
} from "../../utils/services/Date.serice";
import Box from "@mui/material/Box";
import { CUSTOMERS, WhatIDoIcons } from "./About.constant";

const About = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [birthday, setBirthDay] = useState("");
  const [age, setAge] = useState();
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [whatIdo, setWhatIdo] = useState<WhatIdo[]>([]);

  useEffect(() => {
    const personalAboutMe = merge(
      schemaDataForScreens(SchemaConstants.AboutUsSchema),
      schemaDataForScreens(SchemaConstants.BioDataSchema),
      schemaDataForScreens(SchemaConstants.WhatIDoSchema)
    ).subscribe((data: any) => {
      if (data.id === SchemaConstants.BioDataSchema) {
        const { defaultValue, description, key } = data.fields.find(
          (field: WhatIdo) => field.key === BioData.Experience
        );
        setWhatIdo((prevState: WhatIdo[]) => [
          ...prevState,
          {
            defaultValue: `${calculateYears(defaultValue)} years`,
            description,
            key,
          },
        ]);
      }
      if (data.id === SchemaConstants.WhatIDoSchema) {
        setWhatIdo((prevState: WhatIdo[]) => [...prevState, ...data.fields]);
      }
      if (
        data.id === SchemaConstants.AboutUsSchema ||
        data.id === SchemaConstants.BioDataSchema
      ) {
        setAboutUs(data);
      }
    });

    return () => {
      personalAboutMe.unsubscribe();
    };
  }, []);

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
          setAge(calculateYears(field.defaultValue));
          setBirthDay(formatBirthDate(new Date(field.defaultValue)));
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
    <Grid container direction="column" className="mt-5">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>
          About <span className="text-default-color">me</span>
        </h1>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="mt-5 mb-5 pb-5"
      >
        <Grid container item xs={10} sm={6}>
          <Card raised={true}>
            <CardContent>
              <Grid container direction="column">
                <h3 className="mb-4">
                  I'm <span className="text-default-color">{title}</span>
                </h3>

                <p>{description}</p>

                <dl className="row w-100">
                  <dt className="col-3 text-default-color">
                    <CakeSharpIcon /> Birthday
                  </dt>
                  <dd className="col-9">{birthday}</dd>
                  <dt className="col-3 text-default-color">
                    <BoySharpIcon /> Age
                  </dt>
                  <dd className="col-9">{age}</dd>
                  <dt className="col-3 text-default-color">
                    <HomeSharpIcon /> Address
                  </dt>
                  <dd className="col-9">{address}</dd>
                  <dt className="col-3 text-default-color">
                    <AlternateEmailSharpIcon /> Email
                  </dt>
                  <dd className="col-9">{email}</dd>
                </dl>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container direction="row" justifyContent="center" className="mb-5">
        <h3 className="text-underline">Achivements</h3>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          alignContent: "stretch",
        }}
      >
        {whatIdo.map((task: WhatIdo, index: number) => {
          return (
            <Grid
              item
              xs={8}
              sm={2}
              key={index.toString()}
              className="mr-2 mb-2"
            >
              <Card raised={true}>
                <CardContent>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {React.createElement(WhatIDoIcons[task.key], {
                      sx: {
                        fontSize: 40,
                        color: task.key === CUSTOMERS ? "red" : "white",
                      },
                    })}
                    <h3 className="text-card-color">{task.defaultValue}</h3>
                    <h5 className="text-card-color">{task.description}</h5>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default About;
