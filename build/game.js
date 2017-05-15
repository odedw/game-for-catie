(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DanceInterperter = (function () {
  function DanceInterperter(game) {
    _classCallCheck(this, DanceInterperter);

    this.game = game;
  }

  _createClass(DanceInterperter, [{
    key: 'createAnimalFoundDance',
    value: function createAnimalFoundDance(image, song, target, numberOfAnimalsFound) {
      return this.game.add.tween(image).to({ angle: 20 }, song.beat, Phaser.Easing.Cubic.Out, false, song.intro * song.beat * (song.introEveryBeat || numberOfAnimalsFound === 1 ? 1 : 0)).to({ angle: -20 }, song.beat, Phaser.Easing.Cubic.Out).to({ angle: 20 }, song.beat, Phaser.Easing.Cubic.Out).to({ angle: -20 }, song.beat, Phaser.Easing.Cubic.Out).to(_extends({}, target, { angle: 0 }), 100, Phaser.Easing.Linear.None);
    }
  }, {
    key: 'createAnimalPeekDance',
    value: function createAnimalPeekDance(image) {
      var maxAngle = 10;
      var tween = this.game.add.tween(image);
      var firstTween = tween;
      var direction = 1;
      for (var i = maxAngle; i >= 0; i--) {
        tween = tween.to({ angle: i * direction }, i * 5, Phaser.Easing.Cubic.Out, false);
        direction *= -1;
      }
      firstTween.start();
    }
  }, {
    key: 'createAllAnimalsFoundDance',
    value: function createAllAnimalsFoundDance(image, index, song, x, scale) {
      var _this = this;

      var tween = this.game.add.tween(image).to({ x: x, y: this.game.height / 2, angle: 0, width: image.width / scale, height: image.height / scale }, song.intro * song.beat, Phaser.Easing.Cubic.Out, false);
      var delay = 0;
      song.dance.map(function (step) {
        return step[index];
      }).forEach(function (step) {
        if (step === 'r') {
          tween = tween.to({ angle: -20, y: _this.game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
          delay = 0;
        } else if (step === 'l') {
          tween = tween.to({ angle: 20, y: _this.game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
          delay = 0;
        } else if (step === 'u') {
          tween = tween.to({ angle: 0, y: _this.game.height / 2 - 20 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
          delay = 0;
        } else if (step === 'd') {
          tween = tween.to({ angle: 0, y: _this.game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
          delay = 0;
        } else if (step === '-') {
          delay += song.beat;
        }
      });
      return tween;
    }
  }]);

  return DanceInterperter;
})();

exports['default'] = DanceInterperter;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = [['u', 'u', 'u', 'u'], // 1
['d', 'd', 'd', 'd'], // 2
['u', 'u', 'u', 'u'], // 3
['d', 'd', 'd', 'd'], // 4
['l', 'l', 'r', 'r'], // 5
['r', 'r', 'l', 'l'], // 6
['l', 'l', 'r', 'r'], // 7
['r', 'r', 'l', 'l'], // 8
['u', 'u', 'u', 'u'], // 9
['d', 'd', 'd', 'd'], // 10
['u', 'u', 'u', 'u'], // 11
['d', 'd', 'd', 'd'], // 12
['l', 'l', 'r', 'r'], // 13
['r', 'r', 'l', 'l'], // 14
['l', 'l', 'r', 'r'], // 15
['r', 'r', 'l', 'l'], // 16
['u', 'd', 'd', 'd'], // 17
['d', 'u', 'd', 'd'], // 18
['d', 'd', 'u', 'd'], // 19
['d', 'd', 'd', 'u'], // 20
['u', 'u', '-', 'd'], // 21
['d', 'd', 'u', 'u'], // 22
['u', 'u', 'd', 'd'], // 23
['d', 'u', 'd', 'u'], // 24
['r', 'r', 'r', 'r'], // 25
['l', 'l', 'l', 'l'], // 26
['r', 'r', 'r', 'r'], // 27
['l', 'l', 'l', 'l'], // 28
['u', 'u', 'u', 'u'], // 29
['d', 'd', 'd', 'd'], // 30
['u', 'u', 'u', 'u'], // 31
['d', 'd', 'd', 'd']];
module.exports = exports['default'];
// 32

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = [['u', 'd', 'd', 'd'], // 1
['d', 'u', '-', '-'], // 2
['-', 'd', 'u', '-'], // 3
['-', '-', 'd', 'u'], // 4
['-', '-', 'u', 'd'], // 5
['-', 'u', 'd', '-'], // 6
['u', 'd', '-', '-'], // 7
['d', '-', '-', '-'], // 8
['l', 'l', 'l', 'l'], // 9
['r', 'r', 'r', 'r'], // 10
['l', 'l', 'l', 'l'], // 11
['r', 'r', 'r', 'r'], // 12
['u', 'u', 'u', 'u'], // 13
['d', 'd', 'd', 'd'], // 14
['u', 'u', 'u', 'u'], // 15
['d', 'd', 'd', 'd'], // 16
['u', 'd', 'd', 'd'], // 17
['d', 'u', 'd', 'd'], // 18
['d', 'd', 'u', 'd'], // 19
['d', 'd', 'd', 'u'], // 20
['u', 'u', '-', 'd'], // 21
['d', 'd', 'u', 'u'], // 22
['u', 'u', 'd', 'd'], // 23
['d', 'u', 'd', 'u'], // 24
['r', 'r', 'r', 'r'], // 25
['l', 'l', 'l', 'l'], // 26
['r', 'r', 'r', 'r'], // 27
['l', 'l', 'l', 'l'], // 28
['u', 'u', 'u', 'u'], // 29
['d', 'd', 'd', 'd'], // 30
['u', 'u', 'u', 'u'], // 31
['d', 'd', 'd', 'd']];
module.exports = exports['default'];
// 32

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = [['l', 'l', 'l', 'l'], // 1
['r', 'r', 'r', 'r'], // 2
['l', 'l', 'l', 'l'], // 3
['r', 'r', 'r', 'r'], // 4
['l', 'l', 'l', 'l'], // 5
['r', 'r', 'r', 'r'], // 6
['l', 'l', 'l', 'l'], // 7
['r', 'r', 'r', 'r'], // 8
['l', 'r', 'r', 'r'], // 9
['-', 'l', 'r', 'r'], // 10
['-', '-', 'l', 'r'], // 11
['-', '-', '-', 'l'], // 12
['r', 'r', 'r', 'r'], // 13
['l', 'l', 'l', 'l'], // 14
['r', 'r', 'r', 'r'], // 15
['l', 'l', 'l', 'l'], // 16
['u', 'u', 'u', 'u'], // 17
['d', 'd', 'd', 'd'], // 18
['u', 'u', 'u', 'u'], // 19
['d', 'd', 'd', 'd'], // 20
['u', '-', 'u', '-'], // 21
['d', 'u', 'd', 'u'], // 22
['u', 'd', 'u', 'd'], // 23
['d', 'u', 'd', 'u'], // 24
['r', 'r', 'r', 'r'], // 25
['l', 'l', 'l', 'l'], // 26
['r', 'r', 'r', 'r'], // 27
['l', 'l', 'l', 'l'], // 28
['u', 'u', 'u', 'u'], // 29
['d', 'd', 'd', 'd'], // 30
['u', 'u', 'u', 'u'], // 31
['d', 'd', 'd', 'd']];
module.exports = exports['default'];
// 32

},{}],5:[function(require,module,exports){
"use strict";

Array.prototype.random = function () {
  var n = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

  if (n === 0) return undefined;
  var res = this.sort(function () {
    return 0.5 - Math.random();
  }).slice(0, n);
  return n === 1 ? res[0] : res;
};

Array.prototype.flatMap = function (lambda) {
  return Array.prototype.concat.apply([], this.map(lambda));
};

Array.prototype.sum = function () {
  return this.reduce(function (a, b) {
    return a + b;
  }, 0);
};

Array.prototype.max = function () {
  return this.reduce(function (a, b) {
    return a > b ? a : b;
  }, Number.MIN_SAFE_INTEGER);
};

},{}],6:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./extensions');

var _statesBoot = require('./states/Boot');

var _statesBoot2 = _interopRequireDefault(_statesBoot);

var _statesPreload = require('./states/Preload');

var _statesPreload2 = _interopRequireDefault(_statesPreload);

var _statesGameTitle = require('./states/GameTitle');

var _statesGameTitle2 = _interopRequireDefault(_statesGameTitle);

var _statesMain = require('./states/Main');

var _statesMain2 = _interopRequireDefault(_statesMain);

var _statesGameOver = require('./states/GameOver');

var _statesGameOver2 = _interopRequireDefault(_statesGameOver);

var Game = (function (_Phaser$Game) {
  _inherits(Game, _Phaser$Game);

  function Game() {
    _classCallCheck(this, Game);

    _get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO);

    this.state.add('Boot', _statesBoot2['default'], false);
    this.state.add('Preload', _statesPreload2['default'], false);
    this.state.add('GameTitle', _statesGameTitle2['default'], false);
    this.state.add('Main', _statesMain2['default'], false);
    this.state.add('GameOver', _statesGameOver2['default'], false);

    this.state.start('Boot');
  }

  return Game;
})(Phaser.Game);

new Game();

},{"./extensions":5,"./states/Boot":16,"./states/GameOver":17,"./states/GameTitle":18,"./states/Main":19,"./states/Preload":20}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function Animal(name, w, h) {
  _classCallCheck(this, Animal);

  this.name = name;
  this.w = w;
  this.h = h;
};

exports["default"] = Animal;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
/// <reference path="../../typings/phaser.d.ts" />
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var outerMargin = 20;
var innerMargin = 10;

var Panel = function Panel(game, animalImages, group) {
  _classCallCheck(this, Panel);

  this.game = game;
  this.group = game.add.group();
  group.add(this.group);

  var panelWidth = Math.min(game.width * 0.12, animalImages.map(function (i) {
    return i.width;
  }).max() + innerMargin * 2 + outerMargin * 2);
  this.container = new Phaser.NinePatchImage(this.game, this.game.width - panelWidth, 0, 'panel');
  this.container.targetHeight = this.game.height;
  this.container.targetWidth = panelWidth;
  this.container.UpdateImageSizes();
  this.group.add(this.container);
  this.animalContainers = {};
  var y = outerMargin + innerMargin;
  var containerWidth = panelWidth - outerMargin * 2;
  for (var i = 0; i < animalImages.length; i++) {
    var image = animalImages[i];
    var scale = (containerWidth - innerMargin * 2) / image.width;
    var container = new Phaser.NinePatchImage(this.game, this.container.x + outerMargin, y, 'panel-dark');
    container.targetWidth = containerWidth;
    container.targetHeight = image.height * scale + innerMargin * 2;
    this.group.add(container);
    this.animalContainers[image.name] = { container: container, scale: scale };
    y += container.targetHeight + outerMargin;
  }

  var btnWidth = panelWidth - outerMargin * 2;
  var btnHeight = Math.min((this.game.height - y - outerMargin * 2) / 2, btnWidth * 0.63);

  y = game.height - outerMargin - btnHeight;
  this.pauseButton = game.add.button(this.container.x + outerMargin, y, 'buttons-long', undefined, this, 10, 10, 12);
  this.pauseButton.width = btnWidth;
  this.pauseButton.height = btnHeight;
  this.group.add(this.pauseButton);

  y -= outerMargin + btnHeight;
  this.hintButton = game.add.button(this.container.x + outerMargin, y, 'buttons-long', undefined, this, 6, 6, 5);
  this.hintButton.width = btnWidth;
  this.hintButton.height = btnHeight;
  this.group.add(this.hintButton);
};

exports['default'] = Panel;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
/// <reference path="../../typings/phaser.d.ts" />
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var margin = 20;

var PauseMenu = (function () {
  function PauseMenu(game, backgroundGroup, foregroundGroup, onExit, onExitContext) {
    _classCallCheck(this, PauseMenu);

    this.game = game;
    this.container = game.add.group();
    this.panel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.centerY, 'panel');
    this.panel.anchor.setTo(0.5, 0.5);
    this.panel.targetWidth = this.game.width * 0.1;
    var btnWidth = this.panel.targetWidth - margin * 2;
    var btnHeight = btnWidth * 0.63;
    this.panel.targetHeight = btnHeight * 2 + margin * 3;
    this.panel.UpdateImageSizes();
    this.container.add(this.panel);
    this.container.visible = false;
    this.container.alpha = 0;
    this.tweenTime = 200;
    this.backgroundGroup = backgroundGroup;
    this.foregroundGroup = foregroundGroup;
    this.menuRect = new Phaser.Rectangle(this.panel.x - this.panel.targetWidth / 2, this.panel.y - this.panel.targetHeight / 2, this.panel.targetWidth, this.panel.targetHeight);
    var playBtn = game.add.button(this.panel.x - btnWidth / 2, this.panel.y - this.panel.targetHeight / 2 + margin, 'buttons-long', undefined, this, 13, 13, 14);
    playBtn.width = btnWidth;
    playBtn.height = btnHeight;
    playBtn.events.onInputUp.add(this.hide, this);
    this.container.add(playBtn);

    var exitBtn = game.add.button(this.panel.x - btnWidth / 2, playBtn.y + btnHeight + margin, 'buttons-long', undefined, this, 8, 8, 9);
    exitBtn.width = btnWidth;
    exitBtn.height = btnHeight;
    exitBtn.events.onInputUp.add(onExit, onExitContext);
    this.container.add(exitBtn);
  }

  _createClass(PauseMenu, [{
    key: 'show',
    value: function show() {
      this.showing = true;
      this.container.visible = true;
      this.game.add.tween(this.backgroundGroup).to({ alpha: 0.1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
      this.game.add.tween(this.foregroundGroup).to({ alpha: 0.1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
      this.game.add.tween(this.container).to({ alpha: 1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
      this.backgroundGroup.inputEnabled = true;
      this.game.input.onDown.add(this.onClick, this);
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (!this.menuRect.contains(this.game.input.mousePointer.x, this.game.input.mousePointer.y)) {
        this.hide();
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;

      this.game.buttonClick();
      this.game.input.onDown.remove(this.onClick, this);
      this.showing = false;
      this.game.add.tween(this.backgroundGroup).to({ alpha: 1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
      this.game.add.tween(this.foregroundGroup).to({ alpha: 1 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
      var t = this.game.add.tween(this.container).to({ alpha: 0 }, this.tweenTime, Phaser.Easing.Cubic.Out, true);
      t.onComplete.add(function () {
        return _this.container.visible = false;
      });
    }
  }]);

  return PauseMenu;
})();

exports['default'] = PauseMenu;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function Scene(name, locations) {
  _classCallCheck(this, Scene);

  this.name = name;
  this.locations = locations;
};

exports["default"] = Scene;
module.exports = exports["default"];

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Song = function Song(name, bpm, intro, dance) {
  var introEveryBeat = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

  _classCallCheck(this, Song);

  this.name = name;
  this.segments = [];
  this.segments.push(name + "-full");
  for (var i = 1; i <= 4; i++) {
    this.segments.push(name + "-" + i);
  }
  this.bpm = bpm;
  this.beat = 60000 / bpm;
  this.intro = intro;
  this.dance = dance;
  this.introEveryBeat = introEveryBeat;
};

exports["default"] = Song;
module.exports = exports["default"];

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Repository = (function () {
  function Repository(items) {
    _classCallCheck(this, Repository);

    this.items = items;
  }

  _createClass(Repository, [{
    key: "random",
    value: function random(n) {
      return this.items.random(n);
    }
  }]);

  return Repository;
})();

exports["default"] = Repository;
module.exports = exports["default"];

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsAnimal = require('../objects/Animal');

var _objectsAnimal2 = _interopRequireDefault(_objectsAnimal);

var _Repository2 = require('./Repository');

var _Repository3 = _interopRequireDefault(_Repository2);

var AnimalRepository = (function (_Repository) {
  _inherits(AnimalRepository, _Repository);

  function AnimalRepository() {
    _classCallCheck(this, AnimalRepository);

    _get(Object.getPrototypeOf(AnimalRepository.prototype), 'constructor', this).call(this, [new _objectsAnimal2['default']('elmo', 178, 250), new _objectsAnimal2['default']('horsey', 230, 175), new _objectsAnimal2['default']('greenkitty', 250, 225), new _objectsAnimal2['default']('pil', 225, 202)]);
  }

  return AnimalRepository;
})(_Repository3['default']);

// new Animal('inja', 250, 209),
// new Animal('barney', 127, 250),
// new Animal('rudy', 152, 250),
// new Animal('monster', 188, 250),
// new Animal('bunny', 179, 200),
// new Animal('cookiemonster', 164, 250),
// new Animal('redkitty', 187, 225),
// new Animal('bunnies', 200, 237),
// new Animal('bernard', 176, 250),
// new Animal('monkey', 177, 250),
// new Animal('gerald', 178, 250),
exports['default'] = new AnimalRepository();
module.exports = exports['default'];

},{"../objects/Animal":7,"./Repository":12}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsScene = require('../objects/Scene');

var _objectsScene2 = _interopRequireDefault(_objectsScene);

var _Repository2 = require('./Repository');

var _Repository3 = _interopRequireDefault(_Repository2);

var SceneRepository = (function (_Repository) {
  _inherits(SceneRepository, _Repository);

  function SceneRepository() {
    _classCallCheck(this, SceneRepository);

    _get(Object.getPrototypeOf(SceneRepository.prototype), 'constructor', this).call(this, [new _objectsScene2['default']('swings1', [{ x: 9.07, y: 52.91 }, { x: 17.51, y: 56.25 }, { x: 34.70, y: 60.13 }, { x: 54.08, y: 65.13 }, { x: 68.46, y: 70.68 }, { x: 77.21, y: 51.25 }, { x: 66.90, y: 51.80 }, { x: 13.13, y: 82.90 }, { x: 85.65, y: 79.01 }, { x: 66.90, y: 21.27 }, { x: 52.20, y: 24.04 }]), new _objectsScene2['default']('swings2', [{ x: 54.39, y: 78.46 }, { x: 49.39, y: 65.69 }, { x: 37.51, y: 65.69 }, { x: 66.90, y: 59.58 }, { x: 86.90, y: 59.02 }, { x: 14.38, y: 69.02 }, { x: 7.50, y: 55.69 }, { x: 42.20, y: 36.81 }]), new _objectsScene2['default']('rothschild', [{ x: 10.00, y: 72.38 }, { x: 27.20, y: 75.71 }, { x: 7.81, y: 49.03 }, { x: 60.33, y: 70.15 }, { x: 39.70, y: 56.81 }, { x: 81.90, y: 30.68 }, { x: 58.46, y: 47.36 }, { x: 87.21, y: 29.57 }, { x: 25.95, y: 40.13 }, { x: 20.01, y: 30.13 }, { x: 86.90, y: 69.60 }]), new _objectsScene2['default']('habima', [{ x: 72.84, y: 67.35 }, { x: 6.88, y: 81.24 }, { x: 16.88, y: 32.92 }, { x: 2.81, y: 54.58 }, { x: 10.00, y: 54.03 }, { x: 44.39, y: 67.91 }, { x: 83.78, y: 85.13 }, { x: 43.45, y: 40.70 }, { x: 84.09, y: 30.15 }]), new _objectsScene2['default']('fountain', [{ x: 6.88, y: 56.25 }, { x: 50.33, y: 37.91 }, { x: 86.28, y: 56.81 }, { x: 79.71, y: 82.37 }, { x: 86.90, y: 18.46 }, { x: 65.02, y: 54.03 }, { x: 28.76, y: 55.14 }, { x: 29.07, y: 17.91 }, { x: 53.77, y: 16.80 }]), new _objectsScene2['default']('sefer', [{ x: 22.51, y: 53.86 }, { x: 57.52, y: 53.86 }, { x: 86.90, y: 48.25 }, { x: 70.96, y: 75.86 }, { x: 47.51, y: 23.91 }, { x: 37.82, y: 54.80 }, { x: 30.63, y: 44.50 }, { x: 55.64, y: 42.16 }]), new _objectsScene2['default']('gan', [{ x: 65.65, y: 80.72 }, { x: 52.83, y: 66.26 }, { x: 17.82, y: 24.01 }, { x: 54.39, y: 23.45 }, { x: 4.69, y: 69.60 }, { x: 28.13, y: 75.71 }, { x: 39.39, y: 66.82 }, { x: 19.69, y: 11.22 }])]);
  }

  return SceneRepository;
})(_Repository3['default']);

exports['default'] = new SceneRepository();
module.exports = exports['default'];

},{"../objects/Scene":10,"./Repository":12}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsSong = require('../objects/Song');

var _objectsSong2 = _interopRequireDefault(_objectsSong);

var _dancesClock = require('../dances/clock');

var _dancesClock2 = _interopRequireDefault(_dancesClock);

var _dancesAuto = require('../dances/auto');

var _dancesAuto2 = _interopRequireDefault(_dancesAuto);

var _dancesBay = require('../dances/bay');

var _dancesBay2 = _interopRequireDefault(_dancesBay);

var _Repository2 = require('./Repository');

var _Repository3 = _interopRequireDefault(_Repository2);

var SceneRepository = (function (_Repository) {
  _inherits(SceneRepository, _Repository);

  function SceneRepository() {
    _classCallCheck(this, SceneRepository);

    _get(Object.getPrototypeOf(SceneRepository.prototype), 'constructor', this).call(this, [
    // new Song('clock', 110, 0.15, clockDance),
    // new Song('auto', 110, 0.15, autoDance),
    new _objectsSong2['default']('bay', 110, 1.375, _dancesBay2['default'])]);
  }

  return SceneRepository;
})(_Repository3['default']);

exports['default'] = new SceneRepository();
module.exports = exports['default'];

},{"../dances/auto":2,"../dances/bay":3,"../dances/clock":4,"../objects/Song":11,"./Repository":12}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Boot = (function (_Phaser$State) {
	_inherits(Boot, _Phaser$State);

	function Boot() {
		_classCallCheck(this, Boot);

		_get(Object.getPrototypeOf(Boot.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Boot, [{
		key: "preload",
		value: function preload() {}
	}, {
		key: "create",
		value: function create() {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			this.game.state.start("Preload");
		}
	}]);

	return Boot;
})(Phaser.State);

exports["default"] = Boot;
module.exports = exports["default"];

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameOver = (function (_Phaser$State) {
	_inherits(GameOver, _Phaser$State);

	function GameOver() {
		_classCallCheck(this, GameOver);

		_get(Object.getPrototypeOf(GameOver.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(GameOver, [{
		key: "create",
		value: function create() {}
	}, {
		key: "restartGame",
		value: function restartGame() {
			this.game.state.start("Main");
		}
	}]);

	return GameOver;
})(Phaser.State);

exports["default"] = GameOver;
module.exports = exports["default"];

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _repositoriesSceneRepository = require('../repositories/sceneRepository');

var _repositoriesSceneRepository2 = _interopRequireDefault(_repositoriesSceneRepository);

var GameTitle = (function (_Phaser$State) {
  _inherits(GameTitle, _Phaser$State);

  function GameTitle() {
    _classCallCheck(this, GameTitle);

    _get(Object.getPrototypeOf(GameTitle.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(GameTitle, [{
    key: 'create',
    value: function create() {
      var _this = this;

      this.game.stage.backgroundColor = '#e6e6e6';
      var imagesPerRow = 4;

      var rows = Math.ceil(_repositoriesSceneRepository2['default'].items.length / imagesPerRow);
      var imageWidth = this.game.width / (imagesPerRow + 2);
      var imageHeight = 9 * imageWidth / 16;
      var margin = (this.game.width - imageWidth * imagesPerRow) / 5;
      var yMargin = (this.game.height - (rows * imageHeight + (rows - 1) * margin)) / 2;
      this.graphics = this.game.add.graphics(0, 0);
      var mask = this.game.add.graphics(0, 0);

      var _loop = function (index) {
        var scene = _repositoriesSceneRepository2['default'].items[index];
        var x = index % imagesPerRow;
        var y = Math.floor(index / imagesPerRow);
        var image = _this.game.add.sprite((x + 1) * margin + x * imageWidth, yMargin + y * margin + y * imageHeight, scene.name);
        image.width = imageWidth;
        image.height = imageHeight;
        image.inputEnabled = true;
        image.events.onInputDown.add(function () {
          return _this.startGame(scene);
        }, _this);
        mask.beginFill(0xffffff);
        mask.drawRoundedRect(image.x, image.y, image.width, image.height, 50);
        image.mask = mask;
        mask.endFill();

        _this.graphics.beginFill(0);
        _this.graphics.drawRoundedRect(image.x - 1, image.y - 1, image.width + 2, image.height + 2, 50);
        _this.graphics.endFill();
      };

      for (var index = 0; index < _repositoriesSceneRepository2['default'].items.length; index++) {
        _loop(index);
      }
    }
  }, {
    key: 'startGame',
    value: function startGame(scene) {
      this.game.buttonClick();
      this.game.state.start('Main', {
        ease: Phaser.Easing.Exponential.InOut,
        duration: 500,
        intro: false,
        props: { alpha: 0 }
      }, {
        ease: Phaser.Easing.Exponential.InOut,
        duration: 500,
        intro: true,
        props: { alpha: 1 }
      }, true, false, scene);
    }
  }]);

  return GameTitle;
})(Phaser.State);

exports['default'] = GameTitle;
module.exports = exports['default'];

},{"../repositories/sceneRepository":14}],19:[function(require,module,exports){
/// <reference path="../../typings/phaser.d.ts" />
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _repositoriesAnimalRepository = require('../repositories/animalRepository');

var _repositoriesAnimalRepository2 = _interopRequireDefault(_repositoriesAnimalRepository);

var _repositoriesSceneRepository = require('../repositories/sceneRepository');

var _repositoriesSceneRepository2 = _interopRequireDefault(_repositoriesSceneRepository);

var _repositoriesSongRepository = require('../repositories/songRepository');

var _repositoriesSongRepository2 = _interopRequireDefault(_repositoriesSongRepository);

var _dancesDanceInterperter = require('../dances/DanceInterperter');

var _dancesDanceInterperter2 = _interopRequireDefault(_dancesDanceInterperter);

var _objectsPanel = require('../objects/Panel');

var _objectsPanel2 = _interopRequireDefault(_objectsPanel);

var _objectsPauseMenu = require('../objects/PauseMenu');

var _objectsPauseMenu2 = _interopRequireDefault(_objectsPauseMenu);

var Main = (function (_Phaser$State) {
  _inherits(Main, _Phaser$State);

  function Main(game, params) {
    var numberOfAnimals = arguments.length <= 2 || arguments[2] === undefined ? 4 : arguments[2];

    _classCallCheck(this, Main);

    _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).call(this, game);
    this.numberOfAnimals = numberOfAnimals;
    this.rowMargin = 50;
    this.danceInterperter = new _dancesDanceInterperter2['default'](game);
  }

  _createClass(Main, [{
    key: 'init',
    value: function init(scene) {
      var _this = this;

      this.scene = scene || _repositoriesSceneRepository2['default'].random();

      var game = this.game;
      this.animals = _repositoriesAnimalRepository2['default'].random(this.numberOfAnimals);
      this.animalImagesFound = [];
      this.song = _repositoriesSongRepository2['default'].random();

      this.backgroundGroup = game.add.group();
      var animalGroup = game.add.group();

      // set background
      this.background = this.backgroundGroup.create(game.world.centerX, game.world.centerY, this.scene.name);
      this.background.anchor.set(0.5);
      this.game.stage.backgroundColor = '#000000';

      // create animals
      this.animalImages = [];
      for (var i = 0; i < this.animals.length; i++) {
        var animal = this.animals[i];
        var image = animalGroup.create(0, 0, animal.name);
        image.anchor.set(0.5);
        image.width = animal.w * game.width / 3200;
        image.height = animal.h * game.width / 3200;
        image.inputEnabled = true;
        image.events.onInputDown.add(this.animalFound, this);
        this.animalImages.push(image);
        image.name = animal.name;
      }

      // panel
      this.panel = new _objectsPanel2['default'](game, this.animalImages, this.backgroundGroup);
      this.panel.hintButton.events.onInputUp.add(this.onHint, this);
      this.panel.pauseButton.events.onInputUp.add(this.onPause, this);

      // reposition background according to panel
      var gameRatio = (game.width - this.panel.container.width) / game.height;
      var backgroundRatio = this.background.width / this.background.height;
      if (gameRatio > backgroundRatio) {
        this.background.width = game.width - this.panel.container.width;
        this.background.height = this.background.width / backgroundRatio;
      } else {
        this.background.height = game.height;
        this.background.width = game.height * backgroundRatio;
      }
      this.background.x = game.world.centerX - this.panel.container.width / 2;

      // position animals
      var maxAnimalHeight = this.animalImages.map(function (i) {
        return i.height;
      }).max();
      var maxAnimalWidth = this.animalImages.map(function (i) {
        return i.width;
      }).max();
      var locations = this.scene.locations.filter(function (location) {
        var pos = _this.getLocationPosition(location);
        return pos.x - maxAnimalWidth / 2 > 0 && pos.y - maxAnimalHeight / 2 > 0 && pos.y - maxAnimalHeight / 2 < game.height && pos.x - maxAnimalWidth / 2 < _this.panel.container.x - _this.panel.container.width / 2;
      }).random(this.numberOfAnimals);
      for (var i = 0; i < this.animals.length; i++) {
        var pos = this.getLocationPosition(locations[i]);
        this.animalImages[i].x = pos.x;
        this.animalImages[i].y = pos.y;
      }

      // menu
      this.menu = new _objectsPauseMenu2['default'](game, this.backgroundGroup, animalGroup, this.onExit, this);

      // peek repeat
      game.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.onHint, this);

      var btnWidth = this.game.width * 0.08;
      var btnHeight = btnWidth * 0.63;
      var margin = btnWidth / 3;

      this.playBtn = this.game.add.button(this.game.world.centerX + margin / 2, this.game.world.centerY + margin + maxAnimalHeight / 2, 'buttons-long', undefined, this, 13, 13, 14);
      this.playBtn.width = btnWidth;
      this.playBtn.height = btnHeight;
      this.playBtn.visible = false;
      this.playBtn.alpha = 0;
      this.playBtn.events.onInputUp.add(this.newScene, this);

      this.exitBtn = this.game.add.button(this.game.world.centerX - btnWidth - margin / 2, this.game.world.centerY + margin + maxAnimalHeight / 2, 'buttons-long', undefined, this, 8, 8, 9);
      this.exitBtn.width = btnWidth;
      this.exitBtn.height = btnHeight;
      this.exitBtn.visible = false;
      this.exitBtn.alpha = 0;
      this.exitBtn.events.onInputUp.add(this.onExit, this);

      // this.locationsCollected = [];
      // this.background.inputEnabled = true;
      // this.background.events.onInputDown.add(() => {
      //   const x = (this.game.input.mousePointer.x - (this.background.x - this.background.width / 2)) * 100 / this.background.width;
      //   const y = (this.game.input.mousePointer.y - (this.background.y - this.background.height / 2)) * 100 / this.background.height;
      //   this.animalImages[0].x = this.game.input.mousePointer.x;
      //   this.animalImages[0].y = this.game.input.mousePointer.y;
      //   this.locationsCollected.push({x, y});
      //   console.log(`${this.locationsCollected.length} locations`);
      // });
    }
  }, {
    key: 'getLocationPosition',
    value: function getLocationPosition(location) {
      return {
        x: this.background.x - this.background.width / 2 + this.background.width * (location.x / 100),
        y: this.background.y - this.background.height / 2 + this.background.height * (location.y / 100)
      };
    }
  }, {
    key: 'create',
    value: function create() {}
  }, {
    key: 'animalFound',
    value: function animalFound(image) {
      var _this2 = this;

      // this.allFound(); return;
      if (this.currentTween) return;

      // remove from live images
      this.animalImagesFound.push(image);
      this.animalImages.splice(this.animalImages.indexOf(image), 1);
      image.inputEnabled = false;
      image.events.onInputDown.removeAll();

      this.game.add.audio(this.song.segments[this.animalImagesFound.length]).play();
      var c = this.panel.animalContainers[image.name];
      this.currentTween = this.danceInterperter.createAnimalFoundDance(image, this.song, { x: c.container.x + c.container.targetWidth / 2,
        y: c.container.y + c.container.targetHeight / 2,
        width: image.width * c.scale,
        height: image.height * c.scale }, this.animalImagesFound.length);
      if (this.animalImagesFound.length === this.numberOfAnimals) {
        this.currentTween.onComplete.add(this.allFound, this);
      }
      this.currentTween.onComplete.add(function () {
        return _this2.currentTween = undefined;
      }, this);
      this.currentTween.start();
    }
  }, {
    key: 'allFound',
    value: function allFound() {
      var _this3 = this;

      var rowWidth = this.animalImagesFound.map(function (image) {
        return image.width / _this3.panel.animalContainers[image.name].scale;
      }).sum() + (this.numberOfAnimals - 1) * this.rowMargin;
      var currentX = this.game.width / 2 - rowWidth / 2;
      this.audio = this.game.add.audio(this.song.segments[0]).play();
      var tweens = [];
      for (var i = 0; i < this.animalImagesFound.length; i++) {
        var currentImage = this.animalImagesFound[i];
        var scale = this.panel.animalContainers[currentImage.name].scale;
        currentX += currentImage.width / (2 * scale);
        tweens.push(this.danceInterperter.createAllAnimalsFoundDance(currentImage, i, this.song, currentX, scale));
        currentX += this.animalImagesFound[i].width / (scale * 2) + this.rowMargin;
      }

      this.game.time.events.removeAll();
      tweens.push(this.game.add.tween(this.background).to({ alpha: 0.1 }, this.song.beat, Phaser.Easing.Cubic.Out));
      tweens.push(this.game.add.tween(this.panel.group).to({ alpha: 0 }, this.song.beat, Phaser.Easing.Cubic.Out));
      this.exitBtn.visible = true;
      this.playBtn.visible = true;
      tweens.push(this.game.add.tween(this.exitBtn).to({ alpha: 1 }, this.song.beat, Phaser.Easing.Cubic.Out));
      tweens.push(this.game.add.tween(this.playBtn).to({ alpha: 1 }, this.song.beat, Phaser.Easing.Cubic.Out));
      tweens.forEach(function (t) {
        return t.start();
      });
    }
  }, {
    key: 'newScene',
    value: function newScene() {
      if (this.audio) this.audio.stop();
      this.game.buttonClick();
      this.game.state.start('Main');
    }
  }, {
    key: 'onHint',
    value: function onHint() {
      if (this.menu.showing || this.currentTween || this.animalImagesFound.length === this.numberOfAnimals) return;

      var image = this.animalImages.random();
      if (image) this.danceInterperter.createAnimalPeekDance(image);
      this.game.add.audio('peek' + (Math.floor(Math.random() * 4) + 1)).play();
    }
  }, {
    key: 'onPause',
    value: function onPause() {
      // console.log('[' + this.locationsCollected.map(l => `{x: ${l.x.toFixed(2)}, y:${l.y.toFixed(2)}}`).join(', ') + ']');
      if (this.currentTween || this.animalImagesFound.length === this.numberOfAnimals) return;
      this.game.buttonClick();
      this.menu.show();
    }
  }, {
    key: 'onExit',
    value: function onExit() {
      this.game.buttonClick();
      if (this.audio) this.audio.stop();
      this.game.add.audio(this.song.segments[0]).stop();
      this.game.state.start('GameTitle');
    }
  }], [{
    key: 'update',
    value: function update() {}
  }]);

  return Main;
})(Phaser.State);

exports['default'] = Main;
module.exports = exports['default'];

},{"../dances/DanceInterperter":1,"../objects/Panel":8,"../objects/PauseMenu":9,"../repositories/animalRepository":13,"../repositories/sceneRepository":14,"../repositories/songRepository":15}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _repositoriesSceneRepository = require('../repositories/sceneRepository');

var _repositoriesSceneRepository2 = _interopRequireDefault(_repositoriesSceneRepository);

var _repositoriesAnimalRepository = require('../repositories/animalRepository');

var _repositoriesAnimalRepository2 = _interopRequireDefault(_repositoriesAnimalRepository);

var _repositoriesSongRepository = require('../repositories/songRepository');

var _repositoriesSongRepository2 = _interopRequireDefault(_repositoriesSongRepository);

var Preload = (function (_Phaser$State) {
  _inherits(Preload, _Phaser$State);

  function Preload() {
    _classCallCheck(this, Preload);

    _get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Preload, [{
    key: 'preload',
    value: function preload() {
      var game = this.game;

      // images
      _repositoriesSceneRepository2['default'].items.forEach(function (item) {
        return game.load.image(item.name, 'static/images/scenes/' + item.name + '.png');
      });
      _repositoriesAnimalRepository2['default'].items.forEach(function (item) {
        return game.load.image(item.name, 'static/images/animals/' + item.name + '.png');
      });
      this.loadImage('panel');
      this.loadImage('panel-dark');

      // sounds
      _repositoriesSongRepository2['default'].items.forEach(function (item) {
        return item.segments.forEach(function (segment) {
          return ['mp3', 'ogg'].forEach(function (format) {
            return game.load.audio(segment, 'static/sounds/songs/' + item.name + '/' + segment + '.' + format);
          });
        });
      });
      this.loadSound('peek1');
      this.loadSound('peek2');
      this.loadSound('peek3');
      this.loadSound('peek4');
      this.loadSound('button');

      // atlas
      game.load.spritesheet('button', 'static/images/buttons.png', 256, 256);
      game.load.spritesheet('buttons-long', 'static/images/buttons-long.png', 407, 256);
    }
  }, {
    key: 'loadImage',
    value: function loadImage(name) {
      this.game.load.image(name, 'static/images/' + name + '.png');
    }
  }, {
    key: 'loadSound',
    value: function loadSound(name) {
      this.game.load.audio(name, 'static/sounds/' + name + '.mp3');
      this.game.load.audio(name, 'static/sounds/' + name + '.ogg');
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.cache.addNinePatch('panel', 'panel', undefined, 7, 7, 7, 7);
      this.game.cache.addNinePatch('panel-dark', 'panel-dark', undefined, 7, 7, 7, 7);
      var buttonClickSound = this.game.add.audio('button');
      this.game.buttonClick = function () {
        return buttonClickSound.play();
      };

      // this.game.cache.addNinePatch('btn', 'btn', undefined, 7, 7, 10, 30);
      // this.game.cache.addNinePatch('btn-down', 'btn-down', undefined, 7, 7, 7, 7);
      this.game.state.start('GameTitle');
    }
  }]);

  return Preload;
})(Phaser.State);

exports['default'] = Preload;
module.exports = exports['default'];

},{"../repositories/animalRepository":13,"../repositories/sceneRepository":14,"../repositories/songRepository":15}]},{},[6])
//# sourceMappingURL=game.js.map
