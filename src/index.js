import "./styles/all";
import { MDCDataTable } from "@material/data-table";
import students from "../students.json";
console.log(students);

let root = document.getElementById("root");

let container = document.createElement("div");
container.className = "container";
root.append(container);

container.innerHTML = `
<div class="mdc-data-table">
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label="Dessert calories">
      <thead>
        <tr class="mdc-data-table__header-row">
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Student name</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Rating</th>
          <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Gender</th>
          <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Date of Birth</th>
        </tr>
      </thead>
      <tbody class="mdc-data-table__content"></tbody>
    </table>
  </div>
</div>
`;
const dataTable = new MDCDataTable(document.querySelector(".mdc-data-table"));
console.log(dataTable);

students.forEach((student) => {
  const tableRow = document.createElement("tr");
  tableRow.className = "mdc-data-table__row";
  dataTable.content.append(tableRow);
  tableRow.innerHTML = `
    <th class="mdc-data-table__cell" scope="row">${student.name}</th>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${student.rating}</td>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${student.gender}</td>
    <td class="mdc-data-table__cell">${student.birthday}</td>
  `;
});
