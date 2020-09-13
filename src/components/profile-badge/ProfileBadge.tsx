import React from "react";
import "./ProfileBadge.scss";

const ProfileBadge = (props: any) => {
  return (
    <img
      src={props.image}
      className={`round-circle profile-pic size-${props.size}`}
      alt=""
    />
  );
};

export default ProfileBadge;
