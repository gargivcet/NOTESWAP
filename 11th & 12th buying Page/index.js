// Function to open the payment popup and display the sample PDF
function openPaymentPopup(pdfUrl, pdfTitle) {
    var paymentPopup = document.getElementById("paymentPopup");
    paymentPopup.style.display = "block";

    // Store PDF details in data attributes for later use
    paymentPopup.setAttribute("data-pdf-url", pdfUrl);
    paymentPopup.setAttribute("data-pdf-title", pdfTitle);

    // Render the sample PDF pages as images
    renderSamplePDF(pdfUrl);
}

// Function to render the sample PDF pages as images
function renderSamplePDF(pdfUrl) {
    var samplePagesContainer = document.getElementById("samplePagesContainer");
    samplePagesContainer.innerHTML = ''; // Clear previous content

    // Create a canvas element to render pages as images
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var img = new Image();

    // Load the PDF file
    img.src = pdfUrl;
    img.onload = function () {
        // Set canvas dimensions to match the first page
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw the first page on the canvas
        context.drawImage(img, 0, 0);

        // Create an image element from the canvas and add it to the container
        var sampleImage = new Image();
        sampleImage.src = canvas.toDataURL("image/png"); // Convert canvas to image
        samplePagesContainer.appendChild(sampleImage);

        // If you want to display the second page, you can repeat the process here
    };
}

// Rest of your JavaScript code (closePaymentPopup and openPDF functions remain the same)
