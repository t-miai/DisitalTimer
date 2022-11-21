function clock(){
    var data = new Date();

    var hours = data.getHours();
    var minutes = data.getMinutes();
    var seconds = data.getSeconds();

    var year = data.getFullYear();
    var month = data.getMonth();
    var hi = data.getDate();
    var youbi = data.getDay();
    const week = ["日","月","火","水","木","金","土"];
    var day = week[youbi];

    month = month < 10 ? "0" + month : month;
    hi = hi < 10 ? "0" + hi : hi;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var msg = hours + ":" + minutes + ":" + seconds;
    var msg2 = year + "年" + month + "月" + hi + "日" + day + "曜日";

    document.getElementById("Data_1").innerHTML = msg2;
    document.getElementById("PassageArea").innerHTML = msg;
}

setInterval(clock,1000);