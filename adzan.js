getAdzan();
function getAdzan(idCity) {
  if (idCity == null) {
    getAdzan(1301);
  }
  fetch(
    "https://api.myquran.com/v1/sholat/jadwal/" +
      idCity +
      "/" +
      tahun +
      "/" +
      bulan +
      "/" +
      tanggal
  )
    .then((response) => response.json())
    .then((data) => {
      var item = data.data;
      if (item.lokasi != null) {
        var dataKota = item.lokasi + ", " + item.daerah + ", Indonesia";
      }
      document.getElementById("city").innerHTML = dataKota.toLowerCase();
      var jadwal = item.jadwal;
      document.getElementById("subuh").innerHTML = jadwal.subuh;
      document.getElementById("dzuhur").innerHTML = jadwal.dzuhur;
      document.getElementById("ashar").innerHTML = jadwal.ashar;
      document.getElementById("maghrib").innerHTML = jadwal.maghrib;
      document.getElementById("isya").innerHTML = jadwal.isya;
    })
    .catch((e) => {
      console.log("Error Fetch Adzan: " + e);
    });
}

var modalCity = document.getElementById("modal-city");
var btnCity = document.getElementById("city");
var spanCity = document.getElementById("close-city");

btnCity.onclick = function () {
  fetch("https://api.myquran.com/v1/sholat/kota/semua")
    .then((response) => response.json())
    .then((data) => {
      var item = "";
      for (var i = 0; i < data.length; i++) {
        if (data[i].lokasi != null) {
          item +=
            `<option value="` +
            data[i].id +
            `">` +
            data[i].lokasi +
            `</option>`;
        }
      }
      cityForm.innerHTML = item;
    })
    .catch((e) => {
      console.log("Error Fetch All City for Adzan: " + e);
    });
  modalCity.style.display = "block";
};
spanCity.onclick = function () {
  modalCity.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modalCity) {
    modalCity.style.display = "none";
  }
};

var cityForm = document.getElementById("city-form");
cityForm.addEventListener("change", updateValue);
function updateValue() {
  console.log(cityForm.value);
  getAdzan(cityForm.value);
}
