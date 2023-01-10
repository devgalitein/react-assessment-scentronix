import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function About() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      HOME
    </Link>,
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/about"
      onClick={handleClick}
    >
      ABOUT
    </Link>,
  ];
  return (
    <Container>
      <Box>
        <Stack spacing={2} sx={{ marginTop: "30px" }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <h3>About Us</h3>
        <Grid container spacing={5}>
          <Grid md={12}>
            <img src="/about-us.png" className="image-part" />
          </Grid>
          <Grid md={1}></Grid>
          <Grid md={10}>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore et, autem corporis magni quidem quo at! Quo consequatur
              unde ut sit amet dolor nihil aperiam est quasi? Officiis similique
              assumenda suscipit non incidunt autem sunt rem at et quas.
              Voluptatibus saepe rem eligendi eum maxime expedita id ab
              repellendus obcaecati ipsum. Optio velit cum nihil ipsum nisi, hic
              fugiat corrupti, at amet, numquam culpa rerum ducimus.
              Perferendis, at. Quidem sint reiciendis nesciunt vero expedita
              tempore dolorum obcaecati ab harum quod. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Recusandae tempore fuga
              delectus saepe quam optio enim fugit tenetur, possimus alias ut
              fugiat placeat aliquid ab quae repudiandae magni perspiciatis
              voluptates? Aliquam quidem tempora laborum eligendi? Alias totam
              veritatis sequi aliquam cumque voluptate est tempora nam
              voluptatem, deserunt architecto? Pariatur, rerum?
            </Typography>
            <br />
            <Typography sx={{ fontSize: 16 }} gutterBottom>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore et, autem corporis magni quidem quo at! Quo consequatur
              unde ut sit amet dolor nihil aperiam est quasi? Officiis similique
              assumenda suscipit non incidunt autem sunt rem at et quas.
              Voluptatibus saepe rem eligendi eum maxime expedita id abis
              voluptates? Aliquam quidem tempora laborum eligendi? Alias totam
              veritatis sequi aliquam cumque voluptate est tempora nam
              voluptatem, deserunt architecto? Pariatur, rerum?
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
