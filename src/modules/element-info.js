import Modal from './modal/modalpopup';
import addLike from './likes/postLikes';

class elementInfo {
  static showCount = (shows) => {
    const showsNumber = document.querySelector('.item-counter');
    showsNumber.innerText = shows.length;
  }

  static renderCard = (title, imgUrl, itemID, summary, like) => {
    const cardContainer = document.querySelector('.grid-container');
    const card = document.createElement('div');
    card.classList.add('card');
    cardContainer.append(card);
    const dataInfo = `
    <div class="image-container">
      <img
        class="item-image"
        src="${imgUrl}"
      />
    </div>
    <div class="item-info">
      <h2 class="item-title">${title}</h2>
      <div class="likes-container">
        <i id="heart${itemID}" class="fa-solid fa-heart"></i>
        <span id="likes${itemID}">${like}</span>
      </div>
    </div>
    <button id="comments${itemID}" class="comments-button">Comments</button>
    `;

    card.innerHTML = dataInfo;

    const updateLikes = () => {
      const currentLikes = document.querySelector(`#likes${itemID}`).innerText;
      document.querySelector(`#likes${itemID}`).innerText = currentLikes ? Number(currentLikes) + 1 : 1;
    };

    const commentsButton = document.querySelector(`#comments${itemID}`);

    commentsButton.addEventListener('click', () => Modal(title, imgUrl, itemID, summary));

    const heartIcon = document.querySelector(`#heart${itemID}`);

    heartIcon.addEventListener('click', async (e) => {
      e.preventDefault();
      updateLikes();
      await addLike(itemID);
    });
  };
}
export default elementInfo;