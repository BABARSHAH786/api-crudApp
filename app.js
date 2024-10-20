// const apiURL ='https://66f91c9b2a683ce97310ef36.mockapi.io/api/v1/posts';

// function fetchPosts(){
//     fetch(apiURL)
//     .then(response=>response.json())//yahan return karwaya hai {} say b karwa sakhtay thay
    
//         .then(data=>displayData(data))
//         // console.log(data);
//         .catch(error=> console.log('error',error))

//     }

// fetchPosts()

// function displayData(posts){
//     const postParentDiv =document.getElementById("posts");
//     postParentDiv.innerHTML ='';

//     const postDiv = document.createElement('div');
//     postDiv.classList.add('post');

//     posts.forEach(posts => {
//         console.log(posts);

        
        
//     });

//     postDiv.innerHTML =`
//                     <div class="post-header">
//                         <img src="${posts.avatar}" alt="Avatar">
//                         <div>
//                             <h3>${posts.name}</h3>
//                             <small>&{post.createdAt} </small>
//                         </div>
//                     </div>
//                     <h3>${posts.title} </h3>
//                     <p>This is the post body content.</p>
//                     <div class="actions">
//                         <button class="edit-btn" onclick="editPost(1)">Edit</button>
//                         <button class="delete-btn" onclick="deletePost(1)">Delete</button>
//                     </div>
//     `
//     postParentDiv.appendChild(postDiv)
//     // console.log(posts);

// }
// displayData()


// /*************************************craete post */
// document.getElementById('createPostForm').addEventListener('submit',function(e){
//     e.preventDefault()  //form ko refresh honay say bachayin ga
//     const name =document.getElementById('name').value 
//     const avatar =document.getElementById('avatar').value 
//     const title =document.getElementById('tiltle').value 
//     const body =document.getElementById('body').value 

//     //humay object banana hai
//     const newPost ={
//         name: name,
//         title: title,
//         avatar:avatar,
//         body:body,
//         createdAt:new Date().toISOString()
// }
// console.log(newPost);

// fetch(apiURL,{
//     method: 'POST',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body:JSON.stringify(newPost)
// })


// })









// /**********************practice */
// // const newUser = {
// //     name:'babar',
// //     job: 'Chemist'
// // }
// // fetch('https://reqres.in/api/users/55', {
// // method :'PUT',
// // headers: {
// //     'Content-Type' : 'application/json'
// // },
// //     body: JSON.stringify(newUser)
// // }).then(res => {
// //     if(!res.ok){
// //         console.log('Problem');
// //         return;
// //     }

// //  return res.json();
// // })

// // .then(data => {
// //     console.log('Sucess');
// // })
// // .catch(error => {
// //     console.log(error);
// // }



/*******************************************************practice work all post show good*/
// const apiURL = 'https://66f91c9b2a683ce97310ef36.mockapi.io/api/v1/posts';

// function fetchPosts() {
//     fetch(apiURL)
//         .then(response => response.json())
//         .then(data => displayData(data))
//         .catch(error => console.log('error', error));
// }

// fetchPosts();

// function displayData(posts) {
//     const postParentDiv = document.getElementById("posts");
//     postParentDiv.innerHTML = ''; // Clear previous posts

//     posts.forEach(post => {
//         const postDiv = document.createElement('div');
//         postDiv.classList.add('post');

//         postDiv.innerHTML = `
//             <div class="post-header">
//                 <img src="${post.avatar}" alt="Avatar">
//                 <div>
//                     <h3>${post.name}</h3>
//                     <small>${post.createdAt}</small>
//                 </div>
//             </div>
//             <h3>${post.title}</h3>
//             <p>${post.body || "This is the post body content."}</p>
//             <div class="actions">
//                 <button class="edit-btn" onclick="editPost(${post.id})">Edit</button>
//                 <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
//             </div>
//         `;

//         postParentDiv.appendChild(postDiv);
//     });
// }

// document.getElementById('createPostForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent form from refreshing
//     const name = document.getElementById('name').value;
//     const avatar = document.getElementById('avatar').value;
//     const title = document.getElementById('tiltle').value;
//     const body = document.getElementById('body').value;

//     const newPost = {
//         name: name,
//         title: title,
//         avatar: avatar,
//         body: body,
//         createdAt: new Date().toISOString()
//     };
//     console.log(newPost);

//     fetch(apiURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newPost)
//     })
//     .then(response => response.json())
//     .then(data => {
//         fetchPosts(); // Reload posts to include the new one
//     })
//     .catch(error => console.log('error', error));
// });


/****************************************now practice for form post it work new post ho rahi hai*/
// const apiURL = 'https://66f91c9b2a683ce97310ef36.mockapi.io/api/v1/posts';

// function fetchPosts() {
//     fetch(apiURL)
//         .then(response => response.json())
//         .then(data => displayData(data))
//         .catch(error => console.log('error', error));
// }

// fetchPosts();

// function displayData(posts) {
//     const postParentDiv = document.getElementById("posts");
//     postParentDiv.innerHTML = ''; // Clear previous posts

//     posts.forEach(post => createPostElement(post, postParentDiv));
// }

// function createPostElement(post, parentDiv) {
//     const postDiv = document.createElement('div');
//     postDiv.classList.add('post');

//     postDiv.innerHTML = `
//         <div class="post-header">
//             <img src="${post.avatar}" alt="Avatar">
//             <div>
//                 <h3>${post.name}</h3>
//                 <small>${post.createdAt}</small>
//             </div>
//         </div>
//         <h3>${post.title}</h3>
//         <p>${post.body || "This is the post body content."}</p>
//         <div class="actions">
//             <button class="edit-btn" onclick="editPost(${post.id})">Edit</button>
//             <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
//         </div>
//     `;

//     parentDiv.appendChild(postDiv);
// }

// function toggleCreatePostForm() {
//     const formDiv = document.getElementById('create-post');
//     formDiv.style.display = formDiv.style.display === 'none' ? 'block' : 'none';
// }

// document.getElementById('createPostForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent form from refreshing
//     const name = document.getElementById('name').value;
//     const avatar = document.getElementById('avatar').value;
//     const title = document.getElementById('title').value;
//     const body = document.getElementById('body').value;

//     const newPost = {
//         name: name,
//         title: title,
//         avatar: avatar,
//         body: body,
//         createdAt: new Date().toISOString()
//     };

//     fetch(apiURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newPost)
//     })
//     .then(response => response.json())
//     .then(data => {
//         const postParentDiv = document.getElementById("posts");
//         createPostElement(data, postParentDiv); // Add the new post to the DOM
//         toggleCreatePostForm(); // Hide form after posting
//         e.target.reset(); // Clear form inputs
//     })
//     .catch(error => console.log('error', error));
// });

/***********************************************gemkinik check post edit *********/
// const apiURL = 'https://66f91c9b2a683ce97310ef36.mockapi.io/api/v1/posts';
// let isEditing = true; // Track if editing
// let editPostId = true; // Track which post is being edited

// function fetchPosts() {
//     fetch(apiURL)
//         .then(response => response.json())
//         .then(data => displayData(data))
//         .catch(error => console.log('error', error));
// }

// fetchPosts();

// function displayData(posts) {
//     const postParentDiv = document.getElementById("posts");
//     postParentDiv.innerHTML = ''; // Clear previous posts

//     posts.forEach(post => createPostElement(post, postParentDiv));
// }

// function createPostElement(post, parentDiv) {
//     const postDiv = document.createElement('div');
//     postDiv.classList.add('post');

//     postDiv.innerHTML = `
//         <div class="post-header">
//             <img src="${post.avatar}" alt="Avatar">
//             <div>
//                 <h3>${post.name}</h3>
//                 <small>${post.createdAt}</small>
//             </div>
//         </div>
//         <h3>${post.title}</h3>
//         <p>${post.body || "This is the post body content."}</p>
//         <div class="actions">
//             <button class="edit-btn" onclick="editPost(${post.id})">Edit</button>
//             <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
//         </div>
//     `;

//     parentDiv.appendChild(postDiv);
// }

// function toggleCreatePostForm() {
//     const formDiv = document.getElementById('create-post');
//     formDiv.style.display = formDiv.style.display === 'none' ? 'block' : 'none';
// }
// function toggleUpdatePostForm() {
//     const formDiv = document.getElementById('update-post');
//     formDiv.style.display = formDiv.style.display === 'none' ? 'block' : 'none';
// }
// function editPost(postId) {
//     fetch(`${apiURL}/${postId}`)
//         .then(response => response.json())
//         .then(post => {
//             // Populate form fields with post data
//             document.getElementById('create-post').style ='none'
//             document.getElementById('update-post').style ='inline'
//             document.getElementById('name1').value = post.name;
//             document.getElementById('title1').value = post.title;
//             document.getElementById('avatar1').value = post.avatar;
//             document.getElementById('body1').value = post.body;

//             // Show form and set it to update mode
//             toggleCreatePostForm();
//             document.getElementById('form-title').innerText = "Update Post";
//             document.getElementById('submitButton').innerText = "Update";

//             isEditing = true;
//             editPostId = postId; // Store the ID of the post being edited
//         })
//         .catch(error => console.log('error', error));
// }

// document.getElementById('createPostForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const avatar = document.getElementById('avatar').value;
//     const title = document.getElementById('title').value;
//     const body = document.getElementById('body').value;

//     const postData = {
//         name: name,
//         title: title,
//         avatar: avatar,
//         body: body,
//         createdAt: new Date().toISOString()
//     };

//     if (isEditing) {
//         // Update existing post
//         fetch(`${apiURL}/${editPostId}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(postData)
//         })
//         .then(response => response.json())
//         .then(data => {
//             fetchPosts(); // Reload posts to include the updated one
//             // resetForm(); // Reset form to default state
//             // alert('Successfully Delete')

//         })
//         .catch(error => console.log('error', error));
//     } else {
//         // Create new post
//         fetch(apiURL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(postData)
//         })
//         .then(response => response.json())
//         .then(data => {
//             createPostElement(data, document.getElementById("posts")); // Add new post to the DOM
//             resetForm(); // Reset form to default state
//         })
//         .catch(error => console.log('error', error));
//     }
// });

// function resetForm() {
//     document.getElementById('createPostForm').reset();
//     document.getElementById('form-title').innerText = "Update Post";
//     document.getElementById('submitButton').innerText = "Post";
//     toggleCreatePostForm();

//     isEditing = false; // Reset edit mode
//     editPostId = null;
// }

// /**********************for delete********************************************************************/
// function deletePost(postId) {
//     fetch(`${apiURL}/${postId}`, {
//         method: 'DELETE'
//     })
//     .then(response => {
//         alert('Successfully Delete')

//         if (!response.ok) throw new Error("Failed to delete post");
//         fetchPosts(); // Reload posts to reflect deletion
//             console.log('response',response)

//     })
//     .catch(error => console.log('error', error));
// }
// //if (response.ok){
//     // return response.json
//     //console.log('response'response)




// // /**********************************************************click edit post 2 time  */
// // function editPost(postId) {
// //     fetch(`${apiURL}/${postId}`)
// //         .then(response => response.json())
// //         .then(post => {
// //             // Populate form fields with post data
            
// //             document.getElementById('name').value = post.name;
// //             document.getElementById('title').value = post.title;
// //             document.getElementById('avatar').value = post.avatar;
// //             document.getElementById('body').value = post.body;

// //             // Show form and set it to update mode
            



// //             document.getElementById('create-post').style.display = 'block'; // Show the form directly
            
// //             document.getElementById('form-title').innerText = "Update Post";
// //             document.getElementById('submitButton').innerText = "Update"
            

// //             isEditing = true;
// //             editPostId = postId; // Store the ID of the post being edited
            
// //         })
// //         .catch(error => console.log('error', error));
// // }

// // function toggleCreatePostForm() {
// //     const formDiv = document.getElementById('create-post');
// //     formDiv.style.display = formDiv.style.display === 'none' ? 'block' : 'none';
// // }



//404 error not found
//500 server error
//200 matlab jo kaam kaha tha wo hogaya


// gemini checkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
const apiURL = 'https://66f91c9b2a683ce97310ef36.mockapi.io/api/v1/posts';
let isEditing = false; // Track if editing (initially set to false)
let editPostId = null; // Track which post is being edited

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

      // Optionally, show a confirmation message before editing
      // if (confirm(`Are you sure you want to edit post ${post.id}?`)) {
      //   // Proceed with editing
      // } else {
      //   // Reset edit mode
      //   isEditing = false;
      //   editPostId = null;
      //   return;
      // }
    })
    .catch(error => console.log('error', error));
}

document.getElementById('createPostForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // ... (rest of your code for creating a new post - ignored in edit mode)

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
      // Update UI with the updated post (optional)
      fetchPosts(); // Reload posts to reflect changes
      resetForm(); // Reset form after update
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