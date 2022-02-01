const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://telegra.ph/file/514df658f7582f9f07209.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: `*Toxic Bot*
 

        *Github link        _coming soon_*
        
        
       *Bot making video   _coming soon_*
 

       *Audio commads-1     _coming soon_*
 
 
       *Audio commads-2     _coming soon_*
  
  
      *Sticker commads      _coming soon_*
`}) 

})); 
