const getBtn = document.querySelector("#getBtn");
const show_qr = document.querySelector("#show_qr");
const input_section = document.querySelector("#input_section");
const qr_text_box = document.querySelector("#qr_text");
getBtn.addEventListener("click", ()=>{
    generate();
});

qr_text_box.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        generate();
    }
});

const generate = async ()=>{
    let qr_text = qr_text_box.value;
    let qr_width = document.querySelector("#qr_width").value;
    let qr_height = document.querySelector("#qr_height").value;
    
    if (typeof qr_text === "string" && qr_text.trim() !== "") {
        
        show_qr.setAttribute("class", "spinner-border");
        input_section.setAttribute("class", "d-none");
        
        let img_data = await get_qrcode(qr_text, qr_width, qr_height);
        
        console.log(img_data.url);
    
        if (img_data.url) {
            let img_div = document.createElement('div');
            let qr_img = document.createElement('img');
            qr_img.setAttribute("src", img_data.url);
            qr_img.setAttribute("class", "p-2 mb-2");
            
            let download_button = document.createElement('a');
            download_button.setAttribute("href", img_data.url);
            download_button.setAttribute("download", "qr_code.png");
            download_button.setAttribute("target", "_blank");
            download_button.setAttribute("class", "p-2 m-1 btn btn-sm btn-outline-dark");
            download_button.textContent = "Download";
    
            let reset_button = document.createElement('button');
            reset_button.setAttribute("class", "p-2 m-1 btn btn-sm btn-outline-warning");
            reset_button.textContent = "Regenerate";
            
            reset_button.addEventListener("click", () => {
                show_qr.innerHTML = "";
                input_section.removeAttribute("class", "d-none");
                return false;
            });
            
            img_div.appendChild(qr_img);
            show_qr.appendChild(img_div);
            show_qr.appendChild(download_button);
            show_qr.appendChild(reset_button);
            
            // Set the background color
            qr_img.style.backgroundColor = "#059960";
            show_qr.removeAttribute("class", "spinner-border");
        }
        qr_text_box.value = "";
    }else{
        alert("Please enter any text to generate the qr code");

    }
}

const get_qrcode = async (qr_text, qr_width, qr_height)=>{
    const api_url = `https://api.qrserver.com/v1/create-qr-code/?data=${qr_text}&size=${qr_width}x${qr_height}&color=059960&bgcolor=efefef&margin=10`;

    // Storing response
    const response = await fetch(api_url);
   
    // Storing data in form of JSON
    //var data = await response.json();
    return response;
    //show(data);   
}