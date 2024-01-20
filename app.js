const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".profile-name");
const followersContainer = document.querySelector(".profile-followers");
const reposContainer = document.querySelector(".profile-repos");
const followingContainer = document.querySelector(".profile-following");
const fetchContainer = document.querySelector(".profile-container");
const profilepicContainer = document.querySelector(".profile_pic");
var repoButton = document.querySelector(".profile_button")

const fetchUsers = async (user) => {
    try{
        const api_call = await fetch(`https://api.github.com/users/${user}`);
        const data = await api_call.json();
        return {data: data};
    }catch(err){
        alert("Please enter Valid Github Username");
    }

}

const openUrl = () =>{
    try{
        fetchUsers(inputValue.value).then((res) =>{
            console.log(res);
        window.open(`${res.data.html_url}`);}).catch(error =>{
            alert("error");})
    }catch(err){
        alert("Please enter Valid Github Username");
    }
}

const showdata = () =>{
    try{
        fetchUsers(inputValue.value).then((res) =>{
            // console.log(res);
        
        
            nameContainer.innerHTML = `Name:<br> ${res.data.name}`;
            followersContainer.innerHTML = `Followers:<br>   ${res.data.followers}`;
            followingContainer.innerHTML = `Following:<br>   ${res.data.following}`;
            reposContainer.innerHTML = `Repos:<br> ${res.data.public_repos}`;
            profilepicContainer.innerHTML= `<img src = "${res.data.avatar_url}" alt = "Profile Picture" width = 100px>`
            repoButton.classList.add("Button");
            repoButton.innerHTML = 'Open Profile';
        
    }).catch(error =>{
        alert("error");
    })
    fetchContainer.classList.add("animate");
    setTimeout(function() {
        fetchContainer.classList.remove("animate");
    }, 2000);
    }catch(err){
        alert("Please enter Valid Github Username");
    }
    
}

searchButton.addEventListener("click", ()=>{
    console.log(inputValue.value);
    if (inputValue.value == ""){
        alert("Please enter Valid Github Username");
    }
    else{
        showdata();
    }
    
})

repoButton.addEventListener("click", ()=>{
    openUrl();
})
