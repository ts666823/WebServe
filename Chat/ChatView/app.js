document.querySelector('.chat[data-chat=person2]').classList.add('active-chat')
document.querySelector('.person[data-chat=person2]').classList.add('active')

// 选择指定的聊天好友
let friends = {
        list: document.querySelector('ul.people'),
        all: document.querySelectorAll('.left .person'),
        name: ''
    },
    chat = {
        container: document.querySelector('.container .right'),
        current: null,
        person: null,
        name: document.querySelector('.container .right .top .name')
    },
    items = {
        list: document.querySelector('ul.items'),
        all: document.querySelectorAll('.item'),
        name: ''
    }



friends.all.forEach(f => {
    f.addEventListener('mousedown', () => {
        f.classList.contains('active') || setActiveChat(f)
    })
});

items.all.forEach(i => {
    i.addEventListener('mousedown', () => {
        i.classList.contains('item-active') || setActiveItem(i)
    })
})

$(".write-link.send").click(function() {
    var connectionStatus = navigator.onLine
    if (!connectionStatus) {
        // 消失
        var m = document.createElement('div');
        m.innerHTML = "当前网络未连接";
        m.style.cssText = "width:60%; min-width:180px; background:#000; opacity:0.6; height:auto;min-height: 30px; color:#fff; line-height:30px; text-align:center; border-radius:4px; position:fixed; top:60%; left:20%; z-index:999999;";
        document.body.appendChild(m);
        setTimeout(function() {
            var d = 1;
            m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
            m.style.opacity = '0';
            setTimeout(function() { document.body.removeChild(m) }, d);
        }, duration);
        return;
    }
    var msg_text_content = $('.msg').val() //document.querySelector('.msg').value;
    if (msg_text_content.length == 0) {
        return;
    }
    console.log(msg_text_content);
    sendMsg(msg_text_content);
    m
})

// 设置为当前联系好友
function setActiveChat(f) {
    // 寻找列表中active好友，移除
    friends.list.querySelector('.active').classList.remove('active')
        // 设置当前好友位活跃的
    f.classList.add('active')
    chat.current = chat.container.querySelector('.active-chat')
    chat.person = f.getAttribute('data-chat')
    chat.current.classList.remove('active-chat')
    chat.container.querySelector('[data-chat="' + chat.person + '"]').classList.add('active-chat')
    friends.name = f.querySelector('.name').innerText
    chat.name.innerHTML = friends.name
}

function setActiveItem(i) {
    items.list.querySelector('.item-active').classList.remove('item-active')
    i.classList.add('item-active')
}




function sendMsg(msg) {
    var msgHTML = '<div class="bubble me">' + msg + '</div>';
    console.log(msgHTML)
    f = friends.list.querySelector('.active')
    chat.person = f.getAttribute('data-chat')
    msglist = chat.container.querySelector('[data-chat="' + chat.person + '"]')
    console.log(msglist)
    msglist.innerHTML += msgHTML;

}

// function reciveMsg(msg) {
//     var msgHTML = '<div class="bubble you">' + msg + '</div>';
//     console.log(msgHTML)
//     f = friends.list.querySelector('.active')
//     chat.person = f.getAttribute('data-chat')
//     msglist = chat.container.querySelector('[data-chat="' + chat.person + '"]')
//     console.log(msglist)
//     msglist.innerHTML += msgHTML;
// }