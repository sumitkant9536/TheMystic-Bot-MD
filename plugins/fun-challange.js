let handler = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 𝙲𝙷𝙰𝙻𝙻𝙰𝙽𝙶𝙴 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 𝙼𝚈𝚂𝚃𝙸𝙔 」, m)
}
handler.help = ['challenge']
handler.tags = ['fun']
handler.command = /^challange/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bucin = [
"Pass the pack of an ant",
"Tell your friends that you are going to live in the US and send me a screenshot of what they told you,"
"Shout from the window that you want to suck and send me the video",
"Write your crush's name",
"You must put the name of my creator in your WhatsApp status, without giving context",
"Send me a picture of you",
"You must draw the name of a member of the group somewhere on your body, then take a photo and send it",
"Take a picture of yourself giving a kiss to a television",
 "Send me a picture in your underwear"
"Write in your WhatsApp status that you like to eat dirt",
"You must put the photo of a group participant who is of the opposite sex to yours on your WhatsApp profile for 3 days 📸📸",
"You have to send an audio singing the song: A duck happily singing cua cua 🦆",
"Send a message to your ex and tell him I still like you", "Send an audio saying I love The Shadow Brokers - Bot",
"Tell your crush that you love her and capture the group", "Send an audio singing",
"Send a photo of yourself without covering your face or anything", "Send a video dancing",
"Invite people you don't know to take a selfie with you and then send it to the group"
"Pick some random numbers from your contacts and text them 'I'm pregnant'.",
"Take whatever drink is near you, then mix it with chili and drink!",
"Take a random number from your contacts, call them and say 'I love you' ",
"Buy the cheapest food in the cafeteria (or buy a bottle of water) and say between sobs to your classmates: 'This ... is the most expensive food I've ever bought)'",
"Buy a bottle of coke and splash flowers with it in front of the crowd.",
"Stand near the refrigerator, close your eyes, choose random foods in it, even when you eat, your eyes should be closed.",
"Standing in the middle of the basketball court and yelling, 'I LOVE YOU MY PRINCE/PRINCESS,'"
"Pay your respects to someone in the class, and then say, 'I am at your service, Your Majesty.'"
"Walking clapping and singing the 'Happy Birthday' song from class to hallway.",
"Get down on one knee and say 'Will you marry me?' the first person to enter the room.",
"Make a wacky knit headdress, whatever it is, keep asking for poses in front of the camera, keep going up,"
"Say 'YOU'RE BEAUTIFUL / VERY BEAUTIFUL, DON'T LIE' to the girl you think is the prettiest in this class.",
"Tell someone in class: 'First they told me I was your twin, we broke up and then I had plastic surgery. And this is the most serious thing I've ever said'",
"Throwing someone's notebook in the trash, in front of their eyes, saying 'This book no one can understand'",
"Pluck your own leg hair 3 times!",
"Chat with your parents, tell them you miss them with sad emoticons.",
"Try googling scary or ridiculous things like trypophobia etc.",
" Sit relaxed in the middle of the basketball court while pretending it's a sunbathing beach.",
"Fill your mouth with water and you have to hold up to two rounds, if you laugh and spill or drink then you have to refill and add one more round.",
"Say hello to the first person who walks into this room and say 'Welcome to Who Wants to Be a Millionaire!' ",
"Text your parents 'Hey bro! I just bought the latest issue of Playboy magazine!' ",
"Text your parents: 'Mom, Dad, I know I'm a foster kid from the orphanage. Don't hide this anymore'.",
"Send three random numbers in your contacts and write 'I just became a Playboy magazine model'",
"Eat a spoonful of sweet soy sauce and soy sauce!",
"Eat something but don't use your hands.",
"Getting mad at your friends who don't come even though you have a date to play 'Truth or Dare' together",
"Smash the egg with your head!",
"Eat food that has been mixed and will have a strange taste, but make sure the food is not harmful to long-term or short-term health.",
"Dance like Girls' Generation for the boys in front of the class, or dance like Super Junior for the girls.",
"Raise the flagpole without the flag.",
"Speaking of the person you like, your closest friends, the opposite sex you don't know at all, and the like.",
"Copy all your friends' hairstyles.",
"Singing the song HAI TAYO in front of many people while dancing",
"Sing the Baby Shark song out loud in the classroom.",
"Borrow something from the neighbors",
"Ask for the signature of one of the fiercest teachers while saying 'You are truly the person I admire most in the world'",
"Ask someone (randomly) on the street for money saying 'I don't have money for angkot'.",
"Drink something that has been prepared/agreed, but make sure it is not dangerous, it can be like drinking syrup mixed with soy sauce.",
" Talking to your crush's fear-emoticon, it's okay to talk to whatever you want, through whatever means you can.",
"Sing along to your favorite Disney movie while you scream.",
"Name from 1 blue to 20 blue quickly and you must not make any mistakes. If it is wrong, it must be repeated from the beginning.",
"Put on a copy paper crown and tell everyone in the room 'HONOR THE KING' as you point to each person with a ruler.",
"Put your pants back on until the next morning.",
"Hug the person you DON'T like in class and say, 'Thank you so much for being the best person for me,'"
"Go to a wide field, then run as fast as you can while saying 'I'm crazy, I'm crazy'",
"Pick a flower and then attach it to someone you don't know (must be of the opposite sex)",
"Pick a random person on the street, then say 'Don't you know you're beautiful' (ala One Direction),"
"Pretend to be possessed eg: possessed by a tiger, etc.",
" Ask him to whistle as his mouth is once again full of food.",
" Ask to be a waiter to serve you with your friends for lunch.",
"Tell them to use socks to make gloves.",
"Tell them to wear the weirdest hat / the most absurd helmet for the next round.",
"Call your mom and tell her 'mom, I want to get married as soon as possible'",
"Call your ex and say 'I miss you'",
"Swap clothes with the closest person until the next round.",
"Update status on WhatsApp whatever with words starting with 'S'",
"Upload a singing video to YouTube that is singing popular songs.",
"Color your fingernails and toenails different colors for a week.",
"eat 2 tablespoons of rice without side dishes",
"Send '🦄💨' emoji every time you post in a group 1 day",
"say 'Welcome to Who Wants To Be A Millionaire!' to all the groups you have",
"sing the chorus of the last song you played",
"Send a voice audio to your ex / boyfriend / girlfriend, say hello (name), I want to call, just a moment. I miss you 🥺👉🏼👈🏼 ",
"Tell random people: First they told me I was your twin, we broke up, and then I had plastic surgery. And this,"
"Make 1 rhyme for the first player!",
"tell your own version of embarrassing things",
"change the name to 'Gay' for 24 hours",
"Mention your type of girlfriend!",
"Say 'I'm in love with you, do you want to be my boyfriend or not?' to the last opposite sex you chatted with on WhatsApp, wait for them to reply,"
"Talk to your ex on WhatsApp and say 'I love you, please come back'. Send a screenshot as evidence of the challenge fulfilled!"
]
