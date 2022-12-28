import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data }) => {
  const { songs, loading } = data;

  const renderSongs = () => {
    return songs.map((song) => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  };

  if (loading) return <div>Loading...</div>;

  return <ul className="collection">{renderSongs()}</ul>;
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
