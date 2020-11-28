import { useState } from "react";
import { Mission } from "../../../components";
import { GET_LAUNCHES } from "../../../api/Responses/MissionQueries/missionQueries";
import { useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";

const Missions = () => {
  const [hasMore, setHasMore] = useState(true);

  const { loading, error, data, fetchMore } = useQuery(GET_LAUNCHES, {
    variables: {
      offset: 0,
      limit: 20,
    },
  });

  if (loading) return <div>Ładowanie</div>;

  if (error) return <div>Error</div>;

  let content = data.launches.map((launch, index) => (
    <Mission key={launch.id} {...launch} click={() => {}} />
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
      loader={<p>Loading...</p>}
    >
      {content}
      {!hasMore ? <p>Nie ma więcej wyników</p> : null}
    </InfiniteScroll>
  );
};

export default Missions;
