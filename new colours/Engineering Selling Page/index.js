document.addEventListener("DOMContentLoaded", function () {
    const uploadBtn = document.getElementById("uploadBtn");
    const fileInput = document.getElementById("fileInput");
    const statusMessage = document.getElementById("statusMessage");
    const fileList = document.getElementById("fileList");

    uploadBtn.addEventListener("click", function () {
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = URL.createObjectURL(file);
            link.target = "_blank";
            link.textContent = file.name;

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.className = "remove-file-btn";
            removeBtn.addEventListener("click", function () {
                fileList.removeChild(listItem); // Remove the clicked file
            });

            listItem.appendChild(link);
            listItem.appendChild(removeBtn);
            fileList.appendChild(listItem);

            statusMessage.textContent = "File uploaded successfully!";
            statusMessage.style.color = "green";
            fileInput.value = "";
        } else {
            statusMessage.textContent = "Please select a file to upload.";
            statusMessage.style.color = "red";
        }
    });

    const clearAllBtn = document.getElementById("clearAllBtn");
    clearAllBtn.addEventListener("click", function () {
        fileList.innerHTML = ""; // Clear the file list
    });
});
