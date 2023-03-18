import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, Button } from "@mui/material";
import "./Home.scss";
import ProfileBadge from "../../components/profile-badge/ProfileBadge";
import { Link } from "react-router-dom";
import { schemaDataForScreens } from "../../utils/services/Schema.service";
import { SchemaConstants } from "../../utils/constants/Schema.constants";
import { combineLatest } from "rxjs";
import { SocialMedia } from "../../components/social-media/SocialMedia";
import Box from "@mui/material/Box";

const Home = () => {
  const [loading, setStateLoading] = useState(false);
  const [name, setStateName] = useState("");
  const [roles, setStateRoles] = useState([]);
  const [detail, setStateDetail] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  useEffect(() => {
    setStateLoading(true);
    const HomeScreenSchema = combineLatest([
      schemaDataForScreens(SchemaConstants.HomeSchema),
      schemaDataForScreens(SchemaConstants.SocialMediaSchema),
    ]).subscribe(([home, socialMedia]: any) => {
      setStateLoading(false);
      const [personalInfoName, personalInfoNameRole, personalInfoNameDetail] =
        home.fields;
      setStateName(personalInfoName.description);
      setStateRoles((personalInfoNameRole.description || "").split(","));
      setStateDetail(personalInfoNameDetail.description);
      setSocialMediaLinks(socialMedia.fields);
    });

    return () => {
      HomeScreenSchema.unsubscribe();
    };
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
      className="home-page"
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="mb-2 full-viewport-height pt-5"
          >
            <Grid
              item
              sm={2}
              sx={{ display: { xs: "none", sm: "flex" } }}
              className="mr-5"
            >
              <ProfileBadge image="https://firebasestorage.googleapis.com/v0/b/digital-portfolio-ee168.appspot.com/o/flamelink%2Fmedia%2Ffinal-img.png?alt=media&token=af6c8ba4-b28b-42cd-a97e-af48b5f59a3a" />
            </Grid>

            <Grid item sm={3} xs={12}>
              <Grid container direction="column">
                <Grid item className="mb-3 pl-2">
                  <Box
                    sx={{
                      display: { xs: "flex" },
                      alignItems: { xs: "center", sm: "flex-start" },
                      justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <h5>Hello,</h5>
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "flex", sm: "inline" },
                      flexDirection: { xs: "column", sm: "row" },
                      alignItems: { xs: "center", sm: "flex-start" },
                      justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <h1>I am</h1>
                    <h1 className="content-header">
                      <span>{name}</span>
                    </h1>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "flex" },
                      alignItems: { xs: "center", sm: "flex-start" },
                      justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <h3 className="my-3">
                      <span className="type">
                        <span>
                          {roles.map((role, index) => (
                            <span key={index.toString()}>{role}</span>
                          ))}
                        </span>
                      </span>
                    </h3>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "flex" },
                      alignItems: { xs: "center", sm: "flex-start" },
                      justifyContent: { xs: "center", sm: "flex-start" },
                    }}
                  >
                    <span className="h6">{detail}</span>
                  </Box>
                </Grid>
                <Grid item className="mb-3">
                  <Box
                    sx={{
                      display: { xs: "flex" },
                      alignItems: { xs: "center", sm: "flex-start" },
                      justifyContent: { xs: "center", sm: "flex-start" },
                      paddingLeft: { xs: 0, sm: "0.5rem" },
                    }}
                  >
                    <Button
                      variant="contained"
                      href="https://firebasestorage.googleapis.com/v0/b/digital-portfolio-ee168.appspot.com/o/flamelink%2Fmedia%2FAniket%20das-Resume.pdf?alt=media&token=d6af2bc6-324d-4266-bcc7-91b40a32d11b"
                      target="_blank"
                      className="mr-2"
                      sx={{
                        "a:hover": {
                          color: "none",
                        },
                      }}
                    >
                      Download CV
                    </Button>

                    <Link to="/contact">
                      <Button variant="contained">Contact</Button>
                    </Link>
                  </Box>
                </Grid>

                {/* Do not show this UI of social media for smaller devices */}
                <Grid item sx={{ display: { xs: "none", sm: "flex" } }}>
                  <SocialMedia links={socialMediaLinks} />
                </Grid>

                {/*Mobile UI for image and social media links*/}
                <Grid item xs={12} sx={{ display: { sm: "none" } }}>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <ProfileBadge image="https://firebasestorage.googleapis.com/v0/b/digital-portfolio-ee168.appspot.com/o/flamelink%2Fmedia%2Ffinal-img.png?alt=media&token=af6c8ba4-b28b-42cd-a97e-af48b5f59a3a" />
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <SocialMedia links={socialMediaLinks} />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Home;
