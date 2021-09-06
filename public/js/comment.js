async function commentFormHandler(event) {
    event.preventDefault();

    const content = document.querySelector('textarea[name="comment-body"]').value.trim();
    const postId = document.querySelector('textarea[name="postId"]').value.trim();

    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
