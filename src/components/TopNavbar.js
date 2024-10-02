import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"; // Wallet icon import
import { createTheme, ThemeProvider } from "@mui/material/styles";
import authorImg from "../assets/author.jpg"; // Path to your avatar image

// Custom dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0f172a", // Match the main body background
    },
    primary: {
      main: "#e2e8f0", // Light Slate (similar to slate-300) for active icons and labels
    },
    text: {
      primary: "#e2e8f0", // Light Slate for primary text (contrast with dark bg)
      secondary: "#64748b", // Muted Slate color for inactive labels (slate-500)
    },
  },
});

export default function TopNavbar() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* Floating header with Avatar, Username, Leaderboard, and Wallet */}
      <Card
        className="absolute left-4 right-4"
        sx={{
          top: "0.3rem", // Moving it higher with a negative top value
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "background.default",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          borderRadius: 2,
          margin: 2, // Add spacing around the header
        }}
      >
        {/* Avatar and Text */}
        <Box display="flex" alignItems="center" className="space-x-2">
          <img
            className="w-8 h-8 rounded"
            src={authorImg} // Using the imported image
            alt="Default avatar"
          />
          <span className="text-xs text-slate-300 font-medium">
            @testversion
          </span>
        </Box>

        {/* Leaderboard and Wallet Icons */}
        <Box display="flex" alignItems="center" className="space-x-4">
          <LeaderboardIcon
            sx={{
              fontSize: 28,
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          />
          <AccountBalanceWalletIcon
            sx={{
              fontSize: 28,
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          />
        </Box>
      </Card>
    </ThemeProvider>
  );
}
