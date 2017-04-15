module.exports = {
    "extends": "airbnb",
    "plugins": [
    ],
    "globals": {
      "Phaser": true
    },
    "rules": {
      "func-names": 0,
      "max-len": [2, 150, 2, {
        "ignoreUrls": true,
        "ignoreComments": false
      }],
      "strict": 0,
      "linebreak-style": 0,
      "no-plusplus": 0,
      "no-loop-func": 0,
      "no-param-reassign": 0,
      "no-console": 0,
      "class-methods-use-this": 0,
      "no-mixed-operators": 0,
      "no-return-assign": 0
    },
    "env": {
        "browser": true
    }
};
