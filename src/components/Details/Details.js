import { GET_LAUNCH_DETAILS } from "../../api/Responses/MissionQueries/missionQueries";
import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import Slider from "../UI/Slider";
import SliderItem from "../UI/Slider/SliderItem";
import rocketHeight from "../../assets/rocket_height.svg";
import weight from "../../assets/weight.svg";
import { SliderButton } from "../UI/Slider/Slider.css";

const Details = ({ id }) => {
  console.log(id);

  const { error, loading, data } = useQuery(GET_LAUNCH_DETAILS, {
    variables: {
      id,
    },
  });
  let content;

  if (!error && !loading) {
    const launch = data.launch;
    console.log(data.launch.rocket);

    content = (
      <Fragment>
        <Slider length={4}>
          <SliderItem>
            <h1 style={{ textAlign: "center" }}>Mission details</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>{launch.details}</p>
                <p>Launch date: {launch.launch_date_local.slice(0, 10)}</p>
              </div>
              <div>
                <img src={launch.links.image} width="100" height="100" />
                <h4 style={{ textAlign: "center" }}>{launch.name}</h4>
              </div>
            </div>
          </SliderItem>
          <SliderItem>
            <h1 style={{ textAlign: "center" }}>Rocket info</h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ flex: 2 }}>
                <h3>{launch.rocket.details.name}</h3>
                <p>Description: {launch.rocket.details.description}</p>
              </div>
              <div
                style={{
                  flex: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h3>{launch.rocket.details.height.meters}m</h3>
                <img src={rocketHeight} height="75" />
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={weight} height="50" />
                <h4>{Math.round(launch.rocket.details.mass.kg / 100)}t</h4>
              </div>
            </div>
          </SliderItem>
          <SliderItem>
            <h1 style={{ textAlign: "center" }}>Additional info</h1>
            <a href={launch.links.wikipedia} style={{ display: "block" }}>
              Wikipedia
            </a>
            <a href={launch.links.article} style={{ display: "block" }}>
              Article
            </a>
            <a href={launch.links.presskit} style={{ display: "block" }}>
              Press Kit
            </a>
            <a href={launch.links.video} style={{ display: "block" }}>
              Video
            </a>
          </SliderItem>
          <SliderItem>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1 style={{ textAlign: "center" }}>Add to favourites</h1>
              <SliderButton
                variant="outlined"
                color="primary"
                style={{ marginBottom: "24px" }}
                onClick={() => {}}
              >
                Add to favourites
              </SliderButton>
            </div>
          </SliderItem>
        </Slider>
      </Fragment>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default Details;
