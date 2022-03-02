async function newFormHandler(event) {
    event.preventDefault();
    const blog_name = document.querySelector('#blog_name').value;
    const description = document.querySelector('#description').value;
    
    const response = await fetch(`/api/blog`, {
      method: 'POST',
      body: JSON.stringify({
        blog_name,
        description,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add blog');
    }
}

const commentButton = document.querySelector('#comment');
const commentText = document.querySelector('#commentText');
const post = document.querySelector('#post');

commentButton.addEventListener('click', newComment);

function newComment() {
  commentText.classList.remove('hidden');
  post.classList.remove('hidden');
  commentButton.classList.add('hidden');
  
};

post.addEventListener('click', postComment);

async function postComment() {
  const text = commentText.value;

  const response = await fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({
      text
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add blog');
  }
};

// document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);

