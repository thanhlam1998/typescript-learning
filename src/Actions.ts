import { IEpisode, IAction, IState } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const DataJSON = await data.json();
  const {
    _embedded: { episodes },
  } = DataJSON;
  return dispatch({
    type: "FETCH_DATA",
    payload: episodes,
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
  const episodeInFav = state.favorites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode,
  };
  if (episodeInFav) {
    const favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutEpisode,
    };
  }
  return dispatch(dispatchObj);
};
