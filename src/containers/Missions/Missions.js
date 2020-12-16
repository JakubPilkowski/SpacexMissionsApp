import { Fragment, useState } from "react";
import Mission from "./Mission";
import { GET_LAUNCHES } from "../../api/Responses/MissionQueries/missionQueries";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import BeanEaterLoading from "components/UI/LoadingIndicators/BeanEaterLoading/BeanEaterLoading";
import DotLoading from "components/UI/LoadingIndicators/DotLoading/DotLoading";
import Error from "components/UI/Error/Error";
import EndListView from "components/EndListView/EndListView";
import PropTypes from "prop-types";
import "../../sass/pages/missions.scss";

const Missions = ({ favourites }) => {
  const [hasMore, setHasMore] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(GET_LAUNCHES, {
    variables: {
      offset: 0,
      limit: 20,
    },
  });

  const onBackToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hasMoreCheckHandler = (launches) => {
    if (launches.length === 0) {
      setHasMore(false);
    }
  };

  if (loading)
    return (
      <div
        className="flex-wrapper-column-center"
        style={{
          marginTop: "100px",
        }}
      >
        <BeanEaterLoading />
      </div>
    );

  if (error) {
    return <Error response={error.networkError.response} />;
  }
  let content = data.launches.map((launch, index) => (
    <Mission
      key={launch.id}
      {...launch}
      image={launch.links.image}
      isFavourite={
        favourites.find((favourite) => favourite.id === launch.id)
          ? true
          : false
      }
    />
  ));
  return (
    <Fragment>
      <h1 className="title">Missions List</h1>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {
          return fetchMore({
            variables: {
              offset: data.launches.length,
            },
          }).then(({ data: { launches } }) => hasMoreCheckHandler(launches));
        }}
        threshold={50}
        hasMore={hasMore}
        loader={
          <div className="flex-wrapper-row">
            <DotLoading />
          </div>
        }
      >
        {content}
        {!hasMore ? <EndListView onBackToTop={onBackToTopHandler} /> : null}
      </InfiniteScroll>
    </Fragment>
  );
};

Missions.propTypes = {
  favourites: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      details: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Missions;
