import getComments from './getComments.js';
import postComments from './postcomments.js';

const Modal = async (dataname, dataimagemedium, dataid, datasummary) => {
    const Modal = document.querySelector('.modal');
    const modalPopUp = document.createElement('div');
    modalPopUp.classList.add('modal-popUp');
    // console.log('Modal');

    const imageSummary = document.createElement('div');
    imageSummary.classList.add('image-summary');
    const imagePopUp = document.createElement('image');
    imagePopUp.classList.add('image-popup');
    imagePopUp.src = data.image.medium;

    const dataSummary = document.createElement('div');

    dataSummary.classList.add('datasummary');
    dataSummary.innerHTML = datasummary;
    imageSummary.append(imagePopUp, dataSummary);

    const dataInfo = document.createElement('div');
    dataInfo.classList.add('data-info');

    const titlePopUp = document.createElement('div');
    titlePopUp.classList.add('title-popup');
    titlePopUp.innerText = data.name;

    const closeIcon = document.createElement('button');
    closeIcon.classList.add('close-icon');
    closeIcon.innerHTML = '&#x3a7';

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-popup');

    const comments = document.createElement('div');
    comments.classList.add(comments-popup);

    const commentsCard = documents.createElement('box');
    commentsCard.classList.add('comments');
    const rowInfo = document.createElement('row-info');
    const dateInfo = document.createElement('info');
    dateInfo.textContent = 'Date';
    const nameInfo = document.createElement('info');
    nameInfo.textContent = 'Great movie';
    const headerInfo = document.createElement('info');
    headerInfo.textContent = 'Comments';
    rowInfo.append(dateInfo, nameInfo, headerInfo);

    const cardBody = documents.createElement('card-body');
    cardBody.classList.add('card-body');
    commentsCard.append(rowInfo, cardBody);

    const commentUpdate = async () => {
        const comm = await getComments(dataid).catch(() => []);
        if (comm.length) {
            createComments(comm);
            const commentCount = getCommentsCount();
            comments.textContent = `comments (${commentCount})`;
        } else {
            comments.textContent = 'comments (0)';
        }
    };
    commentUpdate();
    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');
    const h3 = document.createElement('h3');
    h3.textContent = 'Add a comment';

    const form = document.createElement('form');
    form.classList.add('form-comment');
    const name = document.createElement('name-input');
    const commentInput = document.createElement('textarea');
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn')
    commentBtn.textContent = 'Comments';
    form.append(name, commentInput, commentBtn);

    commentBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        await postComments(dataid, name.ariaValueMax, commentInput.value, new Date());
        commentUpdate();
        form.reset();
    });

    formContainer.append(h3, form);
    const title = document.createElement('div');
    title.classList.add('popup-title-container');
    popupTitle.classList.add('pop-title');
    title.append(popupTitle, closeIcon);
    commentsContainer.append(formContainer, commentsCard);
    modalPopUp.append(title, imageSummary, comments, commentsContainer);

    Modal.style.display = 'flex';
    Modal.appendChild(modalPopUp);

    closeIcon.addEventListener('click', () => {
        modalPopUp.remove();
        modalPopUp.style.display = 'none';
    });
};


export default Modal;