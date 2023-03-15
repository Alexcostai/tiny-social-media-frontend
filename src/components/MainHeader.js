import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
//mui
import {
  FavoriteBorder,
  HomeOutlined,
  Menu,
  MessageOutlined,
  Search,
} from "@mui/icons-material";
import { Avatar, Box, Grid } from "@mui/material";
//project imports
import HambuergerIcon from "../assets/images/hamburger-icon.png";
import UserProfileImg from "../assets/images/example/user-profile.jpeg";

const styles = {
  navContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingInline: 5,
    paddingBlock: 1,
    justifyContent: "space-between",
  },
  icon: {
    width: 26,
    height: 26,
    mt: 1,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.15)",
    },
  },
  link: {
    color: "black",
  },
  profileIcon: {
    width: 34,
    height: 34,
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(white, white) padding-box,linear-gradient(to right, darkblue, darkorchid) border-box",
    borderRadius: 100,
    border: "3px solid transparent",
  },
  homeAvatar: {
    "&:hover": {
      cursor: "pointer",
    },
  },
};

export default function MainHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav>
          <Grid sx={styles.navContainer}>
            <Grid
              sx={{
                display: "flex",
              }}
            >
              <Box onClick={() => navigate("/")} sx={{ ...styles.link, mr: 2 }}>
                <Menu sx={styles.icon} />
              </Box>
              <Box
                onClick={() => navigate("/")}
                sx={{ ...styles.link, marginInline: 1 }}
              >
                <Box
                  sx={{ ...styles.icon, ...styles.profileIcon }}
                  onClick={() => navigate("/")}
                >
                  <Avatar
                    src={UserProfileImg}
                    sx={{
                      width: 28,
                      height: 28,
                    }}
                  />
                </Box>
              </Box>
              <Box
                onClick={() => navigate("/")}
                sx={{ ...styles.link, marginInline: 2 }}
              >
                <HomeOutlined sx={styles.icon} />
              </Box>
              <Box
                onClick={() => navigate("/")}
                sx={{ ...styles.link, marginInline: 2 }}
              >
                <Search sx={styles.icon} />
              </Box>
              <Box
                onClick={() => navigate("/")}
                sx={{ ...styles.link, marginInline: 2 }}
              >
                <MessageOutlined sx={styles.icon} />
              </Box>
              <Box
                onClick={() => navigate("/")}
                sx={{ ...styles.link, marginInline: 2 }}
              >
                <FavoriteBorder sx={styles.icon} />
              </Box>
            </Grid>
            <Box onClick={() => navigate("/")} sx={styles.homeAvatar}>
              <Avatar
                variant="square"
                src={HambuergerIcon}
                sx={{ width: 30, height: 30 }}
              />
            </Box>
          </Grid>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
