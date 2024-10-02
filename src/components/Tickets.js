// Tickets.js
import React from "react";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber"; // Import ticket icon

const Tickets = ({ tickets }) => {
  return (
    <div className="flex items-center text-slate-300 text-xs font-medium space-x-1">
      <span>Available tickets: {tickets}</span>
      <ConfirmationNumberIcon className="text-slate-300" fontSize="small" />
    </div>
  );
};

export default Tickets;
