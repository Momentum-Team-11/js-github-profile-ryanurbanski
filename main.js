
const url = "http://api.github.com/users/ryanurbanski"

// Method 1
// fetch(url)
//     .then(function(response) {      // callback function
//         return response.json()
//     })
//     .then(function(data) {
//         console.log(data)           // second callback function
//         document.querySelector('#profile-container').innerHTML = `<h2>${data.name}</h2>`
//     })

// Method 2: Arrow Funcions
fetch(url)
    .then((result) => result.json())
    .then((data) => {
        document.querySelector('#profile-container').innerHTML = `<img id="avatar-pic" src=${data.avatar_url} >`
        document.querySelector('#profile-container').innerHTML += `<h2>${data.name}</h2>`

    })















// // Taken from youtube video... learn this function syntax!
// const getProfileData = () => {
//     fetch("https://api.github.com/users/ryanurbanski")
//         .then((data) => data.json())
//         // .then((data) => console.log(data))
// }