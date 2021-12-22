import "./Intro.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import AnimateRightLeft from "../Animations/AnimateRightLeft";
import AnimationAppear from "../Animations/AnimationAppear";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
function Intro() {
  const theme = createTheme({
    typography: {
      fontFamily: ["JetBrains Mono", "monospace"].join(","),
    },
  });

  return (
    <>
      <div className="ok">
        <ThemeProvider theme={theme}>
          <Stack direction="row" justifyContent="end" mt={8}>
            <img
              className="wissTag"
              src={"https://wissenaire.org/images/logo.png"}
              alt="ok"
              height="100vw"
              width="420vw"
            />
          </Stack>
          <Grid container spacing={0} alignItems="center" mt="200px">
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <AnimateRightLeft direction="right">
                <Grid item xs={11}>
                  <Typography
                    style={{ fontSize: "7vw" }}
                    fontFamily="'Roboto Mono',monospace"
                  >
                    {" "}
                    WE ARE WISSENAIRE{" "}
                    <Divider
                      sx={{ borderBottomWidth: 5, textAlign: "left" }}
                      variant="fullWidth"
                      direction="rtl"
                    />
                  </Typography>
                </Grid>
              </AnimateRightLeft>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <AnimateRightLeft direction="left">
                <Grid item xs={11}>
                  <Typography
                    fontSize="5vw"
                    fontWeight="light-bold"
                    fontFamily="'Roboto Mono', monospace"
                  >
                    {" "}
                    SOME OF OUR WORKSHOPS
                    <Divider
                      sx={{ borderBottomWidth: 5, textAlign: "left" }}
                      variant="fullWidth"
                      direction="rtl"
                    />
                  </Typography>
                </Grid>
              </AnimateRightLeft>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}
export default Intro;
