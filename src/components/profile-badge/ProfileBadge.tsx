import React from "react";
import "./ProfileBadge.scss";

const ProfileBadge = ({ image, size }: { image: string; size: string }) => {
  return (
    <img
      src={image}
      className={`round-circle profile-pic size-${size}`}
      alt=""
    />
  );
};

export default ProfileBadge;
