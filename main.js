
let quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        person: "Oscar Wilde",
    },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        person: "Marilyn Monroe",
    },
    {
        quote: "So many books, so little time.",
        person: "Frank Zappa",
    },
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        person: "Albert Einstein",
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        person: "Marcus Tullius Cicero",
    },
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",
        person: "Robert Frost",
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        person: "Mark Twain",
    },
    {
        quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        person: "Mahatma Gandhi",
    },
    {
        quote: "“We accept the love we think we deserve.”",
        person: "Stephen Chbosky",
    },
    {
        quote: "“Without music, life would be a mistake.”",
        person: "Friedrich Nietzsche",
    }
];

let testIndex = -1;
let quoteDiv = document.getElementById("quoteDiv");
quoteDiv.innerHTML = "";
function sendValue(){
    let index = Math.floor(Math.random() * quotes.length)
    if(index != testIndex || index == 0){
        quoteDiv.innerHTML=`
            <div class="quotetext fade-in" >
                <p>${quotes[index].quote}</p>
                <h2>${quotes[index].person}</h2>
            </div>
        `
        testIndex = index;
    }else{
        if(index != (quotes.length-1)){
            quoteDiv.innerHTML=`
                <div class="quotetext fade-in" >
                    <p>${quotes[index+1].quote}</p>
                    <h2>${quotes[index+1].person}</h2>
                </div>
            `
            testIndex = index+1;
        }else{
            quoteDiv.innerHTML=`
                <div class="quotetext fade-in" >
                    <p>${quotes[index-1].quote}</p>
                    <h2>${quotes[index-1].person}</h2>
                </div>
            `
            testIndex = index-1;
        }
    }
}
