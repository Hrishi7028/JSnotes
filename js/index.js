showData();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (e) => {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes); // we are passing notes as a object...
    }
    noteObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(noteObj)); // to set locastorage we need to pass stringify
    addTxt.value = '';
    console.log(localStorage);
    showData();
});

function showData() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes); // we are passing notes as a object...
    }
    let html = '';
    noteObj.forEach((element, index) => {
        html += ` <div class="card noteCard my-3 mx-3" style="width:20rem;">
        <div class="card-body style">
            <h5 class="card-title">Note ${index + 1 }</h5>
            <p class="card-text">${element }</p>
            <button class='btn btn-primary' id=${index } onclick='Delete(this.id)'>Delete Note</button>
        </div>
    </div>`;
    });

    let notele = document.getElementById('notes')
    if (noteObj.length != 0) {
        notele.innerHTML = html;
    } else {
        notele.innerHTML = `Nothing to show!!`;
    }
}
function Delete(index) {

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(notes); // we are passing notes as a object...
    }
    noteObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(noteObj));
    showData();
}

let search = document.getElementById('searcht');
search.addEventListener('input', () => {
    let ival = search.value;
    let notecard = document.getElementsByClassName('noteCard');

    Array.from(notecard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if (cardTxt.includes(ival)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });

});

