/* function getInputField(input1, input2, title) {
  const inputField1 = document.getElementById(input1).value;
  const inputField2 = document.getElementById(input2).value;
  const name = document.getElementById(title).innerText;
  if (inputField1 >= 0 && inputField2 > 0) {
    const result = 0.5 * inputField1 * inputField2;
    return name, result;
  } else if (!isNaN == false && !isNaN == false) {
    alert("please, positive number type");
  }
} */

// random color change
function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  const card1 = document.getElementById("first");
  card1.style.background = bgColor;
}
function random_bg_color2() {
  let x = Math.floor(Math.random() * 250);
  let y = Math.floor(Math.random() * 250);
  let z = Math.floor(Math.random() * 250);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  const card2 = document.getElementById("second");
  card2.style.background = bgColor;
}
function random_bg_color3() {
  let x = Math.floor(Math.random() * 226);
  let y = Math.floor(Math.random() * 226);
  let z = Math.floor(Math.random() * 226);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  const card2 = document.getElementById("third");
  card2.style.background = bgColor;
}
function random_bg_color4() {
  let x = Math.floor(Math.random() * 230);
  let y = Math.floor(Math.random() * 230);
  let z = Math.floor(Math.random() * 230);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  const card2 = document.getElementById("four");
  card2.style.background = bgColor;
}
function random_bg_color5() {
  let x = Math.floor(Math.random() * 236);
  let y = Math.floor(Math.random() * 236);
  let z = Math.floor(Math.random() * 236);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  const card2 = document.getElementById("fifth");
  card2.style.background = bgColor;
}
function random_bg_color6() {
  let x = Math.floor(Math.random() * 240);
  let y = Math.floor(Math.random() * 240);
  let z = Math.floor(Math.random() * 240);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  const card2 = document.getElementById("sixth");
  card2.style.background = bgColor;
}
// return bgColor;
//calculate button
//------------------------------------------------------------------------------------------
document.getElementById("triangle-btn").addEventListener("click", function () {
  const firstInput = document.getElementById("triangle-a").value;
  const secondInput = document.getElementById("triangle-b").value;
  const title = document.getElementById("triangle-name").innerText;
  if (firstInput > 0 && secondInput > 0) {
    const result = 0.5 * firstInput * secondInput;
    console.log(title, result);
    table(title, result.toFixed(2));
  } else if (!isNaN == false && !isNaN == false) {
    alert("please, positive number type");
  }
});
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const firstInput = document.getElementById("rectangle-l").value;
  const secondInput = document.getElementById("rectangle-w").value;
  const title = document.getElementById("rectangle-title").innerText;
  if (firstInput > 0 && secondInput > 0) {
    const result = firstInput * secondInput;
    console.log(title, result);
    table(title, result.toFixed(2));
  } else if (!isNaN == false && !isNaN == false) {
    alert("please, positive number type");
  }
});
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const firstInput = document.getElementById("parallelogram-b").value;
    const secondInput = document.getElementById("parallelogram-h").value;
    const title = document.getElementById("parallelogram-title").innerText;
    const result = firstInput * secondInput;
    console.log(title, result);
    table(title, result.toFixed(2));
  });
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const firstInput = document.getElementById("rhombus-d1").value;
  const secondInput = document.getElementById("rhombus-d2").value;
  const title = document.getElementById("rhombus-title").innerText;
  const result = 0.5 * firstInput * secondInput;
  console.log(title, result);
  table(title, result.toFixed(2));
});
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const firstInput = document.getElementById("pentagon-p").value;
  const secondInput = document.getElementById("pentagon-b").value;
  const title = document.getElementById("pentagon-title").innerText;
  const result = 0.5 * firstInput * secondInput;
  console.log(title, result);
  table(title, result.toFixed(2));
});
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const firstInput = document.getElementById("ellipse-a").value;
  const secondInput = document.getElementById("ellipse-b").value;
  const title = document.getElementById("ellipse-title").innerText;
  const result = 3.1416 * firstInput * secondInput;
  console.log(title, result);
  table(title, result.toFixed(2));
});

//table area calculation
let number = 1;
function table(triangleTitle, triangleResult) {
  const tableContainer = document.getElementById("tbody");
  const cm = (document.innerHTML = `<p>cm<sup>2</sup></p>`);
  const tr = document.createElement("tr");
  const button = document.createElement("button");
  button.innerHTML = `
  <p>convert to m <sup> 2</sup></p>
  `;
  const td = document.createElement("td");
  td.appendChild(button);
  tr.innerHTML = `
  <td>${number++}</td>
  <td>${triangleTitle}</td>
  <td>${triangleResult}</td>
  <td>${cm}</td>
  `;
  button.classList.add("btn");
  tableContainer.appendChild(tr);
  td.classList.add("px-2");
  tr.appendChild(td);
}
