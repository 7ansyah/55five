function verifikasiPassword() {
  var password = prompt("Masukkan kata sandi:");
  // Tambahkan logika untuk memverifikasi kata sandi di sini
  if (password === "juguagan") {
    alert("Verifikasi kata sandi berhasil!");
  } else {
    alert("Password salah. Mengalihkan ke halaman daftar 55five");
    window.location.href =
      "http://170.33.96.215:55/#/register?r_code=ClEgG1195363";
  }
}

function toggleText() {
    var text = document.getElementById("mytext");
    var toggleButton = document.getElementById("toggleButton");

    if (text.style.display === "none") {
        text.style.display = "block";
        toggleButton.innerHTML = "Sembunyikan";
       } else {
        text.style.display = "none";
        toggleButton.innerHTML = "Disclaimer";
        }
       }

    var data = [
      { sebelumnya: "KKKKK", prediksi_pasangan: "Bx1 Kx2 Kx5 Kx11 Bx23 Bx49", catatan: "Jika sudah tembus anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x210 atau pasang kebalikan" },
      { sebelumnya: "BBBBB", prediksi_pasangan: "Kx1 Bx2 Bx5 Bx11 Kx23 Kx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x210 atau pasang kebalikan" },
      { sebelumnya: "KKKKB", prediksi_pasangan: "Kx1 Kx2 Bx5 Bx11 Bx23 Kx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "BBBBK", prediksi_pasangan: "Bx1 Bx2 Kx5 Kx11 Kx23 Bx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "KKKBB", prediksi_pasangan: "Kx1 Bx2 Bx5 Bx11 Kx23", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x49 atau pasang kebalikan" },
      { sebelumnya: "BBBKK", prediksi_pasangan: "Bx1 Kx2 Kx5 Kx11 Bx23", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x49 atau pasang kebalikan" },
      { sebelumnya: "KKKBK", prediksi_pasangan: "Bx1 Bx2 Kx5 Kx11 Kx23 Bx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "BBBKB", prediksi_pasangan: "Kx1 Kx2 Bx5 Bx11 Bx23 Kx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "KKBKK", prediksi_pasangan: "Bx1 Kx2 Kx5 Kx11 Bx23 Bx49 Bx102", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x210 atau pasang kebalikan" },
      { sebelumnya: "BBKBB", prediksi_pasangan: "Kx1 Bx2 Bx5 Bx11 Kx23 Kx49 Kx102", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x210 atau pasang kebalikan" },
      { sebelumnya: "KKBBK", prediksi_pasangan: "Bx1 Bx2 Kx5 Kx11 Kx23 Bx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "BBKKB", prediksi_pasangan: "Kx1 Kx2 Bx5 Bx11 Bx23 Kx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "KKBBB", prediksi_pasangan: "Bx1 Bx2 Bx5 Kx11 Kx23", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x49 atau pasang kebalikan" },
      { sebelumnya: "BBKKK", prediksi_pasangan: "Kx1 Kx2 Kx5 Bx11 Bx23", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x49 atau pasang kebalikan" },
      { sebelumnya: "KKBKB", prediksi_pasangan: "Kx1 Kx2 Bx5 Bx11 Bx23 Kx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x210 atau pasang kebalikan" },
      { sebelumnya: "BBKBK", prediksi_pasangan: "Bx1 Bx2 Kx5 Kx11 Kx23 Bx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x210 atau pasang kebalikan" },
      { sebelumnya: "KBKKK", prediksi_pasangan: "Bx1 Kx2 Kx5 Kx11 Bx23", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x49 atau pasang kebalikan" },
      { sebelumnya: "BKBBB", prediksi_pasangan: "Kx1 Bx2 Bx5 Bx11 Kx23", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x49 atau pasang kebalikan" },
      { sebelumnya: "KBBKK", prediksi_pasangan: "Bx1 Kx2 Kx5 Kx11 Bx23", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x49 atau pasang kebalikan" },
      { sebelumnya: "BKKBB", prediksi_pasangan: "Kx1 Bx2 Bx5 Bx11 Kx23", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x49 atau pasang kebalikan" },
      { sebelumnya: "KBBBK", prediksi_pasangan: "Bx1 Kx2 Kx5 Kx11 Bx23", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x49 atau pasang kebalikan" },
      { sebelumnya: "BKKKB", prediksi_pasangan: "Kx1 Bx2 Bx5 Bx11 Kx23", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x49 atau pasang kebalikan" },
      { sebelumnya: "KBBBB", prediksi_pasangan: "Kx1 Bx2 Bx5 Bx11 Kx23 Kx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "BKKKK", prediksi_pasangan: "Bx1 Kx2 Kx5 Kx11 Bx23 Bx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "KBKBB", prediksi_pasangan: "Kx1 Bx2 Bx5 Bx11 Kx23 Kx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "BKBKK", prediksi_pasangan: "Bx1 Kx2 Kx5 Kx11 Bx23 Bx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "KBKBK", prediksi_pasangan: "Bx1 Bx2 Kx5 Kx11 Kx23 Bx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "BKBKB", prediksi_pasangan: "Kx1 Kx2 Bx5 Bx11 Bx23 Kx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "KBBKB", prediksi_pasangan: "Kx1 Kx2 Bx5 Bx11 Bx23 Kx49 Kx102", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x210 atau pasang kebalikan" },
      { sebelumnya: "BKKBK", prediksi_pasangan: "Bx1 Bx2 Kx5 Kx11 Kx23 Bx49 Bx102", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x210 atau pasang kebalikan" },
      { sebelumnya: "KBKKB", prediksi_pasangan: "Kx1 Kx2 Bx5 Bx11 Bx23 Kx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
      { sebelumnya: "BKBBK", prediksi_pasangan: "Bx1 Bx2 Kx5 Kx11 Kx23 Bx49", catatan: "Jika sudah profit anda bisa melanjutkan prediksi ini atau memprediksi ulang, terjauh pernah di x102 atau pasang kebalikan" },
    ];

function cariData() {
  var kataKunci = document.getElementById("kataKunci").value.toLowerCase();

  var hasilPencarian = data.filter(function (item) {
    return item.sebelumnya.toLowerCase() === kataKunci;
  });

  var container = document.getElementById("hasilPencarian");
  container.innerHTML = "";

  hasilPencarian.forEach(function (item) {
    var div = document.createElement("div");
    var table = document.createElement("table");

    var row1 = document.createElement("tr");
    var th1 = document.createElement("th");
    th1.innerText = "Sebelumnya";
    var td1 = document.createElement("td");
    td1.innerText = item.sebelumnya;
    row1.appendChild(th1);
    row1.appendChild(td1);

    var row2 = document.createElement("tr");
    var th2 = document.createElement("th");
    th2.innerText = "Prediksi Pasangan";
    var td2 = document.createElement("td");
    td2.innerText = item.prediksi_pasangan;
    row2.appendChild(th2);
    row2.appendChild(td2);

    var row3 = document.createElement("tr");
    var th3 = document.createElement("th");
    th3.innerText = "Catatan";
    var td3 = document.createElement("td");
    td3.innerText = item.catatan;
    row3.appendChild(th3);
    row3.appendChild(td3);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);
    div.appendChild(table);
    container.appendChild(div);
  });
}
