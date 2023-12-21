
const app_name = document.querySelector(".app_name");
const set_app_name = document.querySelector("#set_app_name");
const remove_app_name = document.querySelector("#remove_app_name");

set_app_name.addEventListener("click", function () {
    const give_app_name = prompt("Enter your app name");
    
    if (give_app_name != null) {
        localStorage.setItem("app_name", give_app_name);

        //Retrieve from Local Storage
        const saved_name = localStorage.getItem("app_name");
        document.querySelector(".app_name").textContent = saved_name;
    }
});

if (localStorage.getItem("app_name") != null && localStorage.getItem("app_name").trim() != "") {
    app_name.textContent = localStorage.getItem("app_name");
}

remove_app_name.addEventListener("click", function () { 
    localStorage.removeItem("app_name");
    app_name.textContent = "";
});