// TODO: Build commentFormSubmit function
const commentFormSubmit = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-post').value.trim();
    const postId = document.querySelector('#postID').value.trim();

    if (content) {
        const response = await fetch('/api/posts/comment', {
            method: 'POST',
            body: JSON.stringify({
                content,
                postId
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            location.reload();
        } else {
            alert('Please add somthing before submitting');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormSubmit);