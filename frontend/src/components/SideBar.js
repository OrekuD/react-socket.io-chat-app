import React from "react";
import ChatHeader from "./ChatHeader";

const SideBar = ({ roomDetails }) => {
  return (
    <div className="side-bar">
      <ChatHeader roomDetails={roomDetails} />
      <div className="members">
        {roomDetails.members
          ? roomDetails.members.map((member) => (
              <div key={Math.random().toString()} className="member">
                <p> {member.name} </p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default SideBar;
