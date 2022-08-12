import getComments from './getComments';
import postComments from './postcomments';
import createComments from './populateComments';

const Modal = async (dataname, dataimagemedium, dataid, datasummary) => {
  const ModalHTML = `
  <div class="modal-popUp">
  <div class="popup-title-container">
    <div class="title-popup pop-title">${dataname}</div>
    <div class="close-icon">Χ</div>
  </div>
  <div class="image-summary">
    <img
      class="image-popup"
      src="${dataimagemedium}"
    />
    <div class="data-summary">
      ${datasummary}
    </div>
  </div>
  <div id="commentsCount-popup" class="comments-popup"></div>
  <div class="comments-popup">
    <div class="comments">
      <div class="comment-area">
      </div>
    </div>
    <div class="form-container">
      <h3>Add a comment</h3>
      <form class="form-comment">
        <input class="input-name" placeholder="Enter your name..." />
        <textarea class="text" placeholder="Write a message"></textarea>
        <button class="comment-btn">Submit</button>
      </form>
    </div>
  </div>
</div>
`;

  const Modal = document.querySelector('.modal');
  Modal.innerHTML = ModalHTML;

  const comments = document.querySelector('#commentsCount-popup');
  const commentArea = document.querySelector('.comment-area');

  const commentUpdate = async (commentArea) => {
    const comm = await getComments(dataid).catch(() => []);
    if (comm.length < 1 || comm.length === undefined) {
      comments.textContent = 'Comments (0)';
    } else {
      comm.forEach((comment) => {
        createComments(comment, commentArea);
      });
      comments.textContent = `Comments (${comm.length})`;
    }
  };

  const commentBtn = document.querySelector('.comment-btn');
  const nameInput = document.querySelector('.input-name');
  const commentInput = document.querySelector('.text');

  commentBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    commentArea.innerHTML = '';
    await postComments(dataid, nameInput.value, commentInput.value);
    commentUpdate(commentArea);
    nameInput.value = '';
    commentInput.value = '';
  });

  commentUpdate(commentArea);

  const closeIcon = document.querySelector('.close-icon');
  const modalPopUp = document.querySelector('.modal-popUp');

  closeIcon.addEventListener('click', () => {
    modalPopUp.remove();
    modalPopUp.style.display = 'none';
  });
};
export default Modal;