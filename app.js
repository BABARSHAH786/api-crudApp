const apiURL = 'https://66f91c9b2a683ce97310ef36.mockapi.io/api/v1/posts';

function fetchPosts() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.log('error', error));
}

fetchPosts();

function displayData(posts) {
    const postParentDiv = document.getElementById("posts");
    postParentDiv.innerHTML = ''; // Clear previous posts

    posts.forEach(post => createPostElement(post, postParentDiv));
}

function createPostElement(post, parentDiv) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    postDiv.innerHTML = `
        <div class="post-header">
            <img src="${post.avatar}" alt="Avatar">
            <div>
                <h3>${post.name}</h3>
                <small>${post.createdAt}</small>
            </div>
        </div>
        <h3>${post.title}</h3>
        <p>${post.body || "This is the post body content."}</p>
        <div class="actions">
            <button class="edit-btn" onclick="editPost(${post.id})">Edit</button>
            <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
        </div>
    `;

    parentDiv.appendChild(postDiv);
}

function toggleCreatePostForm() {
    const formDiv = document.getElementById('create-post');
    formDiv.style.display = formDiv.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('createPostForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing
    const name = document.getElementById('name').value;
    const avatar = document.getElementById('avatar').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const newPost = {
        name: name,
        title: title,
        avatar: avatar,
        body: body,
        createdAt: new Date().toISOString()
    };

    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(data => {
        const postParentDiv = document.getElementById("posts");
        createPostElement(data, postParentDiv); // Add the new post to the DOM
        // toggleCreatePostForm(); // Hide form after posting
        e.target.reset(); // Clear form inputs
    })
    .catch(error => console.log('error', error));
});


//new add above for create post
function editPost(postId) {
  isEditing = true; // Set edit mode to true
  editPostId = postId; // Store the ID of the post being edited

  fetch(`${apiURL}/${postId}`)
    .then(response => response.json())
    .then(post => {
      // Populate form fields with post data
      document.getElementById('name').value = post.name;
      document.getElementById('title').value = post.title;
      document.getElementById('avatar').value = post.avatar;
      document.getElementById('body').value = post.body;

       
    })
    .catch(error => console.log('error', error));
}

document.getElementById('createPostForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // remaining post edit post me neglect hongay

  if (isEditing) {
    // Update existing post
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const avatar = document.getElementById('avatar').value;
    const body = document.getElementById('body').value;

    const updatedPost = {
      name: name,
      title: title,
      avatar: avatar,
      body: body,
    };

    fetch(`${apiURL}/${editPostId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPost)
    })
    .then(response => response.json())
    .then(data => {
      // Update UI with the updated post (optional) hai
      fetchPosts(); // Reload posts to reflect changes k liye
      resetForm(); // Reset form after update ho jaye
    })
    .catch(error => console.log('error', error));
  }
});

function resetForm() {
  document.getElementById('createPostForm').reset();
  isEditing = false; // Reset edit mode
  editPostId = null;
}

//delete post
function deletePost(postId) {
        fetch(`${apiURL}/${postId}`, {
            method: 'DELETE'
        })
        .then(response => {
            alert('Successfully Delete')
    
            if (!response.ok) throw new Error("Failed to delete post");
            fetchPosts(); // Reload posts to reflect deletion
                console.log('response',response)
    
        })
        .catch(error => console.log('error', error));
    }
