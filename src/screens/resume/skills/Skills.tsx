import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Languages from "./languages/Languages";
import Tools from "./tools/Tools";
import { schemaDataForScreens } from "../../../utils/services/Schema.service";
import { SchemaConstants } from "../../../utils/constants/Schema.constants";

const Skills = () => {
  const [languages, setLanguages] = useState({ options: [] });
  const [toolsData, setTools] = useState({});
  useEffect(() => {
    schemaDataForScreens(SchemaConstants.SkillSchema).subscribe((data: any) => {
      console.log(data);
      const languagesData: any = data.fields.find(
        (field: any) => field.key === "languages"
      );
      const toolsData: any = data.fields.find(
        (field: any) => field.key === "tools"
      );
      setLanguages(languagesData);
      setTools(toolsData);
    });
  }, []);

  return (
    <>
      <Grid container direction="column">
        <Grid container direction="row">
          <Grid container item xs={8}>
            <Typography variant="h5" className="w-100 mb-3">
              Languages
            </Typography>
            {languages.options.map((language: any) => {
              return (
                <>
                  <Languages
                    percentage={language.defaultValue}
                    languageName={language.title}
                    key={language.id.toString()}
                  />
                </>
              );
            })}
          </Grid>
        </Grid>

        <Grid container direction="row">
          <Grid container item xs={8}>
            <Typography variant="h5" className="w-100 mb-3">
              Tools
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
