import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home"; // Icon for Home
import PaidIcon from "@mui/icons-material/Paid"; // Icon for Earn (Stacked Coins)
import UpgradeIcon from "@mui/icons-material/Upgrade"; // Icon for Upgrade
import PeopleIcon from "@mui/icons-material/People"; // Icon for Referrals
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

export default function Navbar() {
  const [value, setValue] = React.useState(0); // State for bottom navbar

  return (
    <ThemeProvider theme={darkTheme}>
      {/* Bottom navigation icons */}
      <Box
        sx={{
          width: "100%", // Full width navbar
          position: "fixed", // Stick to the bottom
          bottom: 0,
          backgroundColor: "background.default",
        }}
      >
        <BottomNavigation
          sx={{
            backgroundColor: "background.default", // Dark background for navbar
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            sx={{
              color: value === 0 ? "primary.main" : "text.secondary",
              "&.Mui-selected": {
                opacity: 1, // Ensure opacity doesn't change on click
              },
            }}
          />
          <BottomNavigationAction
            label="Upgrade"
            icon={<UpgradeIcon />} // Updated to "Upgrade" with the Upgrade icon
            sx={{
              color: value === 1 ? "primary.main" : "text.secondary",
              "&.Mui-selected": {
                opacity: 1, // Ensure opacity doesn't change on click
              },
            }}
          />
          <BottomNavigationAction
            label="Earn"
            icon={<PaidIcon />} // Updated to "Earn" with a stacked coins icon
            sx={{
              color: value === 2 ? "primary.main" : "text.secondary",
              "&.Mui-selected": {
                opacity: 1, // Ensure opacity doesn't change on click
              },
            }}
          />
          <BottomNavigationAction
            label="Referrals"
            icon={<PeopleIcon />}
            sx={{
              color: value === 3 ? "primary.main" : "text.secondary",
              "&.Mui-selected": {
                opacity: 1, // Ensure opacity doesn't change on click
              },
            }}
          />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
