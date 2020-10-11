import React, { Suspense, useEffect, useState } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import { merge } from "rxjs";
import { schemaDataForScreens } from "../../utils/services/Schema.service";
import { SchemaConstants } from "../../utils/constants/Schema.constants";
import { Result, Option } from "./Resume.interface";
import ResumeTimeline from "./timeline/ResumeTimeline";

const Resume = () => {
  const [timeLineDetails, setTimeLineDetails] = useState([]);

  useEffect(() => {
    const personalTimeline = merge(
      schemaDataForScreens(SchemaConstants.TimeLineSchema)
    ).subscribe((data: any) => {
      data.fields = data.fields.map((field: any) => {
        field.options = field.options.reduce(
          (result: Result, option: Option) => {
            result[option.key] = option.defaultValue;
            return result;
          },
          {}
        );
        return field;
      });
      setTimeLineDetails(data.fields);
    });

    return () => {
      personalTimeline.unsubscribe();
    };
  });

  return (
    <Suspense fallback={<CircularProgress />}>
      <div className="ml-5 mt-5">
        <Grid container direction="column">
          <h1>Resume</h1>
          <Grid container direction="row">
            <Grid container item xs={6}>
              <ResumeTimeline details={timeLineDetails} />
            </Grid>
            <Grid container item xs={6}>
              <h1>Skills</h1>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Suspense>
  );
};

export default Resume;
