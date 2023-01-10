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

function Shop() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      SHOP
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      FRUITS
    </Link>,
    <Typography key="3" color="text.primary">
      Strawberry
    </Typography>,
  ];
  return (
    <Container>
      <Box>
        <Grid container spacing={5} sx={{ marginTop: "30px" }}>
          <Grid md={6}>
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
            <h3>Strawberry</h3>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              sequi, nemo dolorum praesentium delectus libero totam officiis
              sapiente debitis est consectetur? Provident, tempore itaque. Iusto
              veritatis quod ut maiores voluptatem rem dolore consequatur nobis
              fugiat repudiandae hic mollitia, id, quidem consectetur aspernatur
              voluptas vero cupiditate optio, ex dicta est similique.
            </Typography>
            <div className="time-part">
              <List>
                <ListItem>
                  <AccessTimeIcon />
                  <ListItemText
                    className="list-text-part"
                    primary="PREP"
                    secondary="10 mins"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="list-text-part"
                    primary="BAKE"
                    secondary="1 hr to 1hr 15 mins"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    className="list-text-part"
                    primary="TOTAL"
                    secondary="1hr 10 mins"
                  />
                </ListItem>
              </List>
            </div>
            <hr />
            <div className="time-part button-part">
              <List>
                <ListItem>
                  <AccessTimeIcon />
                  <ListItemText
                    className="list-text-part"
                    primary="yield"
                    secondary="1 loaf, 12 generous servings"
                  />
                </ListItem>
              </List>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<AddIcon />}>
                  Add
                </Button>
                <Button variant="outlined" startIcon={<PrintIcon />}>
                  print
                </Button>
              </Stack>
            </div>
          </Grid>
          <Grid md={6}>
            <img
              src="/product-img-1.jpg"
              className="image-part"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Shop;
