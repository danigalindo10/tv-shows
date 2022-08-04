import Modal from './modal/modalpopup';
// CREATE ELEMENTS BASED ON INDEX.HTML
class elementInfo {
  static renderCard = (title, imgUrl, id, summary) => {
    const cardContainer = document.querySelector('.grid-container');
    const card = document.createElement('div');
    card.classList.add('card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.classList.add('item-image');
    image.src = imgUrl;

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('intem-info');

    const itemTitle = document.createElement('h2');
    itemTitle.classList.add('item-title');
    itemTitle.innerText = title;

    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes-container');

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fa-solid', 'fa-heart');

    const commentsButton = document.createElement('button');
    commentsButton.classList.add('comments-button');
    commentsButton.textContent = 'Comments';
    commentsButton.addEventListener('click', () => {
      Modal(title, imgUrl, id, summary);
    });

    cardContainer.append(card);
    card.append(imageContainer, itemInfo, commentsButton);
  };
}

export default elementInfo;