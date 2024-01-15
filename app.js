const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".profile-name");
const followersContainer = document.querySelector(".profile-followers");
const reposContainer = document.querySelector(".profile-repos");
const followingContainer = document.querySelector(".profile-following");
const fetchContainer = document.querySelector(".profile-container");

const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}`)
    const data = await api_call.json();
    return {data: data};

}

const showdata = () =>{
    fetchUsers(inputValue.value).then((res) =>{
        console.log(res);

        nameContainer.innerHTML = `Name: ${res.data.name}`;
        followersContainer.innerHTML = `Followers:   ${res.data.followers}`;
        followingContainer.innerHTML = `Following:   ${res.data.following}`;
        reposContainer.innerHTML = `Repos: ${res.data.public_repos}`;
        
    })
    fetchContainer.classList.add("animate");
    setTimeout(function() {
        fetchContainer.classList.remove("animate");
    }, 2000);
    
}

searchButton.addEventListener("click", ()=>{
    showdata();
})

