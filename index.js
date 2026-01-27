const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
let quotesData = "";
let data = "";

const getNewQuotes = () => {
    let randomNum = Math.floor(Math.random() * 10);
    quotesData = data[randomNum];
    quotes.innerText = `${quotesData.q}`
    quotesData == null
     ? (author.innerText = unKnown)
     : (author.innerText = `${quotesData.a}`);

}

const getQuotes = async () => {
    try {
        const response = await fetch("https://raw.githubusercontent.com/muktinathrajbanshi/quotes-api/refs/heads/main/index.json");
         data = await response.json();
        getNewQuotes();
        // console.log(data[100].q);
        // console.log(data[100].a);
        
    } catch (error) {
        console.log(error);
    }
 
};

newQ.addEventListener("click", getNewQuotes);
getQuotes();
