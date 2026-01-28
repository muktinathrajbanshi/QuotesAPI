const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
let quotesData = "";
let data = "";

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.q} ${quotesData.a}`;
    window.open(tweetPost);
};

const getNewQuotes = () => {
    let randomNum = Math.floor(Math.random() * 275);
    console.log(randomNum);
    
    quotesData = data[randomNum];
    console.log(quotesData.length);
    
    quotes.innerText = `${quotesData.q}`
    quotesData.a == null
     ? (author.innerText = "Unknown")
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

tweetMe.addEventListener("click", tweetNow);
newQ.addEventListener("click", getNewQuotes);
getQuotes();
