const quotes = document.getElementById("quotes");
let data = "";

const getNewQuotes = () => {
    let randomNum = Math.floor(Math.random() * 10);
    quotes.innerText = `${data[randomNum].q}`
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

getQuotes();
