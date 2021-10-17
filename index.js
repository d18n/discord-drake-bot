require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

const facts = [
  "Dracob's real name is Aubrey Graham",
  "Drake is fortnite",
  "Drake must love to watch Dora the way he be the MAP",
  "I just shit my pants",
  "Drake is featured in the song Poetic Justice by Kendrick Lamar ",
  "Drake the type of guy to say 'L-O-L' in real life after laughing",
  "Drake the type of guy to say 'Arrrrrrgh' if he was a pirate (as most do)",
  "Drake the type of guy to say 'Where's my hug at??'",
  "DRAKE",
  "Drake the type of guy to talk about caring about women and then rap about how many bitches he has",
  "Drake the type of guy to listen to his own music when he's in his feels",
  "Drake is from Toronto, Canada",
  "Drake the typa guy to groom a minor",
  "Drake the type of guy to use archers in clash of clans and say 'You're still a queen to me'",
  "Drake the type of guy to wear a turtleneck to the beach",
  "Drake the type of guy to go on a date and stare at another girl the whole time, because every girl deserves attention",
  "Drake the type of guy to talk about his ex on a first date",
  "Drake the type of guy to use the sideways lauging emoji",
  "Drake the type of guy to try to pet the animals at the zoo and say 'who put you here?'",
  "Drake the typa guy to bring flowers to a blind date",
]

const url = 'https://assets.capitalfm.com/2015/27/celebrity-real-names-19-1436451990-view-1.png'

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === '/df') {
    const index = Math.floor(Math.random() * facts.length);
    msg.channel.send(facts[index]);
    msg.channel.send({ files: [url] });
  } 
});
