import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, Button } from "@mui/material";
import "./Home.scss";
import ProfileBadge from "../../components/profile-badge/ProfileBadge";
import { Link } from "react-router-dom";
import { schemaDataForScreens } from "../../utils/services/Schema.service";
import { SchemaConstants } from "../../utils/constants/Schema.constants";
import { combineLatest } from "rxjs";
import { SocialMedia } from "../../components/social-media/SocialMedia";

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
      className="h-100 home-page"
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
            className="mb-2"
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
                <Grid item className="mb-3">
                  <h5>Hello,</h5>
                  <h1 className="content-header">
                    I am&nbsp;
                    <span>{name}</span>
                  </h1>
                  <h3 className="my-3">
                    <span className="type">
                      <span>
                        {roles.map((role) => (
                          <span>{role}</span>
                        ))}
                      </span>
                    </span>
                  </h3>
                  <h6>{detail}</h6>
                </Grid>

                <Grid item className="mb-3">
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
                </Grid>

                <Grid
                  item
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                >
                  <SocialMedia links={socialMediaLinks} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            sx={{ display: { sm: "none" } }}
          >
            <Grid item sx={{ display: { xs: "block" } }}>
              <SocialMedia links={socialMediaLinks} />
            </Grid>

            <Grid item xs={6}>
              <ProfileBadge image="https://firebasestorage.googleapis.com/v0/b/digital-portfolio-ee168.appspot.com/o/flamelink%2Fmedia%2Ffinal-img.png?alt=media&token=af6c8ba4-b28b-42cd-a97e-af48b5f59a3a" />
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Home;
