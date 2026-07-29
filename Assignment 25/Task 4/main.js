// mainData Variable Content

let ajax = new XMLHttpRequest();
ajax.open("GET", "articles.json", true);
ajax.send();

ajax.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let mainData = JSON.parse(this.responseText);

        let container = document.createElement("div");
        container.id = "data";
        for (let i = 0; i < mainData.length; i++) {
            let div = document.createElement("div");

            let h2 = document.createElement("h2");
            let title = document.createTextNode(mainData[i].title);
            h2.appendChild(title);
            div.appendChild(h2);

            let p1 = document.createElement("p");
            let body = document.createTextNode(mainData[i].body);
            p1.appendChild(body);
            div.appendChild(p1);

            let p2 = document.createElement("p");
            let category = document.createTextNode(mainData[i].category);
            p2.appendChild(category);
            div.appendChild(p2);


            let p3 = document.createElement("p");
            let author = document.createTextNode(mainData[i].author);
            p3.appendChild(author);
            div.appendChild(p3);
            container.appendChild(div);

            document.body.appendChild(container);

        }

    }
};
