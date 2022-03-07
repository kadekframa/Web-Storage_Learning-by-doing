
const localStorageKey = "Press_Tetap_Semangat";

// pengecekan apaka data localStorage denngan key count tersedia atau belum.
if(typeof(Storage) !== "undefined"){
    // jika item pada local storage belum ada, maka akan diberi nilai awal yaitu 0.
    if(localStorage.getItem(localStorageKey) === null){
        localStorage.setItem(localStorageKey, 0);
    }

    const incrementButton = document.querySelector("#incrementButton");
    const clearButton = document.querySelector("#clear");
    const countDisplay = document.querySelector("#count");

    // memberikan nilai item dari local storage.
    countDisplay.innerText = localStorage.getItem(localStorageKey);

    // menupdate nilai item local storage jika tombol button ditekan.
    incrementButton.addEventListener("click", function(){
        let count = localStorage.getItem(localStorageKey);
        count++;
        localStorage.setItem(localStorageKey, count);
        countDisplay.innerText = localStorage.getItem(localStorageKey);
    });

    // memberikan nilai 0 ke tampilan karena di reset dan menghapus item.
    clearButton.addEventListener("click", function(){
        localStorage.removeItem(localStorageKey);
        countDisplay.innerText = 0;
    });

}else{
    alert("Browser yang Anda gunakan tidak mendukung Web Storage. Tetap Semangat !!!");
}