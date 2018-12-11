// Load up the discord.js library
const Discord = require("discord.js");

const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.
client.config = config;

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
  if(message.author.bot) return;
  
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "help") {
	  message.author.send("Welcome to Brat-bot! A work in progress.\nThis bot monitors Gamechanger channels for specific commands to which it is programmed to respond. The bot will not respond to unrecognized commands.\nNote: All commands must be prefixed by \"-\" to be recognized by The Doer. For example: \"-mae\" or \"-notetoself\"\n\nCurrent commands include:\n\"notetoself\" - sends the user a message repeating the text that follows the command. For example \"-notetoself call mom\" will send the user a message saying \"call mom\".\n\"gregg\" - sends the excited gregg gif to the current channel.\n\"mae\" - sends the excited mae gif to the current channel. \n\"yikes\" - sends the yikes gif to the current channel.\n\"hi\" - sends the Pennywise waving gif to the current channel.\n\nPlease pm EA Quinn to have more commands added to this bot.\n\nEnjoy!");
  }
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "notetoself") {
	  //This command will PM the user whatever they say after the command.
	  const sayMessage = args.join(" ");
	  message.author.send(sayMessage);
  }
  
  if(command === "gregg") {
	  message.channel.send({
        "embed": {
                "image": {
                "url": "https://cdn.discordapp.com/attachments/397847831093837825/430814764361318411/gregg.gif",
                }
            }
        });
  }

  if(command === "mae") {
	  message.channel.send({
        "embed": {
                "image": {
                "url": "https://cdn.discordapp.com/attachments/397847831093837825/430812689246322689/mae.gif",
                }
            }
        });
  }
  
  if(command === "gwilliam") {
	  message.channel.send({
        "embed": {
                "image": {
                "url": "https://cdn.discordapp.com/attachments/472480506227982337/474289977686097920/gwilliam.gif",
                }
            }
        });
  }
  
  if(command === "yikes") {
	  message.channel.send({
		  "embed": {
			  "image": {
				  "url" : "https://cdn.discordapp.com/attachments/472480506227982337/474291139017572392/yikes.gif",
			  }
		  }
	  });
  }
  
  if(command === "hi") {
	  message.channel.send({
		  "embed": {
			  "image": {
				  "url": "https://cdn.discordapp.com/attachments/472480506227982337/474292054315499521/c90bb6c67a3b771f0c768cd70f53dcdf.gif",
			  }
		  }
	  });
  }
  
  if(command === "tapir1") {
	  message.channel.send({
		  "embed": {
			  "image": {
				  "url" : "https://cdn.discordapp.com/attachments/472480506227982337/474294414391508992/tapir.gif",
			  }
		  }
	  });
  }
  
  if(command === "stone") {
	  message.channel.send({
		  "embed": {
			  "image": {
				  "url": "https://cdn.discordapp.com/attachments/405018357268611074/478953183037882379/QkR6.gif",
			  }
		  }
	  });
  }
  
  if(command === "corey") {
	  message.channel.send({
		  "embed": {
			  "image": {
				  "url" : "https://cdn.discordapp.com/attachments/393065603809804289/474299038179786752/corey.png",
			  }
		  }
	  });
  }
  
  const randomGoose = [
  'https://cdn.discordapp.com/attachments/476376680827584532/484079972622008368/qFiC4eY.gif',
  'https://media.giphy.com/media/3Z1tqQNCzHXfy3JcBf/giphy.gif',
  'https://i.imgur.com/9s55gIX.gif',
  'https://media2.giphy.com/media/5fCAGvA3uKj4I/200.gif',
  'https://media1.giphy.com/media/dbdB8znnV9ZGU/200w.gif',
  'https://media0.giphy.com/media/ANBurXQvliE8g/giphy.gif'
  ]
    if (command === "goose"){
	  message.channel.send({file: randomGoose[Math.floor(Math.random() * randomGoose.length)]});
  }

  const randomKnuckles = [
  'https://cdn.discordapp.com/attachments/472480506227982337/474296278080290823/download.jpg',
  'https://cdn.discordapp.com/attachments/472480506227982337/474296380375040000/knuckles1.JPG',
  'https://cdn.discordapp.com/attachments/472480506227982337/474296381952098315/knuckles3.JPG',
  'https://cdn.discordapp.com/attachments/472480506227982337/474296383604523018/screen-shot-2018-01-10-5.png',
  'https://cdn.discordapp.com/attachments/472480506227982337/474296384728596490/ugandan_knuckles_vector_by_surizarin-dbzp0gi.png',
  'https://cdn.discordapp.com/attachments/472480506227982337/474296385714389024/ugandanknuck.jpg'
  ]
  
  if (command === "knuckles"){
	  message.channel.send('I will show you de wae', {file: randomKnuckles[Math.floor(Math.random() * randomKnuckles.length)]});
  }
  
  const randomRobit = [
  'https://cdn.discordapp.com/attachments/393065603809804289/499296382281318440/giphy-2.gif',
  'https://cdn.discordapp.com/attachments/393065603809804289/499296301515669512/giphy.gif',
  'https://cdn.discordapp.com/attachments/476376680827584532/499297282064121866/Gg6wa3S.gif'
  ]
	  
  if (command === "gmrboot"){
  	message.channel.send({file: randomRobit[Math.floor(Math.random()* randomRobit.length)]});
  }
  
  if (command === "spam") {
    var count = 1; // Number of messages sent (modified by sendSpamMessage)
    var maxMessages = 40; // Change based on how many messages you want sent

    function sendSpamMessage() {
      try {
        // You could modify this to send a random string from an array (ex. a quote), create a
        // random sentence by pulling words from a dictionary file, or to just send a random
        // arrangement of characters and integers. Doing something like this may help prevent
        // future bots from detecting that you sent a spam message.
        message.channel.send("This is spam message #" + count);

        if (count < maxMessages) {
          // If you don't care about whether the messages are deleted or not, like if you created a dedicated server
          // channel just for bot spamming, you can remove the below line and the entire prune command.
          message.channel.send("/prune");
          count++;

          /* These numbers are good for if you want the messages to be deleted.
           * I've also noticed that Discord pauses for about 4 seconds after you send 9
           * messages in rapid succession, and this prevents that. I rarely have any spam
           * messages slip through unless there is a level up from mee6 or Tatsumaki. */
          let minTime = Math.ceil(5449);  // Rush RP1
          let maxTime = Math.floor(7777); // Arbitrary integer
          let timeToWait = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
          setTimeout(sendSpamMessage, timeToWait);
        } else {
          // Sends a message when count is equal to maxMessages. Else statement can be
          // modified/removed without consequence.
          message.channel.send("------------------");
          message.channel.send("I AM FINISHED!!!");
          message.channel.send("------------------");
        }
      } catch (error) {
        sendSpamMessage();
      }
    }

    message.delete().catch(O_o=>{})
    sendSpamMessage();
  }

  if (command === "prune") {
    message.channel.fetchMessages()
    .then(messages => {
      let message_array = messages.array();
      message_array.length = 2;
      message_array.map(msg => msg.delete().catch(console.error));
     })
    .catch(console.error);
  }
  
});

client.login(config.token);