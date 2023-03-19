const { Schema, model } = require("mongoose");

const schema = Schema({
  guildID:String,
  Tag:{type:String,default:undefined},
  welcomeChannel: {type:String, default:undefined},
  suspectLog: {type:String, default:undefined},
  chatChannel: {type:String, default:undefined},
  taglog: {type:String, default:undefined},
  rules: {type:String, default:undefined},
  inviteLog: {type:String, default:undefined},
  kayıtsızlog: {type:String, default:undefined},
  kayıtlog: {type:String, default:undefined},
});

module.exports = model("luhux-Channel", schema);
