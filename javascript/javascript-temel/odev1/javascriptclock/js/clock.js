// Prompt function

function getName() {
    let name = prompt("Lütfen isminizi girin:","Kodluyoruz Öğrencisi");
    document.getElementById("myName").innerHTML = name;
}

function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let d = date.getDay()

    // Day of the week
    switch(d) {
        case 0:
            d = "Pazar";
            break;
        case 1:
            d = "Pazartesi";
            break;
        case 2:
            d = "Salı";
            break;
        case 3:
            d = "Çarşamba";
            break;
        case 4:
            d = "Perşembe";
            break;
        case 5:
            d = "Cuma";
            break;
        case 6:
            d = "Cumartesi";
            break;
    }

    // Time Formatted
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("myClock").innerHTML = `${h}:${m}:${s} ${d}`;

    setTimeout(showTime, 1000);
}