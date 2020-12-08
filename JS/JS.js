// Hàm rút gọn cú pháp getID("")
function getID(id) {
  return document.getElementById(id);
}

console.log(
  "Bai 1____________________________________________________________________________________________"
);

/**Bài 1 - Quản lí tuyển sinh 
 * Input: diemChuan, diemMon1, diemMon2, diemMon3, khuVuc, doiTuong
 * Output: diemTongKet, ketQua
 diemTongKet = diemMon1 +diemMon2 +diemMon3 + khuVuc +doiTuong;
Condition: diemTongKet >= diemChuan, diemMon1>0, diemMon2>0, diemMon3 >0

 */

getID("btnManage").addEventListener("click", function () {
  var diemChuan = parseFloat(getID("diemChuan").value);
  var diemMon1 = parseFloat(getID("diemMon1").value);
  var diemMon2 = parseFloat(getID("diemMon2").value);
  var diemMon3 = parseFloat(getID("diemMon3").value);
  var khuVuc = getID("khuVuc").value;
  var doiTuong = getID("doiTuong").value;

  var regionBonus = xetKhuVuc(khuVuc);
  var object = xetDoiTuong(doiTuong);

  if (diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
    var diemTongKet = diemMon1 + diemMon2 + diemMon3 + regionBonus + object;

    if (diemTongKet >= diemChuan) {
      getID("txtDisp").innerHTML =
        "chúc mừng bạn đã trúng tuyển! " + "Điểm tổng kết là: " + diemTongKet;
    } else {
      getID("txtDisp").innerHTML = "rất tiếc, bạn đã không trúng tuyển..." + "Điểm tổng kết là: " + diemTongKet;
    }
  } else {
    getID("txtDisp").innerHTML = "bạn không trúng tuyển do có môn bằng 0";
  }
});

/**4 diem: parseFloat
 * Xet khuVuc:
 * neu A: +2, B: +1, C: +0.5, X: 0;
 * Xet doiTuong:
 * neu 1: +2.5, 2: +1.5, 3: +1;
 * Tinh diemTongket
 * so sanh diemTongKet vs diemChuan
 *
 * */
//Hàm tính điểm theo khu vực
function xetKhuVuc(khuVuc) {
  var regionBonus = 0;
  switch (khuVuc) {
    case (khuVuc = "A"):
      regionBonus = 2;
      break;
    case (khuVuc = "B"):
      regionBonus = 1;
      break;
    case (khuVuc = "C"):
      regionBonus = 0.5;
      break;
    case (khuVuc = "X"):
      regionBonus = 0;
    default:
      regionBonus = 0;
      console.log("khong co khu vuc phu hop");
  }
  return regionBonus;
}
//Hàm tính điểm theo đối tượng
function xetDoiTuong(doiTuong) {
  var object = 0;
  switch (doiTuong) {
    case (doiTuong = "1"):
      object = 2.5;
      break;
    case (doiTuong = "2"):
      object = 1.5;
      break;
    case (doiTuong = "3"):
      object = 1;
      break;
    case (doiTuong = "0"):
      object = 0;
      break;
    default:
      object = 0;
      console.log("khong thay doi tuong phu hop");
  }
  return object;
}

console.log(
  "Bai 2____________________________________________________________________________________________"
);

/**chương trình nhập thông tin tiêu thụ điện
 * Input: custName, powerUsage
 * Output: payment
 */

getID("btnCal").addEventListener("click", function () {
  var totalBill = ElectricBill();
  getID("txtDisp1").innerHTML =
    "Tổng tiền điện bạn cần phải trả là: " +
    totalBill.toLocaleString() +
    " VND";
});

//Hàm tính tiền điện
function ElectricBill() {
  const price1 = 500;
  const price2 = 650;
  const price3 = 850;
  const price4 = 1100;
  const price5 = 1300;
  var powerUsage = parseFloat(getID("powerUsage").value);
  var payment = 0;
  if (0 < powerUsage && powerUsage <= 50) {
    payment = price1 * powerUsage;
  } else if (50 < powerUsage && powerUsage <= 100) {
    payment = 50 * price1 + (powerUsage - 50) * price2;
  } else if (100 < powerUsage && powerUsage <= 200) {
    payment = 50 * price1 + 50 * price2 + (200 - powerUsage) * price3;
  } else if (200 < powerUsage && powerUsage <= 350) {
    payment =
      50 * price1 + 50 * price2 + 100 * price3 + (350 - powerUsage) * price4;
  } else if (350 < powerUsage) {
    payment =
      50 * price1 +
      50 * price2 +
      100 * price3 +
      150 * price4 +
      (powerUsage - 350) * price5;
  }
  return payment;
}
