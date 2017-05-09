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
    value: function createAnimalFoundDance(image, song, target) {
      return this.game.add.tween(image).to({ angle: 20 }, song.beat, Phaser.Easing.Cubic.Out, false, song.intro * song.beat).to({ angle: -20 }, song.beat, Phaser.Easing.Cubic.Out).to({ angle: 20 }, song.beat, Phaser.Easing.Cubic.Out).to({ angle: -20 }, song.beat, Phaser.Easing.Cubic.Out).to(_extends({}, target, { angle: 0 }), 100, Phaser.Easing.Linear.None);
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
    value: function createAllAnimalsFoundDance(image, index, song, x) {
      var _this = this;

      var autoStart = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];

      var tween = this.game.add.tween(image).to({ x: x, y: this.game.height / 2, angle: 0 }, song.intro * song.beat, Phaser.Easing.Cubic.Out, false);
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
      if (autoStart) tween.start();
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./extensions":3,"./states/Boot":14,"./states/GameOver":15,"./states/GameTitle":16,"./states/Main":17,"./states/Preload":18}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
/// <reference path="../../typings/phaser.d.ts" />
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var animalOuterMargin = 20;
var animalInnerMargin = 10;

var Panel = function Panel(game, animalImages, group) {
  _classCallCheck(this, Panel);

  this.game = game;
  this.group = game.add.group();
  group.add(this.group);

  var panelWidth = animalImages.map(function (i) {
    return i.width;
  }).max() + animalInnerMargin * 2 + animalOuterMargin * 2;
  this.container = new Phaser.NinePatchImage(this.game, this.game.width - panelWidth / 2, this.game.world.centerY, 'panel');
  this.container.anchor.setTo(0.5, 0.5);
  this.container.targetHeight = this.game.height;
  // this.container.targetHeight = animalImages.map(i => i.height).sum() +
  //   (animalImages.length - 1) * animalOuterMargin +
  //   animalImages.length * 2 * animalInnerMargin +
  //   (btnHeight + btnMargin * 2) * 2;

  this.container.targetWidth = panelWidth;
  this.container.UpdateImageSizes();
  this.group.add(this.container);
  this.animalContainers = {};
  var y = animalOuterMargin + animalInnerMargin;
  for (var i = 0; i < animalImages.length; i++) {
    var image = animalImages[i];
    var container = new Phaser.NinePatchImage(this.game, this.container.x, y + image.height / 2, 'panel-dark');
    container.anchor.setTo(0.5, 0.5);
    container.targetWidth = panelWidth - animalOuterMargin * 2;
    container.targetHeight = image.height + animalInnerMargin * 2;
    this.group.add(container);
    this.animalContainers[image.name] = container;
    y += container.targetHeight + animalOuterMargin;
  }

  var btnWidth = panelWidth - animalOuterMargin * 2;
  var btnHeight = (this.game.height - y - animalOuterMargin * 2) / 2;

  this.hintButton = game.add.button(this.container.x, y + btnHeight / 2, 'buttons-long', undefined, this, 6, 6, 5);
  this.hintButton.anchor.setTo(0.5, 0.5);
  this.hintButton.width = btnWidth;
  this.hintButton.height = btnHeight;
  this.group.add(this.hintButton);
  y += animalOuterMargin + btnHeight;
  this.pauseButton = game.add.button(this.container.x, y + btnHeight / 2, 'buttons-long', undefined, this, 10, 10, 12);
  this.pauseButton.anchor.setTo(0.5, 0.5);
  this.pauseButton.width = btnWidth;
  this.pauseButton.height = btnHeight;
  this.group.add(this.pauseButton);

  var animalWidth = animalImages.map(function (image) {
    return image.width;
  }).sum();
  this.margin = (this.container.targetWidth - animalWidth) / (animalImages.length + 1);
  this.currentX = this.container.x + this.margin - this.container.targetWidth / 2;
};

exports['default'] = Panel;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
/// <reference path="../../typings/phaser.d.ts" />

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PauseMenu = (function () {
  function PauseMenu(game) {
    _classCallCheck(this, PauseMenu);

    this.game = game;
    this.container = game.add.group();
    this.panel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.centerY, 'panel');
    this.panel.anchor.setTo(0.5, 0.5);
    this.panel.targetWidth = 200;
    this.panel.targetHeight = 200;
    this.panel.UpdateImageSizes();
    this.container.add(this.panel);
    this.container.visible = false;
  }

  _createClass(PauseMenu, [{
    key: 'show',
    value: function show() {
      this.container.visible = true;
    }
  }]);

  return PauseMenu;
})();

exports['default'] = PauseMenu;
module.exports = exports['default'];

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Song = function Song(name, bpm, intro, dance) {
  _classCallCheck(this, Song);

  this.name = name;
  this.segments = [];
  this.segments.push(name + "-full");
  for (var i = 1; i <= 4; i++) {
    this.segments.push(name + "-" + i);
  }
  this.bpm = bpm;
  this.beat = 60000 / bpm;
  console.log(this.beat);
  this.intro = intro;
  this.dance = dance;
};

exports["default"] = Song;
module.exports = exports["default"];

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

    _get(Object.getPrototypeOf(AnimalRepository.prototype), 'constructor', this).call(this, [new _objectsAnimal2['default']('elmo', 178, 250), new _objectsAnimal2['default']('horsey', 230, 175), new _objectsAnimal2['default']('greenkitty', 250, 225), new _objectsAnimal2['default']('pil', 225, 202), new _objectsAnimal2['default']('inja', 250, 209), new _objectsAnimal2['default']('barney', 127, 250), new _objectsAnimal2['default']('rudy', 152, 250), new _objectsAnimal2['default']('monster', 188, 250), new _objectsAnimal2['default']('bunny', 179, 200), new _objectsAnimal2['default']('cookiemonster', 164, 250), new _objectsAnimal2['default']('redkitty', 187, 225), new _objectsAnimal2['default']('bunnies', 200, 237), new _objectsAnimal2['default']('bernard', 176, 250), new _objectsAnimal2['default']('monkey', 177, 250), new _objectsAnimal2['default']('gerald', 178, 250)]);
  }

  return AnimalRepository;
})(_Repository3['default']);

exports['default'] = new AnimalRepository();
module.exports = exports['default'];

},{"../objects/Animal":5,"./Repository":10}],12:[function(require,module,exports){
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

    _get(Object.getPrototypeOf(SceneRepository.prototype), 'constructor', this).call(this, [new _objectsScene2['default']('swings1', [{ x: 14, y: 25 }, { x: 25, y: 74 }, { x: 43, y: 19 }, { x: 45, y: 62 }, { x: 58, y: 24 }, { x: 58, y: 65 }, { x: 68, y: 26 }, { x: 82, y: 69 }, { x: 90, y: 24 }]), new _objectsScene2['default']('swings2', [{ x: 14, y: 25 }, { x: 25, y: 74 }, { x: 43, y: 19 }, { x: 45, y: 62 }, { x: 58, y: 24 }, { x: 58, y: 65 }, { x: 68, y: 26 }, { x: 82, y: 69 }, { x: 90, y: 24 }]), new _objectsScene2['default']('rothschild', [{ x: 14, y: 25 }, { x: 25, y: 74 }, { x: 43, y: 19 }, { x: 45, y: 62 }, { x: 58, y: 24 }, { x: 58, y: 65 }, { x: 68, y: 26 }, { x: 82, y: 69 }, { x: 90, y: 24 }]), new _objectsScene2['default']('habima', [{ x: 14, y: 25 }, { x: 25, y: 74 }, { x: 43, y: 19 }, { x: 45, y: 62 }, { x: 58, y: 24 }, { x: 58, y: 65 }, { x: 68, y: 26 }, { x: 82, y: 69 }, { x: 90, y: 24 }])]);
  }

  return SceneRepository;
})(_Repository3['default']);

// new Scene('i', [{x: 14, y:25}, {x: 25, y:74}, {x: 43, y:19}, {x: 45, y:62}, {x: 58, y:24}, {x: 58, y:65}, {x: 68, y:26}, {x: 82, y:69}, {x: 90, y:24}]),
exports['default'] = new SceneRepository();
module.exports = exports['default'];

},{"../objects/Scene":8,"./Repository":10}],13:[function(require,module,exports){
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

var _Repository2 = require('./Repository');

var _Repository3 = _interopRequireDefault(_Repository2);

var SceneRepository = (function (_Repository) {
  _inherits(SceneRepository, _Repository);

  function SceneRepository() {
    _classCallCheck(this, SceneRepository);

    _get(Object.getPrototypeOf(SceneRepository.prototype), 'constructor', this).call(this, [new _objectsSong2['default']('clock', 110, 0.15, _dancesClock2['default'])]);
  }

  return SceneRepository;
})(_Repository3['default']);

exports['default'] = new SceneRepository();
module.exports = exports['default'];

},{"../dances/clock":2,"../objects/Song":9,"./Repository":10}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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
      // this.game.state.start('Main', true, false, scene);
      // this.graphics.destroy();
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

},{"../repositories/sceneRepository":12}],17:[function(require,module,exports){
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
      this.scene = scene || _repositoriesSceneRepository2['default'].random();

      var game = this.game;
      this.animals = _repositoriesAnimalRepository2['default'].random(this.numberOfAnimals);
      this.animalImagesFound = [];
      var locations = this.scene.locations.random(this.numberOfAnimals);
      this.song = _repositoriesSongRepository2['default'].random();

      this.backgroundGroup = game.add.group();
      var animalGroup = game.add.group();

      // set background
      this.background = this.backgroundGroup.create(game.world.centerX, game.world.centerY, this.scene.name);
      this.background.anchor.set(0.5);
      var ratio = this.background.width / this.background.height;
      this.background.width = game.width;
      this.background.height = game.width / ratio;

      this.game.stage.backgroundColor = '#000000';

      // place animals
      this.animalImages = [];
      for (var i = 0; i < this.animals.length; i++) {
        var animal = this.animals[i];
        var _location = locations[i];
        var image = animalGroup.create(game.width * (_location.x / 100), game.height * (_location.y / 100), animal.name);
        image.anchor.set(0.5);
        image.width = animal.w;
        image.height = animal.h;
        image.inputEnabled = true;
        image.events.onInputDown.add(this.animalFound, this);
        this.animalImages.push(image);
        image.name = animal.name;
      }

      // panel
      this.panel = new _objectsPanel2['default'](game, this.animalImages, this.backgroundGroup);
      this.panel.hintButton.events.onInputUp.add(this.onHint, this);
      this.panel.pauseButton.events.onInputUp.add(this.onPause, this);

      // menu
      this.menu = new _objectsPauseMenu2['default'](game);

      // peek repeat
      game.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.onHint, this);
    }
  }, {
    key: 'create',
    value: function create() {}
  }, {
    key: 'animalFound',
    value: function animalFound(image) {
      var _this = this;

      // this.allFound(); return;
      if (this.currentTween) return;

      // remove from live images
      this.animalImagesFound.push(image);
      this.animalImages.splice(this.animalImages.indexOf(image), 1);
      image.inputEnabled = false;
      image.events.onInputDown.removeAll();

      this.game.add.audio(this.song.segments[this.animalImagesFound.length]).play();
      this.currentTween = this.danceInterperter.createAnimalFoundDance(image, this.song, { x: this.panel.animalContainers[image.name].x, y: this.panel.animalContainers[image.name].y });
      if (this.animalImagesFound.length === this.numberOfAnimals) {
        this.currentTween.onComplete.add(this.allFound, this);
      }
      this.currentTween.onComplete.add(function () {
        return _this.currentTween = undefined;
      }, this);
      this.currentTween.start();
      // image.kill();
    }
  }, {
    key: 'allFound',
    value: function allFound() {
      var rowWidth = this.animalImagesFound.map(function (image) {
        return image.width;
      }).sum() + (this.numberOfAnimals - 1) * this.rowMargin;
      var currentX = this.game.width / 2 - rowWidth / 2;
      this.game.add.audio(this.song.segments[0]).play();
      var tweens = [];
      for (var i = 0; i < this.animalImagesFound.length; i++) {
        var currentImage = this.animalImagesFound[i];
        currentX += currentImage.width / 2;
        tweens.push(this.danceInterperter.createAllAnimalsFoundDance(currentImage, i, this.song, currentX));
        currentX += this.animalImagesFound[i].width / 2 + this.rowMargin;
      }

      this.game.time.events.removeAll();
      tweens.push(this.game.add.tween(this.background).to({ alpha: 0.1 }, this.song.beat, Phaser.Easing.Cubic.Out));
      tweens.push(this.game.add.tween(this.panel.group).to({ alpha: 0 }, this.song.beat, Phaser.Easing.Cubic.Out));
      tweens.forEach(function (t) {
        return t.start();
      });
    }
  }, {
    key: 'onHint',
    value: function onHint() {
      if (this.currentTween || this.animalImagesFound.length === this.numberOfAnimals) return;

      var image = this.animalImages.random();
      if (image) this.danceInterperter.createAnimalPeekDance(image);
      this.game.add.audio('peek' + (Math.floor(Math.random() * 4) + 1)).play();
    }
  }, {
    key: 'onPause',
    value: function onPause() {
      if (this.currentTween || this.animalImagesFound.length === this.numberOfAnimals) return;

      this.menu.show();
    }
  }], [{
    key: 'update',
    value: function update() {}
  }]);

  return Main;
})(Phaser.State);

exports['default'] = Main;
module.exports = exports['default'];

},{"../dances/DanceInterperter":1,"../objects/Panel":6,"../objects/PauseMenu":7,"../repositories/animalRepository":11,"../repositories/sceneRepository":12,"../repositories/songRepository":13}],18:[function(require,module,exports){
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
      // this.game.cache.addNinePatch('btn', 'btn', undefined, 7, 7, 10, 30);
      // this.game.cache.addNinePatch('btn-down', 'btn-down', undefined, 7, 7, 7, 7);
      this.game.state.start('GameTitle');
    }
  }]);

  return Preload;
})(Phaser.State);

exports['default'] = Preload;
module.exports = exports['default'];

},{"../repositories/animalRepository":11,"../repositories/sceneRepository":12,"../repositories/songRepository":13}]},{},[4])
//# sourceMappingURL=game.js.map
