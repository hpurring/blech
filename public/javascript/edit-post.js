async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('.title').value.trim();
    console.log(title)
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title: title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("res: ", response);
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#save-post').addEventListener('click', editFormHandler);
  