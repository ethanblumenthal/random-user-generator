var url = 'https://randomuser.me/api/'
var btn = document.querySelector('#btn');
var fullname = document.querySelector('#fullname');
var avatar = document.querySelector('#avatar');

btn.addEventListener('click', function() {
    fetch(url)
    .then(parseJSON)
    .then(function(data) {
        fullname.innerText = data.name.first + ' ' + data.name.last;
        avatar.src = data.picture.medium;
    })
    .catch(function(err) {
        console.log(err);
    })
});

function parseJSON(res) {
    return res.json().then(function(data) {
        return data.results[0];
    });
}