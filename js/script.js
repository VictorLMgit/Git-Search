form = document.getElementById('mainForm');

form.addEventListener('submit',function(e){
    e.preventDefault();
    var search = document.getElementById('search').value;
    userName = search.replace(' ', '')
    
    fetch("https://api.github.com/users/"+userName)
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        // document.getElementById('result').innerHTML = "<img src="+data['avatar_url']+" </img>"
    })

})
