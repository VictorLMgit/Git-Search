// Search
form = document.getElementById('mainForm');

form.addEventListener('submit',function(e){
    e.preventDefault();
    $("#mainArea").load('complements/presentation.html');
    
    var search = $("#search").val();
    
    userName = search.replace(' ', '')
    
    fetch("https://api.github.com/users/"+userName)
    
    .then((result) => result.json())
    .then((data) => {
        if(data['name']!=undefined){
            
            
            $("#img-profile").attr("src",data['avatar_url']);
            $("#link-profile").attr("href","https://github.com/"+data['login']+"");

            
            $("#username").append(data['name']);
            $("#login").append(data['login']);
            $("#bio").append(data['bio']);
            $("#follow").append(data['followers']+" followers ° "+data['following']+" following")


            var repos_url = data['repos_url'];
            
            fetch(repos_url).then((result) => result.json())
            .then((data_repos)=>{
        
                $("#repos").append("<h3>Repositórios</h3>");

                data_repos.forEach((data_repos) => {
                    $("#repos").append("<p class='text-repos'>"+data_repos['name']+"</p> <p class='text-description'>"+data_repos['description']+"</p> <hr> ");
                });
                
                
            })

            
        }
        else{
            $("#mainArea").load('complements/notFind.html')

        }
    })
})

