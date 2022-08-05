const commentData = (d) => {
  const commData = document.createElement('comment-data');
  commData.textContent = d;
  return d;
};

const createComment = (data) => {
  const dataDisplay = document.createElement('data-display');
  dataDisplay.classList.add('d-display');
  const dateData = commentData(`${data.creation_date}`);
  const user = commentData(`${data.username}`);
  const comment = commentData(`${data.comment}`);
  dataDisplay.append(dateData, user, comment);
};

const createComments = (Comments, formContainer) => {
  const commentArea = document.createElement('div');
  commentArea.classList.add('comment-area');
  formContainer.appendChild(commentArea);
  Comments.forEach((comment) => {
    const individualComment = document.createElement('div');
    individualComment.classList.add('individual-comment');
    const userDate = document.createElement('p');
    userDate.textContent = comment.creation_date;
    individualComment.appendChild(userDate);
    commentArea.appendChild(individualComment);
    const userName = document.createElement('p');
    userName.textContent = comment.username;
    individualComment.appendChild(userName);
    commentArea.appendChild(individualComment);
    const userComment = document.createElement('p');
    userComment.textContent = comment.comment;
    individualComment.appendChild(userComment);
    commentArea.appendChild(individualComment);
  });
};

export default createComments;