// Khai báo một mảng gồm 10 số nguyên
// Cú pháp: Từ_khoá_khai_báo tên_mảng = [các phần tử trong mảng, phần tử trong mảng,...];

// Khai báo
// const arrayNumber = [1, 3, 5, 7, 9, 8, 4, "nhl", null, true];
// console.log(arrayNumber);

// Truy suất hoặc lấy ra từng phần tử của mảng
// Cách 1:
// console.log("Số lượng phần tử trong mảng:", arrayNumber.length);
// console.log("Phần tử của mảng tại ví trí thứ 5:", arrayNumber[5]);

// // Cách 2: Dùng vòng lặp
// // for( let i = 0; i < arrayNumber.length; i++){
// //     console.log("Vị trí trong mảng: ", i);
// //     console.log("Phần tử: ", arrayNumber[i]);
// // }

// // Các thao tác với mảng
// // 1. Thêm phần tử vào cuối mảng push()

// arrayNumber.push(10);
// console.log("Mảng sau khi push: ", arrayNumber);

// // 2.Xoá phần tử cuối mảng và trả về chính nó

// arrayNumber.pop();
// console.log("Mảng sau khi xoá: ", arrayNumber);

// // 3. Thêm phần tử ở đầu mảng

// arrayNumber.unshift(0);
// console.log("Mảng sau khi unshift: ", arrayNumber);

// // 4. Xoá phần tử đầu mảng và trả về chính nó

// arrayNumber.shift();
// console.log("Mảng sau khi shift: ", arrayNumber);

// // Nối cái mảng lại với nhau
// // Cách 1:
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let newArray = array1.concat(array2);
// console.log("Mảng mới:", newArray);

// // Các 2:
// // let array1 = [1, 2, 3];
// // let array2 = [4, 5, 6];
// // let newArray = [...array1, ...array2];

// // Hàm forEach() => lặp qua các phần tử của mảng 
// arrayNumber.forEach( (array) => {
//     console.log(array);
// });

const array3 = [3, 2, 6, 9, 8, 7]
// const newArray2 = [];

// // 1.Đảo ngược các phần tử của mảng

// for(i = array3.length - 1; i >= 0; i-- ){
//     newArray2.push(array3[i]);
// }
// console.log("NewArray2: ", newArray2);
// // 2.Tìm kiếm vị trí xuất hiện của 1 phần tử trong mảng, dữ liệu lấy từ trình duyệt

// let N = parseInt(prompt("Mời bạn nhập phần tử:"));
// let index = null;
// for( let i = 0; i < array3.length; i++ ){
//     if ( array3[i] === N){
//         // Nếu tìm thấy vị trí thì tiến hành gán lại vị trì tìm thấy có biến index
//         index = i;
//         // Khi đã tìm thấy vị trí thì tiến hành thoát khỏi vòng lặp
//         break;
//     } else {
//         index = -1; // Không tìm thấy
//     }
// }
// if(index !== -1){
//     console.log(`Phần tử nằm ở vị trị thứ ${index}`);
// } else {
//     console.log("Không tìm thấy!");
// } 

// 3.Cho 1 mảng hãy sắp xếp mảng đó theo thứ tự tăng dần
for(let i = 0; i < array3.length; i++){
    let tg = 0;
    for (let j = i + 1;j < array3.length; j++ ) {
        if(array3[i] > array3[j]) {
            // Hoán đổi vị trí
            tg = array3[i] ;
            array3[i] = array3[j];
            array3[j] = tg ;
        }
    }
}

console.log("Mảng sau khi được sắp xếp: ", array3);


// 4.Hãy tìm GTNN và GTLN trong bảng
console.log("Giá trị nhỏ nhất: ", array3[0]);
console.log("Giá trị lớn nhất: ", array3.length);