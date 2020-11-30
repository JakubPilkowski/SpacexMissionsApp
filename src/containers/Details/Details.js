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

const Details = ({ id, isFavourite, onClose }) => {
  const { error, loading, data } = useQuery(GET_LAUNCH_DETAILS, {
    variables: {
      id,
    },
  });
  let content;

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

    content = (
      <FavouritesContext.Consumer>
        {(context) => (
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
                <AddToFavourites
                  click={() => addToFavourites(launch, context)}
                />
              </SliderItem>
            ) : null}
          </Slider>
        )}
      </FavouritesContext.Consumer>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default Details;
