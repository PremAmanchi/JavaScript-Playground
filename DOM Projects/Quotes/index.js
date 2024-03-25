const person = document.getElementById("person");
const quote = document.getElementById("quote");
const getNewQuote = document.getElementById("get-quote");

const quotes = [
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    person: "Abraham Lincoln",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    person: "Albert Einstein",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    person: "Lao Tzu",
  },
];



getNewQuote.addEventListener('click', () => {
    const index = Math.floor(Math.random() * 10);
    const newQuote = quotes[index].quote;
    const newPerson = quotes[index].person;

    person.innerText = newPerson;
    quote.innerText = newQuote;
});