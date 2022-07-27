import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import { motion } from "framer-motion";
import Paper from "@mui/material/Paper";
import { Detail } from "../Resume.interface";

const ResumeTimeline = ({ details }: { details: Detail[] }) => {
  return (
    <Timeline position="alternate">
      {details.map((timeLineDetail: Detail) => {
        return (
          <TimelineItem key={timeLineDetail.id}>
            {timeLineDetail.options?.line1 ? (
              <TimelineOppositeContent>
                <Typography variant="h6" color="textPrimary">
                  <span
                    className="text-card-color"
                    dangerouslySetInnerHTML={{
                      __html: timeLineDetail.options.line1,
                    }}
                  />
                </Typography>
              </TimelineOppositeContent>
            ) : null}
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.25 }}
              >
                <Paper elevation={3} className="bg-dark mx-3 p-3">
                  {timeLineDetail.options.line3 ? (
                    <Typography variant="h6" className="mb-2" align="center">
                      <span className="text-card-color">
                        {timeLineDetail.options.line3}
                      </span>
                    </Typography>
                  ) : null}
                  {timeLineDetail.options?.line4 ? (
                    <Typography variant="h6" align="center">
                      <span className="text-card-color">
                        {timeLineDetail.options.line4}
                      </span>
                    </Typography>
                  ) : null}
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default ResumeTimeline;
