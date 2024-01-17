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