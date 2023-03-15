import * as React from "react";
//mui
import {
  Container,
  Grid,
  CardMedia,
  CardContent,
  Card,
  CardHeader,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import { Send, FavoriteBorder, ChatBubbleOutline } from "@mui/icons-material";
//project imports
import UserProfileImg from "../../../assets/images/example/user-profile.jpeg";

const styles = {
  card: {
    width: "55%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  cardHeader: {
    p: 1,
    width: "90%",
  },
  cardImg: {
    width: "100%",
    objectFit: "contain",
  },
  likesTxt: {
    fontSize: 14,
    fontWeight: "bold",
    "&:hover": {
      color: "grey",
      cursor: "pointer",
    },
  },
  cardIcon: {
    m: 0.8,
    mb: 0,
    "&:hover": {
      color: "grey",
      cursor: "pointer",
    },
  },
  cardContent: {
    p: 0,
    flexGrow: 1,
    width: "90%",
    "&:last-child": {
      paddingBottom: 1,
    },
  },
};

export default function Home() {
  return (
    <>
      <main>
        <Container sx={{ mt: 2 }} maxWidth="md">
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Card sx={styles.card}>
              <CardHeader
                avatar={
                  <Avatar src={UserProfileImg} sx={{ width: 30, height: 30 }} />
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
                sx={styles.cardHeader}
              />
              <CardMedia
                component="img"
                sx={styles.cardImg}
                image="https://source.unsplash.com/random"
                alt="random"
              />
              <CardContent sx={styles.cardContent}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <FavoriteBorder sx={{ ...styles.cardIcon, ml: 0 }} />
                    <ChatBubbleOutline sx={styles.cardIcon} />
                    <Send sx={styles.cardIcon} />
                  </Box>
                  <Typography sx={styles.likesTxt}>107,342 likes</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 14 }}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    libero nec tellus, phasellus gravida tempor varius integer
                    commodo magnis tempus urna.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </main>
    </>
  );
}
