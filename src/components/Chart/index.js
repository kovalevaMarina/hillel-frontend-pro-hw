import {
  Chart,
  LinearScale,
  BarController,
  CategoryScale,
  BarElement,
  Title,
} from "chart.js";
import students from "../../../students.json";
import { createElement } from "../../helper/createElem";

const ChartData = () => {
  const container = document.querySelector(".container");

  const canvas = createElement("canvas", "chart", container);
  canvas.setAttribute("id", "myChart");

  const data = {
    labels: students.map((student) => student.name),
    datasets: [
      {
        label: "My First Dataset",
        data: students.map((student) => student.rating),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(18, 208, 18, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(212, 168, 142, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(115, 214, 115, 0.2)",
          "rgba(176, 110, 144, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(18, 208, 18)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(212, 168, 142)",
          "rgb(153, 102, 255)",
          "rgb(115, 214, 115)",
          "rgb(176, 110, 144)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Student rating chart",
          padding: {
            top: 10,
            bottom: 10,
          },
          font: {
            family: "Albert Sans",
            size: 20,
          },
        },
      },
    },
  };

  Chart.register(BarController, LinearScale, CategoryScale, BarElement, Title);

  new Chart(document.getElementById("myChart"), config);
};
export default ChartData;
