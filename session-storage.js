
const sessionStorageKey = "Press_Session_Semangat";

if(typeof(Storage) !== "undefined"){
    // Jika item pada session storage belum ada, maka akan diatur dengan nilai awal yakni 0.
    if(sessionStorage.getItem(sessionStorageKey) === null){
        sessionStorage.setItem(sessionStorageKey, 0);
    }

    const incrementButton = document.querySelector("#incrementButton");     // mendapatkan element HTML dengan menggunakan DOM.
    const clearButton = document.querySelector("#clear");
    const countDisplay = document.querySelector("#count");

    // memberikan nilai item dari session storage.
    countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);

    // men-update nilai dari item session storage jika button ditekan.
    incrementButton.addEventListener("click", function(){
        let count = sessionStorage.getItem(sessionStorageKey);
        count++;
        sessionStorage.setItem(sessionStorageKey, count);
        countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
        
    });

    // memberikan nilai 0 ketika button reset atau hapus ditekan.
    clearButton.addEventListener("click", function(){
        sessionStorage.removeItem(sessionStorageKey);
    });

    countDisplay.innerText = 0;
}else{
    alert("Browser yang Anda gunakan belum mendukung fitur Web Storage. Tetap Semangat!!!");
}