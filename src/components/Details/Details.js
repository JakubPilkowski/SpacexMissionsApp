import { GET_LAUNCH_DETAILS } from "../../api/Responses/MissionQueries/missionQueries";
import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import Slider from "../UI/Slider";
import SliderItem from "../UI/Slider/SliderItem";
import MissionInfo from "./MissionInfo/MissionInfo";
import RocketInfo from "./RocketInfo/RocketInfo";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import AddToFavourites from "./AddToFavourites/AddToFavourites";
import { addFavourite } from "../../actions/favourite.action";
import { connect } from "react-redux";

const Details = ({ id, isFavourite, addFavourite, onClose }) => {
  console.log(id);

  const { error, loading, data } = useQuery(GET_LAUNCH_DETAILS, {
    variables: {
      id,
    },
  });
  let content;

  const addToFavourites = () => {
    console.log(data.launch);
    const favourite = {
      id,
      name: data.launch.name,
      details: data.launch.details,
      image: data.launch.links.image,
    };
    addFavourite(favourite);
    onClose();
  };

  if (!error && !loading) {
    const launch = data.launch;

    content = (
      <Fragment>
        <Slider length={!isFavourite ? 4 : 3}>
          <SliderItem>
            <MissionInfo launch={launch} />
          </SliderItem>
          <SliderItem>
            <RocketInfo details={launch.rocket.details} />
          </SliderItem>
          <SliderItem>
            <AdditionalInfo links={launch.links} />
          </SliderItem>
          {!isFavourite ? (
            <SliderItem>
              <AddToFavourites click={addToFavourites} />
            </SliderItem>
          ) : null}
        </Slider>
      </Fragment>
    );
  }

  return <Fragment>{content}</Fragment>;
};

const mapDispatchToProps = {
  addFavourite,
};

export default connect(null, mapDispatchToProps)(Details);
