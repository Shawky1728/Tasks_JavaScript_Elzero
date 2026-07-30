
const promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open("GET", "./data.json");
    request.onload = () => {
        if (request.status === 200) {
            resolve(JSON.parse(request.responseText));
        } else {
            reject(new Error("Failed to fetch data"));
        }
    };
    request.onerror = () => {
        reject(new Error("Network error"));
    };
    request.send();
});


promise.then(data => {

    data.length = 5;
    return data;

}).then(data => {
    for (let i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.textContent = data[i].title;
        p.textContent = data[i].description;
        div.appendChild(h3);
        div.appendChild(p);
        document.body.appendChild(div);
    }

}).catch(error => {
    console.error(error);
});
    

