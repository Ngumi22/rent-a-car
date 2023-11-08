import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clom0q5sq9wbr01t950rleuq3/master";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        price
        createdAt
        id
        name
        publishedAt
        updatedAt
        carType
        carBrand
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
