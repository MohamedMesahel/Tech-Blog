// Create new Post form
const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#titleN').value.trim();
    const content = document.querySelector('#contentN').value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
    const response = await fetch(`/api/posts/`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document
    .querySelector('#post-form')
    .addEventListener('submit', newFormHandler);