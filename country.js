const titleHtml = document.getElementById("coutnry_heading");
const country_ul = document.querySelector("#country_list");
const add_country = document.querySelector("#add_country");
const add_country_btn = document.querySelector("#add_country_btn");
const success_msg = document.querySelector(".success_msg");
const remove_msg = document.querySelector(".remove_msg");
const update_msg = document.querySelector(".update_msg");
const country_item = document.querySelector(".country_item");
const remove_btn = document.querySelector(".remove");

/** Title Experiment */
const title = titleHtml.textContent;
console.log(title);
titleHtml.style.backgroundColor = "red";
titleHtml.style.color = "white";
titleHtml.style.textAlign = "center";
titleHtml.style.fontSize = "30px";
/** End of Title Experiment */

/** Add Country Button */
add_country_btn.addEventListener("click", function(){
    
    const add_country_val = add_country.value;
    //alert(add_country_val);
    new_country(add_country_val);
    add_country.value = "";
});

/** End of Country Button function */

/** adding new country items as li */
const new_country = (country_name) =>{
    
    if(country_name === ""){
        return alert("Please enter a country name!");
    }

    const create_li = document.createElement("li");
    const create_span = document.createElement("span");
    const create_i_update = document.createElement("i");
    const create_i_trash = document.createElement("i");

    create_li.setAttribute("class", "country_item mt-2");
    create_span.setAttribute("class", "fs-4 me-2");
    create_i_update.setAttribute("class", "bi bi-pencil");
    create_i_trash.setAttribute("class", "bi bi-trash");

    create_span.textContent = country_name;

    //create a delete button
    let deleteButton = document.createElement("button");
    deleteButton.appendChild(create_i_trash);
    deleteButton.className = "btn btn-danger remove";

    deleteButton.addEventListener("click", function () {
        create_li.remove();
        remove_msg.innerHTML = "<b>Country Removed!</b>";
        setTimeout(empty_msg, 1500);
    });

    //create a update button
    let updateButton = document.createElement("button");
    updateButton.appendChild(create_i_update);
    updateButton.className = "btn btn-primary update me-2";

    updateButton.onclick = function () {
      let updatedCountryName = prompt("Enter Updated Country Name", country_name);

      if (updatedCountryName != null && updatedCountryName.trim()!="") {
        create_span.textContent = updatedCountryName;
        update_msg.innerHTML = "<b>Country Updated!</b>";
        setTimeout(empty_msg, 1500);
      }
    };
    
    country_ul.appendChild(create_li);
    create_li.appendChild(create_span);
    create_li.appendChild(updateButton);
    create_li.appendChild(deleteButton);
    success_msg.innerHTML = "<b>New Country Added!</b>";
    add_country_btn.setAttribute('disabled', true);
    setTimeout(empty_msg, 1500);
}
/** end of adding new country */

/** emtry success message */
const empty_msg = ()=> {
    success_msg.textContent = "";
    update_msg.textContent = "";
    remove_msg.textContent = "";
    add_country_btn.removeAttribute('disabled');
}
/** end of emtry success message */

/** add country by pressing the enter key */

add_country.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {

        var inputValue = add_country.value;
        console.log("Entered value:", inputValue);
        const add_country_val = add_country.value;
        //alert(add_country_val);
        new_country(inputValue);
        add_country.value = "";

    }
});
/** end of add country by pressing the enter key */