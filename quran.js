fetch("https://al-quran-8d642.firebaseio.com/data.json?print=pretty")
  .then((response) => response.json())
  .then((data) => {
    var item = "";
    for (var i = 0; i < data.length; i++) {
      item +=
        `<div class="quran-surah" data-id="` +
        data[i].nomor +
        `">
                    <h4 class="surah-number">` +
        data[i].nomor +
        `</h4>
                    <h5 class="surah-name">` +
        data[i].nama +
        `</h5>
                    <h5 class="surah-define">` +
        data[i].arti +
        `</h5>
                </div>`;
    }
    document.getElementById("quran-list").innerHTML = item;
    var cards = document.querySelectorAll(".quran-surah");
    for (var j = 0; j < cards.length; j++) {
      var card = cards[j];
      card.onclick = function () {
        fetch(
          "https://al-quran-8d642.firebaseio.com/surat/" +
            this.getAttribute("data-id") +
            ".json?print=pretty"
        )
          .then((response) => response.json())
          .then((ayat) => {
            var element = "";
            element =
              `<h2 class="text-center">` +
              data[this.getAttribute("data-id") - 1].nama +
              `</h2>
                <h4 class="text-center">` +
              data[this.getAttribute("data-id") - 1].ayat +
              ` Ayat</h4>
                <br>`;
            for (var k = 0; k < ayat.length; k++) {
              element +=
                `<div class="ayat d-flex">
                    <h4 class="ayat-number">` +
                ayat[k].nomor +
                `</h4>
                    <div class="d-block">
                        <h1 class="ayat-ar">` +
                ayat[k].ar +
                `</h1>
                        <h5 class="ayat-tr text-weight-normal">` +
                ayat[k].tr +
                `</h5>
                        <h5 class="ayat-id">` +
                ayat[k].id +
                `</h5>
                    </div>
                </div>`;
            }
            document.getElementById("surah").innerHTML = element;
          })
          .catch((e) => {
            console.log("Error Fetch Ayat: " + e);
          });
        modal.style.display = "block";
      };
    }
  })
  .catch((e) => {
    console.log("Error Fetch Quran: " + e);
  });

var modal = document.getElementById("modal-surah");
var span = document.getElementById("close-surah");
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
