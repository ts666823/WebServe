(function() {
    let chat = {
        CONNECT: 1,
        CHAT: 2,
        SIGNED: 3,
        KEEPALIVE: 4,
        PULL_FRIEND: 5,
        ChatMsg:function (senderId,reciverId,msg,msgId) {

        },
        socket: null,
        messageToSend: '',
        messageResponses: [
            'Why did the web developer leave the restaurant? Because of the table layout.',
            'How do you comfort a JavaScript bug? You console it.',
            'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
            'What is the most used language in programming? Profanity.',
            'What is the object-oriented way to become wealthy? Inheritance.',
            'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
        ],
        messageForResponse: '',
        render: function() {
            this.scrollToBottom();
            if (this.messageToSend.trim() !== '') {
                console.log(this.messageToSend)
                var template = Handlebars.compile($("#message-template").html());
                var context = {
                    messageOutput: this.messageToSend,
                    time: this.getCurrentTime()
                };

                this.$chatHistoryList.append(template(context));
                this.scrollToBottom();
                this.$textarea.val('');

                // responses
                // var templateResponse = Handlebars.compile($("#message-response-template").html()); 
                // console.log("接收到的消息：" + this.messageForResponse)
                // var contextResponse = {
                //     response: this.messageForResponse,
                //     time: this.getCurrentTime()
                // };

                // setTimeout(function() {
                //     this.$chatHistoryList.append(templateResponse(contextResponse));
                //     this.scrollToBottom();
                // }.bind(this), 1500);
            }
        },
        init: function() {
            this.cacheDOM();
            this.bindEvents();
            this.render();
            if (window.WebSocket) {
                // 如果当前已连接，无需重复初始化WebSocket
                if (this.socket != null && this.socket != undefined && this.socket.readyState == WebSocket.OPEN) {
                    return false;
                }
                this.socket = new WebSocket("ws://10.0.1.110:8888/ws")
                this.socket.onopen = this.wsopen
                this.socket.onclose = this.wsclose
                this.socket.onerror = this.wserror
                this.socket.onmessage = this.wsmessage
            } else {
                console.log("浏览器不支持websocket")
                return false;
            }
        },
        chatMsg: function(e) {
            this.socket.send(e);
        },
        wsopen: function() {
            console.log("webSocket 已连接")
        },
        wsclose: function() {
            console.log("webSocket 已连接")
        },
        wserror: function() {
            console.log("webSocket 已连接")
        },
        wsmessage: function(e) {
            chat.messageForResponse = e.data;
            var templateResponse = Handlebars.compile($("#message-response-template").html());
            console.log("接收到的消息：" + chat.messageForResponse)
            var contextResponse = {
                response: chat.messageForResponse,
                time: chat.getCurrentTime()
            };
            chat.$chatHistoryList.append(templateResponse(contextResponse));
            chat.scrollToBottom();
        },
        cacheDOM: function() {
            this.$chatHistory = $('.chat-history');
            this.$button = $('button');
            this.$textarea = $('#message-to-send');
            this.$chatHistoryList = this.$chatHistory.find('ul');
        },
        bindEvents: function() {
            this.$button.on('click', this.addMessage.bind(this));
            this.$textarea.on('keyup', this.addMessageEnter.bind(this));
        },
        addMessage: function() {
            this.messageToSend = this.$textarea.val()
            this.chatMsg(chat.messageToSend)
            this.render()
        },
        addMessageEnter: function(event) {
            // enter was pressed
            if (event.keyCode === 13) {
                this.addMessage();
            }
        },
        scrollToBottom: function() {
            this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
        },
        getCurrentTime: function() {
            return new Date().toLocaleTimeString().
            replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
        },
        getRandomItem: function(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

    };

    chat.init();

    let searchFilter = {
        options: { valueNames: ['name'] },
        init: function() {
            var userList = new List('people-list', this.options);
            var noItems = $('<li id="no-items-found">No items found</li>');

            userList.on('updated', function(list) {
                if (list.matchingItems.length === 0) {
                    $(list.list).append(noItems);
                } else {
                    noItems.detach();
                }
            });
        }
    };

    searchFilter.init();

    let menu = {
        init: function () {
            items = {
                list: document.querySelector('ul.items'),
                all: document.querySelectorAll('.item'),
                name: ''
            }
            items.all.forEach(i => {
                i.addEventListener('mousedown', () => {
                    i.classList.contains('item-active') || this.setActiveItem(i)
                })
            })
        },
        setActiveItem: function (i) {
            items.list.querySelector('.item-active').classList.remove('item-active')
            i.classList.add('item-active')
        }
    };

    menu.init()

})();