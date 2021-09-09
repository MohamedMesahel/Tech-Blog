const editFormHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('#postID').value.trim();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
};

document
.querySelector('.edit-post-form')
.addEventListener('submit', editFormHandler);