// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//     displayPosts(data); // pass posts into the function
//   })
//   .catch(error => {
//     console.error('ERROR ERROR ERROR IT BLEW UP', error);
//   });

// function displayPosts(posts) {
//   const postList = document.getElementById('post-list'); // grab the <ul>

//   posts.forEach(post => {
//     const listItem = document.createElement('li'); // <li>

//     const headerTag = document.createElement('h1'); // <h1>
//     headerTag.textContent = post.title;

//     const paragraphTag = document.createElement('p'); // <p>
//     paragraphTag.textContent = post.body;

//     listItem.append(headerTag, paragraphTag); // add h1 + p to li
//     postList.appendChild(listItem); // add li to ul
//   });
// }

// Async function to fetch posts
async function fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // wait for fetch
      const data = await response.json(); // wait for json conversion
      displayPosts(data); // call display function with data
    } catch (error) {
      console.error('ERROR ERROR ERROR IT BLEW UP', error);
    }
  }
  
  // Function to display posts
  function displayPosts(posts) {
    const postList = document.getElementById('post-list');
  
    posts.forEach(post => {
      const listItem = document.createElement('li');
  
      const headerTag = document.createElement('h1');
      headerTag.textContent = post.title;
  
      const paragraphTag = document.createElement('p');
      paragraphTag.textContent = post.body;
  
      listItem.append(headerTag, paragraphTag);
      postList.appendChild(listItem);
    });
  }
  
  // Call the async function
  fetchPosts();