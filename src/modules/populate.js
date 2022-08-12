import showsGot, { displayShows } from './get-shows';

const populate = async () => {
  await showsGot();
  displayShows();
};

export default populate;
