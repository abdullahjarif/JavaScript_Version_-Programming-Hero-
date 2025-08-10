document.getElementById('post_Btn').addEventListener("click",function post(){
    const inputComment = document.getElementById('new_comment');
    const newComment = inputComment.value;

    // substep: 01 --> get the comment container
    // create a new element
    // set the text of the comment as the innerText of p_Comment tag
    // add the p_Comment tag using appendChild()
    const addCommentContainer = document.getElementById('add_Comment');
    const p_Comment = document.createElement('p');
    p_Comment.innerText = newComment;
    addCommentContainer.appendChild(p_Comment);

    // clear the comment 
    inputComment.value = '';
});