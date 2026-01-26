const getQuotes = async () => {
    const api = "https://zenquotes.io/api/quotes";
    const proxy = "https://api.allorigins.win/get?url=" + encodeURIComponent(api);

    try {
        const response = await fetch(proxy);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const dataWrapped = await response.json();
        const data = JSON.parse(dataWrapped.contents); // actual quotes
        console.log(data);
    } catch (error) {
        console.log("Error fetching quotes:", error);
    }
};

getQuotes();
