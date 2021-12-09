var profilePicture1 = (document.querySelector(".profile-picture1").src =
    "https://pa1.narvii.com/8125/35b2e23c4b3ea48e4e7a262aae61c840b01aea4fr1-640-432_hq.gif");

var student1 = {
    nickName: "IU",
    fullName: "Lee Ji-Eun",
    class: "Singer"
};

var profilePicture2 = (document.querySelector(".profile-picture2").src =
    "http://pm1.narvii.com/7499/b7cb95f2c542efacaf9ceb86c5affb30940c19b9r1-564-752v2_uhq.jpg");

var student2 = {
    nickName: "Sana",
    fullName: "Sana Minatozaki",
    class: "singer"
};

var profilePicture3 = (document.querySelector(".profile-picture3").src =
    "https://media.giphy.com/media/HLZwXYMcJgoLSM8Deq/giphy.gif");

var student3 = {
    nickName: "Jisoo",
    fullName: "Kim Jisoo",
    class: "Singer"
};

document.querySelector(".nickname1").innerHTML = student1.nickName;
document.querySelector(".fullname1").innerHTML = student1.fullName;
document.querySelector(".class1").innerHTML = student1.class;

document.querySelector(".nickname2").innerHTML = student2.nickName;
document.querySelector(".fullname2").innerHTML = student2.fullName;
document.querySelector(".class2").innerHTML = student2.class;

document.querySelector(".nickname3").innerHTML = student3.nickName;
document.querySelector(".fullname3").innerHTML = student3.fullName;
document.querySelector(".class3").innerHTML = student3.class;

