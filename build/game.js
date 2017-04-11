(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DanceInterperter = (function () {
  function DanceInterperter() {
    _classCallCheck(this, DanceInterperter);
  }

  _createClass(DanceInterperter, [{
    key: 'createAnimalFoundDance',
    value: function createAnimalFoundDance(image, song, game, target) {
      return game.add.tween(image).to({ angle: 20 }, song.beat, Phaser.Easing.Cubic.Out, false, song.intro * song.beat).to({ angle: -20 }, song.beat, Phaser.Easing.Cubic.Out).to({ angle: 20 }, song.beat, Phaser.Easing.Cubic.Out).to({ angle: -20 }, song.beat, Phaser.Easing.Cubic.Out).to(_extends({}, target, { angle: 0 }), 100, Phaser.Easing.Linear.None);
    }
  }, {
    key: 'createAllAnimalsFoundDance',
    value: function createAllAnimalsFoundDance(image, index, song, game, x) {
      var autoStart = arguments.length <= 5 || arguments[5] === undefined ? false : arguments[5];

      var tween = game.add.tween(image).to({ x: x, y: game.height / 2, angle: 0 }, song.intro * song.beat, Phaser.Easing.Cubic.Out, false);
      var delay = 0;
      song.dance.map(function (step) {
        return step[index];
      }).forEach(function (step) {
        if (step === 'r') {
          tween = tween.to({ angle: -20, y: game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
          delay = 0;
        } else if (step === 'l') {
          tween = tween.to({ angle: 20, y: game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
          delay = 0;
        } else if (step === 'u') {
          tween = tween.to({ angle: 0, y: game.height / 2 - 20 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
          delay = 0;
        } else if (step === 'd') {
          tween = tween.to({ angle: 0, y: game.height / 2 }, song.beat, Phaser.Easing.Cubic.Out, false, delay);
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

exports['default'] = new DanceInterperter();
module.exports = exports['default'];

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

},{"./extensions":3,"./states/Boot":13,"./states/GameOver":14,"./states/GameTitle":15,"./states/Main":16,"./states/Preload":17}],5:[function(require,module,exports){
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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Panel = (function () {
  function Panel(game, animalImages, group) {
    _classCallCheck(this, Panel);

    this.game = game;
    var backPanel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.height - 80, 'panel');
    backPanel.anchor.setTo(0.5, 0.5);
    backPanel.targetWidth = game.width / 2;
    backPanel.targetHeight = 200;
    backPanel.UpdateImageSizes();
    group.add(backPanel);
    this.frontPanel = new Phaser.NinePatchImage(game, game.world.centerX, game.world.height - 100, 'panel-dark');
    this.frontPanel.anchor.setTo(0.5, 0.5);
    this.frontPanel.targetWidth = game.width / 3;
    this.frontPanel.targetHeight = 300;
    this.frontPanel.UpdateImageSizes();
    this.frontPanel.tint = Math.random() * 0xfeffff;
    group.add(this.frontPanel);

    var animalWidth = animalImages.map(function (image) {
      return image.width;
    }).sum();
    this.margin = (this.frontPanel.targetWidth - animalWidth) / (animalImages.length + 1);
    this.currentX = this.frontPanel.x + this.margin - this.frontPanel.targetWidth / 2;
  }

  _createClass(Panel, [{
    key: 'getNextAnimalPlace',
    value: function getNextAnimalPlace(animalImage) {
      var result = { x: this.currentX + animalImage.width / 2, y: this.frontPanel.y };
      this.currentX += animalImage.width + this.margin;
      return result;
    }
  }]);

  return Panel;
})();

exports['default'] = Panel;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

    _get(Object.getPrototypeOf(AnimalRepository.prototype), 'constructor', this).call(this, [new _objectsAnimal2['default']('1', 100, 100), new _objectsAnimal2['default']('2', 150, 75), new _objectsAnimal2['default']('3', 75, 150), new _objectsAnimal2['default']('4', 150, 200), new _objectsAnimal2['default']('5', 150, 150)]);
  }

  return AnimalRepository;
})(_Repository3['default']);

exports['default'] = new AnimalRepository();
module.exports = exports['default'];

},{"../objects/Animal":5,"./Repository":9}],11:[function(require,module,exports){
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

    _get(Object.getPrototypeOf(SceneRepository.prototype), 'constructor', this).call(this, [new _objectsScene2['default']('a', [{ x: 14, y: 25 }, { x: 25, y: 74 }, { x: 43, y: 19 }, { x: 45, y: 62 }, { x: 58, y: 24 }, { x: 58, y: 65 }, { x: 68, y: 26 }, { x: 82, y: 69 }, { x: 90, y: 24 }]), new _objectsScene2['default']('b', [{ x: 14, y: 25 }, { x: 25, y: 74 }, { x: 43, y: 19 }, { x: 45, y: 62 }, { x: 58, y: 24 }, { x: 58, y: 65 }, { x: 68, y: 26 }, { x: 82, y: 69 }, { x: 90, y: 24 }]), new _objectsScene2['default']('c', [{ x: 14, y: 25 }, { x: 25, y: 74 }, { x: 43, y: 19 }, { x: 45, y: 62 }, { x: 58, y: 24 }, { x: 58, y: 65 }, { x: 68, y: 26 }, { x: 82, y: 69 }, { x: 90, y: 24 }])]);
  }

  return SceneRepository;
})(_Repository3['default']);

exports['default'] = new SceneRepository();
module.exports = exports['default'];

},{"../objects/Scene":7,"./Repository":9}],12:[function(require,module,exports){
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

},{"../dances/clock":1,"../objects/Song":8,"./Repository":9}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameTitle = (function (_Phaser$State) {
	_inherits(GameTitle, _Phaser$State);

	function GameTitle() {
		_classCallCheck(this, GameTitle);

		_get(Object.getPrototypeOf(GameTitle.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(GameTitle, [{
		key: "create",
		value: function create() {}
	}, {
		key: "startGame",
		value: function startGame() {
			this.game.state.start("Main");
		}
	}]);

	return GameTitle;
})(Phaser.State);

exports["default"] = GameTitle;
module.exports = exports["default"];

},{}],16:[function(require,module,exports){
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

var _dancesDanceInterperter = require('../dances/danceInterperter');

var _dancesDanceInterperter2 = _interopRequireDefault(_dancesDanceInterperter);

var _objectsPanel = require('../objects/Panel');

var _objectsPanel2 = _interopRequireDefault(_objectsPanel);

var Main = (function (_Phaser$State) {
  _inherits(Main, _Phaser$State);

  function Main(game) {
    var numberOfAnimals = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1];

    _classCallCheck(this, Main);

    _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).call(this, game);
    this.numberOfAnimals = numberOfAnimals;
    this.animalsFound = 0;
    this.rowMargin = 50;
  }

  _createClass(Main, [{
    key: 'create',
    value: function create() {
      var game = this.game;
      this.scene = _repositoriesSceneRepository2['default'].random();
      this.animals = _repositoriesAnimalRepository2['default'].random(this.numberOfAnimals);
      var locations = this.scene.locations.random(this.numberOfAnimals);
      this.song = _repositoriesSongRepository2['default'].random();

      var backgroundGroup = game.add.group();
      var animalGroup = game.add.group();

      // set background
      var background = backgroundGroup.create(game.world.centerX, game.world.centerY, this.scene.name);
      background.anchor.set(0.5);
      background.width = game.width;
      background.height = game.height;
      // background.inputEnabled = true;
      // background.events.onInputDown.add(() => {
      //   console.log('{x: '+(100 * game.input.mousePointer.x / game.width) + ', y:' + (100 * game.input.mousePointer.y / game.height) + '}');
      // });

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
      }

      // panel
      this.panel = new _objectsPanel2['default'](game, this.animalImages, backgroundGroup);
    }
  }, {
    key: 'animalFound',
    value: function animalFound(image) {
      var _this = this;

      // this.allFound(); return;
      if (this.currentTween) return;

      this.animalsFound++;
      this.game.add.audio(this.song.segments[this.animalsFound]).play();
      this.currentTween = _dancesDanceInterperter2['default'].createAnimalFoundDance(image, this.song, this.game, this.panel.getNextAnimalPlace(image));
      if (this.animalsFound === this.numberOfAnimals) {
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
      var rowWidth = this.animalImages.map(function (image) {
        return image.width;
      }).sum() + (this.numberOfAnimals - 1) * this.rowMargin;
      var currentX = this.game.width / 2 - rowWidth / 2;
      this.game.add.audio(this.song.segments[0]).play();
      var tweens = [];
      for (var i = 0; i < this.animalImages.length; i++) {
        var currentImage = this.animalImages[i];
        currentX += currentImage.width / 2;
        tweens.push(_dancesDanceInterperter2['default'].createAllAnimalsFoundDance(currentImage, i, this.song, this.game, currentX));
        currentX += this.animalImages[i].width / 2 + this.rowMargin;
      }

      tweens.forEach(function (t) {
        return t.start();
      });
    }
  }], [{
    key: 'update',
    value: function update() {}
  }]);

  return Main;
})(Phaser.State);

exports['default'] = Main;
module.exports = exports['default'];

},{"../dances/danceInterperter":2,"../objects/Panel":6,"../repositories/animalRepository":10,"../repositories/sceneRepository":11,"../repositories/songRepository":12}],17:[function(require,module,exports){
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
      _repositoriesSceneRepository2['default'].items.forEach(function (item) {
        return game.load.image(item.name, 'static/assets/images/scenes/' + item.name + '.png');
      });
      _repositoriesAnimalRepository2['default'].items.forEach(function (item) {
        return game.load.image(item.name, 'static/assets/images/animals/' + item.name + '.png');
      });
      game.load.image('panel', 'static/assets/images/panel.png');
      game.load.image('panel-dark', 'static/assets/images/panel-dark.png');
      _repositoriesSongRepository2['default'].items.forEach(function (item) {
        return item.segments.forEach(function (segment) {
          return ['mp3', 'ogg'].forEach(function (format) {
            return game.load.audio(segment, 'static/assets/sounds/songs/' + item.name + '/' + segment + '.' + format);
          });
        });
      });
    }
  }, {
    key: 'create',
    value: function create() {
      this.game.cache.addNinePatch('panel', 'panel', undefined, 7, 7, 7, 7);
      this.game.cache.addNinePatch('panel-dark', 'panel-dark', undefined, 7, 7, 7, 7);
      this.game.state.start('Main');
    }
  }]);

  return Preload;
})(Phaser.State);

exports['default'] = Preload;
module.exports = exports['default'];

},{"../repositories/animalRepository":10,"../repositories/sceneRepository":11,"../repositories/songRepository":12}]},{},[4])
//# sourceMappingURL=game.js.map
