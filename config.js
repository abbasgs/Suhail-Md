const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923057473911";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923057473911,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_36_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUyLFxuICAgICAgICA2MixcbiAgICAgICAgMjA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDkzLFxuICAgICAgICAzNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYwLFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NixcbiAgICAgICAgMTIxLFxuICAgICAgICA3MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUyLFxuICAgICAgICA2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI2LFxuICAgICAgICA4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODksXG4gICAgICAgIDY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM0RkaXp6MkZhL0VvbEZQdGRDWWZaNysvcWRtbkJjbC9BQnMyL2tsSHVqRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNDQxMzc3MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA5RjYyNkU2MkU0QTBBRjFFNzJBNkUwMTExMkU2MDVFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM2MzAwNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA0NDEzNzcyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTYwNTAzNTYyNzVEOTRBRDUzQkVCNjVBQjEwNkE3RTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzYzMDA1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJjN01HcHppUURlUFpoN3FIZWd1UGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2IwYjQ1MWItZWQ3Ny00ZDIzLTg1ODAtOGZmNWZhNjc4NjJiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAxNjYsXG4gICAgICAxMzMsXG4gICAgICA5NyxcbiAgICAgIDExOCxcbiAgICAgIDk2LFxuICAgICAgMTUwLFxuICAgICAgMjIzLFxuICAgICAgMjAyLFxuICAgICAgODcsXG4gICAgICA0OSxcbiAgICAgIDEzNSxcbiAgICAgIDE0MSxcbiAgICAgIDE2NSxcbiAgICAgIDIyOSxcbiAgICAgIDEyNCxcbiAgICAgIDE3NCxcbiAgICAgIDEzNSxcbiAgICAgIDI4LFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDIxNSxcbiAgICAgIDE3MCxcbiAgICAgIDg5LFxuICAgICAgNjAsXG4gICAgICAxOCxcbiAgICAgIDIxMyxcbiAgICAgIDU1LFxuICAgICAgMTc0LFxuICAgICAgNDEsXG4gICAgICAxNTIsXG4gICAgICAxNDgsXG4gICAgICAxMixcbiAgICAgIDYzLFxuICAgICAgMjQ3LFxuICAgICAgMTA0LFxuICAgICAgMjE0LFxuICAgICAgOTgsXG4gICAgICAxMTAsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0OVJYRVE3UVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDQ0MTM3NzIxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk1MTcyMzk4NDY1MTE5OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQWJiYXMgQW1pblwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05uU3M3Z0hFUFhQcXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOHIxTTN5Y3FKcWt3aTFhTEpIYkMvQytEcWJFdE5oOFhMRWc5dXpNTnhFdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUTVhYbkRyRnBxaEw3TEg2Ym5UNXJzajg1YjhoaEhiNytwRWs3bzV5NWR5OXNGUVMwc1phVEJ0Q0ozQ3hNNkZUUTRBTi9tY1B1YmhXdG1KZHJqM0JCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3c1ZiZ05JSlpFRnlKMHowdGlVR0p2MnJNaTA4NnNUVnBLb2RqdXRhSXpuWndqSUYvc3BTbTFTaU95SDN1SWFrR1AyaHlleXdjZjJMRDdUUkF0NE5odz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNDQxMzc3MjE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM2MzAwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdoR1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2hHLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVTM2VXU4eDk2UzJCT2ZXd2RQcWxuV0NYeXBEeitkN2VEaDFIRnBNTERDWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTk3MzM0ODczLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzNjMwMDM1MDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
