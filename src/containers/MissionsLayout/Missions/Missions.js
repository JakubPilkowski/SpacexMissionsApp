import { Fragment, useState } from "react";
import { Mission, Details } from "../../../components";
import { GET_LAUNCHES } from "../../../api/Responses/MissionQueries/missionQueries";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import {
  FlexWrapperColumnCenter,
  FlexWrapperRowCenter,
} from "utils/Wrappers.css";
import BeanEaterLoading from "components/UI/LoadingIndicators/BeanEaterLoading/BeanEaterLoading";
import DotLoading from "components/UI/LoadingIndicators/DotLoading/DotLoading";
import Error from "components/UI/Error/Error";
import { Title } from "utils/Texts.css";
import EndListView from "components/EndListView/EndListView";

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

  if (loading)
    return (
      <FlexWrapperColumnCenter
        style={{
          marginTop: "100px",
        }}
      >
        <BeanEaterLoading />
      </FlexWrapperColumnCenter>
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
      <Title>Missions List</Title>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {
          return fetchMore({
            variables: {
              offset: data.launches.length,
            },
          }).then(({ data: { launches } }) => {
            if (launches.length === 0) {
              setHasMore(false);
            }
          });
        }}
        threshold={50}
        hasMore={hasMore}
        loader={
          <FlexWrapperRowCenter>
            <DotLoading />
          </FlexWrapperRowCenter>
        }
      >
        {content}
        {!hasMore ? <EndListView onBackToTop={onBackToTopHandler} /> : null}
      </InfiniteScroll>
    </Fragment>
  );
};

export default Missions;
