let ul = document.querySelector('.links-container');
let admins = [
    "sleepingravenytb@gmail.com",
    "chickenfish1222@gmail.com"
]

auth.onAuthStateChanged((user) => {
    if (user && admins.includes(user.email)) {
        ul.innerHTML += '<li class="link-item"><a href="/editor" class="link">Post</a></li>';
        ul.innerHTML += '<li class="link-item"><a href="/admin" class="link">Dashboard</a></li>';
        ul.innerHTML += '<li class="link-item"><a href="#" onclick="logoutUser(false)" class="link">Log Out</a></li>';
    }
})