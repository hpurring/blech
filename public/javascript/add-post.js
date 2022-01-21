async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_preview = document.querySelector('textarea[name="post-preview"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value;
    
  
    const response = await fetch(`/api/posts`, {
      
      method: 'POST',
      body: JSON.stringify({
        title,
        post_content,
        post_preview
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
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);