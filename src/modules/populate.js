import showsGot, { renderShows } from './get-shows';

const populate = async () => {
  await showsGot();
  renderShows();
};

export default populate;
