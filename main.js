
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
        document.querySelector('#profile-container').innerHTML = `<div class="header-container">
            <img id="avatar-pic" src=${data.avatar_url} >
        </div>`
        
        document.querySelector('.header-container').innerHTML += `<h2>${data.name}</h2>`
        document.querySelector('#profile-container').innerHTML += ` <div class="info-container">
            <p>Location: ${data.location}</p>
            <p>
                GitHub URL: <a href=${data.url}>${data.name}</a>
            </p>
            <p>GitHub username: ${data.login}</p>

        </div>`
        return data.repos_url
    })
    .then((reposUrl) => fetch(reposUrl))
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        document.querySelector('#profile-container').innerHTML += `
            <div id="repo-container">
                <h3>GitHub Repos </h3>
            </div>
        `
        for (let repo of data) {
            document.querySelector('#repo-container').innerHTML += `
                <p><a href=${repo.url}>${repo.name}</a></p>
            `
        }
    })















// // Taken from youtube video... learn this function syntax!
// const getProfileData = () => {
//     fetch("https://api.github.com/users/ryanurbanski")
//         .then((data) => data.json())
//         // .then((data) => console.log(data))
// }