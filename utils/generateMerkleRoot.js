const MerkleTree = require("./MerkleTree");
const niceList = require("./niceList.json");

merkletree = new MerkleTree(niceList);
console.log(merkletree.getRoot());