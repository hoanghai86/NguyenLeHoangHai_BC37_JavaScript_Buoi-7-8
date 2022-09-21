var arr = [-2, -5, -3, -7, 9, 11, 2, 6, 4, 8, 10, 10, -8, -10]; //mảng số nguyên

//tạo 1 mảng số nguyên do người dùng nhập vào
function inputNumArray() {
  var number = +document.getElementById("inputNumArray").value;
  arr.push(number);
  document.getElementById("outputNumArray").innerHTML = arr;
}

/*******************************************BÀI 1: TỔNG CÁC SỐ DƯƠNG TRONG MẢNG********************************************** */
function ex1() {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  document.getElementById("list-ex1").innerHTML = "Tổng số dương: " + sum;
}

/*******************************************BÀI 2: ĐẾM CÁC SỐ DƯƠNG TRONG MẢNG********************************************** */
/**Cách làm: tạo 1 biến đếm Count, mặc định đầu tiên cho nó bằng 0
 * Duyệt các phần tử trong mảng arr, nếu phần tử nào lớn hơn 0 thì ta cộng biến count lên 1
 */
function ex2() {
  var count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += 1;
    }
  }
  document.getElementById("list-ex2").innerHTML = "Số lượng số dương: " + count;
}

/*******************************************BÀI 3: TÌM SỐ NHỎ NHẤT TRONG MẢNG********************************************** */
/**Cách làm: sử dụng hàm sort để sắp xếp
 * Số đầu tiên trong mảng là số nhỏ nhất
 */
function ex3() {
  arr.sort(function (a, b) {
    return a - b;
  }); // hàm sort là hàm sắp xếp number từ nhỏ tới lớn có sẵn trong javascripts
  var min = arr[0]; //phần tử đầu tiên trong mảng đã được sắp xếp từ nhỏ tới lớn luôn là phần tử nhỏ nhất
  document.getElementById("list-ex3").innerHTML =
    "Số nhỏ nhất trong mảng: " + min;
}

/*******************************************BÀI 4: TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG********************************************** */
/**Cách làm: tạo 1 mảng rỗng arrPositive, kiểm tra từng số trong mảng arr, nếu số nào dương thì bỏ vô mảng này
 * Sau đó sắp xếp mảng này theo thứ tự từ nhỏ tới lớn
 * Số đầu tiên trong mảng là số dương nhỏ nhất
 */
function ex4() {
  var arrPositive = []; //tạo 1 mảng số dương rỗng, sau đó kiểm tra từng số trong mảng arr, nếu số nào dương thì bỏ vào mảng này
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arrPositive.push(arr[i]); //bỏ số dương vào mảng arrPositive
    }
  }
  // hàm sort là hàm sắp xếp number từ nhỏ tới lớn có sẵn trong javascripts
  arrPositive.sort(function (a, b) {
    return a - b;
  });
  var min = arrPositive[0]; //phần tử đầu tiên trong mảng số dương đã được sắp xếp từ nhỏ tới lớn luôn là phần tử nhỏ nhất
  document.getElementById("list-ex4").innerHTML =
    "Số dương nhỏ nhất trong mảng: " + min;
}

/**********************BÀI 5: TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG, NẾU MẢNG KHÔNG CÓ GIÁ TRỊ CHẴN THÌ TRẢ VỀ -1 ********************* */
/**Cách làm: tạo 1 mảng rỗng arrEvenNumber, kiểm tra từng số trong mảng arr, số nào chẵn thì bỏ vào mảng này
 * Sau đó kiểm tra mảng này có rỗng không bằng cách kiểm tra độ dài của nó, nếu = 0 thì mảng này rỗng
 * Nếu không rỗng thì sắp xếp mảng từ lớn tới bé
 * Số đầu tiên là số cuối cùng trong mảng, hoặc có thể gọi nó là số chẵn lớn nhất
 */
function ex5() {
  var arrEvenNumber = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arrEvenNumber.push(arr[i]);
    }
  }
  //kiểm tra mảng arrEvenNumber có rỗng hay không
  if (arrEvenNumber.length === 0) {
    arrEvenNumber = [-1];
    document.getElementById("list-ex5").innerHTML = arrEvenNumber;
    return;
  }
  //hàm có sẵn trong Javascripts để sắp xếp từ lớn tới nhỏ
  else
    arrEvenNumber = arrEvenNumber.sort(function (a, b) {
      return b - a;
    });
  //só đứng đầu tiên là số chẵn lớn nhất
  var max = arrEvenNumber[0];
  document.getElementById("list-ex5").innerHTML =
    "Số chẵn cuối cùng trong mảng: " + max;
}

/**********************BÀI 6: ĐỔI CHỖ 2 GIÁ TRỊ TRONG MẢNG THEO VỊ TRÍ (2 VỊ TRÍ DO NGƯỜI DÙNG NHẬP)********************** */
function ex6() {
  var pos1 = +document.getElementById("inputPosition1").value;
  var pos2 = +document.getElementById("inputPosition2").value;
  var arrtemp = [];
  arrtemp.push(arr[pos1]);
  arrtemp.push(arr[pos2]);
  arr.splice(pos2, 1, arrtemp[0]);
  arr.splice(pos1, 1, arrtemp[1]);

  document.getElementById("outputEx6").innerHTML = arr;
}

/**********************BÀI 7: SẮP XẾP MẢNG THEO GIÁ TRỊ TĂNG DẦN********************** */
function ex7() {
  arr.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("list-ex7").innerHTML = "Mảng tăng dần: " + arr;
}

/**********************BÀI 8: TÌM SỐ NGUYÊN TỐ ĐẦU TIÊN TRONG MẢNG. NẾU MẢNG KHÔNG CÓ SỐ NGUYÊN TỐ THÌ TRẢ VỀ -1********************** */
function checkPrimeNum(number) {
  var checkSNT = true;
  for (var i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      checkSNT = false;
      break;
    }
  }
  return checkSNT;
}

function ex8() {
  for (var i = 0; i < arr.length; i++) {
    var check = checkPrimeNum(arr[i]);
    if (check) {
      document.getElementById("list-ex8").innerHTML =
        "Số nguyên tố đầu tiên trong mảng: " + arr[i];
      return;
    } else
      document.getElementById("list-ex8").innerHTML =
        "Mảng không có số nguyên tố, kết quả: -1";
  }
}


/**********************BÀI 9: NHẬP THÊM 1 MẢNG SỐ THỰC, TÌM XEM TRONG MẢNG CÓ BAO NHIÊU SỐ NGUYÊN?********************** */
var arrRealNum = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2]; //mảng số thực

//tạo 1 mảng số thực do người dùng nhập vào
function inputArrayRealNum() {
  var number = +document.getElementById("inputArrayRealNum").value;
  arrRealNum.push(number);
  document.getElementById("outputArrayRealNum").innerHTML = arrRealNum;
}

function ex9() {
  var countEvenNum = 0;
  for (i = 0; i < arrRealNum.length; i++) {
    if (Math.floor(arrRealNum[i]) === arrRealNum[i]) {
      countEvenNum += 1;
    }
  }
  document.getElementById("outputEx9").innerHTML =
    "Đếm số nguyên: " + countEvenNum;
}

/**********************BÀI 10: SO SÁNH SỐ LƯỢNG SỐ DƯƠNG VÀ SỐ LƯỢNG SỐ ÂM XEM SỐ NÀO NHIỀU HƠN********************** */
function ex10() {
  var countNegativeNum = 0;
  var countPositiveNum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      countNegativeNum += 1;
    } else if (arr[i] > 0) {
      countPositiveNum += 1;
    }
  }
  if (countNegativeNum > countPositiveNum) {
    document.getElementById("list-ex10").innerHTML =
      "Số lượng số âm: " +
      countNegativeNum +
      " > " +
      "Số lượng số dương: " +
      countPositiveNum;
  } else if (countNegativeNum < countPositiveNum) {
    document.getElementById("list-ex10").innerHTML =
      "Số lượng số âm: " +
      countNegativeNum +
      " < " +
      "Số lượng số dương: " +
      countPositiveNum;
  } else
    document.getElementById("list-ex10").innerHTML =
      "Số lượng số âm: " +
      countNegativeNum +
      " = " +
      "Số lượng số dương: " +
      countPositiveNum;
}
