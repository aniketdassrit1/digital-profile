import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#1a90ff",
    },
  })
)(LinearProgress);

const ProgressBar = ({ percentage }: { percentage: number }) => {
  return (
    <BorderLinearProgress
      variant="determinate"
      value={percentage}
      className="w-100"
    />
  );
};

export default ProgressBar;
