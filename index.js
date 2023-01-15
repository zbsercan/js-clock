let fullName = prompt ("Adınız nedir?")



let myName = document.querySelector ("#myName")
myName.innerHTML = `${fullName}`

    let tarih = new Date;
    saat = tarih.getHours();
    dakika = tarih.getMinutes();
    saniye = tarih.getSeconds();




let myClock = document.querySelector("#myClock")
myClock.innerHTML = `${saat} : ${dakika} : ${saniye}`
