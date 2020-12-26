import React, { lazy, Suspense, useEffect } from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavAction } from "./Actions";

const EpisodesList = lazy<any>(() => import("./EpisodesList"));
const HomePage = () => {
  const { state, dispatch } = React.useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodesList {...props} />
      </section>
    </Suspense>
  );
};

export default HomePage;
