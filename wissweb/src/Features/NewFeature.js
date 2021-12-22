import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FadeInAnimation from "../Animations/FadeInAnimation";
import SingleCard from "./Card";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "5px",
    textAlign: "center",
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const NewFeatures = () => {
  const classes = useStyles();

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <FadeInAnimation direction="up">
              <SingleCard
                BackGroundLink="https://www.nojitter.com/sites/default/files/AdobeStock_203293749.jpeg"
                DescriptionLink="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605daa6daedb2d00012ba7a2/picture"
                Heading="Artificial Intelligence and Machine Learning"
                Description="Machine learning provides systems the ability to automatically learn and improve from experience without being explicitly programmed"
              />
            </FadeInAnimation>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <FadeInAnimation direction="up">
              <SingleCard
                BackGroundLink="https://cursusa.com/wp-content/uploads/2021/06/android-development.jpeg"
                DescriptionLink="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605daa6daedb2d00012ba7a2/picture"
                Heading="Android Development"
                Description="Android development is the process by which applications are created for devices running the Android operating system."
              />
            </FadeInAnimation>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <FadeInAnimation direction="up">
              <SingleCard
                BackGroundLink="https://miro.medium.com/max/800/1*wqmBDlLR8LKYboTnpPSn0A.jpeg"
                DescriptionLink="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605daa6daedb2d00012ba7a2/picture"
                Heading="Cyber Security & Ethical Hacking"
                Description="Cyber test and evaluation continue to be on the forefront of the acquisition community.

"
              />
            </FadeInAnimation>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <FadeInAnimation direction="up">
              <SingleCard
                BackGroundLink="https://png.pngtree.com/png-clipart/20190520/original/pngtree-sling-bridge-red-bridge-sling-cartoon-bridge-cartoon-bridge-png-image_3981099.jpg"
                DescriptionLink="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605daa6daedb2d00012ba7a2/picture"
                Heading="Bridge Design"
                Description="This course deals with bridge systems, highlighting the more technical aspects of the design."
              />
            </FadeInAnimation>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <FadeInAnimation direction="up">
              <SingleCard
                BackGroundLink="https://png.pngtree.com/png-clipart/20190520/original/pngtree-sling-bridge-red-bridge-sling-cartoon-bridge-cartoon-bridge-png-image_3981099.jpg"
                DescriptionLink="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605daa6daedb2d00012ba7a2/picture"
                Heading="Bridge Design"
                Description="This course deals with bridge systems, highlighting the more technical aspects of the design."
              />
            </FadeInAnimation>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <FadeInAnimation direction="up">
              <SingleCard
                BackGroundLink="https://www.nojitter.com/sites/default/files/AdobeStock_203293749.jpeg"
                DescriptionLink="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605daa6daedb2d00012ba7a2/picture"
                Heading="Artificial Intelligence and Machine Learning"
                Description="Machine learning provides systems the ability to automatically learn and improve from experience without being explicitly programmed"
              />
            </FadeInAnimation>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewFeatures;
