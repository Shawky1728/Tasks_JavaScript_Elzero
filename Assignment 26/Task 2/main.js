
async function fetchData(url) {
    let data = await fetch(url);
    if (!data.ok) {
        throw new Error("Failed to fetch data");
    }
    return data.json();
}



let url = "./data.json";

let data = fetchData(url);

data.then(data => {
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
});
