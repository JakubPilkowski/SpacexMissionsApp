import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query GetLaunches($offset: Int!, $limit: Int!) {
    launches(offset: $offset, limit: $limit) {
      name: mission_name
      links {
        image: mission_patch_small
      }
      details
      id
    }
  }
`;

export const GET_LAUNCH_DETAILS = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      links {
        article: article_link
        wikipedia
        image: mission_patch_small
        presskit
        video: video_link
      }
      rocket {
        details: rocket {
          id
          height {
            meters
          }
          mass {
            kg
          }
          name
          description
        }
      }
      launch_date_local
      details
      name: mission_name
    }
  }
`;
