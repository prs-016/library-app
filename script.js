const MyLibrary=[];
let counter=0;
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


