// Scopo del progetto:
// Creare un sito con le varie caselle di email varie con la seguente Api.

// Creazione delle risorse generali
const url = "https://flynn.boolean.careers/exercises/api/random/mail";
let parent_node = document.getElementById("parent-node");

//Creazione della seguente funzione di integrazione Api

function HandleEmailGenBox(){
     for (let index = 0; index < 10; index++) {
      let response = fetch(url).then(response => response.json()).then(data => HandleBoxEmailGen(data));
      return response
     }
}

//Generazione degli elementi nel DOM
const HandleBoxEmailGen = (data)=>{
    setTimeout(()=>{
        let create_box = document.createElement("div");
        let fragment_parent = document.createDocumentFragment();
        let text_title = document.createElement("h2");
        let text_email = document.createElement("p");
        create_box.className = "email-box";
        let text_em = document.createTextNode(data.response);
        let text_til = document.createTextNode("Email dell utente in questione:");
    
        text_email.appendChild(text_em);
        text_title.appendChild(text_til)
        create_box.append(text_title);
        create_box.append(text_email);
        fragment_parent.append(create_box);
        parent_node.append(fragment_parent);
    }, 1200)
}

window.addEventListener('load', ()=>{
    for (let index = 0; index < 10; index++) {
        HandleEmailGenBox();
    }
})