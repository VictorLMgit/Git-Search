form = document.getElementById('mainForm');

form.addEventListener('submit',function(e){
    e.preventDefault();
    var search = document.getElementById('search').value;
    userName = search.replace(' ', '')
    
    fetch("https://api.github.com/users/"+userName)
    .then((result) => result.json())
    .then((data) => {
        
        document.getElementById('photo').innerHTML = "<a target = '_blank' href ='https://github.com/"+data['login']+"'>  <img class='img-fluid w-50 rounded-circle ' src="+data['avatar_url']+" </img> </a>"
        document.getElementById('info').innerHTML = "<p class='text-center text-light'>"+data['login']+"</p><p class='text-center text-light'>"+data['bio']+"</p>"
    })

})
