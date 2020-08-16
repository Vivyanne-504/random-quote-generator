/*const colorBtn = document.querySelector('colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','pink','black','purple','blue'];

addEventListener('click',changeColor);

function changeColor (){
  // bodyBcg.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random()*colors.length)
  bodyBcg.style.backgroundColor = colors[random];//
}*/
const quotes =[
  {
   name:'Albert Einstein',
   quote: 'If you want to live a happy life, tie it to a goal, not to people or things.'
  },
  {
    name:'Steve Jobs',
    quote:' Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.'
   },
   {
    name:'Eleanor Roosevelt',
    quote: 'If life were predictable it would cease to be life, and be without flavor.'
   },
   {
    name:'Babe Ruth',
    quote: 'Never let the fear of striking out keep you from playing the game.'
   },
   {
    name:'Oprah Winfrey',
    quote:'Turn your wounds into wisdom.'
   },
   {
    name:'John F. Kennedy',
    quote:'Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty.'
   },
   {
    name:'Elton John',
    quote:'Live for each second without hesitation.'
   },
   {
    name:'Albert Einstein',
    quote: 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
  },
  {
    name:'Helen Keller',
    quote: 'When we do the best we can, we never know what miracle is wrought in our life or the life of another.'
  },
  {
    name:'Victor Hugo',
    quote: 'Life is a flower of which love is the honey.'
  },
  {
    name:'Marilyn Monroe',
    quote: 'Keep smiling, because life is a beautiful thing and there’s so much to smile about.'
  },
  {
    name:'Buddha',
    quote: 'Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.'
  },
  {
    name:'Dr. Seuss',
    quote:'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.'
  },
]
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);
function displayQuote() {
  let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML= quotes[number].name;
quote.innerHTML= quotes[number].quote;  
}
