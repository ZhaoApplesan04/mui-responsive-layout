import React from "react";
import { Box, Drawer, AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material";

const drawerWidth = 240;

export default function ResponsiveLayout() {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: isDesktop ? `calc(100% - ${drawerWidth}px)` : "100%",
          ml: isDesktop ? `${drawerWidth}px` : 0,
        }}
      >
        <Toolbar>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {isDesktop && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ p: 2 }}>Sidebar Menu</Box>
        </Drawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Responsive Preview
        </Typography>
        <Typography>
          Resize browser to test responsive layout.
        </Typography>
      </Box>
    </Box>
  );
}
