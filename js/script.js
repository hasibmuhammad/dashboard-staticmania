const data = [
  14, 18, 12, 10, 8, 9, 7, 6, 11, 15, 9, 11, 12, 10, 9, 11, 14, 10, 13, 12, 10,
  12, 8, 16, 10,
];
const container = document.getElementById("chart");

data.forEach((value, index) => {
  const bar = document.createElement("div");
  bar.classList.add("bar", "w-4", "bg-blue-100");
  bar.style.height = `${value * 5}px`;

  if (index === data.length - 3) {
    bar.classList.add("bg-blue-500");
  }

  container.appendChild(bar);
});
