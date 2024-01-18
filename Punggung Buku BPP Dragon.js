function hitungPunggungBukuBPPDRAGON() {
  var jumlahHalamanBPPDRAGON = parseInt(document.getElementById("jumlahHalamanBPPDRAGON").value);
  var hasil;

  if (jumlahHalamanBPPDRAGON >= 0 && jumlahHalamanBPPDRAGON <= 50) {
    hasil = jumlahHalamanBPPDRAGON * 0.058;
  } else if (jumlahHalamanBPPDRAGON >= 51 && jumlahHalamanBPPDRAGON <= 220) {
    hasil = jumlahHalamanBPPDRAGON * 0.055;
  } else if (jumlahHalamanBPPDRAGON >= 221 && jumlahHalamanBPPDRAGON <= 250) {
    hasil = jumlahHalamanBPPDRAGON * 0.05;
  } else if (jumlahHalamanBPPDRAGON >= 251 && jumlahHalamanBPPDRAGON <= 325) {
    hasil = jumlahHalamanBPPDRAGON * 0.051;
  } else if (jumlahHalamanBPPDRAGON >= 326 && jumlahHalamanBPPDRAGON <= 470) {
    hasil = jumlahHalamanBPPDRAGON * 0.05;
  } else if (jumlahHalamanBPPDRAGON >= 471 && jumlahHalamanBPPDRAGON <= 525) {
    hasil = jumlahHalamanBPPDRAGON * 0.051;
  } else if (jumlahHalamanBPPDRAGON >= 526 && jumlahHalamanBPPDRAGON <= 575) {
    hasil = jumlahHalamanBPPDRAGON * 0.0527;
  } else if (jumlahHalamanBPPDRAGON >= 576 && jumlahHalamanBPPDRAGON <= 625) {
    hasil = jumlahHalamanBPPDRAGON * 0.05416;
  } else if (jumlahHalamanBPPDRAGON >= 626 && jumlahHalamanBPPDRAGON <= 675) {
    hasil = jumlahHalamanBPPDRAGON * 0.05384;
  } else if (jumlahHalamanBPPDRAGON >= 676 && jumlahHalamanBPPDRAGON <= 725) {
    hasil = jumlahHalamanBPPDRAGON * 0.05428;
  } else if (jumlahHalamanBPPDRAGON >= 726 && jumlahHalamanBPPDRAGON <= 775) {
    hasil = jumlahHalamanBPPDRAGON * 0.0546;
  } else if (jumlahHalamanBPPDRAGON >= 776 && jumlahHalamanBPPDRAGON <= 825) {
    hasil = jumlahHalamanBPPDRAGON * 0.053875;
  } else if (jumlahHalamanBPPDRAGON >= 826 && jumlahHalamanBPPDRAGON <= 875) {
    hasil = jumlahHalamanBPPDRAGON * 0.05352;
  } else if (jumlahHalamanBPPDRAGON >= 876 && jumlahHalamanBPPDRAGON <= 925) {
    hasil = jumlahHalamanBPPDRAGON * 0.05388;
  } else if (jumlahHalamanBPPDRAGON >= 926 && jumlahHalamanBPPDRAGON <= 975) {
    hasil = jumlahHalamanBPPDRAGON * 0.05263;
  } else if (jumlahHalamanBPPDRAGON >= 976 && jumlahHalamanBPPDRAGON <= 1525) {
    hasil = jumlahHalamanBPPDRAGON * 0.054;
  } else {
    // Menampilkan pesan jika jumlah halaman tidak sesuai dengan kriteria yang diberikan
    document.getElementById("hasilPunggungBukuBPPDRAGON").innerHTML = "Jumlah halaman tidak valid.";
    return;
  }

  document.getElementById("hasilPunggungBukuBPPDRAGON").innerHTML = "Lebar Punggung Buku: " + hasil + " mm";
}
