var data
var total
var display = document.getElementById('countries')
var j = 1

function getData() {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.covid19api.com/summary")
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200) {
            total = JSON.parse(xhr.response).Global
            data = JSON.parse(xhr.response).Countries
            for (var i = 0; i < data.length; i++) {

                displayData(data[i])
            }
            var rowData = document.createElement('tr')
    rowData.innerHTML = '<th>' + 'Total' + '<th>' + 'Global'+ '<td>' + total['NewConfirmed'] + '<td>' + total['TotalConfirmed'] + '<td>' + total['NewDeaths'] + '<td>' + total['TotalDeaths'] + '<td>' + total['NewRecovered'] + '<td>' + total['TotalRecovered']
    display.appendChild(rowData)
        }
    }
    
}

function displayData(all) {

    // var col1 = document.createElement('th')
    var row = document.createElement('tr')
    row.innerHTML = '<th>' + j + '<td>' + all['Country'] + '<td>' + all['NewConfirmed'] + '<td>' + all['TotalConfirmed'] + '<td>' + all['NewDeaths'] + '<td>' + all['TotalDeaths'] + '<td>' + all['NewRecovered'] + '<td>' + all['TotalRecovered']
    j++
    display.appendChild(row)
   
}

getData()

// Sort and Filter
var filter = document.getElementById('filter')
var sort = document.getElementById('sort')
sort.addEventListener('change', sortData)

function sortData() {
    var sortedArray

    if (event.target.value == "New Confirmed") {
        sortedArray = data.sort(function (a, b) {

            if (filter.value == 'Ascending') {
                return (Number(a.TotalConfirmed) - Number(b.TotalConfirmed))
            } else if (filter.value == 'Descending') {
                return (Number(b.NewConfirmed) - Number(a.NewConfirmed))
            }
        })         
         var rowData = document.createElement('tr')
        rowData.innerHTML = '<th>' + 'Total' + '<th>' + 'Global'+ '<td>' + total['NewConfirmed'] + '<td>' + total['TotalConfirmed'] + '<td>' + total['NewDeaths'] + '<td>' + total['TotalDeaths'] + '<td>' + total['NewRecovered'] + '<td>' + total['TotalRecovered']
        display.appendChild(rowData)
    } else if (event.target.value == "Total Confirmed") {
        sortedArray = data.sort(function (a, b) {
            if (filter.value == 'Ascending') {
                return (Number(a.TotalConfirmed) - Number(b.TotalConfirmed))

            } else if (filter.value == 'Descending') {
                return (Number(b.TotalConfirmed) - Number(a.TotalConfirmed))
            }
        })
    } else if (event.target.value == "New Deaths") {
        sortedArray = data.sort(function (a, b) {
            if (filter.value == 'Ascending') {
                return (Number(a.NewDeaths) - Number(b.NewDeaths))

            } else if (filter.value == 'Descending') {
                return (Number(b.NewDeaths) - Number(a.NewDeaths))
            }
        })
    } else if (event.target.value == "Total Deaths") {
        sortedArray = data.sort(function (a, b) {
            if (filter.value == 'Ascending') {
                return (Number(a.TotalDeaths) - Number(b.TotalDeaths))

            } else if (filter.value == 'Descending') {
                return (Number(b.TotalDeaths) - Number(a.TotalDeaths))
            }
        })
    } else if (event.target.value == "New Recovered") {
        sortedArray = data.sort(function (a, b) {
            if (filter.value == 'Ascending') {
                return (Number(a.NewRecovered) - Number(b.NewRecovered))

            } else if (filter.value == 'Descending') {
                return (Number(b.NewRecovered) - Number(a.NewRecovered))
            }
        })
    } else if (event.target.value == "Total Recovered") {
        sortedArray = data.sort(function (a, b) {
            if (filter.value == 'Ascending') {
                return (Number(a.TotalRecovered) - Number(b.TotalRecovered))

            } else if (filter.value == 'Descending') {
                return (Number(b.TotalRecovered) - Number(a.TotalRecovered))
            }
        })
    }

    j = 1
    console.log(sortedArray)
    display.innerHTML = ''
    for (var k = 0; k < sortedArray.length; k++) {
        displayData(sortedArray[k])
    }


}

var search = document.getElementById('search')

//localStorage.setItem("covid", data)
var submit = document.getElementById('submit')
submit.addEventListener('click', function() {
    localStorage.setItem("input",JSON.stringify(search.value))
    window.location.href= "search.html"
})

