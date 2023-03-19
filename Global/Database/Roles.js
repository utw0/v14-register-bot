const { Schema, model } = require("mongoose");

const schema = Schema({
  guildID: String,
  kurucuPerms:{type:Array, default:[]},
  unregisterRoles:{type:Array, default:[]},
  manRoles:{type:Array, default:[]},
  womanRoles:{type:Array, default:[]},
  taglırolu:{type:String, default:undefined},
  boosterRole:{type:String, default:undefined},
  registerStaffRole:{type:String, default:undefined},
  suspectRole:{type:String, default:undefined},
});

module.exports = model("luhux-Roles", schema);
