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

function Recipes() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      RECIPES
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      BREAD
    </Link>,
    <Typography key="3" color="text.primary">
      QUICK BREAD
    </Typography>,
  ];
  return (
    <Container>
      <Box>
        <Grid container spacing={5} sx={{ marginTop: "30px" }}>
          <Grid md={5}>
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
            <h3>Whole-grain Banana Bread</h3>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
              This one-bowl banana bread — our 2018 Recipe of the Year —uses the
              simplest ingredients, but is incredibly moist and flavorful. While
              the recipe calls for a 50/50 mix of flours (all-purpose and whole
              wheat), we often make the bread 100% whole wheat, and honestly? No
              one can tell, it's that good! And not only is this bread delicious
              — it's versatile.
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
                  save recipe
                </Button>
                <Button variant="outlined" startIcon={<PrintIcon />}>
                  print
                </Button>
              </Stack>
            </div>
          </Grid>
          <Grid md={6}>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              className="image-part"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Recipes;
