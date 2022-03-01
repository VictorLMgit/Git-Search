// Search
form = document.getElementById('mainForm');

form.addEventListener('submit',function(e){
    e.preventDefault();
    $("#mainArea").load('presentation.html');
    $("#repos").html('');
    var search = $("#search").val();

    userName = search.replace(' ', '')
    
    fetch("https://api.github.com/users/"+userName)
    .then((result) => result.json())
    .then((data) => {
        
        $("#photo").html("<a target = '_blank' href ='https://github.com/"+data['login']+"'>  <img class='img-fluid rounded-circle ' src="+data['avatar_url']+" </img> </a>");
        $("#info").html("<h2 class='name-user'>"+data['name']+"</h2> <h4>"+data['login']+"</h4> <p>"+data['bio']+"</p><p>"+data['followers']+" followers ° "+data['following']+" following </p>  ");
        
        var repos = data['repos_url'];
        
        fetch(repos).then((result) => result.json())
        .then((data_repos)=>{
    
            $("#repos").append("<h3>Repositórios</h3>");

            data_repos.forEach((data_repos) => {
                $("#repos").append("<p class='text-repos'>"+data_repos['name']+"</p> <p class='text-description'>"+data_repos['description']+"</p> <hr> ");
            });
            
            
        })
        
    })
})

