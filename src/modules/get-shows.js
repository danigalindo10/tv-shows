import { tvApi } from './api';
import elementInfo from './element-info';
import getTotalLikes from './likes/getLikes';

let shows = [];

export const renderShows = () => {
  elementInfo.showCount(shows);
  shows.forEach((data) => {
    if (data.image !== null) {
      elementInfo.renderCard(data.name, data.image.medium, data.id, data.summary, data.likes.likes);
    }
  });
};

const showsGot = async () => {
  if (shows.length > 0) {
    return shows;
  }
  const response = await fetch(`${tvApi}/show`);

  const data = await response.json();

  shows = data.slice(0, 240);

  const likes = (await getTotalLikes()).reduce((idLikes, like) => {
    idLikes[like.item_id] = like;
    return idLikes;
  }, {});

  shows = shows.map((show) => {
    show.likes = likes[show.id] || {};
    return show;
  });
  return shows;
};

export default showsGot;