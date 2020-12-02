import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import { motion } from "framer-motion";
import Paper from "@material-ui/core/Paper";
import { Detail } from "../Resume.interface";

const ResumeTimeline = ({ details }: { details: Detail[] }) => {
  return (
    <Timeline align="alternate">
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
