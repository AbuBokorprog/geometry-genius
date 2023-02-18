document.getElementById("triangle-btn").addEventListener("click", function () {
  const firstInput = document.getElementById("triangle-a").value;
  const secondInput = document.getElementById("triangle-b").value;
  const title = document.getElementById("triangle-name").innerText;
  const result = 0.5 * firstInput * secondInput;
  console.log(title, result);
  table(title, result.toFixed(2));
});
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const firstInput = document.getElementById("rectangle-l").value;
  const secondInput = document.getElementById("rectangle-w").value;
  const title = document.getElementById("rectangle-title").innerText;
  const result = firstInput * secondInput;
  console.log(title, result);
  table(title, result.toFixed(2));
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
  const result = firstInput * secondInput;
  console.log(title, result);
  table(title, result.toFixed(2));
});

//table
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
