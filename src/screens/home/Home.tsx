import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, Button } from "@mui/material";
import "./Home.scss";
import ProfileBadge from "../../components/profile-badge/ProfileBadge";
import { Link } from "react-router-dom";
import { schemaDataForScreens } from "../../utils/services/Schema.service";
import { SchemaConstants } from "../../utils/constants/Schema.constants";
import { combineLatest } from "rxjs";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

const Home = () => {
  const [loading, setStateLoading] = useState(false);
  const [name, setStateName] = useState("");
  const [role, setStateRole] = useState("");
  const [detail, setStateDetail] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);

  const socialMediaIcons: any = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    linkedin: LinkedInIcon,
  };

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
      setStateRole(personalInfoNameRole.description);
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
      justifyContent="center"
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
            <Grid item xs={3}>
              <Grid container direction="column">
                <Grid item xs={3} className="mb-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: name,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: role,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: detail,
                    }}
                  />
                </Grid>
                <Grid item xs={3} className="mb-3">
                  <Grid container direction="row">
                    <Grid item className="mr-3">
                      <Button
                        variant="contained"
                        href="https://firebasestorage.googleapis.com/v0/b/digital-portfolio-ee168.appspot.com/o/flamelink%2Fmedia%2FAniket%20das-Resume.pdf?alt=media&token=d6af2bc6-324d-4266-bcc7-91b40a32d11b"
                        target="_blank"
                      >
                        Resume
                      </Button>
                    </Grid>

                    <Grid item>
                      <Link to="/contact">
                        <Button variant="contained">Contact</Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={3}>
                  {socialMediaLinks.length > 0 ? (
                    socialMediaLinks.map((item: any, index: any) => (
                      <IconButton
                        color="primary"
                        aria-label={item.key}
                        href={item.defaultValue}
                        target="_blank"
                        className={index === 0 ? "pl-0" : ""}
                      >
                        {React.createElement(socialMediaIcons[item.key], {})}
                      </IconButton>
                    ))
                  ) : (
                    <CircularProgress />
                  )}
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <ProfileBadge
                size="large"
                image="https://firebasestorage.googleapis.com/v0/b/digital-portfolio-ee168.appspot.com/o/flamelink%2Fmedia%2Ffinal-img.png?alt=media&token=af6c8ba4-b28b-42cd-a97e-af48b5f59a3a"
              />
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Home;
