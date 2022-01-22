async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('.title').value.trim();
    const post_preview = document.querySelector('.post-preview').value.trim();
    const post_content = document.querySelector('.post-content').value.trim();

    console.log(title, post_content);
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_preview,
        post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#save-post').addEventListener('click', editFormHandler);
  