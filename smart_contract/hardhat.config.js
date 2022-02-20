require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/3C5JtldvZLXJauaeSHpIAPYsicjdw2KY',
      accounts: [
        '9d1404f3085f5c0ba697cf4d77e365deddef613481b4769f41f24bf24deeeb7f'
      ]
    }
  }
};
