import React, { lazy, Suspense } from "react";

import { Store } from "./Store";
import { toggleFavAction } from "./Actions";
import { IEpisodeProps } from "./interfaces";

const EpisodesList = lazy<any>(() => import("./EpisodesList"));

const FavesPage = (): JSX.Element => {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </Suspense>
  );
};

export default FavesPage;
