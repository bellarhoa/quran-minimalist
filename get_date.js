var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var newBulan = null;

switch (hari) {
  case 0:
    hari = "Minggu";
    break;
  case 1:
    hari = "Senin";
    break;
  case 2:
    hari = "Selasa";
    break;
  case 3:
    hari = "Rabu";
    break;
  case 4:
    hari = "Kamis";
    break;
  case 5:
    hari = "Jum'at";
    break;
  case 6:
    hari = "Sabtu";
    break;
}
switch (bulan) {
  case 0:
    newBulan = "Januari";
    break;
  case 1:
    newBulan = "Februari";
    break;
  case 2:
    newBulan = "Maret";
    break;
  case 3:
    newBulan = "April";
    break;
  case 4:
    newBulan = "Mei";
    break;
  case 5:
    newBulan = "Juni";
    break;
  case 6:
    newBulan = "Juli";
    break;
  case 7:
    newBulan = "Agustus";
    break;
  case 8:
    newBulan = "September";
    break;
  case 9:
    newBulan = "Oktober";
    break;
  case 10:
    newBulan = "November";
    break;
  case 11:
    newBulan = "Desember";
    break;
}
var tampilTanggal = hari + ", " + tanggal + " " + newBulan + " " + tahun;
document.getElementById("date-today").innerHTML = tampilTanggal;
