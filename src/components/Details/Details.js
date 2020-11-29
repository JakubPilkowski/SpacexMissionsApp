import { GET_LAUNCH_DETAILS } from "../../api/Responses/MissionQueries/missionQueries";
import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import Slider from "../UI/Slider";
import SliderItem from "../UI/Slider/SliderItem";
import { SliderButton } from "../UI/Slider/Slider.css";
import MissionInfo from "./MissionInfo/MissionInfo";
import RocketInfo from "./RocketInfo/RocketInfo";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import AddToFavourites from "./AddToFavourites/AddToFavourites";

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

    content = (
      <Fragment>
        <Slider length={4}>
          <SliderItem>
            <MissionInfo launch={launch} />
          </SliderItem>
          <SliderItem>
            <RocketInfo details={launch.rocket.details} />
          </SliderItem>
          <SliderItem>
            <AdditionalInfo links={launch.links} />
          </SliderItem>
          <SliderItem>
            <AddToFavourites />
          </SliderItem>
        </Slider>
      </Fragment>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default Details;
