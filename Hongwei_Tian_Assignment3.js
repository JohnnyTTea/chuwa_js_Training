const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
/*
Question 1
Given the following array and implement the table dynamically
*/

const div1 = document.querySelector(".div1");
const tbl = document.createElement("table");
thead = tbl.createTHead();
row = thead.insertRow();
tbl.style.border = "1px solid black";

tableInfo.tableHeader.forEach((element) => {
  let th = document.createElement("th");
  let txt = document.createTextNode(element);
  th.appendChild(txt);
  row.appendChild(th);
});
tableInfo.tableContent.forEach((element) => {
  let row = tbl.insertRow();
  for (key in element) {
    let cell = row.insertCell();
    let txt = document.createTextNode(element[key]);
    // cell.style.textAlign = "center";
    // cell.style.border = "1px solid black";
    // cell.style.borderCollapse = "collapse";
    cell.appendChild(txt);
  }
});
div1.append(tbl);
/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

function addList(item) {
  let li = document.createElement("li");
  li.textContent = item;
  return li;
}

const div2 = document.querySelector(".div2");
const ol = document.createElement("ol");
const ul = document.createElement("ul");
list.forEach((element) => {
  ol.appendChild(addList(element));
  ul.appendChild(addList(element));
});
div2.appendChild(ol);
div2.appendChild(ul);

/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];
const div3 = document.querySelector(".div3");
const select = document.createElement("select");
for (let element of dropDownList) {
  let opt = document.createElement("option");
  opt.value = element.value;
  opt.innerHTML = element.content;
  select.appendChild(opt);
}
div3.appendChild(select);

/*
Reference: https://www.valentinog.com/blog/html-table/ 
*/
