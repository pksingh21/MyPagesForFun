import "./Intro.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AnimationAppear from "../Animations/AnimationAppear";
import Thanos from "./Thanos";
import { useState, useRef } from "react";

import DustEffect from "react-dust-effect";
import useIntersection from "./useIntersection";
function Intro() {
  const theme = createTheme({
    typography: {
      fontFamily: ["JetBrains Mono", "monospace"].join(","),
    },
  });
  const [state, setState] = useState(false);
  let ref = useRef(null);
  const Logo = `data:image/png;base64,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`;
  let inViewport = useIntersection(ref, "0px"); // Trigger as soon as the element becomes visible

  return (
    <>
      <div
        className="ok"
        onMouseEnter={() => {
          setState(!state);
          console.log("IN");
        }}
        onTouchStart={() => {
          setState(!state);
        }}
      >
        <ThemeProvider theme={theme}>
          <Grid
            container
            spacing={0}
            alignItems="center"
            mt="200px"
            marginBottom="400px"
          >
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Grid item xs={11}>
                <AnimationAppear direction="down">
                  <Typography
                    style={{ fontSize: "6vw", marginBottom: "4vw" }}
                    fontFamily="'Roboto Mono', monospace"
                  >
                    {" "}
                    EXPECTING HUGE PARTICIPATION FROM YOUR SIDE!
                    <Divider
                      sx={{ borderBottomWidth: 5, textAlign: "left" }}
                      variant="fullWidth"
                      direction="rtl"
                    />
                  </Typography>
                </AnimationAppear>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <Grid item xs={11}>
                <Typography
                  fontSize="5vw"
                  fontWeight="light-bold"
                  fontFamily="'Roboto Mono', monospace"
                >
                  {" "}
                  SEE YOU IN WORKSHOPS!
                  <Divider
                    sx={{ borderBottomWidth: 5, textAlign: "left" }}
                    variant="fullWidth"
                    direction="rtl"
                  />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="10px"
      >
        <Grid item xs={10}>
          <div
            onMouseEnter={() => {}}
            style={{
              height: "500px",
              width: "200px",
              marginTop: "-380px",
              verticalAlign: "top",
              alignItems: "center",
            }}
            ref={ref}
          >
            <DustEffect src={Logo} show={!state} />
            {console.log("ViewPort", inViewport, ref)}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default Intro;
