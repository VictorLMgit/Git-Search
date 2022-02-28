// Search
form = document.getElementById('mainForm');

form.addEventListener('submit',function(e){
    e.preventDefault();
    document.getElementById('repos').innerHTML = ''
    var search = document.getElementById('search').value;
    userName = search.replace(' ', '')
    
    fetch("https://api.github.com/users/"+userName)
    .then((result) => result.json())
    .then((data) => {
        
        document.getElementById('photo').innerHTML = "<a target = '_blank' href ='https://github.com/"+data['login']+"'>  <img class='img-fluid w-50 rounded-circle ' src="+data['avatar_url']+" </img> </a>"
        document.getElementById('info').innerHTML = "<p class='text-center text-light'>"+data['login']+"</p><p class='text-center text-light'>"+data['bio']+"</p>"
        var repos = data['repos_url'];
        fetch(repos).then((result) => result.json())
        .then((data_repos)=>{
            var tag = document.createElement("h3");
            var text = document.createTextNode('Repositórios');
            tag.appendChild(text);
            document.getElementById("repos").appendChild(tag);
       
            data_repos.forEach((data_repos) => {

                var tag = document.createElement("p");
                var text = document.createTextNode(data_repos['name']);
                tag.appendChild(text);
                var element = document.getElementById("repos");
                element.appendChild(tag);

                // console.log(data_repos['name'])
            });
            
            
        })
        
    })
})

