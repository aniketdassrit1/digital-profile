import React, { Suspense, useEffect, useState } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { merge } from "rxjs";
import { schemaDataForScreens } from "../../utils/services/Schema.service";
import {
  EducationSchema,
  ExperienceSchema,
  SchemaConstants,
} from "../../utils/constants/Schema.constants";
import { Result, Option } from "./Resume.interface";
import EduAndExp from "./edu-and-exp/EduAndExp";
import Skills from "./skills/Skills";

const Resume = () => {
  const [timeLineEducationDetails, setTimeLineEducationDetails] = useState([]);
  const [timeLineExperienceDetails, setTimeLineExperienceDetails] = useState(
    []
  );

  useEffect(() => {
    const personalTimeline = merge(
      schemaDataForScreens(SchemaConstants.TimeLineEducationSchema),
      schemaDataForScreens(SchemaConstants.TimeLineExperienceSchema)
    ).subscribe((data: any) => {
      if (data.id === "personalEducationTimeline") {
        const educationData = modifyEduAndExp(data, EducationSchema);
        setTimeLineEducationDetails(educationData);
      } else if (data.id === "personalExperienceTimeline") {
        const experience = modifyEduAndExp(data, ExperienceSchema);
        setTimeLineExperienceDetails(experience);
      }
    });

    return () => {
      personalTimeline.unsubscribe();
    };
  }, []);

  const modifyEduAndExp = (data: any, schema: any) => {
    return data.fields.map((field: any) => {
      field.options = field.options.reduce((result: Result, option: Option) => {
        // @ts-ignore
        result[schema[option.key]] = option.defaultValue;
        return result;
      }, {});
      return field;
    });
  };

  return (
    <Suspense fallback={<CircularProgress />}>
      <div className="ml-5 mt-5">
        <Grid container direction="column">
          <h1>Resume</h1>
          <Grid container direction="row">
            <Grid container item xs={6}>
              <EduAndExp
                timeLineEducationDetails={timeLineEducationDetails}
                timeLineExperienceDetails={timeLineExperienceDetails}
              />
            </Grid>

            <Grid container item xs={6}>
              <Skills />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Suspense>
  );
};

export default Resume;
