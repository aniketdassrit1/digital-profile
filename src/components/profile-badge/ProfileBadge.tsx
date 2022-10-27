import React from "react";
import "./ProfileBadge.scss";
import Box from "@mui/material/Box";

const ProfileBadge = ({ image }: { image: string }) => {
  return (
    <Box
      className="home"
      sx={{
        width: { xs: "100%", height: "100%" },
      }}
    >
      <img alt="profile pic" className="home__blob-img" src={image} />
    </Box>
  );
};

export default ProfileBadge;
