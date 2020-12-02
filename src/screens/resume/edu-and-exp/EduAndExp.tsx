import React from "react";
import { Typography } from "@material-ui/core";
import ResumeTimeline from "../timeline/ResumeTimeline";
import { EduAndExpProps } from "./EduAndExp.interface";

const EduAndExp = ({
  timeLineEducationDetails,
  timeLineExperienceDetails,
}: EduAndExpProps) => {
  return (
    <>
      <Typography variant="h5" align="center" className="w-100">
        Education
      </Typography>
      <ResumeTimeline details={timeLineEducationDetails} />

      <Typography variant="h5" align="center" className="w-100 mt-3">
        Experience
      </Typography>
      <ResumeTimeline details={timeLineExperienceDetails} />
    </>
  );
};

export default EduAndExp;
