let handler = async (m, { conn }) => {
conn.reply(m.chat,`*┌────「 𝚃𝚁𝚄𝚃𝙷 」─*\n*“${pickRandom(global.verdad)}”*\n*└────「 𝙼𝚈𝚂𝚃𝙸𝙲 」─*`, m)
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^truth/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.verdad = [
"Have you ever liked someone? How long?"
  "If possible or if you want, in gc/out of gc, who will you make friends with? (May be different/same type)",
  "What is your biggest fear?"
  "Have you ever liked someone and felt that person like you too?",
  "What is the name of your friend's ex-boyfriend that you once secretly liked?",
  "Have you ever stolen money from your mother or father? The reason?"
  "what makes you happy when you're sad",
  "Have you ever been unrequited love? If you've been with who? How does it feel brou?",
  "Have you ever had an affair with someone?"
  "the most feared"
  "who is the most influential person in your life",
  "what pride you have this year",
  "who is the person who can make you sick",
  "who is the person who once made you horny",
  "(for Muslims) have you never prayed all day?"
  "Who is the closest to your ideal partner type here",
  "Who do you like to play with?",
  "Have you ever rejected someone? Why?",
  "Mention the incident that hurt you and that you still remember,"
  "What achievements have you obtained this year?",
  "What's your worst habit at school?", "Which TV show do you hate the most? Prove you're right!", "What is the ugliest dress (in your opinion) you've ever worn and when did you wear it? "," What is the worst (gossip) you have said about your friend?","What is the most embarrassing thing about you?","What is the first thing you see when you look at another person (of the opposite sex) ?",
"What's the first thing that comes to mind when you look in the mirror?","What's the dumbest thing you've ever done?","What's the worst dream you've ever had?"," What's the craziest dream you can remember so far?"
"What is your worst trait in your opinion?",
"What trait would you like to change about yourself?",
"What trait would you like to change in your friend?",
"What would you do if your boyfriend told you that you had a bad nose or fingers?"
"What do you think about before sleeping? eg: fantasizing about a partner, etc.",
"What do you think stands out the most about you?", "Which part of your friend's body do you like the most and wish you had?",
"Which part of your body do you hate the most?", "Of all the classes in the school, which class would you like to join and which class would you like to avoid?",
"Describe your closest friend!"," Describe yourself in one word!","What movies and songs have made you cry?",
"What is something that you have kept secret until now and no one has found out?",
"What is the most romantic thing someone (of the opposite sex) has ever done to you or given you?"
"What is the most unpleasant thing you have ever experienced?",
"If you were born again and had to be one of your friends, who would you choose to be?"
"If you have a superpower/superpower, what do you want to do?",
"If the apocalypse is coming soon, what do you do?"
"If you were asked to have plastic surgery with a sample of your classmate's face, who would you imitate?"
"Have you ever stolen something?"
"Are you afraid to die? Why?",
"When was the last time you cried and why?"
"What are your special abilities?",
"How can you like the person you like?",
"What do you think is a good trait about your closest friend that he or she doesn't know about?"
"What kind of person would you like to marry one day?"
"In your opinion, what is the most attractive job for the friend sitting next to you? And why?",
"Who do you want to swap with for a day? (closest friends you both know) and why,"
"Have you ever secretly hoped that someone's relationship with their girlfriend would break up? Who?",
"Do you prefer FRIENDS or FRIENDS? Why?",
"Which quote do you remember the most and like?",
"What secrets have you never told your friends until now?",
"Who are your real role models?",
"Which of your friends do you think is a matre?",
"Which of your friends do you think has the least haircut?",
"Which of your friends is the most photogenic?",
"Who is your best ex? And why did they break up?!",
"What's the name of the artist you secretly talked to?"
"What was the name of the teacher you liked?",
"What is the name of your friend's ex-girlfriend that you secretly liked?",
"What's the name of the person (of the opposite sex) you think would be fun to be a girlfriend?"
"What is the name of the person you hate, but you think that person (not necessarily of the opposite sex) likes you?",
"What's the name of the person you've been secretly targeting?",
"Who is the person (of the opposite sex) that comes to your mind the most?",
"Who is the most annoying person among your friends? The reason!",
"Which of your friends do you think should be renewed?",
"Who is closest to your ideal partner here?",
"Father or mother",
"The body part you don't like",
"Have you ever cheated?"
"Have you ever been kissed?"
"What is the first thing you would do if you woke up as the opposite sex?"
"Have you ever let someone else get in trouble for something you did?"
"What's the most embarrassing thing you've ever done in your life?"
"What's the most ridiculous reason you've ever broken up with someone?"
"What's the worst habit you have?",
"What do you think is your best feature? And what is the worst?",
"What's the bravest thing you've ever done?"
"When was the last time you wet the bed?"
"What do you dream about most about sleeping?",
"If you're going to make money illegally, how do you do it?"
"What childish things do you keep doing?",
"If you were blind, who would be your guide dog?"
"What impresses you the most?"
"If you were allowed to use only 3 words for the rest of the night from now, what would it be?",
"If you were a dictator, which law would you enact first?"
"If you lived during the Nazi era, who would you be?"
"What was the most embarrassing experience in school / study time / education / last year?",
"What is the biggest mistake of your life?",
"What would you never do, even if you knew you only had 12 hours to live?"
"What crimes has he committed?"
"Tell me a secret from your childhood.",
"Who is your biggest (secret) representative?",
"What do you want to do with me... (x person), if you can later erase his memory (he,...)?",
"What's the worst thing you've done to someone?"
"Who do you like more?",
"Have you ever fallen in love with any of those present?",
"If you were a vampire, which one of us would you bite now?",
"Have you ever defecated in public?"
"What is your darkest fantasy?",
"What's the best thing you've ever had with someone else?"
"What is the biggest turnoff for you?",
"What do you like most about your body and what is the ugliest?",
"Who would you like to see naked?"
"Who in this round can make you fall in love?",
"Have you ever had an erotic dream where someone from this group happened?",
"If you are going to get tattooed in the genital area, what will be there?",
"What is more important in a relationship: sex or love?",
"Do you think sex is great, good, good, fun sometimes, or do you really not care?"
"What makes you really love?",
"How many times a week/month do you have sex and how often do you want to have sex?",
"How many sexual partners have you slept with?"
"Which part of the body makes you more?",
"How, where and with whom were you first?",
"How important is prolonged foreplay to you?",
"What must a man or a woman do to seduce you?",
"Have you ever had sex with a good friend?"
"Have you ever had sexual relations with any of these groups, except with your partner?",
"Which animal suits you best and why?",
"What's your worst date?"
"Who do you want to kiss now?"
"What's your secret dark fantasy?"
"Would you rather get your ass tattooed or your tongue pierced?"
"Are you always loyal?",
"Do you have a teenage crush?",
"Which person did you fall in love with?",
"Which celebrity would you like to date?"
"What was the most embarrassing moment of your life?"
"Which mouth do you like the most in the group here?",
"Which player has the most beautiful hand?",
"Where was your first kiss?"
"Who in the group would you like to kiss more?",
"Who at the table is perhaps the funniest?",
"What is the biggest mistake of your life?",
"Did something embarrassing happen to you on a date?"
"Have you ever been in contact with drugs?",
"Which person do you want to kiss now?",
"When was the last time you were drunk?"
"Have you ever cheated on a school test?"
"Have you stolen something in the past?",
"Do you snore at night?",
" What is your favorite song?",
"Which players will you trade with for 1 week and why?",
"You moved to a desert island, who did you take from here?",
"What do you fear more?"
"Where do you shave everywhere?",
"You have a nickname?",
"Do you look in the bathroom before you wash?",
"Who gave you the worst heartbreak?"
"How many times have you kissed?"
"What's the most embarrassing thing that's ever happened to you?"
"How many boys/girls have you kissed?",
"Who are you in love with?",
"Which star do you like?"
"Did you start something with XY (insert name)?",
"Have you ever stolen something?"

]
