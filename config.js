const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="eni550479@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348124220742";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_53_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUyLFxuICAgICAgICA5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDM1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDkxLFxuICAgICAgICA3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDcsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NixcbiAgICAgICAgMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzLFxuICAgICAgICAxMSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTW9YVnpmUThZcnN1eU5Oam5xK2poU2RtU3V0dCtsa2dnTUtwZDErdERSaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWG03djUzLWZReC1wZkRjd2dKT3VGUVwiLFxuICBcInBob25lSWRcIjogXCI0Nzk5ODJkNy0zYzhmLTQxZDYtYjc1Ny0xYzE4YjZhZmMwM2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEwLFxuICAgICAgMjksXG4gICAgICAyMzcsXG4gICAgICA0OSxcbiAgICAgIDQ2LFxuICAgICAgMTg4LFxuICAgICAgMTUzLFxuICAgICAgNixcbiAgICAgIDIwMCxcbiAgICAgIDIwLFxuICAgICAgOTIsXG4gICAgICAxMjAsXG4gICAgICAxMSxcbiAgICAgIDEzMCxcbiAgICAgIDQxLFxuICAgICAgNTksXG4gICAgICAxNixcbiAgICAgIDEyNixcbiAgICAgIDc0LFxuICAgICAgMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxMzgsXG4gICAgICAyMTYsXG4gICAgICAxODgsXG4gICAgICA0LFxuICAgICAgNTUsXG4gICAgICAyMTIsXG4gICAgICAyMTYsXG4gICAgICAxODUsXG4gICAgICA5NCxcbiAgICAgIDU5LFxuICAgICAgMTAsXG4gICAgICAxMDEsXG4gICAgICAxOTYsXG4gICAgICAxMDYsXG4gICAgICA2NCxcbiAgICAgIDMwLFxuICAgICAgMTIsXG4gICAgICAyMDAsXG4gICAgICA3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGMURIU0VGN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyNDIyMDc0Mjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2VhPCdlLjwnZS78J2UuOKEnfCdlLggMTDwnZWCXCIsXG4gICAgXCJsaWRcIjogXCIxMzU1MjgyOTcwMjU3ODA6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJU2RxTG9IRVBiTDZMb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm0xMXNsS05hUFprWEY2MDZvWHFYK3c0YVBNUVJ1VDdNQkUvQTdJSWx3R1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidzlqNmJLSlRST0R1WmpEUS9wZnN6ZTdNNTZJWVk0YmtaZXBqSGhERzk3NWpTR2JNVnZxYW5DRGpiUjEwby81VHZqeS9KUEYvLzRZOTBPMVF3TkV3QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT0ZGWnpIR0E1dTJqa3dzc3NmdHphQWR5bE9QZ21yZ3NtWUpMaHh0WThGQVIvNjQzK0U2b0xGTmhYQkROd2RJUC9YdldqbnJSSlYwdTdCbjI0NEE4aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyNDIyMDc0Mjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzOTYxMjExLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzVHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPNUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGTzBjOVord3gyNHRHRDJsZlljTW9FZEhiVlY4RFVLeXF6QXFOVktKWFBRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDEzNDIwODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Samskid",
  packname: process.env.PACK_NAME || "Bot",
  botname : process.env.BOT_NAME  || "Samskid-XMD",
  ownername:process.env.OWNER_NAME|| "Samskid-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
