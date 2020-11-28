import { GET_LAUNCH_DETAILS } from "../../api/Responses/MissionQueries/missionQueries";
import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import Slider from "../UI/Slider";
import SliderItem from "../UI/Slider/SliderItem";

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
    console.log(data.launch);

    content = (
      <Fragment>
        <Slider length={4}>
          <SliderItem>
            <img src={launch.links.image} width="100" height="100" />
            <h4>{launch.details}</h4>
            <h4>Data rozpoczęcia misji: {launch.launch_date_local}</h4>
          </SliderItem>
          <SliderItem>
            <h1>O rakiecie</h1>
            <h2>Nazwa: {launch.rocket.name}</h2>
            <h3>Wysokość: {launch.rocket.details.height.meters}</h3>
            <h4>Waga: {launch.rocket.details.mass.kg}</h4>
          </SliderItem>
          <SliderItem>
            Dodatkowe informacje
            <h4>{launch.links.wikipedia}</h4>
            <h4>{launch.links.article}</h4>
          </SliderItem>
          <SliderItem>
            <h1>Dodaj do ulubionych</h1>
            <button onClick={() => {}}>Dodaj do ulubionych</button>
          </SliderItem>
        </Slider>
      </Fragment>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default Details;
