const button = document.querySelector(".btn");
const par = document.querySelector(".par");

const quotes = [
    "A girl doesn't need anyone who doesn't need her.",
    "Boys think girls are like books. If the cover doesn't catch their eye they won't bother to read what's inside.",
    "The nicest thing for me is sleep, then at least I can dream.",
    "I live to succeed, not to please you or anyone else.",
    "I don't stop when I'm tired. I only stop when I'm done.",
    "One of the best things that ever happened to me is that I'm a woman. That is the way all females should feel.",
    "A woman knows by intuition, or instinct, what is best for herself.",
    "I am good, but not an angel. I do sin, but I am not the devil. I am just a small girl in a big world trying to find someone to love.",
    "We are all of us stars, and we deserve to twinkle.",
    "A wise girl knows her limits, a smart girl knows that she has none.",
    "We should all start to live before we get too old.",
    "If you can make a girl laugh, you can make her do anything.",
    "Fear is stupid. So are regrets.",
    "I don't want to make money. I just want to be wonderful.",
    "No one ever told me I was pretty when I was a little girl. All little girls should be told they're pretty, even if they aren't.",
    "If I'd observed all the rules, I'd never got anywhere.",
    "Sometimes good things fall apart so better things can fall together.",
    "Always, always, always believe in yourself. Because if you don't then who will, sweetie?",
    "Keep smiling because life is a beautiful thing and there's so much to smile about.",
    "We are all stars but we must learn how to shine.",
    "I think that love and work are the only things that really happen to us.",
    "Above all, I want to be treated as a human being.",
    "Anything's possible, almost.",
    "I think there's two things in human beings…that they want to be alone, but they also want to be together.",
    "A smile is the best makeup a girl can wear.",
    "If I am a star, the people made me a star.",
    "I dress for men. A woman looks at your clothes critically. A man appreciates them.",
    "If there is only one thing in my life that I am proud of, it's that I've never been a kept woman.",
    "I am very definitely a woman and I enjoy it.",
    "I think I'm a mixture of simplicity and complexes, but I'm beginning to understand myself now.",
    "I never wanted to be Marilyn–it just happened. Marilyn's like a veil I wear over Norma Jeane.",
    "There isn't anybody that looks like me without clothes on.",
    "It's nice to be included in people's fantasies but you also like to be accepted for your own sake.",
    "Fame is like caviar, you know—it's good to have caviar but not when you have it at every meal.",
    "Happy birthday, Mr. President.",
    "I don't mind living in a man's world as long as I can be a woman in it.",
    "I don't forgive people because I'm weak, I forgive them because I am strong enough to know people make mistakes.",
    "If you're gonna be two-faced at least make one of them pretty.",
    "Always remember to smile and look up at what you got in life.",
    "A strong man doesn't have to be dominant toward a woman. He doesn't match his strength against a woman weak with love for him. He matches it against the world.",
    "Dreaming about being an actress, is more exciting than being one.",
    "A friend tells you what you want to hear; a best friend tells you the truth.",
    "For those who are poor in happiness, each time is a first time; happiness never becomes a habit.",
    "It's far better to be unhappy alone than unhappy with someone – so far.",
    "Men who think that a woman's past love affairs lessen her love for them are usually stupid and weak.",
    "A career is wonderful, but you can’t curl up with it on a cold night.",
    "The truth is, I've never fooled anyone. I've let men sometimes fool themselves.",
    "I am not a victim of emotional conflicts. I am human.",
    "Beneath the makeup and behind the smile I am just a girl who wishes for the world."
]

button.addEventListener("click", () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})
