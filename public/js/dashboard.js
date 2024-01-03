let ui = new firebaseui.auth.AuthUI(auth);
let login = document.querySelector('.login');

auth.onAuthStateChanged((user) => {
    if (user && admins.includes(user.email)) {
        console.log(user.displayName);
        login.style.display = "none";
    } else if (user) {
        logoutUser(true);
    } else {
        setupLoginButton();
    }
})

const setupLoginButton = () => {
    ui.start("#loginUI", {
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    })
}

const blogSection = document.querySelector('.blogs-section');

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <p class="blog-overview">${data.article.substring(0, 200) + '...'}</p>
        <a href="/${blog.id}" class="btn dark">read</a>
        <a href="/${blog.id}/editor" class="btn grey">edit</a>
        <a href="#" onclick="deleteBlog('${blog.id}')" class="btn danger">delete</a>
    </div>
    `;
}

const deleteBlog = (id) => {
    db.collection("blogs").doc(id).delete().then(() => {
        location.reload();
    })
    .catch((error) => {
        console.log("There was an error deleting the blog.")
    });
}