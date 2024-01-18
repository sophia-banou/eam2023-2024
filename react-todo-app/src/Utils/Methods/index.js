// Logout checks if you have the specific keys stored in your local storage. 
// If you have then deletes them and redirects to login page.
export function logout () {
    if (localStorage.getItem('role') !== null || localStorage.getItem('email') !== null || localStorage.getItem('AM') !== null || localStorage.getItem('name') !== null) {
        localStorage.removeItem('role')
        localStorage.removeItem('name')
        localStorage.removeItem('AM')
        localStorage.removeItem('email')
        window.location.href = '/'
    }
}

export function btnTab1 () {
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    table1.style.display = "table";
    table2.style.display = "none";
}