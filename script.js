const mainDiv = document.getElementById("mainDiv");

async function getUsers() {
    const apiUrl = "https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/getUsers";
    const response = await fetch(apiUrl);
    const data = await response.json();

    const usersArray = data.users;

    for (let index = 0; index < usersArray.length; index++) {
        const element = usersArray[index];
        
        const userNumber = document.createElement("h1");
        userNumber.innerText = `#${index + 1}`;
        mainDiv.appendChild(userNumber);

        const userName = document.createElement("h3");
        userName.innerText = element.name;
        mainDiv.appendChild(userName);

        const userAddress = document.createElement("p");
        userAddress.innerText = element.address;
        mainDiv.appendChild(userAddress);

        const userPhone = document.createElement("a");
        userPhone.innerText = element.tel;
        userPhone.href = `tel:${element.tel}`;
        mainDiv.appendChild(userPhone);

        const userAge = document.createElement("p");
        userAge.innerText = `${element.age} years`;
        mainDiv.appendChild(userAge);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete User";
        deleteButton.onclick = function(){
            if (confirm("Are you sure to delete user?") == true) {
                deleteUser(element.email);
            };
        };
        mainDiv.appendChild(deleteButton);

        const divider = document.createElement("hr");

        mainDiv.appendChild(divider);
    }
}



async function deleteUser(deleteEmail) {
    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/deleteUser?email=${deleteEmail}`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    const status = data.status;

    if(status == true){
        alert("user deleted successfully");
        location.reload();
    } else {
        alert("user delete failed");
    };
};انت

getUsers();