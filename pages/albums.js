import { gql, useQuery } from "@apollo/client";
import AlbumCard from "../components/albumCard";
import Layout from "../components/Layout";

const GET_ALBUMS = gql`
  query getallAlbums {
    allAlbums {
      nodes {
        camposDeAlbums {
          releaseDate
          cover {
            node {
              databaseId
              mediaItemUrl
            }
          }
        }
        databaseId
        slug
      }
    }
  }
`;

export default function Albums() {
  const { loading, error, data } = useQuery(GET_ALBUMS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      <ul>
        {data.allAlbums.nodes.map((album) => (
          <li key={album.databaseId}>
            <AlbumCard album={album} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
