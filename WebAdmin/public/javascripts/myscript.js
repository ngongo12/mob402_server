function formatDate(date) {
    let d = new Date(date)
    console.log(typeof(date))
    let yyyy = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mm = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    document.write(dd+"-"+mm+"-"+yyyy)
}

function formatDateForHtml(date) {
    let d = new Date(date)
    console.log(typeof(date))
    let yyyy = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mm = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return yyyy+"-"+mm+"-"+dd;
}

function fmNumber(num){
    document.write(new Intl.NumberFormat('it-IT').format(num))
}