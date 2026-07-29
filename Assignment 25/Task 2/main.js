// Needed Output

let ajax = new XMLHttpRequest();

ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        console.log(data);
    }
};

ajax.onload = function () {
    if (this.status == 200) {
        console.log("Data Loaded");
    }
};

ajax.open("GET", "articles.json", true);
ajax.send();