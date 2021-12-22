import React from "react";
import "./CardX.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
function Cards(CardProperties) {
  return (
    <>
      <a class="card">
        <img src={CardProperties.BackGroundLink} class="card__image" alt="" />
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              class="card__thumb"
              src={CardProperties.DescriptionLink}
              alt=""
            />
            <div class="card__header-text">
              <h3 class="card__title"> {CardProperties.Heading} </h3>
              <span class="card__status">Wissenaire'22</span>
            </div>
          </div>
          <p class="card__description">{CardProperties.Description}</p>
          <p class="card__description1">
            <Grid container justifyContent="center">
              <Button>Click to Learn More</Button>
            </Grid>
          </p>
        </div>
      </a>
    </>
  );
}
export default Cards;
