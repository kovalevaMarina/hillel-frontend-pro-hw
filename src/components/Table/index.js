import { MDCDataTable } from "@material/data-table";
import { formatDate } from "../../helper/moment";
import students from "../../../students.json";
import { createElement } from "../../helper/createElem";

const Table = () => {
  const root = document.getElementById("root");
  const container = createElement("div", "container", root);

  container.innerHTML = `
    <h1 class="title-h1">Students information</h1>
    <div class="mdc-data-table">
      <div class="mdc-data-table__table-container">
        <table class="mdc-data-table__table" aria-label="Students list">
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

  students.forEach((student) => {
    const tableRow = createElement(
      "tr",
      "mdc-data-table__row",
      dataTable.content
    );
    tableRow.innerHTML = `
    <th class="mdc-data-table__cell" scope="row">${student.name}</th>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${
      student.rating
    }</td>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${
      student.gender
    }</td>
    <td class="mdc-data-table__cell mdc-data-table__cell-moment">${formatDate(
      student.birthday
    )}</td>
  `;
  });
};

export default Table;
