import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collectionData } from "rxfire/firestore";
import { Grid, CircularProgress, Button } from "@material-ui/core";
import "./Home.scss";
import ProfileBadge from "../../components/profile-badge/ProfileBadge";
import { Detail } from "./Home.interface";
import { Link } from "react-router-dom";
import find from "lodash/find";

const Home = () => {
  const [loading, setStateLoading] = useState(false);
  const [name, setStateName] = useState("");
  const [role, setStateRole] = useState("");
  const [detail, setStateDetail] = useState("");
  useEffect(() => {
    setStateLoading(true);
    const HomeScreenSchema = collectionData(
      db.collection("fl_schemas")
    ).subscribe((data) => {
      setStateLoading(false);
      const personalInfo: any = find(
        data as Detail[],
        (schema) => schema.id === "personalInfoHome"
      );
      const [
        personalInfoName,
        personalInfoNameRole,
        personalInfoNameDetail,
      ] = personalInfo.fields;
      setStateName(personalInfoName.description);
      setStateRole(personalInfoNameRole.description);
      setStateDetail(personalInfoNameDetail.description);
    });

    return () => {
      HomeScreenSchema.unsubscribe();
    };
  }, []);

  return (
    <Grid
      container
      direction="column"
      justify="center"
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
            justify="center"
            alignItems="center"
            className="mb-5"
          >
            <div className="col-3">
              <ProfileBadge
                size="large"
                image="https://firebasestorage.googleapis.com/v0/b/digital-portfolio-ee168.appspot.com/o/flamelink%2Fmedia%2Fprogramming-pana.svg?alt=media&token=9717c39c-2b48-4734-9842-5351388ec7db"
              />
            </div>
            <div className="col-3">
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
            </div>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item className="mr-4">
              <Button
                variant="contained"
                href="https://firebasestorage.googleapis.com/v0/b/digital-portfolio-ee168.appspot.com/o/flamelink%2Fmedia%2FAniket%20das-Resume.pdf?alt=media&token=d6af2bc6-324d-4266-bcc7-91b40a32d11b"
                target="_blank"
              >
                Download CV
              </Button>
            </Grid>

            <Grid item xs={1}>
              <Link to="/contact">
                <Button variant="contained">Contact Us</Button>
              </Link>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Home;
