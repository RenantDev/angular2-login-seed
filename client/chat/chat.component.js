System.register(['angular2/core', '@angular2-material/card', '@angular2-material/button', '../shared/services/user/user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, card_1, button_1, user_service_1;
    var ChatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            ChatComponent = (function () {
                function ChatComponent(_userService) {
                    this._userService = _userService;
                    this.messages = [];
                    this.socket = io();
                    // this.socket.on('messages', function(messages){
                    //   this.messages = messages;
                    // }.bind(this));
                    this.socket.on('new-message', function (messageInfo) {
                        if (this.messages.length > 8)
                            this.messages.shift();
                        this.messages.push(messageInfo);
                    }.bind(this));
                }
                ChatComponent.prototype.sendMessage = function () {
                    this.socket.emit('send-message', { "message": this.messageText, "userImage": this._userService.getMe().then(function (me) {
                        }) });
                    this.messageText = '';
                };
                ChatComponent = __decorate([
                    core_1.Component({
                        selector: 'chat',
                        templateUrl: 'client/chat/chat.component.html',
                        styleUrls: ['client/chat/chat.component.css'],
                        directives: [card_1.MD_CARD_DIRECTIVES, button_1.MdButton],
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], ChatComponent);
                return ChatComponent;
            }());
            exports_1("ChatComponent", ChatComponent);
        }
    }
});
//# sourceMappingURL=chat.component.js.map