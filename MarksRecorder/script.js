var form = document.querySelector('form')
form.addEventListener('submit', function () {
    event.preventDefault()
    formData()
})

var input = document.querySelectorAll('input')
var select = document.querySelectorAll('select')
var arr = []
var obj = {}
function formData() {
     obj = {
        student: input[0].value,
        sanskrit: Number(input[1].value),
        hindi: Number(input[2].value),
        english: Number(input[3].value),
        maths: Number(input[4].value),
        biology: Number(input[5].value),
        physics: Number(input[6].value),
        chemistry: Number(input[7].value),
        social: Number(input[8].value),
        class: select[0].value,
        section: select[1].value,
        exam: select[2].value,
        grade: '',
        total: ''
        
    }
    addData()
}

function addData() {
    arr.push(obj)
    console.log(arr)
    display(arr)
}

var res = document.getElementById('res')

var table = document.createElement('table')
function display(data) {
    table.innerHTML = ''
    
        var row1 = document.createElement('tr')
        row1.innerHTML = '<th>' + 'Student' + '<th>' + 'Class' + '<th>' + 'Section' + '<th>' + 'Exam' + '<th>' + 'Grade' + '<th>' + 'Total'
        table.append(row1)
        for(var i=0;i<data.length;i++) {
            var total  = data[i].sanskrit + data[i].hindi + data[i].english + data[i].maths + data[i].biology + data[i].physics + data[i].chemistry + data[i].social
            if(total>800){
                data['grade'] = 'Marks Secured is greator than total marks (wrong marks entered)'
            }
            else if(total < 800 && total >= 600) {
                data['grade'] = 'A'
            }else if(total < 600 && total >= 500) {
                data['grade'] = 'B'
            }else if(total < 500 && total >= 400) {
                data['grade'] = 'C'
            }else if(total < 400 && total >= 300) {
                data['grade'] = 'D'
            }else {
                data['grade'] = 'E'
            }
            data['total'] = total
            var row2 = document.createElement('tr')
        row2.innerHTML = '<td>' + data[i].student + '<td>' + data[i].class + '<td>' + data[i].section + '<td>' + data[i].exam + '<td>' + data['grade'] + '<td>' + data['total']
        table.append(row2)
    }
    res.append(table)
}
var sel1 = select[3]
sel1.addEventListener('change', filter)
function filter() {
    var filter_arr = arr.filter(function(item) {
        if(event.target.value == 'Class') {
            if(Number(select[0].value) == 6) {
                return Number(item.class) == 6
            }else if(Number(select[0].value) == 7) {
                return Number(item.class) == 7
            }else if(Number(select[0].value) == 8) {
                return Number(item.class) == 8
            }else if(Number(select[0].value) == 9) {
                return Number(item.class) == 9
            }else if(Number(select[0].value) == 10) {
                return Number(item.class) == 10
            }
        }
        if(event.target.value == 'Section') {
            if(select[1].value == 'I') {
                return item.section == 'I'
            }else  if(select[1].value == 'II') {
                return item.section == 'II'
            }else if(select[1].value == 'III') {
                return item.section == 'III'
            }else if(select[1].value == 'IV') {
                return item.section == 'IV'
            }
        }
         if(event.target.value == 'Exam') {
            if(select[2].value == 'QUARTERLY') {
                return item.exam == 'QUARTERLY'
            }else  if(select[2].value == 'HALF-YEARLY') {
                return item.exam == 'HALF-YEARLY'
            }else if(select[2].value == 'ANNUAL') {
                return item.exam == 'ANNUAL'
            }
        }

    })

    display(filter_arr)
}

var sel2 = select[4]
sel2.addEventListener('change', sort)
function sort() {
    var sort_arr = arr.sort(function(a,b) {
        if(event.target.value == 'Grade') { 
            if(a.grade > b.grade) {
                return 1
            }else if(a.grade < b.grade) {
                return -1
            }
        }
    })
    display(sort_arr)
}