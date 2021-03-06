import { GET_LAUNCH_DETAILS } from "../../api/Responses/MissionQueries/missionQueries";
import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { FlexWrapperRowCenter } from "themes/Wrappers.css";
import { CenteredH2 } from "themes/Texts.css";
import {
  Error,
  DotLoading,
  Slider,
  AddToFavourites,
  AdditionalInfo,
  MissionInfo,
  RocketInfo,
  SliderItem,
} from "../../components";

import FavouritesContext from "../../context/favourites-context";
import PropTypes from "prop-types";

const Details = ({ id, isFavourite, onClose }) => {
  const { error, loading, data } = useQuery(GET_LAUNCH_DETAILS, {
    variables: {
      id,
    },
  });
  let content;
  let favouritesSlider;

  const addToFavourites = ({ name, details, links: { image } }, context) => {
    const favourite = {
      id,
      name,
      details,
      image,
    };
    context.add(favourite);
    onClose();
  };
  if (loading)
    return (
      <FlexWrapperRowCenter>
        <DotLoading />
        <CenteredH2>Loading...</CenteredH2>
      </FlexWrapperRowCenter>
    );

  if (error) return <Error response={error.networkError.response} />;
  if (!error && !loading) {
    const launch = data.launch;

    if (!isFavourite) {
      favouritesSlider = (
        <SliderItem key={4}>
          <AddToFavourites click={() => addToFavourites(launch, context)} />
        </SliderItem>
      );
    }
    // {!isFavourite ? (
    //   <SliderItem key={4}>
    //     <AddToFavourites
    //       click={() => addToFavourites(launch, context)}
    //     />
    //   </SliderItem>
    // ) : null}

    content = (
      <FavouritesContext.Consumer>
        {(context) => (
          <Slider length={!isFavourite ? 4 : 3}>
            <SliderItem key={1}>
              <MissionInfo launch={launch} />
            </SliderItem>
            <SliderItem key={2}>
              <RocketInfo details={launch.rocket.details} />
            </SliderItem>
            <SliderItem key={3}>
              <AdditionalInfo links={launch.links} />
            </SliderItem>
            {favouritesSlider}
          </Slider>
        )}
      </FavouritesContext.Consumer>
    );
  }

  return <Fragment>{content}</Fragment>;
};

Details.propTypes = {
  id: PropTypes.string.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Details;
