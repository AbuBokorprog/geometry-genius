document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleA = document.getElementById("triangle-a").value;
  const triangleB = document.getElementById("triangle-b").value;
  const triangleTitle = document.getElementById("triangle-name").innerText;
  const triangleResult = 0.5 * triangleA * triangleB;
  console.log(triangleTitle, triangleResult);
  table(triangleTitle, triangleResult);
});
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const triangleA = document.getElementById("rectangle-l").value;
  const triangleB = document.getElementById("rectangle-w").value;
  const triangleTitle = document.getElementById("rectangle-title").innerText;
  const triangleResult = 0.5 * triangleA * triangleB;
  console.log(triangleTitle, triangleResult);
  table(triangleTitle, triangleResult);
});

//table
function table(triangleTitle, triangleResult) {
  const tableContainer = document.getElementById("tbody");
  const tr = document.createElement("tr");
  const button = document.createElement("button");
  button.innerHTML = `
  <p>convert to m <sup> 2</sup></p>
  `;
  const td = document.createElement("td");
  td.appendChild(button);
  tr.innerHTML = `
  <td>${1}</td>
  <td>${triangleTitle}</td>
  <td>${triangleResult}</td>
  `;
  button.classList.add("btn");
  tableContainer.appendChild(tr);
  tr.appendChild(td);
}
