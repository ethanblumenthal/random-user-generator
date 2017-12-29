var url = 'https://randomuser.me/api/'
var btn = document.querySelector('#btn');
var fullname = document.querySelector('#fullname');

btn.addEventListener('click', function() {
    fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        fullname.innerText = data.results[0].name.first + ' ' + data.results[0].name.last;
    })
    .catch(function(err) {
        console.log(err);
    })
});