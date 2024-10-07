// let N = 5;
// for (let i = 0; i < N; i++) {
//   let str = "";
//   for (let j = 0; j < N; j++) {
//     str += " *";
//   }
//   console.log(str);
// }
// let str = "";
// for (let i = 0; i < N; i++) {
//   console.log((str += "* "));
// }

// // num = 1;
// // demoStr = "";
// // for (let i = 0; i < N; i++) {
// //   console.log((demoStr += num));
// //   num++;
// // }

// // function patern() {
// //   num = 1;
// //   N = 5;
// //   for (let i = 0; i < N; i++) {
// //     str = "";
// //     for (let j = 0; j <= i; j++) {
// //       str += num;
// //     }
// //     num++;
// //     console.log(str);
// //   }
// // }
// // patern();
// num = 1;
// for (i = N; i > 0; i--) {
//   let str = "";

//   for (let j = 0; j < i; j++) {
//     str += num;
//   }
//   num++;
//   console.log(str);
// }

// for (let i = 0; i < N; i++) {
//   str = "";
//   for (let j = N - 1; j > i; j--) {
//     str += " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     str += "*";
//   }
//   if (i > 0) {
//     for (let k = 1; k <= i; k++) {
//       str += "*";
//     }
//   }
//   console.log(str);
// }

// for (let i = 0; i < N; i++) {
//   let str = "";
//   for (let j = 0; j < i; j++) {
//     str += " ";
//   }
//   for (let k = N; k > i; k--) {
//     str += "*";
//   }
//   for (let k = N - 1; k > i; k--) {
//     str += "*";
//   }
//   //   for(let)
//   console.log(str);
// }

// function Patternnew() {
//   let N = 5;
//   str = "";

//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j <= i; j++) {
//       str += "*";
//     }
//     str += "\n";
//   }

//   //   console.log(str);
//   for (let i = 0; i < N; i++) {
//     for (let j = N - 1; j > i; j--) {
//       str += "*";
//     }
//     str += "\n";
//   }

//   console.log(str);
// }
// Patternnew();
// let Mstr = "";
// let Mstr1 = "";
// for (let i = 0; i < N; i++) {
//   //   ch = 65;
//   for (let j = 0; j <= i; j++) {
//     Mstr += " " + String.fromCharCode(65 + j);
//   }
//   for (let j = N - 1; j > i; j--) {
//     Mstr += "  ";
//   }
//   for (let j = N - 1; j > i; j--) {
//     Mstr += "  ";
//   }
//   let ch = 65 + i;
//   console.log(ch);
//   for (let k = 0; k <= i; k++) {
//     Mstr += " " + String.fromCharCode(ch - k);
//   }
//   Mstr += "\n";
// }
// // for (let i = 0; i < N; i++) {
// //   //   ch = 65;
// //   for (let k = 0; k <= i; k++) {
// //     Mstr1 += String.fromCharCode(65 + k) + " ";
// //   }
// //   Mstr1 += "\n";
// // }
// console.log(Mstr + Mstr1);

// function remove(A) {
//   let newStr = "";
//   let count = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] == "(") {
//       if (count == 0) {
//         newStr += "(";
//       }
//       count++;
//     } else {
//       count--;
//       if (count == 0) {
//         newStr += ")";
//       }
//     }
//   }
//   console.log(newStr);
// }
// remove("((())()())");
// // function Paranthesis(A) {
// //   let result = "";
// //   let count = 0;
// //   for (let i = 0; i < A.length; i++) {
// //     if (A[i] == "(") {
// //       if (count > 0) {
// //         result += "(";
// //       }
// //       count++;
// //     } else {
// //       count--;
// //       if (count > 0) {
// //         result += ")";
// //       }
// //     }
// //   }
// //   console.log(result);
// // }
// // Paranthesis("(()(()())())");

// function LargestOddSubString() {
//   let s = "35427";
//   let newS = "";
//   let tempStr = "";
//   for (let i = 0; i < s.length; i++) {
//     if (parseInt(s[i]) % 2 !== 0) {
//       return s.substring(0, i + 1);
//       // } else {
//       //   if (tempStr.length > newS.length) {
//       //     newS = tempStr;
//     }
//     //   tempStr = "";
//     // }
//   }
//   //   if (tempStr.length > newS.length) {
//   //     newS = tempStr;
//   //   }

//   //   if (newS.length > 0) {
//   //     console.log(newS);
//   //   } else {
//   //     console.log("No string");
//   //   }
// }
// LargestOddSubString();

// function largestOddNumber(s) {
//   // Traverse the string from the last character to the first
//   for (let i = s.length - 1; i >= 0; i--) {
//     let digit = s[i];

//     // Check if the current character is an odd digit
//     if (parseInt(digit) % 2 !== 0) {
//       // Return the substring from the start to the current odd digit
//       return s.substring(0, i + 1);
//     }
//   }

//   // If no odd number was found, return an empty string
//   return "";
// }

// // Example usage:
// console.log(largestOddNumber("4206")); // Output: ""
// console.log(largestOddNumber("35427")); // Output: "35427"
// console.log(largestOddNumber("123456")); // Output: "1235"

// function longestCommon() {
//   A = ["abadef", "abasedrfrf", "abddeeee"];
//   let ComPrixif = A[0];
//   for (let i = 1; i < A.length; i++) {
//     let temp = "";
//     for (let j = 0; j < A[i].length && j < ComPrixif.length; j++) {
//       if (A[i][j] == ComPrixif[j]) {
//         temp += A[i][j];
//       }
//     }
//     ComPrixif = temp;
//   }
//   console.log(ComPrixif);
// }
// longestCommon();

// (function () {
//   let N = 5;
//   let finalStr = "";
//   for (let i = 0; i < N; i++) {
//     let str = "";
//     let str2 = "";
//     for (let j = N; j >= i; j--) {
//       str += " ";
//     }
//     //     for (let j = 1; j <= i; j++) {
//     //       str += "*";
//     //     }
//     for (let j = 0; j <= i; j++) {
//       str += "*";
//     }
//     for (let j = 1; j <= i; j++) {
//       str += "*";
//     }
//     str += "\n";
//     finalStr += str;
//   }
//   console.log(finalStr);
// })();

(function () {
  let num1 = 5;
  let newstr = "";
  for (let i = 0; i < num1; i++) {
    let str = "";
    for (let j = num1; j > i + 1; j--) {
      str += " ";
    }
    for (let j = 0; j <= i; j++) {
      if (j == 0) {
        str += "*";
      } else {
        str += " ";
      }
    }
    for (let j = 1; j <= i; j++) {
      if (j == i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
    newstr += str;
  }
  for (let i = 0; i < num1; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += " ";
    }
    for (let j = num1; j > i; j--) {
      if (j === num1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    for (let j = num1 - 1; j > i; j--) {
      if (j === i + 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
    newstr += str;
  }
  console.log(newstr);
})();

function Pattern1(num) {
  //   let N = 5;
  str = "";
  for (let i = 0; i < num; i++) {
    str += "*";
    console.log(str);
  }
}

function Pattern2(num) {
  //   let N = 5;

  for (let i = 0; i < num; i++) {
    str = "";
    for (let j = i; j < num; j++) {
      str += "*";
    }
    console.log(str);
  }
}
Pattern2(5);

function patter3(num) {
  console.log("this is pattern 3");
  Pattern1(6);
  Pattern2(num);
}
patter3(5);

//  lomgest palendrom

function LongestPalemdrom(A) {
  let x = 0;
  let y = 0;
  length = 0;
  for (let i = 0; i < A.length; i++) {
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && right < A.length) {
      if (A[left] !== A[right]) {
        break;
      } else {
        if (right - left > length) {
          x = left;
          y = right;
          length = right - left;
        }
        left--;
        right++;
      }
    }
    left = i;
    right = i + 1;
    while (left >= 0 && right < A.length) {
      if (A[left] !== A[right]) {
        break;
      } else {
        if (right - left > length) {
          x = left;
          y = right;
          length = right - left;
        }
        left--;
        right++;
      }
    }
  }

  console.log(A.slice(x, y + 1));
}
LongestPalemdrom("aaaabbaaa");

function charCodeCheck(A) {
  let str = "";
  for (let i = 0; i < A.length; i++) {
    let char = A[i].charCodeAt(i);
    if (char >= 48 && char <= 57) {
      str += A[i];
    }
  }
  console.log(str);
}
charCodeCheck(["A", "e", "8%", "99", "T"]);

console.log(Math.floor(6 / 2));

(function () {
  let A = [1, 2, 3, 4, 5, 6, 7];
  let B = 2;
  let C = 6;
  while (B < C) {
    let temp = A[B];
    A[B] = A[C];
    A[C] = temp;
    B++;
    C--;
  }
  console.log(A);
})();

(function () {
  let A = [1, 2, 3, 4, 5, 6, 7];
  let NewArr = [];
  let B = 2;
  let C = 6;
  for (let i = 0; i < B; i++) {
    NewArr.push(A[i]);
  }
  for (let i = C; i >= B; i--) {
    NewArr.push(A[i]);
  }

  console.log(NewArr);
})();

A = [1, 2, 3, 4, 5, 6, 7];
B = A.slice(3);
C = A.slice(0, 3);
console.log(B);
console.log(C);

(function () {
  let A = [1, 2, 3, 4, 5, 6, 7];
  let B = 3;
  for (let i = 0; i < B; i++) {
    let firstEle = A[0];
    for (let j = 0; j < A.length - 1; j++) {
      A[j] = A[j + 1];
    }
    A[A.length - 1] = firstEle;
  }
  console.log("left", A);
})();

(function () {
  let A = [1, 2, 3, 4, 5, 6, 7];
  let B = 3;
  for (let i = 0; i < B; i++) {
    let lastele = A[A.length - 1];
    for (let j = A.length - 1; j >= 0; j--) {
      A[j] = A[j - 1];
    }
    A[0] = lastele;
  }
  console.log("right", A);
})();

// (function (A) {
//   let N = A.length;
//   let count = 0;
//   let V = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let newArr = [];
//   for (let i = 0; i < N; i++) {
//     let tempArr = [];
//     if (V.includes(A[i])) {
//     }
//     //   for(let j  = 0; j<=i;j++ ){

//     //   }
//     //   newArr.push(tempArr)
//   }
//   console.log(newArr);
// })();

(function () {
  let A = "abade";
  let strA = "";
  let N = A.length;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    strA += A[A.length - 1 - i];
  }
  let newCount = 0;
  for (let i = 0; i < A.length; i++) {
    if (A.substring(0, N - i) === strA.substring(i)) {
      console.log(
        "A.substring(0,N-1)",
        A.substring(0, N - 1),
        "strA.substring(i)",
        strA.substring(i)
      );
      count = i;
      break;
    }
  }
  console.log("count", count);
})();

(function () {
  A = "())()))";
  let count = 0;
  let cnt = 0;
  let str = "";
  let newcount = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === "(") {
      if (count == 0) {
        str += "(";
        cnt += 1;
      }
      count++;
    } else if (A[i] === ")") {
      if (count > 0) {
        count--;
        if (count == 0) {
          str += ")";
          cnt += 1;
        }
      } else {
        newcount += 1;
      }
    }
  }
  newcount += count;
  console.log(str, cnt, count, newcount, A.length - cnt);
})();

(function () {
  let arr = [1, 2, 3, 4, 5];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + i;
  }
  console.log(arr);
})();

z = [1, 2, 3, 4];
x = [1, 2, 3];
y = [...z, ...x];
console.log(y);

let Z = "4";
if (!isNaN(Z)) {
  console.log(Z);
} else {
  console.log("NaN");
}

console.log(40 % 8);

let obj = {
  a: 100,
  fun1() {
    let a = 20;
    let fun2 = () => {
      console.log(this.a);
    };
    fun2();
  },
};

(function () {
  n = 8;
  newArr = [0];
  let temp = 0;
  a = 0;
  b = 1;
  for (let i = 1; i < n; i++) {
    newArr.push(b);
    temp = a + b;
    a = b;
    b = temp;
  }
  console.log(newArr);
})();

// (function () {
//   let N = 5;
//   let finalstr = "";
//   for (let i = 0; i < N; i++) {
//     let tempStr = "";
//     for (let j = 0; j < N; j++) {
//       if (i === 0 || i == N - 1) {
//         tempStr += " * ";
//       } else if (j === 0 || j == N - 1) {
//         tempStr += " * ";
//       } else {
//         tempStr += "   ";
//       }
//     }
//     tempStr += "\n";
//     finalstr += tempStr;
//   }
//   console.log(finalstr);
// })();

(function () {
  let N = 5;
  let finalStr = "";
  for (let i = 0; i < N; i++) {
    let tempStr = "";
    let ch = 65;
    for (let j = 0; j <= i; j++) {
      tempStr += " " + String.fromCharCode(ch + j);
    }
    for (let j = i; j < N - 1; j++) {
      tempStr += "  ";
    }
    for (let j = N - 1; j > i; j--) {
      tempStr += "  ";
    }
    ch = 65 + i;
    for (let K = 0; K <= i; K++) {
      tempStr += " " + String.fromCharCode(ch - K);
    }
    tempStr += "\n";
    finalStr += tempStr;
  }
  console.log(finalStr);
})();

//
(function () {
  let A = "ma";
  let strA = "";
  let N = A.length;

  // Reverse the string A and store it in strA
  for (let i = 0; i < A.length; i++) {
    strA += A[A.length - 1 - i];
  }

  let charsToAdd = ""; // String to store the characters that need to be added
  for (let i = 0; i < A.length; i++) {
    // Check if the substring of A from 0 to N-i matches the substring of reversed string from i
    if (A.substring(0, N - i) === strA.substring(i)) {
      // The characters that need to be added are the unmatched characters from the reverse
      charsToAdd = strA.substring(0, i);
      break;
    }
  }

  console.log("Characters to add to make palindrome:", charsToAdd);
})();
