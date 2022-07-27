import React from "react";
import ProgressBar from "../../../../components/progress-bar/ProgressBar";
import { Typography } from "@mui/material";

const Languages = ({
  percentage,
  languageName,
}: {
  percentage: number;
  languageName: string;
}) => {
  return (
    <>
      <Typography variant="h6">{languageName}</Typography>
      <ProgressBar percentage={percentage} />
    </>
  );
};

export default Languages;
