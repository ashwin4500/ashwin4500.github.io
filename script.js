function showAlert() {
    // Check if the alert has already been shown in this session
    if (!sessionStorage.getItem('alertShown')) {
        // Show the alert
        alert("For best experience use a desktop!");

        // Set a flag in sessionStorage indicating the alert has been shown
        sessionStorage.setItem('alertShown', 'true');
    }
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
