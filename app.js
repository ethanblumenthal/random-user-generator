var url = 'https://randomuser.me/api/'
var btn = document.querySelector('#btn');
var fullname = document.querySelector('#fullname');
var avatar = document.querySelector('#avatar');
var username = document.querySelector('#username');
var city = document.querySelector('#city');
var email = document.querySelector('#email');

btn.addEventListener('click', function() {
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(displayErrors)
});

function handleErrors(res) {
    if (!res.ok) {
        throw Error(res.status);
    }
    return res;
}

function parseJSON(res) {
    return res.json().then(function(data) {
        return data.results[0];
    });
}

function updateProfile(data) {
    fullname.innerText = data.name.first + ' ' + data.name.last;
    avatar.src = data.picture.medium;
    username.innerText = data.login.username;
    city.innerText = data.location.city;
    email.innerText = data.email;
}

function displayErrors(err) {
    console.log(err);
}