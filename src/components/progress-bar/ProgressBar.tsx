import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({theme}) =>({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: "#1a90ff",
    },
}));

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
