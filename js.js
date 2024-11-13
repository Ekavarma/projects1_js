let quoteTelugu = document.querySelector(".quote")
let dataQuotes = [
    "I'm not here to be perfect, I'm here to be real.",
    "I'm not interested in money. I just want to be wonderful.",
    "The only thing that feels better than winning is winning when nobody thought you could.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "If you can dream it, you can do it.",
    "If you want something done, ask a busy person to do it.",
    "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    "The best way to find out if you can trust somebody is to trust them.",
    "The only Limit to our realization of tomorrow will be our doubts of today.",
    "We may encounter many defeats but we must not be defeated.",
    "The most important thing is to enjoy your life - to be happy - it's all that matters.",
    "Your time is limited, don't waste it living someone else's life.",
    "The best way to find out what you want in life is to try a lot of things.",
    "In order to be truly happy, you must pursue your dreams and goals.",
    "You can have anything you want if you are willing to give up everything you have.",
    "Don't let anyone tell you what you can't do. Follow your dreams and persist.",
    "If you want something you've never had, you must be willing to do something you've never done.",
    "Everything happens for a reason.",
    "You only live once, but if you do it right, once is enough.",
    "Life is what we make it and how we make it – whether we realize it or not."
];


function generateQuote() {
    const a = Math.floor(Math.random() * dataQuotes.length)
    console.log(a)
    quoteTelugu.textContent = dataQuotes[a]

}