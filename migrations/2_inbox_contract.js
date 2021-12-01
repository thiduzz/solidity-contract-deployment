const Inbox = artifacts.require("Inbox");

module.exports = function (deployer) {
  deployer.deploy(Inbox, "Thiago", {gas: 4612388, from: "0xD0b7075ED027752B36B885cdCb3Ce5a1B6e33B71"});
};
