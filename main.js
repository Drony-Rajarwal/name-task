const mockData = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Alice" },
    { name: "Charlie" },
    { name: "Bob" },
    { name: "David" },
    { name: "Eva" },
    { name: "Alice" },
    { name: "Frank" },
    { name: "Grace" },
    { name: "Bob" },
    { name: "Helen" },
    { name: "Isaac" },
    { name: "Alice" },
    { name: "James" },
    { name: "Eva" },
    { name: "Alice" },
    { name: "Kathy" },
    { name: "Lucas" },
    { name: "Alice" },
    { name: "Frank" },
    { name: "Alice" },
    { name: "David" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "Eva" },
    { name: "Grace" },
    { name: "James" },
    { name: "Alice" },
    { name: "Helen" },
    { name: "Isaac" },
    { name: "Kathy" },
    { name: "Lucas" },
    { name: "Alice" },
    { name: "Eva" },
    { name: "Frank" },
    { name: "Alice" },
    { name: "Grace" },
    { name: "David" },
    { name: "Alice" },
    { name: "Bob" },
    { name: "James" },
    { name: "Charlie" },
    { name: "Helen" },
    { name: "Isaac" },
    { name: "Lucas" },
    { name: "Alice" },
    { name: "John" },
];

const nameCounts = {};
mockData.forEach(item => {
    if (nameCounts[item.name]) {
        nameCounts[item.name] += 1;
    } else {
        nameCounts[item.name] = 1;
    }
});

const table = document.querySelector("table");
for (const name in nameCounts) {
    const count = nameCounts[name];
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    const countCell = document.createElement("td");
    countCell.textContent = count;
    row.appendChild(nameCell);
    row.appendChild(countCell);
    if (count > 0 && count < 3) {
        row.classList.add("red");
    } else if (count >= 3 && count < 10) {
        row.classList.add("yellow");
    } else if (count >= 10) {
        row.classList.add("green");
    }
    table.appendChild(row);
}