const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Zatana está lista para el perreo");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("$uwu")) {
     message.channel.send("Estoy lista para el perreo!");
   }else
   if(message.content.startsWith("$hola")) {
    message.channel.send("Bienvenido, Humano.");
  }
  
  if(message.content.startsWith(".estoy triste"))
  message.channel.send(" Un alma triste puede matar más rápidamente que una bacteria (John Steinbeck)")
   
 
 });
 
 client.login("ODAzMDk5ODkzMjM3MDIyNzIx.YA43Dw.jTO4PVB0dviGtEXsLFEsu48gsGc");