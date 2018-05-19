// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredAddresses to addressData initially
var filteredData = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var data = filteredData[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}

function handleSearchButtonClick(event) {

  // prevent page from refreshing
  event.preventDefault();

  // filter the date input 
  var filterDate = $dateInput.value.trim();
    filteredData = dataSet.filter(function (data) {
    var dataDate = data.datetime;
    return dataDate === filterDate;
  });
  renderTable();
}
renderTable();

