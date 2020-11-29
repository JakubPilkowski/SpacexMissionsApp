import { Fragment, useState } from "react";
import { Mission, Details } from "../../../components";
import { GET_LAUNCHES } from "../../../api/Responses/MissionQueries/missionQueries";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
import { FlexWrapperRowCenter } from "utils/Wrappers.css";
import BeanEaterLoading from "components/UI/LoadingIndicators/BeanEaterLoading/BeanEaterLoading";
import DotLoading from "components/UI/LoadingIndicators/DotLoading/DotLoading";

const Missions = ({ favourites }) => {
  const [hasMore, setHasMore] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(GET_LAUNCHES, {
    variables: {
      offset: 0,
      limit: 20,
    },
  });

  if (loading)
    return (
      <FlexWrapperRowCenter>
        <BeanEaterLoading />
      </FlexWrapperRowCenter>
    );

  if (error) return <div>Error</div>;

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
      {!hasMore ? <p>Nie ma więcej wyników</p> : null}
    </InfiniteScroll>
  );
};

export default Missions;
