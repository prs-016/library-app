const MyLibrary=[];
const grid = document.querySelector(".bookgrid")
function Book(title, author, pages, read){
    if(!new.target){
        throw Error("You must use the 'new' operator!");
    }
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info = ()=>`${this.title} by ${this.author}, ${this.pages} pages, ${this.read?"alreay read":"not read yet"}`;

}

function addBook(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    MyLibrary.push(book);
    const card = document.createElement("div");
        card.classList.add("book");

        card.innerHTML = `
            <h2>${book.title}</h2>
            <input type="checkbox" class = "check" ${book.read?"checked":""}>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p class = "status"><strong>Status:</strong> ${book.read ? "✅ Read" : "❌ Not read yet"}</p>
            
        `;
        grid.appendChild(card);


        const checkbox = card.querySelector(".check");
        const status2 = card.querySelector(".status");

        checkbox.addEventListener("change", function() {
            book.read = this.checked; 
            status2.innerHTML = `<strong>Status:</strong> ${book.read ? "✅ Read" : "❌ Not read yet"}`;
            if(book.read)
            {
                card.classList.add("active");
            }
            else{
                card.classList.remove("active");
            }
        });

}

const modal = document.getElementById("addBookModal");
const btn = document.querySelector(".add");
const closed = document.getElementsByClassName("close-button")[0];

if (btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
}

if (closed) {
    closed.onclick = function() {
        modal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const form = document.querySelector(".form")
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const bookTitle = document.getElementById('BookTitle').value;
        const bookAuthor = document.getElementById('Author').value;
        const bookPages = document.getElementById('pages').value;
        const bookRead = document.getElementById('checkbox').checked;


        
        addBook(bookTitle,bookAuthor,bookPages,bookRead);
        console.log("New Book Data:", {
            title: bookTitle,
            author: bookAuthor,
            pages: bookPages,
            read: bookRead
        });
        modal.style.display = "none";
        form.reset();
    });
}


const theme = document.querySelector("#toggleTheme");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const button1 = document.querySelector(".header button");
const add = document.querySelector(".main .add");
const modal2 = document.querySelector(".modal");
const closebutton=document.querySelector(".close-button");
const form2=document.querySelector(".form");
const container = document.querySelector(".container");
const button2 = document.querySelector(".btn");
const copytext = document.querySelector(".copytext");
let counter=0;
theme.addEventListener("click", ()=>{
    theme.classList.toggle("dark");
    body.classList.toggle("dark");
    header.classList.toggle("dark");
    button1.classList.toggle("dark");
    add.classList.toggle("dark");
    modal2.classList.toggle("dark");
    closebutton.classList.toggle("dark");
    form2.classList.toggle("dark");
    container.classList.toggle("dark");
    button2.classList.toggle("dark");
    copytext.classList.toggle("dark");
    if((counter++) %2 ==0)
    {
        theme.textContent="☀️ Light Mode";
    }
    else
    {
        theme.textContent="🌙 Dark Mode";
    }
});
// next time just do body.dark .header ..... this is overkill