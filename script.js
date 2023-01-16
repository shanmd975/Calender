var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var currentMonth = (new Date()).getMonth();

var currentYear = (new Date()).getFullYear();


let mnth = document.getElementById("mnth");
let yr = document.getElementById("yr");

for (let i = 0; i <= 11; i++) {
    let option = document.createElement('option');
    // document.getElementsByTagName(
    //     "OPTION").selectedIndex = i ;
    option.setAttribute('value', i);
    let text = document.createTextNode(months[i]);
    option.append(text);
    mnth.append(option);
}

for (let i = currentYear - 50; i <= currentYear + 5; i++) {
    let option = document.createElement('option');
    let text = document.createTextNode(i);
    option.append(text);
    yr.append(option);
}

var select_month = "select month";
var select_year = "select year";
var date = 1;
var color = ""
function test() {
    let selectMonth = document.getElementById("mnth");
    //var select_month = selectMonth.value;
    select_month = selectMonth.options[selectMonth.selectedIndex].value;

    var selectYear = document.getElementById("yr");

    select_year = selectYear.options[selectYear.selectedIndex].text;

    date = document.getElementById("input").value;

    color = "";

}


var table_container = document.getElementById('table_container');

function loadCalendar(month, year, date) {

    if (select_month != "select month" && select_year != "select year") {
        document.getElementById('table1').remove();

    }

    var firstDay = new Date(year, month, 01).getDay();
    var numberOfDays = 32 - (new Date(year, month, 32).getDate());
    let table = document.createElement('table');
    table.setAttribute('id', 'table1')
    table.classList.add("mytable");
    let thead = document.createElement('thead');
    let theadrow = document.createElement('tr');
    for (wd = 0; wd <= 6; wd++) {
        let th = document.createElement('th');
        let thtext = document.createTextNode(days[wd]);
        th.append(thtext);
        theadrow.append(th);
    }
    thead.append(theadrow);
    table.append(thead);
    let tbody = document.createElement('tbody');
    var datedate = 1;
    for (wks = 0; wks <= 5; wks++) {
        let tr = document.createElement('tr');
        for (wds = 0; wds <= 6; wds++) {
            let td = document.createElement('td');
            td.setAttribute('id', `d${datedate}`);
            if (datedate > numberOfDays) {
                continue;
            }
            if (wks == 0 && wds < firstDay) {
            } else {
                let tdtext = document.createTextNode(datedate);
                td.append(tdtext);
                datedate = datedate + 1;
            }
            tr.append(td);
        }
        tbody.append(tr);
    }
    table.append(tbody);
    table_container.append(table);


    if (select_month != "select month" && select_year != "select year") {
        let id = `d${date}`;
        //let colour = document.getElementById(id).style.backgroundColor ;
        //console.log(colour, id)
        if (color == "") {
            document.getElementById(id).style.backgroundColor = "green";
            //document.getElementById('table1').remove();
            color = "green";
        } else if (color == "white") {
            document.getElementById(id).style.backgroundColor = "green";
            //document.getElementById('table1').remove();
            color = "green"
        }
        else {
            document.getElementById(id).style.backgroundColor = "white";
            //document.getElementById('table1').remove();
            color = "white";
        }

        console.log(color);

        //document.getElementById('table1').remove();

    }

}


let btn = document.getElementById("btn");

if (select_month == "select month" && select_year == "select year") {
    loadCalendar(currentMonth, currentYear, 13)
}

btn.addEventListener("click", () => { loadCalendar(select_month, select_year, date) });