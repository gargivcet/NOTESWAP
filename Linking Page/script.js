// Function to show the modal for the specified box
function showModal(boxNumber) {
    const modal = document.getElementById(`myModal${boxNumber}`);
    modal.style.display = "block";
}

// Function to close the modal for the specified box
function closeModal(boxNumber) {
    const modal = document.getElementById(`myModal${boxNumber}`);
    modal.style.display = "none";
}

// Function to open links for Option 1 and Option 2
function redirectToPage(boxNumber, optionNumber) {
    let link = '';

    if (boxNumber === 1) {
        if (optionNumber === 1) {
            link = '/11th & 12th buying Page/index.html';
        } else if (optionNumber === 2) {
            link = '/Engineering buying Page/index.html';
        }
    } else if (boxNumber === 2) {
        if (optionNumber === 1) {
            link = '/11th & 12th Selling Page/index.html';
        } else if (optionNumber === 2) {
            link = '/Engineering Selling Page/index.html';
        }
    }

    if (link) {
        window.open(link, '_blank');
        closeModal(boxNumber);
    }
}

// Function to handle box click for Box 1
function boxClicked(boxNumber) {
    if (boxNumber === 1) {
        showModal(1);
    } else if (boxNumber === 2) {
        showModal(2);
    }
}

// Get the search bar element
const searchBar = document.getElementById("searchBar");

// Add click event listener to toggle the expanded class
searchBar.addEventListener("click", function () {
    searchBar.classList.toggle("expanded");
});

// Add event listeners to close the modal when clicking on the close button or outside the modal
const closeButtons = document.getElementsByClassName("close");
for (const closeButton of closeButtons) {
    closeButton.addEventListener("click", closeModal);
}

window.addEventListener("click", function (event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
});
