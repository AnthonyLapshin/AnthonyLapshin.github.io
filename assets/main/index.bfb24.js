System.register("chunks:///_virtual/ArrayExtension.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0d004h0FR5B27tvo0JZkQc2", "ArrayExtension", undefined);
      Array.prototype.shuffle2D = function () {
        var array = this;
        for (var i = 0; i < array.length; i++) {
          for (var j = 0; j < array[i].length; j++) {
            var newI = Math.floor(Math.random() * array.length);
            var newJ = Math.floor(Math.random() * array[i].length);
            var _ref = [array[newI][newJ], array[i][j]];
            array[i][j] = _ref[0];
            array[newI][newJ] = _ref[1];
          }
        }
        return array;
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ArrayUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "32aa0PVPLdAcIxyjXKaPZeN", "ArrayUtils", undefined);
      var ArrayUtils = exports('ArrayUtils', /*#__PURE__*/function () {
        function ArrayUtils() {}
        ArrayUtils.removeDuplicateCoordinates = function removeDuplicateCoordinates(arrays) {
          var seen = new Set();
          for (var _iterator = _createForOfIteratorHelperLoose(arrays), _step; !(_step = _iterator()).done;) {
            var array = _step.value;
            for (var i = array.length - 1; i >= 0; i--) {
              var coord = array[i];
              var _key = coord[0] + "," + coord[1];
              if (seen.has(_key)) {
                array.splice(i, 1);
              } else {
                seen.add(_key);
              }
            }
          }
        };
        ArrayUtils.removeItem = function removeItem(list, item, removeCount) {
          if (removeCount === void 0) {
            removeCount = ArrayUtils.REMOVE_COUNT_ALL;
          }
          var result = false;
          if (removeCount === ArrayUtils.REMOVE_COUNT_ALL) {
            removeCount = Number.MAX_VALUE;
          }
          var totalRemovedCount = 0;
          var itemIndex = list.indexOf(item);
          while (itemIndex !== -1 && totalRemovedCount < removeCount) {
            list.splice(itemIndex, 1);
            itemIndex = list.indexOf(item, itemIndex);
            totalRemovedCount++;
            result = true;
          }
          return result;
        };
        ArrayUtils.removeItemsFromArray = function removeItemsFromArray(list, removeItems) {
          var item;
          for (var itemIndex = 0; itemIndex < removeItems.length; itemIndex++) {
            item = removeItems[itemIndex];
            ArrayUtils.removeItem(list, item);
          }
        };
        ArrayUtils.getRandomItem = function getRandomItem(list, except) {
          var result;
          if (list && list.length > 0) {
            if (except) {
              list = list.concat();
              ArrayUtils.removeItemsFromArray(list, except);
            }
            var tempIndex = Math.floor(Math.random() * list.length);
            result = list[tempIndex];
          }
          return result;
        };
        ArrayUtils.removeDuplicates = function removeDuplicates(array) {
          return array.filter(ArrayUtils.removeDuplicatesFilter);
        };
        ArrayUtils.shuffle = function shuffle(array) {
          return array.sort(function () {
            return Math.random() - 0.5;
          });
        };
        ArrayUtils.find = function find(array, predicate) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(array), _step2; !(_step2 = _iterator2()).done;) {
            var _item = _step2.value;
            if (predicate(_item)) {
              return _item;
            }
          }
          return null;
        };
        ArrayUtils.mergeUnique = function mergeUnique(a1, a2) {
          var res = a1.filter(function (value, index, a) {
            return a2.indexOf(value) < 0;
          });
          return res.concat(a2);
        };
        ArrayUtils.values = function values(map) {
          var list = [];
          for (var _i = 0, _Object$keys = Object.keys(map); _i < _Object$keys.length; _i++) {
            var _key2 = _Object$keys[_i];
            list.push(map[_key2]);
          }
          return list;
        };
        ArrayUtils.removeDuplicatesFilter = function removeDuplicatesFilter(item, index, array) {
          return index === 0 ? true : array.lastIndexOf(item, index - 1) === -1;
        };
        ArrayUtils.getArrayFilledWithRange = function getArrayFilledWithRange(start, end) {
          return Array(end - start + 1).fill(0).map(function (_, idx) {
            return start + idx;
          });
        };
        ArrayUtils.getWeightedRandom = function getWeightedRandom(options) {
          var i;
          var weights = [];
          for (i = 0; i < options.length; i++) {
            weights[i] = options[i].weight + (weights[i - 1] || 0);
          }
          var random = Math.random() * weights[weights.length - 1];
          for (i = 0; i < weights.length; i++) {
            if (weights[i] > random) {
              break;
            }
          }
          return options[i].item;
        };
        return ArrayUtils;
      }());
      ArrayUtils.REMOVE_COUNT_ALL = -1;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "75426wlhblAAZQ2KM4/7y/E", "BaseState", undefined);
      /**
       * @file BaseState.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-04
       */
      /**
       * Abstract base class for implementing state pattern in the game.
       * Provides basic functionality for state management and transitions.
       * @template TContext The type of context object that contains shared state data
       */
      var BaseState = exports('BaseState', /*#__PURE__*/function () {
        function BaseState(name) {
          /**
           * The name of the state. Used for identification and debugging.
           */
          this._name = void 0;
          this._name = name;
        }

        /**
         * The name of the state. Used for identification and debugging.
         */
        _createClass(BaseState, [{
          key: "name",
          get: function get() {
            return this._name;
          }

          /**
           * Called when entering this state.
           * Override this method to perform initialization logic.
           * @param context The shared context object
           */
        }]);

        return BaseState;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ClusterSeekerService.ts", ['cc', './singleton.ts'], function (exports) {
  var cclegacy, singleton;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singleton = module.singleton;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7837cjo+U9HU755oJlAGpDO", "ClusterSeekerService", undefined);
      /**
       * Service responsible for finding clusters of matching items in the game field.
       * A cluster is a group of adjacent items of the same type. This service provides
       * methods to find such clusters around a selected item or across the entire field.
       */
      var ClusterSeekerService = exports('ClusterSeekerService', (_dec = singleton(), _dec(_class = /*#__PURE__*/function () {
        function ClusterSeekerService() {}
        var _proto = ClusterSeekerService.prototype;
        /**
         * Finds all valid clusters in the game field by scanning each position
         * @param items 2D array of game field items to search in
         * @param minClusterSize Minimum number of connected items required for a valid cluster
         * @param propertyName Property to match items by (e.g., 'color', 'type')
         * @returns Array of clusters, where each cluster is an array of connected GameFieldItems
         */
        _proto.FindAllClusters = function FindAllClusters(items, minClusterSize, propertyName) {
          var allClusters = [];
          var visited = Array(items.length).fill(null).map(function () {
            return Array(items[0].length).fill(false);
          });
          for (var i = 0; i < items.length; i++) {
            for (var j = 0; j < items[i].length; j++) {
              if (!visited[i][j] && items[i][j]) {
                if (items[i][j].IsBooster) {
                  allClusters.push([items[i][j]]);
                  continue;
                }
                var targetValue = items[i][j].ItemType;
                var cluster = this.findCluster(items, visited, i, j, targetValue);
                if (cluster.length >= minClusterSize) {
                  allClusters.push(cluster);
                }
              }
            }
          }
          return allClusters;
        }

        /**
         * Collects a cluster starting from a specific position using flood-fill algorithm
         * @param items 2D array of game field items to search in
         * @param minClusterSize Minimum number of connected items required for a valid cluster
         * @param startX Starting X coordinate for cluster search
         * @param startY Starting Y coordinate for cluster search
         * @param propertyName Property to match items by (e.g., 'color', 'type')
         * @returns Array of connected GameFieldItems forming a cluster, or empty array if cluster is too small
         */;
        _proto.CollectCluster = function CollectCluster(items, minClusterSize, startX, startY, propertyName) {
          var _items$startX;
          var visited = Array(items.length).fill(null).map(function () {
            return Array(items[0].length).fill(false);
          });
          if (!((_items$startX = items[startX]) != null && _items$startX[startY])) {
            return [];
          }
          var targetValue = items[startX][startY][propertyName];
          var cluster = this.findCluster(items, visited, startX, startY, targetValue);
          return cluster.length >= minClusterSize ? cluster : [];
        }

        /**
         * Helper method that performs recursive flood-fill to find connected items
         * @param items 2D array of game field items
         * @param visited Set tracking visited positions to avoid cycles
         * @param x Current X coordinate being checked
         * @param y Current Y coordinate being checked
         * @param targetValue Value to match against (from propertyName)
         * @returns Array of GameFieldItems that form a connected cluster
         * @private
         */;
        _proto.findCluster = function findCluster(items, visited, x, y, targetValue) {
          var cluster = [];
          var queue = [[x, y]];
          while (queue.length > 0) {
            var _ref = queue.shift(),
              currentX = _ref[0],
              currentY = _ref[1];
            if (currentX < 0 || currentX >= items.length || currentY < 0 || currentY >= items[0].length || visited[currentX][currentY] || !items[currentX][currentY] || items[currentX][currentY].ItemType !== targetValue) {
              continue;
            }
            visited[currentX][currentY] = true;
            cluster.push(items[currentX][currentY]);
            var directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
            for (var _i = 0, _directions = directions; _i < _directions.length; _i++) {
              var _directions$_i = _directions[_i],
                dx = _directions$_i[0],
                dy = _directions$_i[1];
              var newX = currentX + dx;
              var newY = currentY + dy;
              if (newX >= 0 && newX < items.length && newY >= 0 && newY < items[0].length && !visited[newX][newY] && items[newX][newY] && items[newX][newY].ItemType === targetValue) {
                queue.push([newX, newY]);
              }
            }
          }
          return cluster;
        };
        return ClusterSeekerService;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Column1RocketActivated.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "843a3D+m89LZIXeSksR/Vqe", "Column1RocketActivated", undefined);
      /**
       * Represents the state when a single-column rocket booster is activated.
       * This booster clears all items in a single column of the game field.
       */
      var Column1RocketActivated = exports('Column1RocketActivated', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(Column1RocketActivated, _BaseState);
        function Column1RocketActivated() {
          return _BaseState.call(this, Column1RocketActivated.STATE_NAME) || this;
        }

        /**
         * Handles entering the column rocket activation state.
         * Collects all items in the selected column for removal.
         * @param context - The game context
         */
        var _proto = Column1RocketActivated.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var items, cluster, selectedColumn, j;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  items = context.items;
                  cluster = [];
                  selectedColumn = context.selectedItem.position.x;
                  for (j = 0; j < items[0].length; j++) {
                    if (items[selectedColumn][j]) {
                      cluster.push(items[selectedColumn][j]);
                    }
                  }
                  context.currentCluster = cluster;
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return Column1RocketActivated;
      }(BaseState));
      Column1RocketActivated.STATE_NAME = 'Column1RocketActivated';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Column2RocketActivated.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "62c00QDNc9GCIwGy4t6k0no", "Column2RocketActivated", undefined);
      /**
       * Represents the state when a double-column rocket booster is activated.
       * This booster clears all items in two adjacent columns of the game field.
       */
      var Column2RocketActivated = exports('Column2RocketActivated', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(Column2RocketActivated, _BaseState);
        function Column2RocketActivated() {
          return _BaseState.call(this, Column2RocketActivated.STATE_NAME) || this;
        }

        /**
         * Handles entering the double-column rocket activation state.
         * Collects all items in the selected column and an adjacent column for removal.
         * @param context - The game context
         */
        var _proto = Column2RocketActivated.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var items, cluster, selectedColumn, j, i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  items = context.items;
                  cluster = [];
                  selectedColumn = context.selectedItem.position.x;
                  for (j = 0; j < items[0].length; j++) {
                    for (i = Math.max(0, selectedColumn - 1); i <= Math.min(selectedColumn + 1, items.length - 1); i++) {
                      if (items[i][j]) {
                        cluster.push(items[i][j]);
                      }
                    }
                  }
                  context.currentCluster = cluster;
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return Column2RocketActivated;
      }(BaseState));
      Column2RocketActivated.STATE_NAME = 'Column2RocketActivated';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/dependency-injection.ts", ['cc', './Dictionary.ts'], function (exports) {
  var cclegacy, Dictionary;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Dictionary = module.Dictionary;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b5fe5fDvr1JkrzDdd7ZMd+J", "dependency-injection", undefined);
      var classMap = exports('classMap', new Dictionary());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Dictionary.ts", ['cc', './UniqueUtils.ts'], function (exports) {
  var cclegacy, UniqueUtils;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      UniqueUtils = module.UniqueUtils;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b0d4bGxboVEJ5aNd4DDR1dq", "Dictionary", undefined);
      var Dictionary = exports('Dictionary', /*#__PURE__*/function () {
        function Dictionary() {
          this.map = {};
        }
        var _proto = Dictionary.prototype;
        _proto.get = function get(key) {
          var tempId = UniqueUtils.getObjectUniqueId(key);
          return this.map[tempId];
        };
        _proto.add = function add(key, item) {
          var tempId = UniqueUtils.getObjectUniqueId(key);
          this.map[tempId] = item;
        };
        _proto.remove = function remove(key) {
          var tempId = UniqueUtils.getObjectUniqueId(key);
          delete this.map[tempId];
        };
        _proto.forEach = function forEach(callbackfn) {
          var keys = Object.keys(this.map);
          var tempKey;
          var keysCount = keys.length;
          for (var keyIndex = 0; keyIndex < keysCount; keyIndex++) {
            tempKey = keys[keyIndex];
            callbackfn(this.map[tempKey]);
          }
        };
        return Dictionary;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnumGameTool.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d84fcU7D5ZBTYAz2rGIAXOI", "EnumGameTool", undefined);
      /**
       * @file EnumGameTool.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-05
       */

      /**
       * Enum representing the different tools available in the game.
       * Each tool provides a unique way to interact with and modify the game field.
       */
      var GameTool = exports('GameTool', /*#__PURE__*/function (GameTool) {
        GameTool["SELECTOR"] = "SELECTOR";
        GameTool["BOMB_1"] = "BOMB_1";
        GameTool["BOMB_2"] = "BOMB_2";
        GameTool["ROW_ROCKET_1"] = "ROW_ROCKET_1";
        GameTool["COL_ROCKET_1"] = "COL_ROCKET_1";
        GameTool["ROW_ROCKET_2"] = "ROW_ROCKET_2";
        GameTool["COL_ROCKET_2"] = "COL_ROCKET_2";
        GameTool["NUKE_BOMB"] = "NUKE_BOMB";
        return GameTool;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FieldCoordinatesService.ts", ['cc', './injectable.ts', './inject.ts', './LevelConfiguration.ts'], function (exports) {
  var cclegacy, injectable, inject, LevelConfigurationService;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      injectable = module.injectable;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      LevelConfigurationService = module.LevelConfigurationService;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2719dHuoyZOg4bzsDfxFUsV", "FieldCoordinatesService", undefined);

      /**
       * Service responsible for handling coordinate transformations and calculations
       * for the game field. This includes converting between grid positions and
       * world coordinates.
       */
      var FieldCoordinatesService = exports('FieldCoordinatesService', (_dec = injectable(), _dec(_class = /*#__PURE__*/function () {
        /**
         * Initializes the field coordinates service with the level configuration.
         */
        function FieldCoordinatesService() {
          this._lvlConf = inject(LevelConfigurationService);
          this._widthInPixels = void 0;
          this._heightInPixels = void 0;
          this.offsetX = void 0;
          this.offsetY = void 0;
          this._widthInPixels = this._lvlConf.width * this._lvlConf.cellWidth;
          this._heightInPixels = this._lvlConf.height * this._lvlConf.cellHeight;
          this.offsetX = this._widthInPixels / 2;
          this.offsetY = this._heightInPixels / 2;
        }

        /**
         * Converts world coordinates to grid coordinates.
         * @param worldX X-coordinate in world space
         * @param worldY Y-coordinate in world space
         * @returns Grid coordinates
         */
        var _proto = FieldCoordinatesService.prototype;
        _proto.worldToFieldCoordsinates = function worldToFieldCoordsinates(worldX, worldY) {
          // Calculate total grid size
          var totalWidth = this._lvlConf.width * this._lvlConf.cellWidth;
          var totalHeight = this._lvlConf.height * this._lvlConf.cellHeight;

          // Calculate offset to center the entire grid
          var offsetX = totalWidth / 2;
          var offsetY = totalHeight / 2;

          // Convert world coordinates to grid coordinates
          var fieldX = Math.floor((worldX + offsetX) / this._lvlConf.cellWidth);
          var fieldY = Math.floor((worldY + offsetY) / this._lvlConf.cellHeight);
          return {
            x: fieldX,
            y: fieldY
          };
        }

        /**
         * Converts grid coordinates to world coordinates.
         * @param fieldX X-coordinate in grid space
         * @param fieldY Y-coordinate in grid space
         * @returns World coordinates
         */;
        _proto.fieldToWorldCoordsinates = function fieldToWorldCoordsinates(fieldX, fieldY) {
          // Calculate total grid size
          var totalWidth = this._lvlConf.width * this._lvlConf.cellWidth;
          var totalHeight = this._lvlConf.height * this._lvlConf.cellHeight;

          // Convert grid coordinates to world coordinates
          var x = (fieldX - (this._lvlConf.width - 1) / 2) * this._lvlConf.cellWidth;
          var y = (fieldY - (this._lvlConf.height - 1) / 2) * this._lvlConf.cellHeight;
          return {
            x: x,
            y: y
          };
        }

        /**
         * Converts grid coordinates to world coordinates for a spawn position.
         * @param fieldX X-coordinate in grid space
         * @param fieldY Y-coordinate in grid space
         * @returns World coordinates for a spawn position
         */;
        _proto.fieldSpawnToWorldCoordsinates = function fieldSpawnToWorldCoordsinates(fieldX, fieldY) {
          var coords = this.fieldToWorldCoordsinates(fieldX, this._lvlConf.height);
          return {
            x: coords.x,
            y: coords.y + this._lvlConf.cellHeight * 2
          };
        };
        return FieldCoordinatesService;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FiniteStateMachine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "83d2e2jR+1NupjhO9j6DomJ", "FiniteStateMachine", undefined);
      /**
       * @file FiniteStateMachine.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-05
       */
      /**
       * Generic implementation of a Finite State Machine.
       * Manages state transitions and notifies observers of state changes.
       * @template TContext - The type of context object used by the state machine
       */
      var FiniteStateMachine = exports('FiniteStateMachine', /*#__PURE__*/function () {
        var _proto = FiniteStateMachine.prototype;
        /**
         * Adds an observer to be notified of state changes.
         * @param observer - The observer to add
         */
        _proto.addStateObserver = function addStateObserver(observer) {
          this._stateObservers.add(observer);
        }

        /**
         * Removes an observer from state change notifications.
         * @param observer - The observer to remove
         */;
        _proto.removeStateObserver = function removeStateObserver(observer) {
          this._stateObservers["delete"](observer);
        }

        /**
         * Notifies all registered observers of a state change.
         * @param newState - The name of the new state
         */;
        _proto.notifyGameStateChanged = function notifyGameStateChanged(newState) {
          this._stateObservers.forEach(function (observer) {
            return observer.onStateChanged(newState);
          });
        }

        /**
         * Creates a new instance of the FiniteStateMachine.
         * @param context - The context object to be used by the state machine
         */;
        function FiniteStateMachine(context) {
          this.states = new Map();
          this.transitions = [];
          this.currentState = null;
          this.context = void 0;
          /** Set of observers that will be notified of state changes */
          this._stateObservers = new Set();
          this.context = context;
        }

        /**
         * Adds a new state to the state machine.
         * @param state - The state to add
         */
        _proto.addState = function addState(state) {
          this.states.set(state.name, state);
        }

        /**
         * Adds a new transition to the state machine.
         * @param transition - The transition to add
         */;
        _proto.addTransition = function addTransition(transition) {
          this.transitions.push(transition);
        }

        /**
         * Sets the initial state of the state machine.
         * @param stateName - The name of the initial state
         */;
        _proto.setInitialState = /*#__PURE__*/
        function () {
          var _setInitialState = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(stateName) {
            var _this$currentState$on, _this$currentState;
            var state;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  state = this.states.get(stateName);
                  if (state) {
                    _context.next = 3;
                    break;
                  }
                  throw new Error("State " + stateName + " not found");
                case 3:
                  this.currentState = state;
                  _context.next = 6;
                  return (_this$currentState$on = (_this$currentState = this.currentState).onEnter) == null ? void 0 : _this$currentState$on.call(_this$currentState, this.context);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function setInitialState(_x) {
            return _setInitialState.apply(this, arguments);
          }
          return setInitialState;
        }()
        /**
         * Updates the state machine, checking for transitions and updating the current state.
         */;

        _proto.update = /*#__PURE__*/
        function () {
          var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this$currentState$up,
              _this$currentState2,
              _this = this;
            var possibleTransitions, _iterator, _step, transition;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (this.currentState) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return");
                case 2:
                  _context2.next = 4;
                  return (_this$currentState$up = (_this$currentState2 = this.currentState).update) == null ? void 0 : _this$currentState$up.call(_this$currentState2, this.context);
                case 4:
                  // Check transitions
                  possibleTransitions = this.transitions.filter(function (t) {
                    return t.from === _this.currentState.name;
                  });
                  _iterator = _createForOfIteratorHelperLoose(possibleTransitions);
                case 6:
                  if ((_step = _iterator()).done) {
                    _context2.next = 14;
                    break;
                  }
                  transition = _step.value;
                  if (!(!transition.guardCondition || transition.guardCondition(this.context))) {
                    _context2.next = 12;
                    break;
                  }
                  _context2.next = 11;
                  return this.transitionTo(transition.to);
                case 11:
                  return _context2.abrupt("break", 14);
                case 12:
                  _context2.next = 6;
                  break;
                case 14:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function update() {
            return _update.apply(this, arguments);
          }
          return update;
        }()
        /**
         * Transitions to a new state.
         * Handles exit and entry actions, and notifies observers.
         * @param stateName - The name of the new state
         */;

        _proto.transitionTo = /*#__PURE__*/
        function () {
          var _transitionTo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(stateName) {
            var _this$currentState3, _this$currentState$on2, _this$currentState4;
            var newState;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  newState = this.states.get(stateName);
                  if (newState) {
                    _context3.next = 3;
                    break;
                  }
                  throw new Error("State " + stateName + " not found");
                case 3:
                  _context3.next = 5;
                  return (_this$currentState3 = this.currentState) == null || _this$currentState3.onExit == null ? void 0 : _this$currentState3.onExit(this.context);
                case 5:
                  // Enter new state
                  this.currentState = newState;
                  _context3.next = 8;
                  return (_this$currentState$on2 = (_this$currentState4 = this.currentState).onEnter) == null ? void 0 : _this$currentState$on2.call(_this$currentState4, this.context);
                case 8:
                  this.notifyGameStateChanged(stateName);
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function transitionTo(_x2) {
            return _transitionTo.apply(this, arguments);
          }
          return transitionTo;
        }()
        /**
         * Gets the name of the current state.
         * @returns The name of the current state, or null if no state is set
         */;

        _proto.getCurrentState = function getCurrentState() {
          var _this$currentState$na, _this$currentState5;
          return (_this$currentState$na = (_this$currentState5 = this.currentState) == null ? void 0 : _this$currentState5.name) != null ? _this$currentState$na : null;
        };
        return FiniteStateMachine;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameBombActivation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './inject.ts', './BaseState.ts', './LevelConfiguration.ts', './PlayerInventoryService.ts', './EnumGameTool.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, inject, BaseState, LevelConfigurationService, PlayerInventoryService, GameTool;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      LevelConfigurationService = module.LevelConfigurationService;
    }, function (module) {
      PlayerInventoryService = module.PlayerInventoryService;
    }, function (module) {
      GameTool = module.GameTool;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ff5e1s4HzFI3qAMfG37Br+2", "GameBombActivation", undefined);
      var GameBombActivation = exports('GameBombActivation', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameBombActivation, _BaseState);
        function GameBombActivation() {
          var _this;
          _this = _BaseState.call(this, GameBombActivation.STATE_NAME) || this;
          _this._lvlConf = inject(LevelConfigurationService);
          _this._inventory = inject(PlayerInventoryService);
          return _this;
        }
        var _proto = GameBombActivation.prototype;
        _proto.onEnter = /*#__PURE__*/function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var selectedItem, items, bombRadius, cluster, i, j, x, y, item;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(this._inventory.getAmount(context.currentTool) <= 0)) {
                    _context.next = 4;
                    break;
                  }
                  context.skipMove = true;
                  context.currentTool = GameTool.SELECTOR;
                  return _context.abrupt("return");
                case 4:
                  this._inventory.removeAmount(context.currentTool, 1);
                  selectedItem = context.selectedItem;
                  if (selectedItem) {
                    _context.next = 8;
                    break;
                  }
                  return _context.abrupt("return");
                case 8:
                  items = context.items;
                  bombRadius = this._lvlConf.bombRadius[context.currentTool];
                  cluster = [];
                  for (i = -bombRadius; i <= bombRadius; i++) {
                    for (j = -bombRadius; j <= bombRadius; j++) {
                      x = selectedItem.position.x + i;
                      y = selectedItem.position.y + j;
                      if (x >= 0 && x < items.length && y >= 0 && y < items[0].length) {
                        item = items[x][y];
                        if (item) {
                          cluster.push(item);
                        }
                      }
                    }
                  }
                  context.currentCluster = cluster;
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return GameBombActivation;
      }(BaseState));
      GameBombActivation.STATE_NAME = 'GameBombActivation';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameCalculateScore.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7be5f8+c6tOXoiLGskJHwiW", "GameCalculateScore", undefined);
      /**
       * Represents the state where the game calculates the score for removed items.
       * This state is entered after items have been removed from the game field.
       */
      var GameCalculateScore = exports('GameCalculateScore', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameCalculateScore, _BaseState);
        function GameCalculateScore() {
          return _BaseState.call(this, GameCalculateScore.STATE_NAME) || this;
        }

        /**
         * Handles entering the score calculation state.
         * Increments the game moves counter and calculates score based on removed items.
         * @param context - The game context
         */
        var _proto = GameCalculateScore.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  context.gameMoves++;
                  for (i = 0; i < context.currentCluster.length; i++) {
                    context.gameScore += context.lvlConf.paytable[context.currentCluster[i].ItemType];
                  }
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return GameCalculateScore;
      }(BaseState));
      GameCalculateScore.STATE_NAME = 'GameCalculateScore';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameCollapseField.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './inject.ts', './BaseState.ts', './FieldCoordinatesService.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, inject, BaseState, FieldCoordinatesService;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      FieldCoordinatesService = module.FieldCoordinatesService;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e995etvZ8pA/p8wNlM83UqA", "GameCollapseField", undefined);
      /**
       * Represents the state where the game collapses the field after items are removed.
       * This state handles the gravity effect where items fall to fill empty spaces below them.
       */
      var GameCollapseField = exports('GameCollapseField', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameCollapseField, _BaseState);
        function GameCollapseField() {
          var _this;
          _this = _BaseState.call(this, GameCollapseField.STATE_NAME) || this;
          _this._coordinatesService = inject(FieldCoordinatesService);
          return _this;
        }

        /**
         * Handles entering the field collapse state.
         * Processes each column to move items down into empty spaces.
         * @param context - The game context
         */
        var _proto = GameCollapseField.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var items, height, movingItems, i, j, above, item, cords;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  items = context.items;
                  height = items[0].length;
                  context.lvlConf;
                  movingItems = []; // Process each column independently
                  i = 0;
                case 5:
                  if (!(i < items.length)) {
                    _context.next = 27;
                    break;
                  }
                  j = 0;
                case 7:
                  if (!(j < height)) {
                    _context.next = 24;
                    break;
                  }
                  if (items[i][j]) {
                    _context.next = 21;
                    break;
                  }
                  above = j + 1;
                case 10:
                  if (!(above < height)) {
                    _context.next = 21;
                    break;
                  }
                  item = items[i][above];
                  if (!item) {
                    _context.next = 18;
                    break;
                  }
                  // Track the movement
                  cords = this._coordinatesService.fieldToWorldCoordsinates(i, j);
                  movingItems.push(item.moveToPosition(cords.x, cords.y, 0.07, i * 0.04));
                  // Update grid references
                  items[i][j] = items[i][above];
                  items[i][above] = null;
                  return _context.abrupt("break", 21);
                case 18:
                  above++;
                  _context.next = 10;
                  break;
                case 21:
                  j++;
                  _context.next = 7;
                  break;
                case 24:
                  i++;
                  _context.next = 5;
                  break;
                case 27:
                  _context.next = 29;
                  return Promise.all(movingItems);
                case 29:
                  context.isMovingItems = false;
                case 30:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return GameCollapseField;
      }(BaseState));
      GameCollapseField.STATE_NAME = 'GameCollapseField';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameCollectAllClusters.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameFieldItem.ts', './inject.ts', './BaseState.ts', './ClusterSeekerService.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, GameFieldItem, inject, BaseState, ClusterSeekerService;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameFieldItem = module.GameFieldItem;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      ClusterSeekerService = module.ClusterSeekerService;
    }],
    execute: function () {
      cclegacy._RF.push({}, "49810EzMqdAUJ5dNuHPw4jW", "GameCollectAllClusters", undefined);
      /**
       * Represents the state where the game collects all possible clusters on the game field.
       * This state is used for special game modes or power-ups that affect multiple clusters at once.
       */
      var GameCollectAllClusters = exports('GameCollectAllClusters', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameCollectAllClusters, _BaseState);
        function GameCollectAllClusters() {
          var _this;
          _this = _BaseState.call(this, GameCollectAllClusters.STATE_NAME) || this;
          _this._clusterSeeker = inject(ClusterSeekerService);
          return _this;
        }

        /**
         * Handles entering the collect all clusters state.
         * Finds and collects all valid clusters on the game field.
         * @param context - The game context
         */
        var _proto = GameCollectAllClusters.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var conf, items;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  conf = context.gameConf;
                  items = context.items;
                  context.remainClusters = this._clusterSeeker.FindAllClusters(items, conf.minClusterSize, GameFieldItem.COMPONENT_NAME);
                  if (context.remainClusters.length > 0) {
                    context.shuffleCounter = 0;
                  }
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return GameCollectAllClusters;
      }(BaseState));
      GameCollectAllClusters.STATE_NAME = 'GameCollectAllClusters';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConfigurationService.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singleton.ts'], function (exports) {
  var _createClass, cclegacy, singleton;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singleton = module.singleton;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "870b36gwlVGwahBKcycJDKR", "GameConfigurationService", undefined);

      /**
       * Service that provides game configuration settings.
       * This service manages global game settings such as animation durations,
       * reshuffle limits, and other game-wide parameters.
       */
      var GameConfigurationService = exports('GameConfigurationService', (_dec = singleton(), _dec(_class = /*#__PURE__*/function () {
        function GameConfigurationService() {
          /** Maximum number of reshuffles allowed */
          this._reshuffles = 3;
          this._minClusterSize = 4;
          this._startPointsAmount = 0;
        }
        _createClass(GameConfigurationService, [{
          key: "reshuffles",
          get:
          /**
           * Gets the maximum number of reshuffles allowed.
           */
          function get() {
            return this._reshuffles;
          }

          /**
           * Gets the minimum cluster size.
           */
        }, {
          key: "minClusterSize",
          get: function get() {
            return this._minClusterSize;
          }

          /**
           * Gets the start points amount.
           */
        }, {
          key: "startPointsAmount",
          get: function get() {
            return this._startPointsAmount;
          }
          /**
           * Sets the start points amount.
           */,
          set: function set(value) {
            this._startPointsAmount = value;
          }
        }]);
        return GameConfigurationService;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameContext.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singleton.ts', './LevelConfiguration.ts', './GameConfigurationService.ts', './inject.ts', './EnumGameTool.ts'], function (exports) {
  var _createClass, cclegacy, singleton, LevelConfigurationService, GameConfigurationService, inject, GameTool;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singleton = module.singleton;
    }, function (module) {
      LevelConfigurationService = module.LevelConfigurationService;
    }, function (module) {
      GameConfigurationService = module.GameConfigurationService;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      GameTool = module.GameTool;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "4cda8RJhytA5IW+4TvTwXik", "GameContext", undefined);
      /**
       * Represents the core game context that maintains the current state of the game.
       * This class holds all the essential game data including the game field, selected items,
       * current tools, scores, and other game-related information needed across different game states.
       */
      var GameContext = exports('GameContext', (_dec = singleton(), _dec(_class = /*#__PURE__*/function () {
        function GameContext() {
          /**
           * Prefabs for game items.
           */
          this._itemPrefabs = null;
          /**
           * Prefabs for game drops.
           */
          this._dropPrefabs = null;
          /**
           * Pool of game field items.
           */
          this._itemsPool = [];
          /**
           * Current game field items in a 2D array.
           */
          this._items = [];
          /**
           * Pool of game drops.
           */
          this._dropsPool = [];
          /**
           * The game node in the scene.
           */
          this._gameNode = null;
          /**
           * Level configuration service.
           */
          this._lvlConf = inject(LevelConfigurationService);
          /**
           * Game configuration service.
           */
          this._gameConf = inject(GameConfigurationService);
          /**
           * Currently selected item on the field.
           */
          this._selectedItem = null;
          /**
           * Items that have been dropped and need processing.
           */
          this._droppedItems = [];
          /**
           * Current cluster of items being processed.
           */
          this._currentCluster = null;
          /**
           * Flag indicating if a move is in progress.
           */
          this._isMovingItems = false;
          /**
           * Remaining clusters of items.
           */
          this._remainClusters = [];
          /**
           * Shuffle counter.
           */
          this._shuffleCounter = 0;
          /**
           * Callback function for when an item is clicked.
           */
          this._onClickedItemCb = null;
          /**
           * Current game score.
           */
          this._gameScore = 0;
          /**
           * Number of moves remaining.
           */
          this._gameMoves = 0;
          /**
           * Current game tool being used.
           */
          this._currentTool = GameTool.SELECTOR;
          /**
           * Observers for game stats.
           */
          this._observers = new Set();
          /**
           * Observers for game tools.
           */
          this._toolObservers = new Set();
          /**
           * Flag to indicate if the current move should be skipped.
           * When true, the game will bypass the current move without affecting the game state.
           */
          this._skipMove = false;
        }
        var _proto = GameContext.prototype;
        /**
         * Adds a tool observer.
         * @param observer The observer to add.
         */
        _proto.addToolObserver = function addToolObserver(observer) {
          this._toolObservers.add(observer);
        }

        /**
         * Removes a tool observer.
         * @param observer The observer to remove.
         */;
        _proto.removeToolObserver = function removeToolObserver(observer) {
          this._toolObservers["delete"](observer);
        }

        /**
         * Adds a game stats observer.
         * @param observer The observer to add.
         */;
        _proto.addObserver = function addObserver(observer) {
          this._observers.add(observer);
        }

        /**
         * Removes a game stats observer.
         * @param observer The observer to remove.
         */;
        _proto.removeObserver = function removeObserver(observer) {
          this._observers["delete"](observer);
        }

        /**
         * Notifies observers that the score has changed.
         * @param newScore The new score.
         */;
        _proto.notifyScoreChanged = function notifyScoreChanged(newScore) {
          this._observers.forEach(function (observer) {
            return observer.onScoreChanged(newScore);
          });
        }

        /**
         * Notifies observers that the moves have changed.
         * @param newMoves The new moves.
         */;
        _proto.notifyMovesChanged = function notifyMovesChanged(newMoves) {
          this._observers.forEach(function (observer) {
            return observer.onMovesChanged(newMoves);
          });
        }

        /**
         * Notifies observers that the tool has changed.
         * @param newTool The new tool.
         */;
        _proto.notifyToolChanged = function notifyToolChanged(newTool) {
          this._toolObservers.forEach(function (observer) {
            return observer.onToolChanged(newTool);
          });
        };
        _createClass(GameContext, [{
          key: "skipMove",
          get:
          // ========================= Getters & Setters =========================

          function get() {
            return this._skipMove;
          },
          set: function set(value) {
            this._skipMove = value;
          }

          /**
           * Gets the drop prefabs.
           */
        }, {
          key: "dropPrefabs",
          get: function get() {
            return this._dropPrefabs;
          }

          /**
           * Sets the drop prefabs.
           * @param value The new drop prefabs.
           */,
          set: function set(value) {
            this._dropPrefabs = value;
          }

          /**
           * Gets the drops pool.
           */
        }, {
          key: "dropsPool",
          get: function get() {
            return this._dropsPool;
          }

          /**
           * Sets the drops pool.
           * @param value The new drops pool.
           */,
          set: function set(value) {
            this._dropsPool = value;
          }

          /**
           * Gets the dropped items.
           */
        }, {
          key: "droppedItems",
          get: function get() {
            return this._droppedItems;
          }

          /**
           * Sets the dropped items.
           * @param value The new dropped items.
           */,
          set: function set(value) {
            this._droppedItems = value;
          }

          /**
           * Gets the current tool.
           */
        }, {
          key: "currentTool",
          get: function get() {
            return this._currentTool;
          }

          /**
           * Sets the current tool.
           * @param value The new current tool.
           */,
          set: function set(value) {
            if (this._currentTool != value) {
              this._currentTool = value;
              this.notifyToolChanged(value);
            }
          }

          /**
           * Gets whether the game is out of moves.
           */
        }, {
          key: "outOfMoves",
          get: function get() {
            return this._gameMoves >= this.lvlConf.maxMoves;
          }

          /**
           * Gets whether the point target has been reached.
           */
        }, {
          key: "pointTargetReached",
          get: function get() {
            return this._gameScore >= this.lvlConf.targetScore;
          }

          /**
           * Gets the game moves.
           */
        }, {
          key: "gameMoves",
          get: function get() {
            return this._gameMoves;
          }

          /**
           * Sets the game moves.
           * @param value The new game moves.
           */,
          set: function set(value) {
            if (this._gameMoves !== value) {
              this._gameMoves = value;
              this.notifyMovesChanged(value);
            }
          }

          /**
           * Gets the game score.
           */
        }, {
          key: "gameScore",
          get: function get() {
            return this._gameScore;
          }

          /**
           * Sets the game score.
           * @param value The new game score.
           */,
          set: function set(value) {
            if (this._gameScore !== value) {
              this._gameScore = value;
              this.notifyScoreChanged(value);
            }
          }

          /**
           * Gets the on clicked item callback.
           */
        }, {
          key: "onClickedItemCb",
          get: function get() {
            return this._onClickedItemCb;
          }

          /**
           * Sets the on clicked item callback.
           * @param value The new on clicked item callback.
           */,
          set: function set(value) {
            this._onClickedItemCb = value;
          }

          /**
           * Gets the shuffle counter.
           */
        }, {
          key: "shuffleCounter",
          get: function get() {
            return this._shuffleCounter;
          }

          /**
           * Sets the shuffle counter.
           * @param value The new shuffle counter.
           */,
          set: function set(value) {
            this._shuffleCounter = value;
          }

          /**
           * Gets the remaining clusters.
           */
        }, {
          key: "remainClusters",
          get: function get() {
            return this._remainClusters;
          }

          /**
           * Sets the remaining clusters.
           * @param value The new remaining clusters.
           */,
          set: function set(value) {
            this._remainClusters = value;
          }

          /**
           * Gets whether the game is moving items.
           */
        }, {
          key: "isMovingItems",
          get: function get() {
            return this._isMovingItems;
          }

          /**
           * Sets whether the game is moving items.
           * @param value The new is moving items.
           */,
          set: function set(value) {
            this._isMovingItems = value;
          }

          /**
           * Gets the current cluster.
           */
        }, {
          key: "currentCluster",
          get: function get() {
            return this._currentCluster;
          }

          /**
           * Sets the current cluster.
           * @param value The new current cluster.
           */,
          set: function set(value) {
            this._currentCluster = value;
          }

          /**
           * Gets the selected item.
           */
        }, {
          key: "selectedItem",
          get: function get() {
            return this._selectedItem;
          }

          /**
           * Sets the selected item.
           * @param value The new selected item.
           */,
          set: function set(value) {
            this._selectedItem = value;
          }

          /**
           * Gets the game node.
           */
        }, {
          key: "gameNode",
          get: function get() {
            return this._gameNode;
          }

          /**
           * Sets the game node.
           * @param value The new game node.
           */,
          set: function set(value) {
            this._gameNode = value;
          }

          /**
           * Gets the items.
           */
        }, {
          key: "items",
          get: function get() {
            return this._items;
          }

          /**
           * Sets the items.
           * @param value The new items.
           */,
          set: function set(value) {
            this._items = value;
          }

          /**
           * Gets the level configuration.
           */
        }, {
          key: "lvlConf",
          get: function get() {
            return this._lvlConf;
          }

          /**
           * Gets the game configuration.
           */
        }, {
          key: "gameConf",
          get: function get() {
            return this._gameConf;
          }

          /**
           * Gets the item prefabs.
           */
        }, {
          key: "itemPrefabs",
          get: function get() {
            return this._itemPrefabs;
          }

          /**
           * Sets the item prefabs.
           * @param value The new item prefabs.
           */,
          set: function set(value) {
            this._itemPrefabs = value;
          }

          /**
           * Gets the items pool.
           */
        }, {
          key: "itemsPool",
          get: function get() {
            return this._itemsPool;
          }

          /**
           * Sets the items pool.
           * @param value The new items pool.
           */,
          set: function set(value) {
            this._itemsPool = value;
          }

          /**
           * Gets whether the game can reshuffle.
           */
        }, {
          key: "canReshuffle",
          get: function get() {
            return this._shuffleCounter <= this.gameConf.reshuffles;
          }

          /**
           * Gets whether the game needs to reshuffle.
           */
        }, {
          key: "needReshuffle",
          get: function get() {
            return this.remainClusters.length == 0;
          }
        }]);
        return GameContext;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameDropBooster.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameFieldItem.ts', './inject.ts', './BaseState.ts', './ArrayUtils.ts', './LevelConfiguration.ts', './SelectedItemData.ts', './EnumGameTool.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, instantiate, GameFieldItem, inject, BaseState, ArrayUtils, LevelConfigurationService, SelectedItemData, GameTool;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      GameFieldItem = module.GameFieldItem;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      ArrayUtils = module.ArrayUtils;
    }, function (module) {
      LevelConfigurationService = module.LevelConfigurationService;
    }, function (module) {
      SelectedItemData = module.SelectedItemData;
    }, function (module) {
      GameTool = module.GameTool;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bd8d1DuyOhL35QHEbDD9+rS", "GameDropBooster", undefined);

      /**
       * Represents the state where the game drops a booster item onto the game field.
       * This state is entered when a cluster is cleared and meets the conditions for dropping a booster.
       */
      var GameDropBooster = exports('GameDropBooster', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameDropBooster, _BaseState);
        /**
         * Initializes the GameDropBooster state.
         */
        function GameDropBooster() {
          var _this;
          _this = _BaseState.call(this, GameDropBooster.STATE_NAME) || this;
          _this._lvlConf = inject(LevelConfigurationService);
          return _this;
        }

        /**
         * Handles entering the booster drop state.
         * Determines if a booster should be dropped based on cluster size and configuration.
         * Creates and places the booster if conditions are met.
         * @param context - The game context
         */
        var _proto = GameDropBooster.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var clusterLength, drops, maxDropKey, _i, _Object$keys, key, numKey, drop, dropItem, i, dropPrefab, itemData;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(context.selectedItem.item.IsBooster || context.currentTool != GameTool.SELECTOR)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  clusterLength = context.currentCluster.length;
                  drops = this._lvlConf.drops;
                  maxDropKey = 0;
                  for (_i = 0, _Object$keys = Object.keys(drops); _i < _Object$keys.length; _i++) {
                    key = _Object$keys[_i];
                    numKey = parseInt(key);
                    if (numKey <= clusterLength && numKey > maxDropKey) {
                      maxDropKey = numKey;
                    }
                  }
                  drop = ArrayUtils.getRandomItem(drops[maxDropKey]); // Get a random item from the highest key drops[maxDropKey];
                  if (!(drop == null)) {
                    _context.next = 9;
                    break;
                  }
                  return _context.abrupt("return");
                case 9:
                  dropItem = this.getCachedDrop(context, drop);
                  if (!(dropItem == null)) {
                    _context.next = 21;
                    break;
                  }
                  i = 0;
                case 12:
                  if (!(i < context.dropPrefabs.length)) {
                    _context.next = 21;
                    break;
                  }
                  dropPrefab = context.dropPrefabs[i];
                  if (!(dropPrefab.name != drop)) {
                    _context.next = 16;
                    break;
                  }
                  return _context.abrupt("continue", 18);
                case 16:
                  dropItem = instantiate(dropPrefab).getComponent(GameFieldItem.COMPONENT_NAME);
                  dropItem.node.on(GameFieldItem.CLICKED_EVENT, function (clickedItem) {
                    context.onClickedItemCb(clickedItem);
                  });
                case 18:
                  i++;
                  _context.next = 12;
                  break;
                case 21:
                  itemData = new SelectedItemData();
                  itemData.position = context.selectedItem.position;
                  itemData.item = dropItem;
                  context.droppedItems.push(itemData);
                case 25:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }()
        /**
         * Attempts to get a cached booster item from the drops pool.
         * @param context - The game context
         * @param drop - The type of booster to retrieve
         * @returns The cached booster item if found, null otherwise
         */;

        _proto.getCachedDrop = function getCachedDrop(context, drop) {
          for (var i = 0; i < context.dropsPool.length; i++) {
            if (context.dropsPool[i].ItemType == drop) {
              var item = context.dropsPool[i];
              context.dropsPool.splice(i, 1);
              return item;
            }
          }
          return null;
        }

        /**
         * Handles exiting the booster drop state.
         * Resets the selected item.
         * @param context - The game context
         */;
        _proto.onExit = /*#__PURE__*/
        function () {
          var _onExit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(context) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  context.selectedItem = null;
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function onExit(_x2) {
            return _onExit.apply(this, arguments);
          }
          return onExit;
        }();
        return GameDropBooster;
      }(BaseState));
      GameDropBooster.STATE_NAME = 'GameDropBooster';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameField.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './inject.ts', './GameSM.ts', './UIService.ts', './Paddings.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, CCFloat, Component, inject, GameStateMachine, UIService, Paddings;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      CCFloat = module.CCFloat;
      Component = module.Component;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      GameStateMachine = module.GameStateMachine;
    }, function (module) {
      UIService = module.UIService;
    }, function (module) {
      Paddings = module.Paddings;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "4cde4CKP1pOq7oM3do8e5cE", "GameField", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Represents the main game field component that manages the game field's UI and layout.
       * This class handles the initialization of the game field, binding of the game state machine,
       * and updating of the game field's UI.
       */
      var GameField = exports('GameField', (_dec = ccclass('GameField'), _dec2 = property({
        type: [Prefab],
        tooltip: 'Prefabs for regular game items that can be placed in the grid'
      }), _dec3 = property({
        type: [Prefab],
        tooltip: 'Prefabs for game drops that can be placed in the grid'
      }), _dec4 = property({
        type: Node,
        tooltip: 'Container node for the game field UI'
      }), _dec5 = property({
        type: [Node],
        tooltip: 'Array of nodes that should be scaled to fit the game field UI'
      }), _dec6 = property({
        type: Node,
        tooltip: 'Container node for the game field mask'
      }), _dec7 = property({
        type: CCFloat,
        tooltip: 'Padding value for the scale targets'
      }), _dec8 = property({
        type: Paddings,
        visible: true,
        serializable: true,
        tooltip: 'Padding values for the game field layout'
      }), _dec9 = property({
        type: Paddings,
        visible: true,
        serializable: true,
        tooltip: 'Padding values for the game field mask'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameField, _Component);
        function GameField() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * The prefabs for the game items.
           */
          _initializerDefineProperty(_this, "itemPrefabs", _descriptor, _assertThisInitialized(_this));
          /**
           * The prefabs for the game drops.
           */
          _initializerDefineProperty(_this, "dropPrefabs", _descriptor2, _assertThisInitialized(_this));
          /**
           * The target node for the game field's UI.
           */
          _initializerDefineProperty(_this, "targetNode", _descriptor3, _assertThisInitialized(_this));
          /**
           * The nodes that should be scaled to fit the game field's UI.
           */
          _initializerDefineProperty(_this, "scaleTargets", _descriptor4, _assertThisInitialized(_this));
          /**
           * The mask target node for the game field's UI.
           */
          _initializerDefineProperty(_this, "maskTarget", _descriptor5, _assertThisInitialized(_this));
          /**
           * The padding value for the scale targets.
           */
          _initializerDefineProperty(_this, "scaleTargetsPadding", _descriptor6, _assertThisInitialized(_this));
          /**
           * The paddings for the target node.
           */
          _initializerDefineProperty(_this, "targetPaddings", _descriptor7, _assertThisInitialized(_this));
          /**
           * The paddings for the mask target node.
           */
          _initializerDefineProperty(_this, "maskPaddings", _descriptor8, _assertThisInitialized(_this));
          _this._uiService = inject(UIService);
          _this._stateMachine = inject(GameStateMachine);
          return _this;
        }
        var _proto = GameField.prototype;
        /**
         * Initializes the game field component.
         */
        _proto.start = /*#__PURE__*/
        function () {
          var _start = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._stateMachine.setItems(this.itemPrefabs);
                  this._stateMachine.setDrops(this.dropPrefabs);
                  if (!(this.targetNode != null)) {
                    _context.next = 12;
                    break;
                  }
                  _context.next = 5;
                  return this._stateMachine.bind(this.targetNode);
                case 5:
                  _context.next = 7;
                  return this._uiService.resetSize([this.targetNode], null);
                case 7:
                  _context.next = 9;
                  return this._uiService.resetSize(this.scaleTargets, this.targetPaddings);
                case 9:
                  _context.next = 11;
                  return this._uiService.resetSize([this.maskTarget], this.maskPaddings);
                case 11:
                  return _context.abrupt("return");
                case 12:
                  this._stateMachine.bind(this.node);
                case 13:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function start() {
            return _start.apply(this, arguments);
          }
          return start;
        }()
        /**
         * Updates the game field component.
         * @param dt The time delta since the last update.
         */;

        _proto.update = /*#__PURE__*/
        function () {
          var _update = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dt) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._stateMachine.update();
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function update(_x) {
            return _update.apply(this, arguments);
          }
          return update;
        }();
        return GameField;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPrefabs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dropPrefabs", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scaleTargets", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "maskTarget", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scaleTargetsPadding", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "targetPaddings", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Paddings();
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "maskPaddings", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Paddings();
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameFieldItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, CCString, CCBoolean, Node, UITransform, Vec3, Component, tween;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCString = module.CCString;
      CCBoolean = module.CCBoolean;
      Node = module.Node;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Component = module.Component;
      tween = module.tween;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "8d98d+Q6sRGOKwaf6Ix2tOF", "GameFieldItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Represents an individual item in the game field.
       * This class handles the visual representation and behavior of game pieces
       * that can be matched, cleared, or affected by various game tools.
       */
      var GameFieldItem = exports('GameFieldItem', (_dec = ccclass('GameFieldItem'), _dec2 = property({
        type: CCString,
        tooltip: 'The type identifier for this game item'
      }), _dec3 = property({
        type: CCBoolean,
        tooltip: 'Indicates if this item is a booster type'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameFieldItem, _Component);
        function GameFieldItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * The type of the item.
           */
          _initializerDefineProperty(_this, "ItemType", _descriptor, _assertThisInitialized(_this));
          /**
           * Flag indicating if the item is a booster.
           */
          _initializerDefineProperty(_this, "IsBooster", _descriptor2, _assertThisInitialized(_this));
          _this._isInteractable = true;
          return _this;
        }
        var _proto = GameFieldItem.prototype;
        /**
         * Moves the item to a specified position over a duration.
         * @param x The x-coordinate of the target position
         * @param y The y-coordinate of the target position
         * @param duration The time it takes to move to the target position
         * @param delay The delay before starting the movement
         */
        _proto.moveToPosition = /*#__PURE__*/
        function () {
          var _moveToPosition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(x, y, duration, delay) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (delay === void 0) {
                    delay = 0;
                  }
                  return _context.abrupt("return", new Promise(function (resolve) {
                    tween(_this2.node).delay(delay).to(duration, {
                      position: new Vec3(x, y, 0)
                    }).call(function () {
                      return resolve();
                    }).start();
                  }));
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function moveToPosition(_x, _x2, _x3, _x4) {
            return _moveToPosition.apply(this, arguments);
          }
          return moveToPosition;
        }()
        /**
         * Called when the component is loaded.
         */;

        _proto.onLoad = function onLoad() {
          // Add click event listener
          this.node.on(Node.EventType.TOUCH_END, this.onClick, this);
        }

        /**
         * Handles the click event on the item.
         * @param event The touch event
         */;
        _proto.onClick = function onClick(event) {
          if (!this._isInteractable) return;
          // Get click position in node space
          var location = event.getUILocation();
          var transform = this.node.getComponent(UITransform);
          if (transform) {
            var nodePos = transform.convertToNodeSpaceAR(new Vec3(location.x, location.y, 0));
            var size = transform.contentSize;

            // Check if click is within sprite bounds
            if (Math.abs(nodePos.x) <= size.width / 2 && Math.abs(nodePos.y) <= size.height / 2) {
              this.node.emit(GameFieldItem.CLICKED_EVENT, this);
            }
          }
        };
        return GameFieldItem;
      }(Component), _class3.COMPONENT_NAME = 'GameFieldItem', _class3.CLICKED_EVENT = 'item-clicked', _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ItemType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "IsBooster", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameFillField.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameFieldItem.ts', './BaseState.ts', './ArrayUtils.ts', './inject.ts', './ClusterSeekerService.ts', './FieldCoordinatesService.ts', './LevelConfiguration.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, instantiate, GameFieldItem, BaseState, ArrayUtils, inject, ClusterSeekerService, FieldCoordinatesService, LevelConfigurationService;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      GameFieldItem = module.GameFieldItem;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      ArrayUtils = module.ArrayUtils;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      ClusterSeekerService = module.ClusterSeekerService;
    }, function (module) {
      FieldCoordinatesService = module.FieldCoordinatesService;
    }, function (module) {
      LevelConfigurationService = module.LevelConfigurationService;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cc796q82rtBL4fd2hyzr/wc", "GameFillField", undefined);

      /**
       * Represents the state where the game fills the field with new items.
       * This state is responsible for initializing the game field at the start
       * and refilling empty spaces with new items.
       */
      var GameFillField = exports('GameFillField', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameFillField, _BaseState);
        function GameFillField() {
          var _this;
          _this = _BaseState.call(this, GameFillField.STATE_NAME) || this;
          _this._clusterSeeker = inject(ClusterSeekerService);
          _this._coordinatesService = inject(FieldCoordinatesService);
          _this._lvlConf = inject(LevelConfigurationService);
          return _this;
        }

        /**
         * Handles entering the field fill state.
         * Creates and places new items in empty spaces on the game field.
         * @param context - The game context
         */
        var _proto = GameFillField.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var gameConf, lvlConf, rootNode, items, i, j, poolItem, _item, cords, _i, _item2, itemComponent, initialreshuffle, _i2, _j, item;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  gameConf = context.gameConf;
                  lvlConf = context.lvlConf;
                  rootNode = context.gameNode;
                  context.gameScore = gameConf.startPointsAmount;
                  items = context.items;
                  for (i = 0; i < lvlConf.width; i++) {
                    context.items[i] = [];
                    for (j = 0; j < lvlConf.height; j++) {
                      poolItem = this.createItem(context);
                      context.itemsPool.push(poolItem);
                      _item = this.createItem(context);
                      cords = this._coordinatesService.fieldToWorldCoordsinates(i, j);
                      _item.node.setPosition(cords.x, cords.y);
                      rootNode.addChild(_item.node);
                      items[i][j] = _item;
                    }
                  }

                  //add boosters
                  for (_i = 0; _i < context.dropPrefabs.length; _i++) {
                    _item2 = instantiate(context.dropPrefabs[_i]);
                    itemComponent = _item2.getComponent(GameFieldItem.COMPONENT_NAME);
                    _item2.on(GameFieldItem.CLICKED_EVENT, function (clickedItem) {
                      context.onClickedItemCb(clickedItem);
                    });
                    context.dropsPool.push(itemComponent);
                  }

                  ///reshiffle in the beginning
                  context.remainClusters = this._clusterSeeker.FindAllClusters(items, gameConf.minClusterSize, GameFieldItem.COMPONENT_NAME);
                  initialreshuffle = context.remainClusters.length == 0;
                  if (initialreshuffle) {
                    while (context.remainClusters.length == 0 && context.shuffleCounter <= gameConf.reshuffles) {
                      context.shuffleCounter++;
                      context.remainClusters = this._clusterSeeker.FindAllClusters(items, gameConf.minClusterSize, GameFieldItem.COMPONENT_NAME);
                    }
                    for (_i2 = 0; _i2 < lvlConf.width; _i2++) {
                      context.items[_i2] = [];
                      for (_j = 0; _j < lvlConf.height; _j++) {
                        item = items[_i2][_j];
                        cords = this._coordinatesService.fieldToWorldCoordsinates(_i2, _j);
                        item.node.setPosition(cords.x, cords.y);
                      }
                    }
                  }
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }()
        /**
         * Creates a new game item.
         * @param context - The game context
         * @param subscribeClickEvents - Whether to subscribe to click events
         * @returns The created game item
         */;

        _proto.createItem = function createItem(context, subscribeClickEvents) {
          if (subscribeClickEvents === void 0) {
            subscribeClickEvents = true;
          }
          var item = instantiate(ArrayUtils.getRandomItem(context.itemPrefabs));
          var itemComponent = item.getComponent(GameFieldItem.COMPONENT_NAME);
          if (subscribeClickEvents) {
            item.on(GameFieldItem.CLICKED_EVENT, function (clickedItem) {
              context.onClickedItemCb(clickedItem);
            });
          }
          return itemComponent;
        };
        return GameFillField;
      }(BaseState));
      GameFillField.STATE_NAME = 'GameFillField';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameIdle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts', './SelectedItemData.ts', './EnumGameTool.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseState, SelectedItemData, GameTool;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      SelectedItemData = module.SelectedItemData;
    }, function (module) {
      GameTool = module.GameTool;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aff97iCuORDL5q47O4JUu9y", "GameIdle", undefined);
      /**
       * Represents the idle state of the game where the game is waiting for player input.
       * This is the default state where players can select items on the game field.
       */
      var GameIdle = exports('GameIdle', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameIdle, _BaseState);
        /**
         * Creates a new instance of the GameIdle state.
         */
        function GameIdle() {
          var _this;
          _this = _BaseState.call(this, GameIdle.STATE_NAME) || this;
          _this._context = null;
          return _this;
        }

        /**
         * Handles entering the idle state.
         * Sets up event listeners for item selection and resets the current tool to selector.
         * @param context - The game context
         */
        var _proto = GameIdle.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  context.currentTool = GameTool.SELECTOR;
                  context.skipMove = false;
                  context.gameNode.on(SelectedItemData.SELECTED_EVENT, this.onItemSelected, this);
                  this._context = context;
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }()
        /**
         * Handles exiting the idle state.
         * Removes event listeners for item selection.
         * @param context - The game context
         */;

        _proto.onExit = /*#__PURE__*/
        function () {
          var _onExit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(context) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  context.gameNode.off(SelectedItemData.SELECTED_EVENT, this.onItemSelected, this);
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onExit(_x2) {
            return _onExit.apply(this, arguments);
          }
          return onExit;
        }()
        /**
         * Handles the selection of an item on the game field.
         * Updates the game context with the selected item data.
         * @param event - Data about the selected item
         */;

        _proto.onItemSelected = function onItemSelected(event) {
          this._context.selectedItem = event;
        };
        return GameIdle;
      }(BaseState));
      GameIdle.STATE_NAME = 'GameIdle';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameLandDrop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './inject.ts', './BaseState.ts', './FieldCoordinatesService.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, inject, BaseState, FieldCoordinatesService;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      FieldCoordinatesService = module.FieldCoordinatesService;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8ed41p0EMNAgrOX4MeLuoTT", "GameLandDrop", undefined);
      /**
       * Represents the state where dropped items land on the game field.
       * This state handles the placement of dropped items (like boosters or special items)
       * into their final positions on the game field.
       */
      var GameLandDrop = exports('GameLandDrop', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameLandDrop, _BaseState);
        function GameLandDrop() {
          var _this;
          _this = _BaseState.call(this, GameLandDrop.STATE_NAME) || this;
          _this._coordinatesService = inject(FieldCoordinatesService);
          return _this;
        }

        /**
         * Handles entering the land drop state.
         * Places dropped items into their designated positions on the field.
         * @param context - The game context
         */
        var _proto = GameLandDrop.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  for (i = 0; i < context.droppedItems.length; i++) {
                    this.replaceItem(context, context.droppedItems[i]);
                  }
                  context.droppedItems = [];
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        _proto.replaceItem = function replaceItem(context, itemData) {
          var currentItem = context.items[itemData.position.x][itemData.position.y];
          currentItem.node.removeFromParent();
          context.itemsPool.push(currentItem);
          context.items[itemData.position.x][itemData.position.y] = itemData.item;
          var cords = this._coordinatesService.fieldToWorldCoordsinates(itemData.position.x, itemData.position.y);
          itemData.item.node.setPosition(cords.x, cords.y);
          context.gameNode.addChild(itemData.item.node);
        };
        return GameLandDrop;
      }(BaseState));
      GameLandDrop.STATE_NAME = 'GameLandDrop';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameOver.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9770abG+4RK6IkZEiNxoWzu", "GameOver", undefined);
      /**
       * Represents the final state when the game is over.
       * This state is entered when the player has either won or lost the game,
       * typically when they've run out of moves or reached the target score.
       */
      var GameOver = exports('GameOver', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameOver, _BaseState);
        function GameOver() {
          return _BaseState.call(this, GameOver.STATE_NAME) || this;
        }

        /**
         * Handles entering the game over state.
         * Performs final game cleanup and triggers the game over UI.
         * @param context - The game context
         */
        var _proto = GameOver.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var items, i, j;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // Clean up the game field
                  items = context.items;
                  for (i = 0; i < items.length; i++) {
                    for (j = 0; j < items[i].length; j++) {
                      if (items[i][j]) {
                        items[i][j].node.removeFromParent();
                        context.itemsPool.push(items[i][j]);
                        items[i][j] = null;
                      }
                    }
                  }

                  // Trigger game over UI or any other necessary actions
                  context.gameNode.emit('game-over');
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return GameOver;
      }(BaseState));
      GameOver.STATE_NAME = 'GameOver';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameOverWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameContext.ts', './inject.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, GameContext, inject;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      GameContext = module.GameContext;
    }, function (module) {
      inject = module.inject;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "022b1cXmD5P5YB2pZXyBdaM", "GameOverWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Component that manages the game over window display.
       */
      var GameOverWindow = exports('GameOverWindow', (_dec = ccclass('GameOverWindow'), _dec2 = property({
        type: Label,
        visible: true,
        tooltip: 'Label component for displaying the final score'
      }), _dec3 = property({
        type: Label,
        visible: true,
        tooltip: 'Label component for displaying the number of moves used'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameOverWindow, _Component);
        function GameOverWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** Reference to the game context */
          _this._gameContext = inject(GameContext);
          /** Label displaying the final points */
          _initializerDefineProperty(_this, "_pointsLbl", _descriptor, _assertThisInitialized(_this));
          /** Label displaying the moves used */
          _initializerDefineProperty(_this, "_movesLbl", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GameOverWindow.prototype;
        /**
         * Called when the component is enabled.
         * Updates the points and moves labels with the current game score and moves.
         */
        _proto.onEnable = function onEnable() {
          this._pointsLbl.string = this._gameContext.gameScore.toString();
          this._movesLbl.string = this._gameContext.gameMoves.toString();
        };
        return GameOverWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_pointsLbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_movesLbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameRefillGrid.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './inject.ts', './BaseState.ts', './ArrayUtils.ts', './FieldCoordinatesService.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, inject, BaseState, ArrayUtils, FieldCoordinatesService;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      ArrayUtils = module.ArrayUtils;
    }, function (module) {
      FieldCoordinatesService = module.FieldCoordinatesService;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9a97cFbf6lCcYhbP9ZAHNjb", "GameRefillGrid", undefined);
      /**
       * Represents the state where the game refills the grid with new items.
       * This state is entered after items have been removed and the field has collapsed,
       * ensuring the grid is always full and playable.
       */
      var GameRefillGrid = exports('GameRefillGrid', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameRefillGrid, _BaseState);
        function GameRefillGrid() {
          var _this;
          _this = _BaseState.call(this, GameRefillGrid.STATE_NAME) || this;
          _this._coordinatesService = inject(FieldCoordinatesService);
          return _this;
        }

        /**
         * Handles entering the grid refill state.
         * Identifies empty spaces and fills them with new items.
         * @param context - The game context
         */
        var _proto = GameRefillGrid.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var items, itemPool, lvlConf, rootNode, movingItems, i, j, item, cords, spawnCords;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  items = context.items;
                  itemPool = context.itemsPool;
                  lvlConf = context.lvlConf;
                  rootNode = context.gameNode;
                  movingItems = [];
                  context.isMovingItems = true;
                  for (i = 0; i < lvlConf.width; i++) {
                    for (j = 0; j < lvlConf.height; j++) {
                      if (!items[i][j]) {
                        // const dropItem = this.getDropItem(context, i, j);
                        item = ArrayUtils.getRandomItem(itemPool);
                        ArrayUtils.removeItem(itemPool, item);
                        items[i][j] = item;
                        // add item on top of the grid (it will be behind the mask)
                        cords = this._coordinatesService.fieldToWorldCoordsinates(i, j);
                        spawnCords = this._coordinatesService.fieldSpawnToWorldCoordsinates(i, j);
                        item.node.setPosition(spawnCords.x, spawnCords.y);
                        rootNode.addChild(item.node);
                        // Track the movement
                        movingItems.push(item.moveToPosition(cords.x, cords.y, 0.1, i * 0.08));
                      }
                    }
                  }
                  // Wait for all movements to complete
                  _context.next = 9;
                  return Promise.all(movingItems);
                case 9:
                  context.isMovingItems = false;
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return GameRefillGrid;
      }(BaseState));
      GameRefillGrid.STATE_NAME = 'GameRefillGrid';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameRemoveCluster.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, BaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d000bmA9slB55MBh/loO07w", "GameRemoveCluster", undefined);
      /**
       * Represents the state where the game removes a cluster of items from the game field.
       * This state is entered after a valid cluster has been found and selected.
       */
      var GameRemoveCluster = exports('GameRemoveCluster', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameRemoveCluster, _BaseState);
        function GameRemoveCluster() {
          return _BaseState.call(this, GameRemoveCluster.STATE_NAME) || this;
        }

        /**
         * Handles entering the cluster removal state.
         * Removes the selected cluster of items from the game field and adds them to the appropriate pools.
         * @param context - The game context
         */
        var _proto = GameRemoveCluster.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var cluster, items, pool, dropsPool, _loop, _iterator, _step;
            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  cluster = context.currentCluster;
                  if (!(!cluster || cluster.length === 0)) {
                    _context2.next = 3;
                    break;
                  }
                  return _context2.abrupt("return");
                case 3:
                  items = context.items;
                  pool = context.itemsPool;
                  dropsPool = context.dropsPool;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var item, index, columnIndex;
                    return _regeneratorRuntime().wrap(function _loop$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          item = _step.value;
                          index = items.findIndex(function (row) {
                            return row.indexOf(item) !== -1;
                          });
                          if (index !== -1) {
                            columnIndex = items[index].indexOf(item);
                            if (columnIndex !== -1) {
                              // Remove the item from the grid
                              items[index][columnIndex] = null;
                              // Remove the item from the scene and add to pool
                              item.node.removeFromParent();
                              if (item.IsBooster) {
                                dropsPool.push(item);
                              } else {
                                pool.push(item);
                              }
                            }
                          }
                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }, _loop);
                  });
                  _iterator = _createForOfIteratorHelperLoose(cluster);
                case 8:
                  if ((_step = _iterator()).done) {
                    _context2.next = 12;
                    break;
                  }
                  return _context2.delegateYield(_loop(), "t0", 10);
                case 10:
                  _context2.next = 8;
                  break;
                case 12:
                  //cleanup
                  context.currentCluster = null;
                case 13:
                case "end":
                  return _context2.stop();
              }
            }, _callee);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return GameRemoveCluster;
      }(BaseState));
      GameRemoveCluster.STATE_NAME = 'GameRemoveCluster';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameReshuffleField.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './inject.ts', './BaseState.ts', './FieldCoordinatesService.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, inject, BaseState, FieldCoordinatesService;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      FieldCoordinatesService = module.FieldCoordinatesService;
    }],
    execute: function () {
      cclegacy._RF.push({}, "897d8yx8EVIzJDR4ft8EzdO", "GameReshuffleField", undefined);
      /**
       * Represents the state where the game reshuffles all items on the field.
       * This state is entered when there are no valid moves available,
       * ensuring the game remains playable by randomizing item positions.
       */
      var GameReshuffleField = exports('GameReshuffleField', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameReshuffleField, _BaseState);
        /**
         * Initializes a new instance of the GameReshuffleField state.
         */
        function GameReshuffleField() {
          var _this;
          _this = _BaseState.call(this, GameReshuffleField.STATE_NAME) || this;
          _this._coordinatesService = inject(FieldCoordinatesService);
          return _this;
        }

        /**
         * Handles entering the field reshuffle state.
         * Randomly redistributes all items on the game field.
         * @param context - The game context
         */
        var _proto = GameReshuffleField.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var items, movingItems, lvlConf, i, j, item, cords;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  context.isMovingItems = true;
                  items = context.items;
                  movingItems = [];
                  lvlConf = context.lvlConf;
                  context.items.shuffle2D();
                  for (i = 0; i < lvlConf.width; i++) {
                    for (j = 0; j < lvlConf.height; j++) {
                      item = items[i][j];
                      cords = this._coordinatesService.fieldToWorldCoordsinates(i, j);
                      movingItems.push(item.moveToPosition(cords.x, cords.y, 1));
                    }
                  }
                  // Wait for all movements to complete
                  _context.next = 8;
                  return Promise.all(movingItems);
                case 8:
                  context.isMovingItems = false;
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }()
        /**
         * Handles exiting the field reshuffle state.
         * Increments the shuffle counter.
         * @param context - The game context
         */;

        _proto.onExit = /*#__PURE__*/
        function () {
          var _onExit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(context) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  context.shuffleCounter++;
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function onExit(_x2) {
            return _onExit.apply(this, arguments);
          }
          return onExit;
        }();
        return GameReshuffleField;
      }(BaseState));
      GameReshuffleField.STATE_NAME = 'GameReshuffleField';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameSearchCluster.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './inject.ts', './BaseState.ts', './ClusterSeekerService.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, inject, BaseState, ClusterSeekerService;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      BaseState = module.BaseState;
    }, function (module) {
      ClusterSeekerService = module.ClusterSeekerService;
    }],
    execute: function () {
      cclegacy._RF.push({}, "af425yXHylFe5expSo+5rV0", "GameSearchCluster", undefined);
      /**
       * Represents the state where the game searches for a cluster of matching items.
       * A cluster is a group of adjacent items of the same type that can be removed together.
       */
      var GameSearchCluster = exports('GameSearchCluster', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(GameSearchCluster, _BaseState);
        function GameSearchCluster() {
          var _this;
          _this = _BaseState.call(this, GameSearchCluster.STATE_NAME) || this;
          _this._clusterSeeker = inject(ClusterSeekerService);
          return _this;
        }

        /**
         * Handles entering the cluster search state.
         * Searches for a cluster of matching items around the selected item.
         * @param context - The game context
         */
        var _proto = GameSearchCluster.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var conf, item, items, cluster;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  conf = context.gameConf;
                  item = context.selectedItem;
                  items = context.items; // If it's booster then we just need to set the cluster and return
                  if (!item.item.IsBooster) {
                    _context.next = 6;
                    break;
                  }
                  context.currentCluster = [item.item];
                  return _context.abrupt("return");
                case 6:
                  cluster = this._clusterSeeker.CollectCluster(items, conf.minClusterSize, item.position.x, item.position.y, 'ItemType');
                  if (cluster.length >= conf.minClusterSize) {
                    context.currentCluster = cluster;
                  } else {
                    context.selectedItem = null;
                  }
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return GameSearchCluster;
      }(BaseState));
      GameSearchCluster.STATE_NAME = 'GameSearchCluster';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameSM.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singleton.ts', './inject.ts', './FiniteStateMachine.ts', './GameContext.ts', './GameFillField.ts', './GameIdle.ts', './SelectedItemData.ts', './GameSearchCluster.ts', './GameRemoveCluster.ts', './GameCollapseField.ts', './GameRefillGrid.ts', './GameCollectAllClusters.ts', './GameReshuffleField.ts', './GameOver.ts', './GameCalculateScore.ts', './EnumGameTool.ts', './GameBombActivation.ts', './GameDropBooster.ts', './GameLandDrop.ts', './NukeBombActivated.ts', './Column1RocketActivated.ts', './Column2RocketActivated.ts', './Row1RocketActivated.ts', './Row2RocketActivated.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Vec2, singleton, inject, FiniteStateMachine, GameContext, GameFillField, GameIdle, SelectedItemData, GameSearchCluster, GameRemoveCluster, GameCollapseField, GameRefillGrid, GameCollectAllClusters, GameReshuffleField, GameOver, GameCalculateScore, GameTool, GameBombActivation, GameDropBooster, GameLandDrop, NukeBombActivated, Column1RocketActivated, Column2RocketActivated, Row1RocketActivated, Row2RocketActivated;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
    }, function (module) {
      singleton = module.singleton;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      FiniteStateMachine = module.FiniteStateMachine;
    }, function (module) {
      GameContext = module.GameContext;
    }, function (module) {
      GameFillField = module.GameFillField;
    }, function (module) {
      GameIdle = module.GameIdle;
    }, function (module) {
      SelectedItemData = module.SelectedItemData;
    }, function (module) {
      GameSearchCluster = module.GameSearchCluster;
    }, function (module) {
      GameRemoveCluster = module.GameRemoveCluster;
    }, function (module) {
      GameCollapseField = module.GameCollapseField;
    }, function (module) {
      GameRefillGrid = module.GameRefillGrid;
    }, function (module) {
      GameCollectAllClusters = module.GameCollectAllClusters;
    }, function (module) {
      GameReshuffleField = module.GameReshuffleField;
    }, function (module) {
      GameOver = module.GameOver;
    }, function (module) {
      GameCalculateScore = module.GameCalculateScore;
    }, function (module) {
      GameTool = module.GameTool;
    }, function (module) {
      GameBombActivation = module.GameBombActivation;
    }, function (module) {
      GameDropBooster = module.GameDropBooster;
    }, function (module) {
      GameLandDrop = module.GameLandDrop;
    }, function (module) {
      NukeBombActivated = module.NukeBombActivated;
    }, function (module) {
      Column1RocketActivated = module.Column1RocketActivated;
    }, function (module) {
      Column2RocketActivated = module.Column2RocketActivated;
    }, function (module) {
      Row1RocketActivated = module.Row1RocketActivated;
    }, function (module) {
      Row2RocketActivated = module.Row2RocketActivated;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "200aecJho9Onrs1efGOisrS", "GameSM", undefined);

      /**
       * Game State Machine class that manages the game's state transitions and logic.
       * This class extends the FiniteStateMachine to handle various game states like
       * idle, searching for clusters, removing clusters, dropping boosters, etc.
       * It coordinates the flow between different game states and maintains the overall
       * game progression.
       */
      var GameStateMachine = exports('GameStateMachine', (_dec = singleton(), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(GameStateMachine, _ref);
        /**
         * Initializes the game state machine with the game context.
         */
        function GameStateMachine() {
          var context = inject(GameContext);
          return _ref.call(this, context) || this;
        }

        /**
         * Sets the item prefabs for the game.
         * @param items The item prefabs to set
         */
        var _proto = GameStateMachine.prototype;
        _proto.setItems = function setItems(items) {
          if (this.context.itemPrefabs != null) {
            throw new Error('Items already set');
          }
          this.context.itemPrefabs = items;
        }

        /**
         * Sets the drop prefabs for the game.
         * @param items The drop prefabs to set
         */;
        _proto.setDrops = function setDrops(items) {
          if (this.context.dropPrefabs != null) {
            throw new Error('Drops already set');
          }
          this.context.dropPrefabs = items;
        }

        /**
         * Sets up the game states.
         */;
        _proto.setupStates = /*#__PURE__*/
        function () {
          var _setupStates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.addState(new GameFillField());
                  this.addState(new GameIdle());
                  this.addState(new GameSearchCluster());
                  this.addState(new GameRemoveCluster());
                  this.addState(new GameCollapseField());
                  this.addState(new GameRefillGrid());
                  this.addState(new GameCollectAllClusters());
                  this.addState(new GameReshuffleField());
                  this.addState(new GameOver());
                  this.addState(new GameCalculateScore());
                  this.addState(new GameBombActivation());
                  this.addState(new GameDropBooster());
                  this.addState(new GameLandDrop());
                  this.addState(new NukeBombActivated());
                  this.addState(new Column1RocketActivated());
                  this.addState(new Column2RocketActivated());
                  this.addState(new Row1RocketActivated());
                  this.addState(new Row2RocketActivated());
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function setupStates() {
            return _setupStates.apply(this, arguments);
          }
          return setupStates;
        }()
        /**
         * Sets up the game state transitions.
         */;

        _proto.setupTransitions = /*#__PURE__*/
        function () {
          var _setupTransitions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.addTransition({
                    from: GameFillField.STATE_NAME,
                    to: GameIdle.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.needReshuffle == false && context.items.length > 0 && context.itemsPool.length > 0 && context.gameNode != null;
                    }
                  });

                  // init -> Game Over
                  this.addTransition({
                    from: GameFillField.STATE_NAME,
                    to: GameOver.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.needReshuffle == true && context.canReshuffle == false;
                    }
                  });

                  // IDLE -> Search for cluster
                  this.addTransition({
                    from: GameIdle.STATE_NAME,
                    to: GameSearchCluster.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.selectedItem != null && context.currentTool == GameTool.SELECTOR && !context.selectedItem.item.IsBooster;
                    }
                  });

                  // IDLE -> Bomb
                  this.addTransition({
                    from: GameIdle.STATE_NAME,
                    to: GameBombActivation.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.selectedItem != null && (context.currentTool == GameTool.BOMB_1 || context.currentTool == GameTool.BOMB_2);
                    }
                  });

                  // IDLE -> Nuke Bomb
                  this.addTransition({
                    from: GameIdle.STATE_NAME,
                    to: NukeBombActivated.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.selectedItem != null && context.currentTool == GameTool.SELECTOR && context.selectedItem.item.ItemType == GameTool.NUKE_BOMB;
                    }
                  });

                  // Bomb -> Calculation
                  this.addTransition({
                    from: NukeBombActivated.STATE_NAME,
                    to: GameCalculateScore.STATE_NAME
                  });

                  // IDLE -> Row Rocket 1
                  this.addTransition({
                    from: GameIdle.STATE_NAME,
                    to: Row1RocketActivated.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.selectedItem != null && context.currentTool == GameTool.SELECTOR && context.selectedItem.item.ItemType == GameTool.ROW_ROCKET_1;
                    }
                  });

                  // IDLE -> Row Rocket 2
                  this.addTransition({
                    from: GameIdle.STATE_NAME,
                    to: Row2RocketActivated.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.selectedItem != null && context.currentTool == GameTool.SELECTOR && context.selectedItem.item.ItemType == GameTool.ROW_ROCKET_2;
                    }
                  });

                  // IDLE -> Column Rocket 1
                  this.addTransition({
                    from: GameIdle.STATE_NAME,
                    to: Column1RocketActivated.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.selectedItem != null && context.currentTool == GameTool.SELECTOR && context.selectedItem.item.ItemType == GameTool.COL_ROCKET_1;
                    }
                  });

                  // IDLE -> Column Rocket 2
                  this.addTransition({
                    from: GameIdle.STATE_NAME,
                    to: Column2RocketActivated.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.selectedItem != null && context.currentTool == GameTool.SELECTOR && context.selectedItem.item.ItemType == GameTool.COL_ROCKET_2;
                    }
                  });

                  // Row Rocket 1 -> Calculation
                  this.addTransition({
                    from: Row1RocketActivated.STATE_NAME,
                    to: GameCalculateScore.STATE_NAME
                  });

                  // Row Rocket 2 -> Calculation
                  this.addTransition({
                    from: Row2RocketActivated.STATE_NAME,
                    to: GameCalculateScore.STATE_NAME
                  });

                  // Column Rocket 1 -> Calculation
                  this.addTransition({
                    from: Column1RocketActivated.STATE_NAME,
                    to: GameCalculateScore.STATE_NAME
                  });

                  // Column Rocket 2 -> Calculation
                  this.addTransition({
                    from: Column2RocketActivated.STATE_NAME,
                    to: GameCalculateScore.STATE_NAME
                  });

                  // Bomb -> Calculation
                  this.addTransition({
                    from: GameBombActivation.STATE_NAME,
                    to: GameCalculateScore.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return !context.skipMove;
                    }
                  });
                  this.addTransition({
                    from: GameBombActivation.STATE_NAME,
                    to: GameIdle.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.skipMove;
                    }
                  });

                  // IDLE -> Search for cluster
                  this.addTransition({
                    from: GameIdle.STATE_NAME,
                    to: GameOver.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.outOfMoves || context.pointTargetReached;
                    }
                  });

                  // Search for cluster -> IDLE
                  this.addTransition({
                    from: GameSearchCluster.STATE_NAME,
                    to: GameIdle.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.currentCluster == null;
                    }
                  });

                  // Search for cluster -> Calculate score
                  this.addTransition({
                    from: GameSearchCluster.STATE_NAME,
                    to: GameCalculateScore.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.currentCluster != null;
                    }
                  });

                  // Calculate score -> Remove cluster
                  this.addTransition({
                    from: GameCalculateScore.STATE_NAME,
                    to: GameDropBooster.STATE_NAME
                  });

                  // Calculate score -> Remove cluster
                  this.addTransition({
                    from: GameDropBooster.STATE_NAME,
                    to: GameRemoveCluster.STATE_NAME
                  });

                  // Remove cluster -> Collapse
                  this.addTransition({
                    from: GameRemoveCluster.STATE_NAME,
                    to: GameCollapseField.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.currentCluster == null;
                    }
                  });

                  // Collapse -> Refill
                  this.addTransition({
                    from: GameCollapseField.STATE_NAME,
                    to: GameRefillGrid.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.isMovingItems == false;
                    }
                  });

                  // Refill -> Collect
                  this.addTransition({
                    from: GameRefillGrid.STATE_NAME,
                    to: GameCollectAllClusters.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.isMovingItems == false && context.droppedItems.length == 0;
                    }
                  });

                  // Refill -> Drop
                  this.addTransition({
                    from: GameRefillGrid.STATE_NAME,
                    to: GameLandDrop.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.isMovingItems == false && context.droppedItems.length != 0;
                    }
                  });

                  // Drop -> Collect
                  this.addTransition({
                    from: GameLandDrop.STATE_NAME,
                    to: GameCollectAllClusters.STATE_NAME
                  });

                  // Collect -> Reshuffle
                  this.addTransition({
                    from: GameCollectAllClusters.STATE_NAME,
                    to: GameReshuffleField.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.needReshuffle && context.canReshuffle == true;
                    }
                  });

                  // Reshuffle -> Collect
                  this.addTransition({
                    from: GameReshuffleField.STATE_NAME,
                    to: GameCollectAllClusters.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.needReshuffle && context.canReshuffle == true;
                    }
                  });

                  // Collect -> IDLE
                  this.addTransition({
                    from: GameCollectAllClusters.STATE_NAME,
                    to: GameIdle.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.needReshuffle == false && context.canReshuffle == true;
                    }
                  });

                  // Reshuffle -> Game Over
                  this.addTransition({
                    from: GameReshuffleField.STATE_NAME,
                    to: GameOver.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.needReshuffle && context.canReshuffle == false;
                    }
                  });

                  // Reshuffle -> IDLE
                  this.addTransition({
                    from: GameReshuffleField.STATE_NAME,
                    to: GameIdle.STATE_NAME,
                    guardCondition: function guardCondition(context) {
                      return context.needReshuffle == false && context.canReshuffle == true;
                    }
                  });
                  _context2.next = 33;
                  return this.setInitialState(GameFillField.STATE_NAME);
                case 33:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function setupTransitions() {
            return _setupTransitions.apply(this, arguments);
          }
          return setupTransitions;
        }()
        /**
         * Binds the game state machine to a node.
         * @param node The node to bind to
         */;

        _proto.bind = /*#__PURE__*/
        function () {
          var _bind = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(node) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.context.gameNode = node;
                  _context3.next = 3;
                  return this.setupStates();
                case 3:
                  _context3.next = 5;
                  return this.setupTransitions();
                case 5:
                  this.context.onClickedItemCb = this.onItemClicked.bind(this);
                case 6:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function bind(_x) {
            return _bind.apply(this, arguments);
          }
          return bind;
        }()
        /**
         * Unbinds the game state machine from a node.
         */;

        _proto.unbind = function unbind() {
          this.context.gameNode = null;
        }

        /**
         * Handles an item click event.
         * @param clickedItem The item that was clicked
         */;
        _proto.onItemClicked = function onItemClicked(clickedItem) {
          // Find the position of clicked item in the grid
          for (var i = 0; i < this.context.items.length; i++) {
            for (var j = 0; j < this.context.items[i].length; j++) {
              if (this.context.items[i][j] === clickedItem) {
                var data = new SelectedItemData();
                data.position = new Vec2(i, j);
                data.item = clickedItem;
                this.context.gameNode.emit(SelectedItemData.SELECTED_EVENT, data);
              }
            }
          }
        };
        return GameStateMachine;
      }(FiniteStateMachine)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IClusterSeekerService.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "30f4fe1wX9JxYHqRwSHYDfB", "IClusterSeekerService", undefined);
      /**
       * @file IClusterSeekerService.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-05
       * 
       * Interface for the cluster seeking service that handles finding groups of matching items
       * in the game field. The service is responsible for identifying connected items that share
       * the same property value.
       * A cluster is defined as a group of adjacent items of the same type.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGameConfigurationService.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7275c2aZN5ORpeRHH42xytb", "IGameConfigurationService", undefined);
      /**
       * Interface defining the service responsible for managing game-wide configuration settings.
       * This service provides access to various game parameters and settings that affect gameplay.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGameContext.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0ae95D72TxA2YO2G39hI9+J", "IGameContext", undefined);
      /**
       * @file IGameContext.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-05
       */
      /**
       * Interface defining the contract for the game context.
       * Provides access to essential game state information and operations
       * that are needed across different components of the game.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGameStateObserver.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "78af0Jq+StFybjkJ3cn7tjZ", "IGameStateObserver", undefined);
      /**
       * @file IGameStateObserver.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-05
       */
      /**
       * Interface for observing game state changes.
       * Implement this interface to receive notifications when the game state changes.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGameStatsObserver.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ed3beFNLBNNoamkOCxvW5ds", "IGameStatsObserver", undefined);
      /**
       * @file IGameStatsObserver.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-05
       */
      /**
       * Interface for observing game statistics changes.
       * Implement this interface to receive notifications when game stats like score
       * and moves change during gameplay.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGameToolObserver.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0bb10qnXfpF766bsMjAFR0r", "IGameToolObserver", undefined);
      /**
       * @file IGameToolObserver.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-05
       */
      /**
       * Interface for observing game tool changes.
       * Implement this interface to receive notifications when the active game tool
       * (like selector, bomb, rocket, etc.) changes during gameplay.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGuard.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "53fc8GWanVB/It4xKI7a2WH", "IGuard", undefined);
      /**
       * @file IGuard.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-02
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IGuarded.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1ff2djjkM9I0Yp6wkliRYL9", "IGuarded", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IInjectable.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5ffbfVeUEJCvJwbXlfFqKh3", "IInjectable", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ILevelConfiguration.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7d237KjPKpNf7rzWiMOdX5n", "ILevelConfiguration", undefined);
      /**
       * Interface defining the service responsible for managing level-specific configuration settings.
       * This service provides access to level parameters such as target score, maximum moves,
       * and level-specific game field configurations.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IMapping.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e6e3dudqgNP64RzKTxBGVU6", "IMapping", undefined);
      /**
       * @file IMapping.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-02
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/inject.ts", ['cc', './Kernel.ts'], function (exports) {
  var cclegacy, Kernel;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Kernel = module.Kernel;
    }],
    execute: function () {
      exports('inject', inject);
      cclegacy._RF.push({}, "8c7b7m0TdtBJYNM2KuFi1Vr", "inject", undefined);
      var kernel = exports('kernel', new Kernel());
      function inject(constructor) {
        return kernel.get(constructor);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/injectable.ts", ['cc', './InjectionMapping.ts', './dependency-injection.ts'], function (exports) {
  var cclegacy, InjectionMapping, classMap;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      InjectionMapping = module.InjectionMapping;
    }, function (module) {
      classMap = module.classMap;
    }],
    execute: function () {
      exports('injectable', injectable);
      cclegacy._RF.push({}, "a5010v41oNMoZjdMLSaCQN9", "injectable", undefined);
      function injectable() {
        return function (target) {
          var result = classMap.get(target);
          if (!result) {
            new InjectionMapping(classMap, target);
          }
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/InjectionMapping.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Mapping.ts'], function (exports) {
  var _inheritsLoose, _construct, cclegacy, Mapping;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _construct = module.construct;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Mapping = module.Mapping;
    }],
    execute: function () {
      cclegacy._RF.push({}, "082277rfzRPa5cmLyZdfSrE", "InjectionMapping", undefined);
      var InjectionMapping = exports('InjectionMapping', /*#__PURE__*/function (_Mapping) {
        _inheritsLoose(InjectionMapping, _Mapping);
        function InjectionMapping(classesMap, initialConstructor) {
          var _this;
          _this = _Mapping.call(this) || this;
          _this.instance = null;
          _this.isSingleton = false;
          _this._instanceResultConstructor = null;
          _this.args = [];
          _this._isForceCreation = false;
          _this.classesMap = classesMap;
          _this.to(initialConstructor);
          return _this;
        }
        var _proto = InjectionMapping.prototype;
        _proto.getInstance = function getInstance() {
          if (this.isSingleton) {
            if (!this.instance) {
              this.instance = this.createInstance();
              // if (__DEV__) {
              //     // Development tool for create a global link to the class
              //     DebugUtils.mapObjectToGlobalId(this.instance, this.instance.constructor.name, "s");
              // }
            }

            return this.instance;
          }
          return this.createInstance();
        };
        _proto.createInstance = function createInstance() {
          var constructor = this.getConstructor();
          return _construct(constructor, this.args);
        };
        _proto.getConstructor = function getConstructor() {
          if (this._instanceResultConstructor) {
            return this._instanceResultConstructor;
          }
          throw new Error("Constructor is not bound!");
        };
        _proto.hasInstance = function hasInstance() {
          return !!this.instance && this.isSingleton;
        };
        _proto.destroyInstance = function destroyInstance() {
          this.instance = null;
        };
        _proto.asSingleton = function asSingleton() {
          this.isSingleton = true;
          return this;
        };
        _proto.to = function to(instanceConstructor) {
          if (!instanceConstructor) {
            throw new Error("There is an undefined constructor you are trying bind to.");
          }
          var newThis = this.existentialType(this);
          var other = this.classesMap.get(instanceConstructor);
          if (other) {
            console.warn("Constructor already bound " + instanceConstructor.name);
          }
          newThis._instanceResultConstructor = instanceConstructor;
          newThis.instance = null;
          this.classesMap.add(instanceConstructor, this);
          return newThis;
        };
        _proto.isForceCreation = function isForceCreation() {
          return this._isForceCreation;
        };
        _proto.forceCreation = function forceCreation() {
          this._isForceCreation = true;
          return this;
        };
        _proto.existentialType = function existentialType(oldThis) {
          return oldThis;
        };
        return InjectionMapping;
      }(Mapping));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IPlayerInventoryObserver.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3fe90dKFFJLE5Te8ww21lPP", "IPlayerInventoryObserver", undefined);
      /**
       * Interface defining an observer for player inventory changes.
       * Implementers of this interface will be notified when changes occur
       * to the player's inventory of tools and items.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IPlayerInventoryService.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ca655JZ57FD1IjlR0heqUAA", "IPlayerInventoryService", undefined);
      /**
       * Interface defining the service responsible for managing the player's inventory.
       * This service handles the tracking and modification of game tools and items
       * that the player has available for use during gameplay.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ISelectedItemData.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "11649+g4EFIVrm4dIkC0eWB", "ISelectedItemData", undefined);
      /**
       * @file ISelectedItemData.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-05
       */
      /**
       * Interface defining the contract for selected item data.
       * Provides access to essential information about a selected game item,
       * including its position and properties.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IState.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f5a15v5QVxC04cmPQZMf+fV", "IState", undefined);
      /**
       * @file IState.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-04
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ITransition.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5b403fr4+lHlZk7Q+kjNhhb", "ITransition", undefined);
      /**
       * @file ITransition.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-04
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IUIService.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "84b6dBgCNJDSInoMPqERhwg", "IUIService", undefined);
      /**
       * @file IUIService.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-05
       */
      /**
       * Interface defining the service responsible for managing UI elements.
       * This service handles the creation, display, and management of UI components
       * such as windows, popups, and other interface elements.
       */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Kernel.ts", ['cc', './InjectionMapping.ts', './dependency-injection.ts'], function (exports) {
  var cclegacy, InjectionMapping, classMap;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      InjectionMapping = module.InjectionMapping;
    }, function (module) {
      classMap = module.classMap;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a62918MeB1FyqtxLIsiKtcg", "Kernel", undefined);
      var Kernel = exports('Kernel', /*#__PURE__*/function () {
        function Kernel() {}
        var _proto = Kernel.prototype;
        /*
            private eventMap: EventActionMap;
            private viewMap: ViewMap;
            private mediatorMap: MediatorMap;
        
            constructor(eventMap: EventActionMap, mediatorMap: MediatorMap, viewMap: ViewMap) {
                this.eventMap = eventMap;
                this.mediatorMap = mediatorMap;
                this.viewMap = viewMap;
            }
        
            public bindEvent(eventName: string): EventActionMap {
                return this.eventMap.bindEvent(eventName);
            }
        
            public unBindEvent(eventName: string): EventActionMap {
                return this.eventMap.unBindEvent(eventName);
            }
        
            public unBindAllActionsFromEvent(eventName: string): void {
                return this.eventMap.unBindAllActionsFromEvent(eventName);
            }
        
            public bindView(view: Constructor<IView>): ViewMap {
                return this.viewMap.bindView(view);
            }
        
            public bindMediator(mediator: Constructor<IMediator>): MediatorMap {
                return this.mediatorMap.bindMediator(mediator);
            }
        */
        _proto.bind = function bind(constructor) {
          var result = this.getBinding(constructor);
          if (!result) {
            result = new InjectionMapping(classMap, constructor);
          }
          return result;
        };
        _proto.get = function get(constructor) {
          var mapping = classMap.get(constructor);
          if (!mapping) {
            throw new Error("There is no any binding for " + constructor + " please bind the class before inject()");
          }
          return mapping.getInstance();
        };
        _proto.getBinding = function getBinding(constructor) {
          if (!constructor) {
            throw Error("you are trying to get undefined constructor");
          }
          return classMap.get(constructor);
        };
        _proto.activate = function activate() {
          var injectionsList = [];
          classMap.forEach(function (item) {
            return injectionsList.push(item);
          });

          //Then activate
          injectionsList.forEach(function (item) {
            if (item.isForceCreation()) {
              item.getInstance();
            }
          });
        }
        /*
            public activateEventMap(): void {
                this.eventMap.activate();
            }
         */;
        return Kernel;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LevelConfiguration.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './singleton.ts'], function (exports) {
  var _createClass, cclegacy, singleton;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singleton = module.singleton;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c2dffOSp1BP97XuMJvEN8s4", "LevelConfiguration", undefined);
      /**
       * Service that provides level-specific configuration settings.
       * This service manages settings like grid dimensions, scoring rules,
       * tool properties, and level completion criteria.
       */
      var LevelConfigurationService = exports('LevelConfigurationService', (_dec = singleton(), _dec(_class = /*#__PURE__*/function () {
        function LevelConfigurationService() {
          /** Width of the game grid in cells */
          this._width = 10;
          /** Height of the game grid in cells */
          this._height = 10;
          /** Width of each cell in pixels */
          this._cellWidth = 171;
          /** Height of each cell in pixels */
          this._cellHeight = 192;
          /** Map of points awarded for each item in the game */
          this._paytable = {
            "BlueItem": 10,
            "GreenItem": 20,
            "PurpleItem": 30,
            "RedItem": 40,
            "YellowItem": 50,
            // Boosters
            "COL_ROCKET_1": 60,
            "ROW_ROCKET_1": 60,
            "COL_ROCKET_2": 60,
            "ROW_ROCKET_2": 60,
            "NUKE_BOMB": 100
          };
          /**
           * Map of items that can be dropped at specific levels.
           */
          this._drops = {
            6: ["COL_ROCKET_1", "ROW_ROCKET_1"],
            7: ["COL_ROCKET_2", "ROW_ROCKET_2"],
            8: ["NUKE_BOMB"]
          };
          /** Maximum moves allowed in the level */
          this._maxMoves = 15;
          /** Target score to complete the level */
          this._targetScore = 15500;
          /**
           * Map of bomb radiuses for different tools.
           */
          this._bombRadius = {
            "BOMB_1": 1,
            "BOMB_2": 2
          };
        }
        _createClass(LevelConfigurationService, [{
          key: "drops",
          get:
          /**
           * Gets the map of items that can be dropped at specific levels.
           */
          function get() {
            return this._drops;
          }

          /**
           * Gets the map of bomb radiuses.
           */
        }, {
          key: "bombRadius",
          get: function get() {
            return this._bombRadius;
          }

          /**
           * Gets the maximum moves allowed.
           */
        }, {
          key: "maxMoves",
          get: function get() {
            return this._maxMoves;
          }

          /**
           * Gets the target score for level completion.
           */
        }, {
          key: "targetScore",
          get: function get() {
            return this._targetScore;
          }

          /**
           * Gets the map of points awarded for each item.
           */
        }, {
          key: "paytable",
          get: function get() {
            return this._paytable;
          }

          /**
           * Gets the width of the game grid.
           */
        }, {
          key: "width",
          get: function get() {
            return this._width;
          }

          /**
           * Gets the height of the game grid.
           */
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }

          /**
           * Gets the width of each cell.
           */
        }, {
          key: "cellWidth",
          get: function get() {
            return this._cellWidth;
          }
          /**
           * Gets the height of each cell.
           */
        }, {
          key: "cellHeight",
          get: function get() {
            return this._cellHeight;
          }
        }]);
        return LevelConfigurationService;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './ISelectedItemData.ts', './SelectedItemData.ts', './EnumGameTool.ts', './GameContext.ts', './GameSM.ts', './Column1RocketActivated.ts', './Column2RocketActivated.ts', './NukeBombActivated.ts', './Row1RocketActivated.ts', './Row2RocketActivated.ts', './GameBombActivation.ts', './GameCalculateScore.ts', './GameCollapseField.ts', './GameCollectAllClusters.ts', './GameDropBooster.ts', './GameFillField.ts', './GameIdle.ts', './GameLandDrop.ts', './GameOver.ts', './GameRefillGrid.ts', './GameRemoveCluster.ts', './GameReshuffleField.ts', './GameSearchCluster.ts', './IGameContext.ts', './IGameStateObserver.ts', './IGameStatsObserver.ts', './IGameToolObserver.ts', './GameField.ts', './GameFieldItem.ts', './ArrayExtension.ts', './InjectionMapping.ts', './Kernel.ts', './injectable.ts', './singleton.ts', './dependency-injection.ts', './inject.ts', './IGuard.ts', './IGuarded.ts', './IInjectable.ts', './IMapping.ts', './Dictionary.ts', './Mapping.ts', './Type.ts', './UniqueUtils.ts', './BaseState.ts', './FiniteStateMachine.ts', './IState.ts', './ITransition.ts', './ArrayUtils.ts', './TimeoutUtils.ts', './ClusterSeekerService.ts', './FieldCoordinatesService.ts', './GameConfigurationService.ts', './IClusterSeekerService.ts', './IGameConfigurationService.ts', './ILevelConfiguration.ts', './IPlayerInventoryObserver.ts', './IPlayerInventoryService.ts', './IUIService.ts', './LevelConfiguration.ts', './PlayerInventoryService.ts', './UIService.ts', './GameOverWindow.ts', './Paddings.ts', './ToolController.ts', './ToolSelector.ts', './ToolSwitcherButton.ts', './ToolToggleButton.ts', './UserHud.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Mapping.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "250f36yUtJPe4R3RWY0HezN", "Mapping", undefined);
      /**
       * @file Mapping.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-02
       */
      var Mapping = exports('Mapping', /*#__PURE__*/function () {
        function Mapping() {
          this.guards = [];
          this.executeOnce = false;
        }
        var _proto = Mapping.prototype;
        _proto.isOnce = function isOnce() {
          return this.executeOnce;
        };
        _proto.once = function once() {
          this.executeOnce = true;
          return this;
        };
        _proto.withGuards = function withGuards() {
          for (var _len = arguments.length, guards = new Array(_len), _key = 0; _key < _len; _key++) {
            guards[_key] = arguments[_key];
          }
          Array.prototype.push.apply(this.guards, guards);
          return this;
        };
        _proto.executionAllowedByGuards = function executionAllowedByGuards(data) {
          for (var _iterator = _createForOfIteratorHelperLoose(this.guards), _step; !(_step = _iterator()).done;) {
            var guard = _step.value;
            if (!guard(data)) {
              return false;
            }
          }
          return true;
        };
        _proto.createFilter = function createFilter(filterFields) {
          if (!filterFields) {
            return {};
          }
          var result = {};
          var propertiesInMapping = Mapping.extractAllProperties(this);
          for (var _iterator2 = _createForOfIteratorHelperLoose(propertiesInMapping), _step2; !(_step2 = _iterator2()).done;) {
            var property = _step2.value;
            if (property in filterFields && typeof this[property] === typeof filterFields[property]) {
              result[property] = filterFields[property];
            }
          }
          return result;
        };
        Mapping.extractAllProperties = function extractAllProperties(mapping) {
          var result = [];
          for (var _key2 in mapping) {
            if (mapping.hasOwnProperty(_key2) && _key2 !== "guards" && _key2 !== "executeOnce") {
              result.push(_key2);
            }
          }
          return result;
        };
        return Mapping;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NukeBombActivated.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4f425CXKDpJOJNI4aApNcs4", "NukeBombActivated", undefined);
      /**
       * Represents the state when a nuke bomb booster is activated.
       * This booster is the most powerful, clearing all items from the game field
       * in a single explosion. It provides a strategic option for players to completely
       * reset the field when they are in a difficult situation.
       */
      var NukeBombActivated = exports('NukeBombActivated', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(NukeBombActivated, _BaseState);
        function NukeBombActivated() {
          return _BaseState.call(this, NukeBombActivated.STATE_NAME) || this;
        }

        /**
         * Handles entering the nuke bomb activation state.
         * Collects all items on the field for removal, triggering a complete field clear.
         * @param context - The game context containing the current game state and field data
         */
        var _proto = NukeBombActivated.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var items, cluster, i, j;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  items = context.items;
                  cluster = [];
                  for (i = 0; i < items.length; i++) {
                    for (j = 0; j < items[i].length; j++) {
                      cluster.push(items[i][j]);
                    }
                  }
                  context.currentCluster = cluster;
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return NukeBombActivated;
      }(BaseState));
      NukeBombActivated.STATE_NAME = 'NukeBombActivated';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Paddings.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _initializerDefineProperty, cclegacy, _decorator;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "4ef73jLE2xJNrnq71qkCKy0", "Paddings", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Class representing padding values for UI elements.
       * This class provides a structured way to define and manage padding values
       * for top, bottom, left, and right sides of UI components.
       */
      var Paddings = exports('Paddings', (_dec = ccclass('Paddings'), _dec2 = property({
        visible: true,
        serializable: true,
        tooltip: 'Padding value for the left side of the UI element'
      }), _dec3 = property({
        visible: true,
        serializable: true,
        tooltip: 'Padding value for the bottom side of the UI element'
      }), _dec4 = property({
        visible: true,
        serializable: true,
        tooltip: 'Padding value for the right side of the UI element'
      }), _dec5 = property({
        visible: true,
        serializable: true,
        tooltip: 'Padding value for the top side of the UI element'
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        /**
         * Creates a new Paddings instance.
         */
        function Paddings() {
          /** Padding value for the left side */
          _initializerDefineProperty(this, "_left", _descriptor, this);
          /** Padding value for the bottom side */
          _initializerDefineProperty(this, "_bottom", _descriptor2, this);
          /** Padding value for the right side */
          _initializerDefineProperty(this, "_right", _descriptor3, this);
          /** Padding value for the top side */
          _initializerDefineProperty(this, "_top", _descriptor4, this);
          this.left = 0;
          this.right = 0;
          this.top = 0;
          this.bottom = 0;
        }

        /**
         * Gets the left padding value.
         * @returns The left padding value
         */
        var _proto = Paddings.prototype;
        /**
         * Creates a copy of the current Paddings instance.
         * @returns A new Paddings instance with the same values
         */
        _proto.clone = function clone() {
          var paddings = new Paddings();
          paddings.left = this.left;
          paddings.right = this.right;
          paddings.top = this.top;
          paddings.bottom = this.bottom;
          return paddings;
        };
        _createClass(Paddings, [{
          key: "left",
          get: function get() {
            return this._left;
          }

          /**
           * Sets the left padding value.
           * @param value The new left padding value
           */,
          set: function set(value) {
            this._left = value;
          }

          /**
           * Gets the right padding value.
           * @returns The right padding value
           */
        }, {
          key: "right",
          get: function get() {
            return this._right;
          }
          /**
           * Sets the right padding value.
           * @param value The new right padding value
           */,
          set: function set(value) {
            this._right = value;
          }

          /**
           * Gets the top padding value.
           * @returns The top padding value
           */
        }, {
          key: "top",
          get: function get() {
            return this._top;
          }
          /**
           * Sets the top padding value.
           * @param value The new top padding value
           */,
          set: function set(value) {
            this._top = value;
          }

          /**
           * Gets the bottom padding value.
           * @returns The bottom padding value
           */
        }, {
          key: "bottom",
          get: function get() {
            return this._bottom;
          }
          /**
           * Sets the bottom padding value.
           * @param value The new bottom padding value
           */,
          set: function set(value) {
            this._bottom = value;
          }
        }]);
        return Paddings;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_left", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_bottom", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_right", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_top", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PlayerInventoryService.ts", ['cc', './EnumGameTool.ts', './singleton.ts'], function (exports) {
  var cclegacy, GameTool, singleton;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameTool = module.GameTool;
    }, function (module) {
      singleton = module.singleton;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e46a5HbGu1PJKZ8TW/r7qD2", "PlayerInventoryService", undefined);
      /**
       * Service that manages the player's inventory of tools and items.
       * This service tracks the quantities of different tools the player has,
       * handles tool usage, and notifies observers of inventory changes.
       */
      var PlayerInventoryService = exports('PlayerInventoryService', (_dec = singleton(), _dec(_class = /*#__PURE__*/function () {
        function PlayerInventoryService() {
          /** Map storing the quantity of each tool type */
          this._items = new Map();
          /** Set of observers to notify of inventory changes */
          this._observers = new Set();
          this._items.set(GameTool.BOMB_1, 10);
          this._items.set(GameTool.BOMB_2, 5);
        }

        /**
         * Adds an observer to be notified of inventory changes.
         * @param observer The observer to add
         */
        var _proto = PlayerInventoryService.prototype;
        _proto.addObserver = function addObserver(observer) {
          this._observers.add(observer);
          this._items.forEach(function (amount, tool) {
            observer.onInventoryChanged(tool, amount);
          });
        }

        /**
         * Removes an observer from the notification list.
         * @param observer The observer to remove
         */;
        _proto.removeObserver = function removeObserver(observer) {
          this._observers["delete"](observer);
        }

        /**
         * Gets the amount of a specific tool in the inventory.
         * @param tool The tool to check
         * @returns The quantity of the tool
         */;
        _proto.getAmount = function getAmount(tool) {
          return this._items.get(tool) || 0;
        }

        /**
         * Sets the amount of a specific tool in the inventory.
         * @param tool The tool to set
         * @param amount The new amount
         */;
        _proto.setAmount = function setAmount(tool, amount) {
          this._items.set(tool, amount);
          this.notifyObservers(tool, amount);
        }

        /**
         * Adds a specified amount of a tool to the inventory.
         * @param tool The tool to add
         * @param amount The amount to add
         */;
        _proto.addAmount = function addAmount(tool, amount) {
          var currentAmount = this.getAmount(tool);
          this.setAmount(tool, currentAmount + amount);
        }

        /**
         * Removes a specified amount of a tool from the inventory.
         * @param tool The tool to remove
         * @param amount The amount to remove
         * @returns True if the removal was successful, false if not enough tools
         */;
        _proto.removeAmount = function removeAmount(tool, amount) {
          var currentAmount = this.getAmount(tool);
          if (currentAmount >= amount) {
            this.setAmount(tool, currentAmount - amount);
            return true;
          }
          return false;
        }

        /**
         * Notifies all observers that a tool's amount has changed.
         * @param tool The tool that changed
         * @param amount The new amount
         */;
        _proto.notifyObservers = function notifyObservers(tool, amount) {
          this._observers.forEach(function (observer) {
            observer.onInventoryChanged(tool, amount);
          });
        };
        return PlayerInventoryService;
      }()) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Row1RocketActivated.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "81165tLPbBLRJXnxcQYb/3F", "Row1RocketActivated", undefined);
      /**
       * Represents the state when a single-row rocket booster is activated.
       * This booster clears all items in a single row of the game field.
       */
      var Row1RocketActivated = exports('Row1RocketActivated', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(Row1RocketActivated, _BaseState);
        function Row1RocketActivated() {
          return _BaseState.call(this, Row1RocketActivated.STATE_NAME) || this;
        }

        /**
         * Handles entering the row rocket activation state.
         * Collects all items in the selected row for removal.
         * @param context - The game context
         */
        var _proto = Row1RocketActivated.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var items, cluster, selectedRow, i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  items = context.items;
                  cluster = [];
                  selectedRow = context.selectedItem.position.y;
                  for (i = 0; i < items.length; i++) {
                    if (items[i][selectedRow]) {
                      cluster.push(items[i][selectedRow]);
                    }
                  }
                  context.currentCluster = cluster;
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return Row1RocketActivated;
      }(BaseState));
      Row1RocketActivated.STATE_NAME = 'Row1RocketActivated';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Row2RocketActivated.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseState.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, BaseState;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseState = module.BaseState;
    }],
    execute: function () {
      cclegacy._RF.push({}, "98a07oqtrVN/Jf50JZlcsyF", "Row2RocketActivated", undefined);
      /**
       * Represents the state when a double-row rocket booster is activated.
       * This booster clears all items in two adjacent rows of the game field.
       */
      var Row2RocketActivated = exports('Row2RocketActivated', /*#__PURE__*/function (_BaseState) {
        _inheritsLoose(Row2RocketActivated, _BaseState);
        function Row2RocketActivated() {
          return _BaseState.call(this, Row2RocketActivated.STATE_NAME) || this;
        }

        /**
         * Handles entering the double-row rocket activation state.
         * Collects all items in the selected row and an adjacent row for removal.
         * @param context - The game context
         */
        var _proto = Row2RocketActivated.prototype;
        _proto.onEnter = /*#__PURE__*/
        function () {
          var _onEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
            var items, cluster, selectedRow, i, j;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  items = context.items;
                  cluster = [];
                  selectedRow = context.selectedItem.position.y;
                  for (i = 0; i < items.length; i++) {
                    for (j = Math.max(0, selectedRow - 1); j <= Math.min(selectedRow + 1, items[i].length - 1); j++) {
                      if (items[i][j]) {
                        cluster.push(items[i][j]);
                      }
                    }
                  }
                  context.currentCluster = cluster;
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function onEnter(_x) {
            return _onEnter.apply(this, arguments);
          }
          return onEnter;
        }();
        return Row2RocketActivated;
      }(BaseState));
      Row2RocketActivated.STATE_NAME = 'Row2RocketActivated';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SelectedItemData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "74718TJY/RFEpisMyYdIq9Q", "SelectedItemData", undefined);
      /**
       * @file SelectedItemData.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-05
       */
      /**
       * Represents data about a selected item in the game field.
       * This class encapsulates information about an item that has been selected
       * by the player, including its position and properties.
       */
      var SelectedItemData = exports('SelectedItemData', /*#__PURE__*/function () {
        function SelectedItemData() {
          /** The position of the selected item in the grid */
          this._position = null;
          /** Reference to the actual game field item */
          this._item = null;
        }
        _createClass(SelectedItemData, [{
          key: "position",
          get:
          /**
           * Gets the position of the selected item.
           */
          function get() {
            return this._position;
          }

          /**
           * Sets the position of the selected item.
           */,
          set: function set(value) {
            this._position = value;
          }

          /**
           * Gets the game field item reference.
           */
        }, {
          key: "item",
          get: function get() {
            return this._item;
          }

          /**
           * Sets the game field item reference.
           */,
          set: function set(value) {
            this._item = value;
          }
        }]);
        return SelectedItemData;
      }());
      /** Event name for when an item is selected */
      SelectedItemData.SELECTED_EVENT = 'game-item-selected';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/singleton.ts", ['cc', './injectable.ts', './dependency-injection.ts'], function (exports) {
  var cclegacy, injectable, classMap;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      injectable = module.injectable;
    }, function (module) {
      classMap = module.classMap;
    }],
    execute: function () {
      exports('singleton', singleton);
      cclegacy._RF.push({}, "8ac08EEguhNxYRLAGreVS9f", "singleton", undefined);
      /**
       * Class decorator factory that registers the class as a singleton within
       * the global container.
       *
       * @return {Function} The class decorator
       */
      function singleton() {
        return function (target) {
          injectable()(target);
          classMap.get(target).asSingleton();
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimeoutUtils.ts", ['cc'], function (exports) {
  var cclegacy, tween;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b4ccc2GSfBK261SrMwSFB5e", "TimeoutUtils", undefined);
      var TimeoutUtils = exports('TimeoutUtils', /*#__PURE__*/function () {
        function TimeoutUtils() {}
        TimeoutUtils.wait = function wait(timeOut) {
          return new Promise(function (resolve) {
            TimeoutUtils.setTimeout(function () {
              resolve();
            }, timeOut);
          });
        };
        TimeoutUtils.setTimeout = function setTimeout(handler, timeout) {
          for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }
          var id = this.getId();
          var move = tween({
            time: 0
          }).by(timeout / 1000, {
            time: 100
          });
          var checkEnd = tween().call(function () {
            handler(args);
          });
          move.then(checkEnd).start();
          this.timers[id] = move;
          return id;
        };
        TimeoutUtils.isActive = function isActive(id) {
          return this.timers[id] !== undefined;
        };
        TimeoutUtils.clearTimeout = function clearTimeout(id) {
          this.clearById(id);
        };
        TimeoutUtils.setInterval = function setInterval(handler, timeout) {
          var id = this.getId();
          for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          var move = this.getIntervalTween(timeout, handler, id, args);
          this.timers[id] = move;
          return id;
        };
        TimeoutUtils.clearInterval = function clearInterval(id) {
          this.clearById(id);
        };
        TimeoutUtils.clearById = function clearById(id) {
          if (isNaN(id)) {
            console.warn("TimeoutUtils: check timeout/interval id. id = " + id);
            return;
          }
          var tl = this.timers[id];
          if (tl) {
            tl.stop();
            delete this.timers[id];
          }
        };
        TimeoutUtils.getId = function getId() {
          // (Number as any) is used to prevent failing of compiler,
          // take into account, that is Number.MAX_SAFE_INTEGER returns undefined,
          // and the next Math.pow result will be taken
          this.maxInteger = this.maxInteger || Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;
          if (this.lastId >= this.maxInteger - 1) {
            this.lastId = 0;
          }
          return ++this.lastId;
        };
        TimeoutUtils.getIntervalTween = function getIntervalTween(timeout, handler, timerId, args) {
          var _this = this;
          var move = tween({
            time: 0
          }).by(timeout / 1000, {
            time: 100
          });
          var checkEnd = tween().call(function () {
            handler(args);
            if (_this.timers[timerId]) {
              TimeoutUtils.getIntervalTween(timeout, handler, timerId, args);
              _this.timers[timerId] = move;
            }
          });
          move.then(checkEnd).start();
          return move;
        };
        return TimeoutUtils;
      }());
      TimeoutUtils.lastId = 0;
      TimeoutUtils.maxInteger = void 0;
      TimeoutUtils.timers = {};
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToolController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameContext.ts', './inject.ts', './EnumGameTool.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component, GameContext, inject, GameTool;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      GameContext = module.GameContext;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      GameTool = module.GameTool;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "d086d78lytCurMoYzS8TZaN", "ToolController", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * Component responsible for managing tool selection and control in the game.
       * This class handles the interaction between UI tool buttons and the game context,
       * managing tool selection, deselection, and tool-specific actions.
       */
      var ToolController = exports('ToolController', (_dec = ccclass('ToolController'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ToolController, _Component);
        function ToolController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** Reference to the game context for tool state management */
          _this._gameContext = inject(GameContext);
          return _this;
        }
        var _proto = ToolController.prototype;
        /**
         * Handles the click event for the regular bomb tool.
         * Selects or deselects the bomb tool based on current state.
         */
        _proto.onBombClick = function onBombClick() {
          this._gameContext.currentTool = this._gameContext.currentTool == GameTool.BOMB_1 ? GameTool.SELECTOR : GameTool.BOMB_1;
        }

        /**
         * Handles the click event for the big bomb tool.
         * Selects or deselects the big bomb tool based on current state.
         */;
        _proto.onBigBombClick = function onBigBombClick() {
          this._gameContext.currentTool = this._gameContext.currentTool == GameTool.BOMB_2 ? GameTool.SELECTOR : GameTool.BOMB_2;
        };
        return ToolController;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToolSelector.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './inject.ts', './EnumGameTool.ts', './PlayerInventoryService.ts', './ToolToggleButton.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, inject, GameTool, PlayerInventoryService, ToolToggleButton;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      GameTool = module.GameTool;
    }, function (module) {
      PlayerInventoryService = module.PlayerInventoryService;
    }, function (module) {
      ToolToggleButton = module.ToolToggleButton;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a9a04N4X/5F1qbrI9sG9Tex", "ToolSelector", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Component that manages the tool selection interface.
       * This component handles the selection and switching between different game tools,
       * maintaining the current tool state and notifying observers of changes.
       */
      var ToolSelector = exports('ToolSelector', (_dec = ccclass('ToolSelector'), _dec2 = property({
        type: ToolToggleButton,
        tooltip: 'Bomb button',
        visible: true
      }), _dec3 = property({
        type: ToolToggleButton,
        tooltip: 'Big bomb button',
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ToolSelector, _Component);
        function ToolSelector() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._inventory = inject(PlayerInventoryService);
          _initializerDefineProperty(_this, "_bombToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_bigBombToggle", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ToolSelector.prototype;
        /**
         * Called when the component starts.
         * Initializes the tool selector and sets up observers.
         */
        _proto.start = function start() {
          this._inventory.addObserver(this);
        }

        /**
         * Called when the player's inventory changes.
         * Updates the tool toggle buttons to reflect the new inventory state.
         * @param tool The tool that changed in the inventory
         * @param amount The new amount of the tool in the inventory
         */;
        _proto.onInventoryChanged = function onInventoryChanged(tool, amount) {
          if (tool === GameTool.BOMB_1) {
            this._bombToggle.setText("" + amount);
          }
          if (tool === GameTool.BOMB_2) {
            this._bigBombToggle.setText("" + amount);
          }
        }

        /**
         * Called when the bomb toggle button is toggled.
         * Checks if there are enough bombs in the inventory and updates the toggle state accordingly.
         */;
        _proto.onBombToggled = function onBombToggled() {
          if (this._inventory.getAmount(GameTool.BOMB_1) <= 0) {
            console.error('Not enough bombs');
            this._bombToggle.isOn = false;
            return;
          }
        }

        /**
         * Called when the big bomb toggle button is toggled.
         * Checks if there are enough bombs in the inventory and updates the toggle state accordingly.
         */;
        _proto.onBigBombToggled = function onBigBombToggled() {
          if (this._inventory.getAmount(GameTool.BOMB_1) <= 0) {
            console.error('Not enough bombs');
            this._bombToggle.isOn = false;
            return;
          }
        }

        /**
         * Called when the tool changes in the game context.
         * Updates the toggle buttons to reflect the new tool state.
         * @param newTool The newly selected tool
         */;
        _proto.onToolChanged = function onToolChanged(newTool) {
          this._bombToggle.isOn = newTool == GameTool.BOMB_1;
          this._bigBombToggle.isOn = newTool == GameTool.BOMB_2;
        };
        return ToolSelector;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_bombToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_bigBombToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToolSwitcherButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameContext.ts', './inject.ts', './ToolToggleButton.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameContext, inject, ToolToggleButton;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameContext = module.GameContext;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      ToolToggleButton = module.ToolToggleButton;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "378ddbSiC1E7oZZmfBp10hJ", "ToolSwitcherButton", undefined);
      var ccclass = _decorator.ccclass;

      /**
       * Component that manages a button for switching between different game tools.
       * This component handles the display and interaction of tool selection buttons,
       * including updating counts and handling click events.
       */
      var ToolSwitcherButton = exports('ToolSwitcherButton', (_dec = ccclass('ToolSwitcherButton'), _dec(_class = /*#__PURE__*/function (_ToolToggleButton) {
        _inheritsLoose(ToolSwitcherButton, _ToolToggleButton);
        function ToolSwitcherButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ToolToggleButton.call.apply(_ToolToggleButton, [this].concat(args)) || this;
          /**
           * The game context associated with this button.
           */
          _this._context = inject(GameContext);
          return _this;
        }
        var _proto = ToolSwitcherButton.prototype;
        /**
         * Called when the component starts.
         * Initializes the button and sets up game context observer.
         */
        _proto.onLoad = function onLoad() {
          _ToolToggleButton.prototype.onLoad.call(this);
          this._context.addToolObserver(this);
        }

        /**
         * Called when the tool changes in the game context.
         * @param newTool The newly selected tool
         */;
        _proto.onToolChanged = function onToolChanged(newTool) {
          this.isOn = newTool == this.toggleValue();
        }

        /**
         * Returns the tool type associated with this button.
         * @returns The tool type
         */;
        _proto.toggleValue = function toggleValue() {
          throw new Error('Method not implemented.');
        };
        return ToolSwitcherButton;
      }(ToolToggleButton)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ToolToggleButton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameContext.ts', './inject.ts', './PlayerInventoryService.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, CCBoolean, Label, EventHandler, Node, Component, GameContext, inject, PlayerInventoryService;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      CCBoolean = module.CCBoolean;
      Label = module.Label;
      EventHandler = module.EventHandler;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GameContext = module.GameContext;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      PlayerInventoryService = module.PlayerInventoryService;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "c8967GXnGZJp7+x6bQoQxbN", "ToolToggleButton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * A toggle button component for switching between different game tools.
       * This component provides functionality for displaying the current tool state,
       * handling toggle events, and notifying observers of state changes.
       */
      var ToolToggleButton = exports('ToolToggleButton', (_dec = ccclass('ToggleButton'), _dec2 = property({
        type: Sprite,
        tooltip: 'Sprite to display when the toggle is in ON state'
      }), _dec3 = property({
        type: Sprite,
        tooltip: 'Sprite to display when the toggle is in OFF state'
      }), _dec4 = property({
        type: CCBoolean,
        tooltip: 'Current state of the toggle button (ON/OFF)'
      }), _dec5 = property({
        type: CCBoolean,
        tooltip: 'Whether the toggle button is enabled and can be interacted with'
      }), _dec6 = property({
        type: Label,
        tooltip: 'Label component for displaying the amount of available tools'
      }), _dec7 = property({
        tooltip: 'The type of tool this button controls',
        visible: true
      }), _dec8 = property({
        type: [EventHandler],
        tooltip: 'Event handlers to be called when the toggle state changes'
      }), _dec9 = property({
        type: [EventHandler],
        tooltip: 'Event handlers to be called when the enabled state changes'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ToolToggleButton, _Component);
        function ToolToggleButton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._gameContext = inject(GameContext);
          _this._playerInventory = inject(PlayerInventoryService);
          /**
           * The sprite to display when the toggle is ON.
           */
          _initializerDefineProperty(_this, "onSprite", _descriptor, _assertThisInitialized(_this));
          /**
           * The sprite to display when the toggle is OFF.
           */
          _initializerDefineProperty(_this, "offSprite", _descriptor2, _assertThisInitialized(_this));
          /**
           * The current state of the toggle.
           */
          _initializerDefineProperty(_this, "_isOn", _descriptor3, _assertThisInitialized(_this));
          /**
           * Whether the toggle is enabled or disabled.
           */
          _initializerDefineProperty(_this, "_isEnabled", _descriptor4, _assertThisInitialized(_this));
          /**
           * The text field to display the amount of boosters.
           */
          _initializerDefineProperty(_this, "label", _descriptor5, _assertThisInitialized(_this));
          /**
           * The tool associated with the toggle.
           */
          _initializerDefineProperty(_this, "_tool", _descriptor6, _assertThisInitialized(_this));
          /**
           * Event triggered when the toggle state changes.
           */
          _initializerDefineProperty(_this, "onToggleChanged", _descriptor7, _assertThisInitialized(_this));
          /**
           * Event triggered when the button is enabled or disabled.
           */
          _initializerDefineProperty(_this, "onEnabledChanged", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ToolToggleButton.prototype;
        /**
         * Sets the text displayed on the button.
         * @param text The text to display
         */
        _proto.setText = function setText(text) {
          if (this.label) {
            this.label.string = text;
          }
        }

        /**
         * Called when the game tool changes.
         * Updates the toggle state based on the new tool.
         * @param newTool The new game tool
         */;
        _proto.onToolChanged = function onToolChanged(newTool) {
          this._isOn = newTool == this._tool;
          this.updateVisuals();
        }

        /**
         * Gets the current toggle state.
         * @returns True if the button is toggled on, false otherwise
         */;
        /**
         * Called when the component loads.
         * Initializes the toggle button and sets up event listeners.
         */
        _proto.onLoad = function onLoad() {
          this._gameContext.addToolObserver(this);
          this._playerInventory.addObserver(this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.updateVisuals();
        }

        /**
         * Called when the component is destroyed.
         * Removes event listeners and cleans up resources.
         */;
        _proto.onDestroy = function onDestroy() {
          this._gameContext.removeToolObserver(this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        /**
         * Called when the button is touched.
         * Toggles the button state if it is enabled.
         */;
        _proto.onTouchEnd = function onTouchEnd() {
          if (this._isEnabled) {
            this.toggle();
          }
        }

        /**
         * Toggles the button state.
         */;
        _proto.toggle = function toggle() {
          this.isOn = !this._isOn;
        }

        /**
         * Updates the visual state of the button based on the current toggle state.
         */;
        _proto.updateVisuals = function updateVisuals() {
          if (this.onSprite && this.offSprite) {
            this.onSprite.node.active = this._isOn && this._isEnabled;
            this.offSprite.node.active = !this._isOn && this._isEnabled;
          }
        }

        /**
         * Notifies observers of a toggle state change.
         */;
        _proto.notifyToggleObservers = function notifyToggleObservers() {
          EventHandler.emitEvents(this.onToggleChanged, this, this._isOn);
        }

        /**
         * Called when the player's inventory changes.
         * Updates the button text if the changed tool matches the button's tool.
         * @param tool The changed tool
         * @param amount The new amount of the tool
         */;
        _proto.onInventoryChanged = function onInventoryChanged(tool, amount) {
          if (tool == this._tool) {
            this.setText(amount.toString());
          }
        };
        _createClass(ToolToggleButton, [{
          key: "isOn",
          get: function get() {
            return this._isOn;
          }

          /**
           * Sets the toggle state of the button.
           * @param value The new toggle state
           */,
          set: function set(value) {
            if (this._isOn !== value && this._isEnabled) {
              this._isOn = value;
              this.updateVisuals();
              this.notifyToggleObservers();
            }
          }

          /**
           * Gets whether the toggle is enabled or disabled.
           * @returns True if the button is enabled, false otherwise
           */
        }, {
          key: "isEnabled",
          get: function get() {
            return this._isEnabled;
          }
        }]);
        return ToolToggleButton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "onSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "offSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_isOn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_isEnabled", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_tool", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "onToggleChanged", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "onEnabledChanged", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Type.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "82d829Y5zBL6JOyii5iNjq2", "Type", undefined);
      /**
       * @file Type.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-02
       */
      //TODO: try to exclude constructor from abstract class generic
      // export type Abstract<T> = Function & { prototype: T };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIService.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './injectable.ts', './inject.ts', './LevelConfiguration.ts', './Paddings.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, UITransform, injectable, inject, LevelConfigurationService, Paddings;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
    }, function (module) {
      injectable = module.injectable;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      LevelConfigurationService = module.LevelConfigurationService;
    }, function (module) {
      Paddings = module.Paddings;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "5d23bXr6m9OWZ1z/6lY+EdH", "UIService", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Service responsible for managing UI elements and interactions.
       * This service handles the creation, display, and management of UI components
       * such as windows, popups, and other interface elements.
       */
      var UIService = exports('UIService', (_dec = injectable(), _dec2 = ccclass('UIService'), _dec(_class = _dec2(_class = /*#__PURE__*/function () {
        function UIService() {
          this.lvlConf = inject(LevelConfigurationService);
        }
        var _proto = UIService.prototype;
        /**
         * Resets the size of the given UI elements based on the level configuration and paddings.
         * @param scaleTargets The UI elements to reset the size for
         * @param paddings The paddings to apply to the UI elements
         */
        _proto.resetSize = /*#__PURE__*/
        function () {
          var _resetSize = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(scaleTargets, paddings) {
            var conf, pixelWidth, pixelHeight, i, target, targetTransform, totalWidth, totalHeight;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!scaleTargets || scaleTargets.length === 0)) {
                    _context.next = 2;
                    break;
                  }
                  return _context.abrupt("return");
                case 2:
                  conf = this.lvlConf;
                  pixelWidth = conf.width * conf.cellWidth;
                  pixelHeight = conf.height * conf.cellHeight;
                  if (paddings == null) {
                    paddings = new Paddings();
                  }
                  i = 0;
                case 7:
                  if (!(i < scaleTargets.length)) {
                    _context.next = 18;
                    break;
                  }
                  target = scaleTargets[i];
                  targetTransform = target.getComponent(UITransform);
                  if (!(targetTransform == null)) {
                    _context.next = 12;
                    break;
                  }
                  return _context.abrupt("continue", 15);
                case 12:
                  totalWidth = pixelWidth + (paddings ? paddings.right + paddings.left : 0);
                  totalHeight = pixelHeight + (paddings ? paddings.top + paddings.bottom : 0);
                  targetTransform.setContentSize(totalWidth, totalHeight);
                case 15:
                  i++;
                  _context.next = 7;
                  break;
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function resetSize(_x, _x2) {
            return _resetSize.apply(this, arguments);
          }
          return resetSize;
        }();
        return UIService;
      }()) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UniqueUtils.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bcf8aDZNAtM6JDzUYXUr9YD", "UniqueUtils", undefined);
      /**
       * @file UniqueUtils.ts
       * @author Anton Lapshin <anton@lapshin.dev>
       * @created 2024-12-02
       */

      var UniqueUtils = exports('UniqueUtils', /*#__PURE__*/function () {
        function UniqueUtils() {}
        UniqueUtils.getObjectUniqueId = function getObjectUniqueId(object) {
          if (!object.hasOwnProperty(UniqueUtils.UNIQUE_ID_PROP_NAME)) {
            UniqueUtils.prevGlobalUniqueId = UniqueUtils.globalUniqueId;
            UniqueUtils.globalUniqueId++;
            // An additional checking in case max number value limit is reached
            if (UniqueUtils.globalUniqueId === UniqueUtils.prevGlobalUniqueId) {
              UniqueUtils.globalUniqueId = 0;
            }
            object[UniqueUtils.UNIQUE_ID_PROP_NAME] = UniqueUtils.globalUniqueId.toString();
          }
          return object[UniqueUtils.UNIQUE_ID_PROP_NAME];
        };
        return UniqueUtils;
      }());
      UniqueUtils.UNIQUE_ID_PROP_NAME = "UniqueId";
      UniqueUtils.globalUniqueId = 0;
      UniqueUtils.prevGlobalUniqueId = 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserHud.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameContext.ts', './inject.ts', './LevelConfiguration.ts', './GameSM.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, ProgressBar, Node, Component, GameContext, inject, LevelConfigurationService, GameStateMachine;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GameContext = module.GameContext;
    }, function (module) {
      inject = module.inject;
    }, function (module) {
      LevelConfigurationService = module.LevelConfigurationService;
    }, function (module) {
      GameStateMachine = module.GameStateMachine;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "f4fe4EFozlFUKNqPagqFWBx", "UserHud", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /**
       * Component that manages the game's heads-up display (HUD).
       * This component displays and updates game information such as score,
       * remaining moves, progress bars, and game over states.
       */
      var UserHud = exports('UserHud', (_dec = ccclass('UserHud'), _dec2 = property({
        type: Label,
        tooltip: 'Label component for displaying the current game score'
      }), _dec3 = property({
        type: Label,
        tooltip: 'Label component for displaying the remaining moves'
      }), _dec4 = property({
        type: ProgressBar,
        tooltip: 'Progress bar component showing progress towards target score'
      }), _dec5 = property({
        type: Node,
        tooltip: 'Node containing the game over window UI'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UserHud, _Component);
        function UserHud() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /** Label displaying the current score */
          _initializerDefineProperty(_this, "scoreLabel", _descriptor, _assertThisInitialized(_this));
          /** Label displaying remaining moves */
          _initializerDefineProperty(_this, "movesLabel", _descriptor2, _assertThisInitialized(_this));
          /** Progress bar showing score progress */
          _initializerDefineProperty(_this, "scoreProgress", _descriptor3, _assertThisInitialized(_this));
          /** Window shown when game is over */
          _initializerDefineProperty(_this, "gameOverWindow", _descriptor4, _assertThisInitialized(_this));
          /** Reference to the game context */
          _this._context = inject(GameContext);
          /** Reference to the level configuration */
          _this._lvlConf = inject(LevelConfigurationService);
          /** Reference to the game state machine */
          _this._stateMachine = inject(GameStateMachine);
          return _this;
        }
        var _proto = UserHud.prototype;
        /**
         * Called when the component starts.
         * Initializes the HUD and sets up observers.
         */
        _proto.start = function start() {
          this._context.addObserver(this);
          this._stateMachine.addStateObserver(this);
          this.updateScore(0);
          this.updateMoves(0);
          if (this.gameOverWindow) {
            this.gameOverWindow.active = false;
          }
        }

        /**
         * Updates the score display.
         * @param score The new score value
         */;
        _proto.updateScore = function updateScore(score) {
          if (this.scoreLabel) {
            this.scoreLabel.string = score.toString();
          }
          if (this.scoreProgress) {
            this.scoreProgress.progress = score / this._lvlConf.targetScore;
          }
        }

        /**
         * Updates the moves display.
         * @param moves The new moves value
         */;
        _proto.updateMoves = function updateMoves(moves) {
          if (this.movesLabel) {
            this.movesLabel.string = moves + "/" + this._lvlConf.maxMoves;
          }
        }

        /**
         * Called when the game score changes.
         * @param newScore The new score value
         */;
        _proto.onScoreChanged = function onScoreChanged(newScore) {
          this.updateScore(newScore);
        }

        /**
         * Called when the number of moves changes.
         * @param newMoves The new moves value
         */;
        _proto.onMovesChanged = function onMovesChanged(newMoves) {
          this.updateMoves(newMoves);
        }

        /**
         * Called when the game state changes.
         * Shows the game over window when appropriate.
         * @param newState The new game state
         */;
        _proto.onStateChanged = function onStateChanged(newState) {
          if (newState === 'GameOver' && this.gameOverWindow) {
            this.gameOverWindow.active = true;
          }
        };
        return UserHud;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "movesLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scoreProgress", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameOverWindow", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map