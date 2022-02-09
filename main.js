
const url = "http://api.github.com/users/ryanurbanski"

fetch(url)
    .then((result) => result.json())
    .then((data) => {

        // Header Div ---------------------------------------------------------------
        // Picture
        document.querySelector('#profile-container').innerHTML = 
            `<div class="header-container">
                <img id="avatar-pic" src=${data.avatar_url} >
            </div>`
        
        // Name
        document.querySelector('.header-container').innerHTML += `<h2>${data.name}</h2>`
        
        // Information Div -----------------------------------------------------------
        // Location, URL, Username
        document.querySelector('#profile-container').innerHTML += ` 
            <div class="info-container">
                <p>Location: ${data.location}</p>
                <p>GitHub URL: <a href=${data.url}>${data.name}</a></p>
                <p>GitHub username: ${data.login}</p>
            </div>`
        return data.repos_url
    })

    // Repo Div
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
