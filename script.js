const button = document.querySelector(".btn");
const par = document.querySelector(".par");

const quotes = [
    "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
    "When you change your thoughts, remember to also change your world.",
    "You're off to great places, today is your day. Your mountain is waiting, so get on your way.",
    "You always pass failure on the way to success.",
    "No one is perfect - that's why pencils have erasers.",
    "You're braver than you believe, and stronger than you seem, and smarter than you think.",
    "Winning doesn't always mean being first. Winning means you're doing better than you've done before.",
    "It always seems impossible until it is done.",
    "Keep your face to the sunshine and you cannot see a shadow.",
    "Once you replace negative thoughts with positive ones, you'll start having positive results.",
    "Positive thinking will let you do everything better than negative thinking will.",
    "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
    "The only time you fail is when you fall down and stay down.",
    "When you are enthusiastic about what you do, you feel this positive energy. It's very simple.",
    "Positive anything is better than negative nothing.",
    "Winning is fun, but those moments that you can touch someone's life in a very positive way are better.",
    "Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you.",
    "Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.",
    "Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you.",
    "It makes a big difference in your life when you stay positive.",
    "If opportunity doesn't knock, build a door.",
    "Happiness is an attitude. We either make ourselves miserable, or happy and strong. The amount of work is the same.",
    "You are never too old to set another goal or dream a new dream.",
    "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.",
    "It's not whether you get knocked down, it's whether you get up.",
    "The way I see it, if you want the rainbow, you gotta put up with the rain.",
    "Every day may not be good... but there's something good in every day.",
    "The more you praise and celebrate your life, the more there is in life to celebrate.",
    "Hard work keeps the wrinkles out of the mind and spirit.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Happiness is the only thing that multiplies when you share it.",
    "When we are open to new possibilities, we find them. Be open and skeptical of everything.",
    "The good life is a process, not a state of being. It is a direction, not a destination.",
    "The happiness of your life depends upon the quality of your thoughts.",
    "Be so happy that, when other people look at you, they become happy too"


]

button.addEventListener("click", () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})



