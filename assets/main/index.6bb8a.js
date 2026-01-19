System.register("chunks:///_virtual/BtnClick.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "1601525IVFLOKGroBFvG89/", "BtnClick", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MyComponent = exports('MyComponent', (_dec = ccclass('MyComponent'), _dec2 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MyComponent, _Component);
        function MyComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 인스펙터에서 버튼 노드를 할당할 수 있도록 프로퍼티 추가
          _initializerDefineProperty(_this, "myButton", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MyComponent.prototype;
        _proto.onLoad = function onLoad() {
          if (this.myButton) {
            // 'click' 이벤트 리스너를 추가합니다. 
            // 두 번째 인자는 콜백 함수, 세 번째 인자는 this 바인딩을 위한 컨텍스트입니다.
            this.myButton.node.on(Button.EventType.CLICK, this.onButtonClick, this);
            // 또는 this.myButton.node.on('click', this.onButtonClick, this);
          }
        }

        // 버튼 클릭 시 호출될 콜백 함수
        ;

        _proto.onButtonClick = function onButtonClick(event) {
          // 이 함수가 호출되었다는 것은 버튼이 클릭되었음을 의미합니다.
          console.log("버튼이 클릭되었습니다!");
          // event.target을 사용하여 현재 클릭된 노드에 접근할 수 있습니다.
          console.log("클릭된 버튼의 노드 이름:", event.target.name);
        };
        _proto.onDestroy = function onDestroy() {
          // 컴포넌트가 파괴될 때 리스너를 제거하는 것이 좋습니다.
          if (this.myButton) {
            this.myButton.node.off(Button.EventType.CLICK, this.onButtonClick, this);
          }
        };
        return MyComponent;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "myButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildingChange.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "2367dRduiNK+qD3mTBZIMUi", "BuildingChange", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BuildingChange = exports('BuildingChange', (_dec = ccclass('BuildingChange'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BuildingChange, _Component);
        function BuildingChange() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "imageB", _descriptor, _assertThisInitialized(_this));
          // 공사 중 이미지
          _initializerDefineProperty(_this, "imageC", _descriptor2, _assertThisInitialized(_this));
          // 완성 이미지
          _initializerDefineProperty(_this, "buildTime", _descriptor3, _assertThisInitialized(_this));
          // 기다릴 시간 (초)
          _this.sprite = null;
          _this.isBuilding = false;
          return _this;
        }
        var _proto = BuildingChange.prototype;
        _proto.start = function start() {
          // 이 노드에 있는 Sprite 컴포넌트를 가져옵니다.
          this.sprite = this.getComponent(Sprite);
        }

        // 클릭했을 때 실행될 함수
        ;

        _proto.onBuildingClick = function onBuildingClick() {
          var _this2 = this;
          if (this.isBuilding) return; // 이미 공사 중이면 중복 클릭 방지

          this.isBuilding = true;

          // 1. 이미지 B(공사중)로 교체
          if (this.imageB) {
            this.sprite.spriteFrame = this.imageB;
          }

          // 2. 일정 시간(buildTime)이 지난 후 이미지 C로 교체
          this.scheduleOnce(function () {
            if (_this2.imageC) {
              _this2.sprite.spriteFrame = _this2.imageC;
            }
            console.log("건물 완성!");
          }, this.buildTime);
        };
        return BuildingChange;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "imageB", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imageC", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "buildTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BuildingManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PopupControl.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, ProgressBar, Node, Label, Vec3, Sprite, tween, Component, PopupControl;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      ProgressBar = module.ProgressBar;
      Node = module.Node;
      Label = module.Label;
      Vec3 = module.Vec3;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      PopupControl = module.PopupControl;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "12085slTaVHBJRp94adPKPx", "BuildingManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BuildingManager = exports('BuildingManager', (_dec = ccclass('BuildingManager'), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(ProgressBar), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property([SpriteFrame]), _dec8 = property(Label), _dec9 = property(PopupControl), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BuildingManager, _Component);
        function BuildingManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "imageB", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imageC", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "progressBar", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "subButtons", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "guideText", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upgradeImages", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelLabel", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "upgradePopup", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buildTime", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "levelUpInterval", _descriptor10, _assertThisInitialized(_this));
          _this.sprite = null;
          _this.isBuilding = false;
          _this.isCompleted = false;
          _this.timer = 0;
          _this.originalScale = new Vec3(1, 1, 1);
          _this.SEMI_TRANSPARENT = 150;
          _this.OPAQUE = 255;
          _this.levelTimer = 0;
          _this.currentLevel = 1;
          return _this;
        }
        var _proto = BuildingManager.prototype;
        _proto.start = function start() {
          this.sprite = this.getComponent(Sprite);
          this.originalScale = this.node.scale.clone();
          this.playFloatingAnimation();
          this.setSpriteAlpha(this.SEMI_TRANSPARENT);
          if (this.progressBar) this.progressBar.node.active = false;
          this.subButtons.forEach(function (btn) {
            return btn.active = false;
          });
          if (this.levelLabel) this.levelLabel.string = "Lv. " + this.currentLevel;

          // 이벤트 등록
          this.node.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
          this.node.on(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
        };
        _proto.setSpriteAlpha = function setSpriteAlpha(alpha) {
          if (!this.sprite) return;
          var color = this.sprite.color.clone();
          color.a = alpha;
          this.sprite.color = color;
        };
        _proto.playFloatingAnimation = function playFloatingAnimation() {
          if (!this.guideText) return;
          var startPos = this.guideText.position.clone();
          var upPos = new Vec3(startPos.x, startPos.y + 10, startPos.z);
          tween(this.guideText).repeatForever(tween().to(1, {
            position: upPos
          }, {
            easing: 'sineInOut'
          }).to(1, {
            position: startPos
          }, {
            easing: 'sineInOut'
          })).start();
        };
        _proto.onMouseEnter = function onMouseEnter() {
          if (!this.node || !this.node.isValid || this.isCompleted || this.isBuilding) return;
          this.setSpriteAlpha(this.OPAQUE);
          tween(this.node).to(0.1, {
            scale: new Vec3(this.originalScale.x * 1.1, this.originalScale.y * 1.1, 1)
          }).start();
        };
        _proto.onMouseLeave = function onMouseLeave() {
          if (!this.node || !this.node.isValid || this.isCompleted || this.isBuilding) return;
          this.setSpriteAlpha(this.SEMI_TRANSPARENT);
          tween(this.node).to(0.1, {
            scale: this.originalScale
          }).start();
        }

        // 마우스 상태 강제 초기화 (에러 방지 핵심)
        ;

        _proto.forceResetMouseState = function forceResetMouseState() {
          tween(this.node).stop(); // 진행 중인 모든 애니메이션 중지
          this.node.scale = this.originalScale.clone();
        };
        _proto.onBuildingClick = function onBuildingClick() {
          if (this.guideText && this.guideText.active) {
            this.guideText.active = false;
          }
          if (this.isCompleted) {
            this.playClickAnimation();
            this.showSubButtons();
            return;
          }
          if (this.isBuilding) return;

          // 공사 시작 로직 정리
          this.forceResetMouseState();
          this.isBuilding = true;
          this.setSpriteAlpha(this.OPAQUE);
          this.timer = 0;
          if (this.imageB) this.sprite.spriteFrame = this.imageB;
          if (this.progressBar) {
            this.progressBar.node.active = true;
            this.progressBar.progress = 0;
          }
        };
        _proto.playClickAnimation = function playClickAnimation() {
          this.forceResetMouseState();
          tween(this.node).to(0.05, {
            scale: new Vec3(this.originalScale.x * 1.2, this.originalScale.y * 1.2, 1)
          }).to(0.05, {
            scale: this.originalScale
          }).start();
        };
        _proto.update = function update(dt) {
          if (this.isBuilding) {
            this.timer += dt;
            if (this.progressBar) this.progressBar.progress = this.timer / this.buildTime;
            if (this.timer >= this.buildTime) {
              this.finishBuilding();
            }
          } else if (this.isCompleted) {
            if (this.currentLevel % 10 === 0) return;
            this.levelTimer += dt;
            if (this.levelTimer >= this.levelUpInterval) {
              this.levelTimer = 0;
              this.currentLevel++;
              this.updateLevelUI();
              if (this.currentLevel % 10 === 0) {
                this.showUpgradePopup();
              }
            }
          }
        };
        _proto.updateLevelUI = function updateLevelUI() {
          if (this.levelLabel) {
            this.levelLabel.string = "Lv. " + this.currentLevel;
            tween(this.levelLabel.node).to(0.1, {
              scale: new Vec3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: new Vec3(1, 1, 1)
            }).start();
          }
        };
        _proto.showUpgradePopup = function showUpgradePopup() {
          if (this.upgradePopup) {
            this.forceResetMouseState();
            this.upgradePopup.open();
          }
        };
        _proto.onUpgradeConfirm = function onUpgradeConfirm() {
          if (this.upgradePopup) this.upgradePopup.close();
          this.isBuilding = true;
          this.isCompleted = false;
          this.timer = 0;
          if (this.imageB) this.sprite.spriteFrame = this.imageB;
          if (this.progressBar) {
            this.progressBar.node.active = true;
            this.progressBar.progress = 0;
          }
        };
        _proto.finishBuilding = function finishBuilding() {
          this.isBuilding = false;
          this.isCompleted = true;
          this.forceResetMouseState();
          this.setSpriteAlpha(this.OPAQUE);
          this.applyUpgradedImage();
          if (this.progressBar) this.progressBar.node.active = false;
        };
        _proto.applyUpgradedImage = function applyUpgradedImage() {
          if (this.currentLevel >= 20 && this.upgradeImages[1]) {
            this.sprite.spriteFrame = this.upgradeImages[1];
          } else if (this.currentLevel >= 10 && this.upgradeImages[0]) {
            this.sprite.spriteFrame = this.upgradeImages[0];
          } else {
            this.sprite.spriteFrame = this.imageC;
          }
        };
        _proto.showSubButtons = function showSubButtons() {
          var isCurrentlyActive = this.subButtons.length > 0 && this.subButtons[0].active;
          this.subButtons.forEach(function (btn) {
            if (!isCurrentlyActive) {
              btn.active = true;
              btn.scale = new Vec3(0, 0, 0);
              tween(btn).to(0.2, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: 'backOut'
              }).start();
            } else {
              tween(btn).to(0.1, {
                scale: new Vec3(0, 0, 0)
              }).call(function () {
                btn.active = false;
              }).start();
            }
          });
        };
        _proto.onDisable = function onDisable() {
          this.node.targetOff(this);
        };
        return BuildingManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "imageB", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imageC", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "subButtons", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "guideText", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "upgradeImages", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "upgradePopup", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "buildTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3.0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "levelUpInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraMovement.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Vec3, input, Input, EventMouse, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Vec3 = module.Vec3;
      input = module.input;
      Input = module.Input;
      EventMouse = module.EventMouse;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a4f8cY9DURKDI/MQNb2/ofV", "CameraMovement", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CameraMovement = exports('CameraMovement', (_dec = ccclass('CameraMovement'), _dec2 = property(Camera), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraMovement, _Component);
        function CameraMovement() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cameraComponent", _descriptor, _assertThisInitialized(_this));
          // 인스펙터에서 메인 카메라를 연결해주세요.
          _this._isDragging = false;
          _this._lastMousePosition = new Vec3();
          _this._tempVec3 = new Vec3();
          return _this;
        }
        var _proto = CameraMovement.prototype;
        _proto.onLoad = function onLoad() {
          if (!this.cameraComponent) {
            console.error("Camera component not assigned!");
            return;
          }
          // 전역 마우스 이벤트 리스너 등록
          input.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onDestroy = function onDestroy() {
          // 이벤트 리스너 해제
          input.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          input.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        };
        _proto.onMouseDown = function onMouseDown(event) {
          console.log("Hello, Cocos Creator!");
          if (event.getButton() === EventMouse.BUTTON_LEFT) {
            // 왼쪽 마우스 버튼 클릭 확인
            this._isDragging = true;
            // 현재 마우스 위치 저장
            this._lastMousePosition.set(event.getLocationX(), event.getLocationY(), 0);
          }
        };
        _proto.onMouseMove = function onMouseMove(event) {
          if (this._isDragging) {
            var currentMousePosition = new Vec3(event.getLocationX(), event.getLocationY(), 0);

            // 이전 위치와 현재 위치의 차이(델타) 계산
            Vec3.subtract(this._tempVec3, currentMousePosition, this._lastMousePosition);

            // 2D 게임의 경우, 카메라를 반대 방향으로 이동시켜 화면을 패닝합니다.
            // 3D의 경우, 카메라 이동 로직이 더 복잡해질 수 있습니다.
            // 현재 카메라 위치 가져오기
            var cameraNode = this.cameraComponent.node;
            var currentCameraPos = cameraNode.getPosition();

            // 델타만큼 카메라 위치 이동 (드래그 방향의 반대로)
            cameraNode.setPosition(currentCameraPos.x - this._tempVec3.x, currentCameraPos.y - this._tempVec3.y, currentCameraPos.z);

            // 마지막 마우스 위치 업데이트
            this._lastMousePosition.set(currentMousePosition);
          }
        };
        _proto.onMouseUp = function onMouseUp(event) {
          if (event.getButton() === EventMouse.BUTTON_LEFT) {
            this._isDragging = false;
          }
        };
        return CameraMovement;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraComponent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraZoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "30f55OG8RJCcbpv83bFW5Db", "CameraZoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CameraZoom = exports('CameraZoom', (_dec = ccclass('CameraZoom'), _dec2 = property({
        type: Camera
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraZoom, _Component);
        function CameraZoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 씬의 메인 카메라를 연결할 속성
          _initializerDefineProperty(_this, "mainCamera", _descriptor, _assertThisInitialized(_this));
          // 확대될 orthoSize 값 (작을수록 확대)
          _this.zoomedOrthoSize = 100;
          // 기본 orthoSize 값 (클수록 축소)
          _this.defaultOrthoSize = 300;
          // 필요에 따라 기본값 조정
          // 줌 애니메이션 시간
          _this.zoomDuration = 0.3;
          return _this;
        }
        var _proto = CameraZoom.prototype;
        _proto.start = function start() {
          if (!this.mainCamera) {
            console.error("Main camera not assigned!");
            return;
          }
          // 초기 orthoSize 설정 (에디터에서 설정할 수도 있습니다)
          this.mainCamera.orthoSize = this.defaultOrthoSize;
        }

        // 확대 버튼 클릭 시 호출될 함수
        ;

        _proto.onZoomInButtonClick = function onZoomInButtonClick() {
          console.log("버튼이 클릭되었습니다!");
          this.zoomTo(this.zoomedOrthoSize);
        }

        // 축소 버튼 클릭 시 호출될 함수
        ;

        _proto.onZoomOutButtonClick = function onZoomOutButtonClick() {
          this.zoomTo(this.defaultOrthoSize);
        }

        // 지정된 orthoSize로 부드럽게 줌 변경
        ;

        _proto.zoomTo = function zoomTo(targetOrthoSize) {
          if (!this.mainCamera) return;

          // 현재 실행 중인 트윈(tween) 애니메이션 중지
          tween(this.mainCamera).stop().to(this.zoomDuration, {
            orthoSize: targetOrthoSize
          }, {
            easing: 'sineOutIn'
          }).start();
        };
        return CameraZoom;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CamerControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, input, Input, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      input = module.input;
      Input = module.Input;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "39b98xBrD5CXbnIzSld8Z2D", "CamerControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CamerControl = exports('CamerControl', (_dec = ccclass('CamerControl'), _dec2 = property({
        type: Number
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CamerControl, _Component);
        function CamerControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 에디터에서 설정할 이동 속도 (원하는 속도로 조정하세요)
          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));
          _this._cameraPos = new Vec3();
          _this._startTouchPos = new Vec3();
          _this._tempPos = new Vec3();
          return _this;
        }
        var _proto = CamerControl.prototype;
        _proto.onLoad = function onLoad() {
          // 전역 입력 이벤트 리스너 등록
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        };
        _proto.onDestroy = function onDestroy() {
          // 이벤트 리스너 해제
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        };
        _proto.onTouchStart = function onTouchStart(event) {
          // 터치 시작 위치 저장
          this._startTouchPos.set(event.getLocationX(), event.getLocationY(), 0);
          // 현재 카메라 위치 저장
          this.node.getPosition(this._cameraPos);
        };
        _proto.onTouchMove = function onTouchMove(event) {
          // 현재 터치 위치 가져오기
          var currentLocation = event.getLocation();
          this._tempPos.set(currentLocation.x, currentLocation.y, 0);

          // 이전 프레임의 위치와 현재 위치 차이 (드래그 방향 및 거리)
          // 화면 좌표계와 게임 월드 좌표계의 이동 방향은 반대일 수 있습니다.
          var deltaX = this._tempPos.x - this._startTouchPos.x;
          var deltaY = this._tempPos.y - this._startTouchPos.y;

          // 이동 속도를 적용하여 카메라의 새 위치 계산
          // 2D 게임의 경우, x와 y 축만 고려하면 됩니다.
          // 3D 게임의 경우, 카메라의 방향 벡터를 고려해야 할 수 있습니다.
          var newPosX = this._cameraPos.x - deltaX * this.moveSpeed;
          var newPosY = this._cameraPos.y - deltaY * this.moveSpeed;

          // 카메라 위치 업데이트
          this.node.setPosition(newPosX, newPosY, this._cameraPos.z);
        };
        _proto.onTouchEnd = function onTouchEnd(event) {
          // 터치가 끝났을 때 필요한 정리 작업 수행 (선택 사항)
        };
        return CamerControl;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DragMovement.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Input, v3, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Input = module.Input;
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "dc7005Px3xJ9YPYZG2eYHBm", "DragMovement", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DragMovement = exports('DragMovement', (_dec = ccclass('DragMovement'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DragMovement, _Component);
        function DragMovement() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isDragging = false;
          _this._offset = v3();
          return _this;
        }
        var _proto = DragMovement.prototype;
        // 드래그 시작 시 마우스 위치와 노드 위치 간의 오프셋
        _proto.onLoad = function onLoad() {
          // PC 환경을 위한 마우스 이벤트 리스너 등록
          this.node.on(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          this.node.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          this.node.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          this.node.on(Input.EventType.MOUSE_LEAVE, this.onMouseUp, this); // 노드 영역을 벗어났을 때 드래그 중지

          // 모바일 환경을 위한 터치 이벤트 리스너 등록 (Cocos Creator 3.x 기준)
          this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.onDestroy = function onDestroy() {
          // 이벤트 리스너 해제 (메모리 누수 방지)
          this.node.off(Input.EventType.MOUSE_DOWN, this.onMouseDown, this);
          this.node.off(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
          this.node.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
          this.node.off(Input.EventType.MOUSE_LEAVE, this.onMouseUp, this);
          this.node.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        };
        _proto.onMouseDown = function onMouseDown(event) {
          this._isDragging = true;
          // 마우스 위치를 UI 좌표계로 가져옵니다.
          var mouseLocation = event.getUILocation();
          var nodeLocation = this.node.worldPosition;

          // 오프셋 계산: 마우스 클릭 위치와 노드의 현재 위치 차이
          this._offset.x = nodeLocation.x - mouseLocation.x;
          this._offset.y = nodeLocation.y - mouseLocation.y;
          event.bubbles = false; // 이벤트가 다른 노드로 전달되지 않게 방지
        };

        _proto.onMouseMove = function onMouseMove(event) {
          if (this._isDragging) {
            var mouseLocation = event.getUILocation();
            // 오프셋을 적용하여 새 위치 계산
            var newPos = v3(mouseLocation.x + this._offset.x, mouseLocation.y + this._offset.y, 0);
            this.node.setWorldPosition(newPos);
          }
        };
        _proto.onMouseUp = function onMouseUp(event) {
          this._isDragging = false;
        }

        // 터치 이벤트 핸들러 (모바일 지원)
        ;

        _proto.onTouchStart = function onTouchStart(event) {
          this._isDragging = true;
          var touchLocation = event.getUILocation();
          var nodeLocation = this.node.worldPosition;
          this._offset.x = nodeLocation.x - touchLocation.x;
          this._offset.y = nodeLocation.y - touchLocation.y;
        };
        _proto.onTouchMove = function onTouchMove(event) {
          if (this._isDragging) {
            var touchLocation = event.getUILocation();
            var newPos = v3(touchLocation.x + this._offset.x, touchLocation.y + this._offset.y, 0);
            this.node.setWorldPosition(newPos);
          }
        };
        _proto.onTouchEnd = function onTouchEnd(event) {
          this._isDragging = false;
        };
        return DragMovement;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/IconControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BuildingManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, tween, Component, BuildingManager;
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
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      BuildingManager = module.BuildingManager;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "1d374Se7tBPopROJra44AmZ", "IconControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var IconControl = exports('IconControl', (_dec = ccclass('IconControl'), _dec2 = property(BuildingManager), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(IconControl, _Component);
        function IconControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "buildingMgr", _descriptor, _assertThisInitialized(_this));
          // 건물 관리자 연결
          _initializerDefineProperty(_this, "popupNode", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = IconControl.prototype;
        // 띄울 팝업창 연결
        //@property(PopupControl) // Node 대신 PopupControl 컴포넌트로 변경
        //public popupControl: PopupControl = null;
        _proto.onIconClick = function onIconClick() {
          // 1. 건물 관리자에게 아이콘들 숨기라고 명령

          if (this.buildingMgr) {
            this.buildingMgr.hideSubButtons();
          }

          // 2. 팝업창 띄우기 (애니메이션 효과 포함)
          if (this.popupNode) {
            this.popupNode.active = true;
            this.popupNode.scale = new Vec3(0, 0, 0);
            tween(this.popupNode).to(0.3, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
          }
          /*
          if (this.buildingMgr) this.buildingMgr.hideSubButtons();
             // 팝업 컨트롤러의 open 함수 호출
           if (this.popupControl) {
               this.popupControl.open();
           } */
        };

        return IconControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "buildingMgr", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "popupNode", [_dec3], {
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

System.register("chunks:///_virtual/ImageHoverScale.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec3, Node, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Node = module.Node;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "55825cl1zZIQo0X1i0aOvZy", "ImageHoverScale", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ImageHoverScale = exports('ImageHoverScale', (_dec = ccclass('ImageHoverScale'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ImageHoverScale, _Component);
        function ImageHoverScale() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "hoverScale", _descriptor, _assertThisInitialized(_this));
          // 마우스 올렸을 때 커질 비율
          _initializerDefineProperty(_this, "duration", _descriptor2, _assertThisInitialized(_this));
          // 애니메이션 속도
          _this.originalScale = new Vec3(1, 1, 1);
          return _this;
        }
        var _proto = ImageHoverScale.prototype;
        _proto.start = function start() {
          // 원래 스케일 저장
          this.originalScale = this.node.scale.clone();

          // 이벤트 등록
          this.node.on(Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
          this.node.on(Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
        };
        _proto.onMouseEnter = function onMouseEnter() {
          tween(this.node).to(this.duration, {
            scale: new Vec3(this.originalScale.x * this.hoverScale, this.originalScale.y * this.hoverScale, 1)
          }).start();
        };
        _proto.onMouseLeave = function onMouseLeave() {
          tween(this.node).to(this.duration, {
            scale: this.originalScale
          }).start();
        };
        return ImageHoverScale;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hoverScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "duration", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ImageSwitcher.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Component;
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
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "2e195kaN6ZK1Kxs5lySsbQ5", "ImageSwitcher", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ImageSwitcher = exports('ImageSwitcher', (_dec = ccclass('ImageSwitcher'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ImageSwitcher, _Component);
        function ImageSwitcher() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // Inspector에서 연결할 ImageA 노드 (클릭 대상)
          _initializerDefineProperty(_this, "imageA", _descriptor, _assertThisInitialized(_this));
          // Inspector에서 연결할 ImageB 노드 (보여질 이미지)
          _initializerDefineProperty(_this, "imageB", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ImageSwitcher.prototype;
        _proto.onLoad = function onLoad() {
          // ImageA 노드의 Button 컴포넌트에 클릭 이벤트 리스너를 추가합니다.
          var buttonA = this.imageA.getComponent(Button);
          if (buttonA) {
            buttonA.node.on(Button.EventType.CLICK, this.onImageAClick, this);
          }
        };
        _proto.onImageAClick = function onImageAClick() {
          // ImageA를 숨깁니다.
          this.imageA.active = false;

          // ImageB를 보이게 합니다.
          this.imageB.active = true;
        };
        return ImageSwitcher;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "imageA", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "imageB", [_dec3], {
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

System.register("chunks:///_virtual/main", ['./BtnClick.ts', './BuildingChange.ts', './BuildingManager.ts', './CamerControl.ts', './CameraMovement.ts', './CameraZoom.ts', './DragMovement.ts', './IconControl.ts', './ImageHoverScale.ts', './ImageSwitcher.ts', './PopupControl.ts', './SceneSwitcher.ts', './TitleScene.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopupControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, BlockInputEvents, Vec3, tween, Component;
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
      BlockInputEvents = module.BlockInputEvents;
      Vec3 = module.Vec3;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "deccevb6F5Iwri5eN8QRs4v", "PopupControl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopupControl = exports('PopupControl', (_dec = ccclass('PopupControl'), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PopupControl, _Component);
        function PopupControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "popupMain", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PopupControl.prototype;
        // 실제 팝업 창 (애니메이션 대상)
        _proto.start = function start() {
          // 팝업 뒤쪽의 클릭이 아래 건물로 전달되지 않도록 방지
          if (!this.getComponent(BlockInputEvents)) {
            this.addComponent(BlockInputEvents);
          }
        }

        // 팝업 열기 (외부에서 호출 가능)
        ;

        _proto.open = function open() {
          this.node.active = true;
          if (this.popupMain) {
            this.popupMain.scale = new Vec3(0.5, 0.5, 1); // 약간 작은 상태에서 시작
            this.popupMain.active = true;
            tween(this.popupMain).to(0.3, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: 'backOut'
            }).start();
          }
        }

        /*
        public close() {
        if (!this.node.active) return;
          if (this.popupMain) {
            tween(this.popupMain)
                .to(0.2, { scale: new Vec3(0.5, 0.5, 1) }, { easing: 'backIn' })
                .call(() => {
                    // 즉시 끄지 않고 다음 프레임에 끔으로써 엔진의 이벤트 처리를 보장
                    this.scheduleOnce(() => {
                        this.node.active = false;
                    }, 0);
                })
                .start();
        } else {
            this.node.active = false;
        }
        } */;
        _proto.close = function close() {
          var _this2 = this;
          if (!this.node.active) return;

          // [중요] 닫기 시작하자마자 이벤트를 차단하여 엔진이 더 이상 이 노드를 추적하지 않게 함
          var blocker = this.getComponent(BlockInputEvents);
          if (blocker) blocker.enabled = false;
          if (this.popupMain) {
            // 진행 중인 모든 애니메이션 중지
            tween(this.popupMain).stop();
            tween(this.popupMain).to(0.2, {
              scale: new Vec3(0.5, 0.5, 1)
            }, {
              easing: 'backIn'
            }).call(function () {
              _this2.scheduleOnce(function () {
                _this2.node.active = false;
                // 꺼진 후에 다시 블로커를 켜두어야 다음에 열 때 정상 작동함
                if (blocker) blocker.enabled = true;
              }, 0);
            }).start();
          } else {
            this.node.active = false;
          }
        };
        _proto.onDisable = function onDisable() {
          this.node.targetOff(this);
        };
        return PopupControl;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "popupMain", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneSwitcher.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "bcc3cmx6cNMIrqVJVCHU2O9", "SceneSwitcher", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SceneSwitcher = exports('SceneSwitcher', (_dec = ccclass('SceneSwitcher'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SceneSwitcher, _Component);
        function SceneSwitcher() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = SceneSwitcher.prototype;
        // 이 함수가 버튼 클릭 시 호출됩니다.
        _proto.loadNextScene = function loadNextScene() {
          // 'GameScene'이라는 이름의 씬을 불러옵니다.
          // 실제 씬 이름으로 변경하세요.
          director.loadScene('main');
        };
        return SceneSwitcher;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TitleScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function () {
  var _inheritsLoose, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b21b4VlInFGHZUiBR2P9ftG", "TitleScene", undefined);
      // TitleScene.ts
      var TitleScene = /*#__PURE__*/function (_cc$Scene) {
        _inheritsLoose(TitleScene, _cc$Scene);
        function TitleScene() {
          return _cc$Scene.apply(this, arguments) || this;
        }
        var _proto = TitleScene.prototype;
        // TitleScene 인스턴스가 화면에 진입할 때 호출됩니다.
        _proto.onEnter = function onEnter() {
          _cc$Scene.prototype.onEnter.call(this);

          // TitleLayer 인스턴스 생성 및 Scene에 추가
          var layer = new TitleLayer();
          this.addChild(layer);
        };
        return TitleScene;
      }(cc.Scene);
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