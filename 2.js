document.addEventListener("DOMContentLoaded", function () {
    const addMoreBtn = document.querySelector(".add-more");
    const tableBody = document.querySelector("tbody");

    // Create the form dynamically
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-popup");
    formContainer.style.display = "none"; // Hide by default
    formContainer.innerHTML = `
        <div class="form-overlay"></div>
        <div class="doctor-form">
            <h2>Add Doctor Details</h2>
            <label>Doctor’s Name:</label>
            <input type="text" id="doctor-name" placeholder="Enter Name">
            
            <label>Phone Number:</label>
            <input type="text" id="doctor-phone" placeholder="Enter Phone">
            
            <label>Doctor’s Age:</label>
            <input type="number" id="doctor-age" placeholder="Enter Age">
            
            <label>Doctor’s Gender:</label>
            <select id="doctor-gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            
            <label>Doctor’s Address:</label>
            <input type="text" id="doctor-address" placeholder="Enter Address">

            <button class="submit-doctor">Submit</button>
            <button class="close-form">Close</button>
        </div>
    `;
    document.body.appendChild(formContainer); // Append form to body

    // Select form elements after adding to DOM
    const formOverlay = document.querySelector(".form-overlay");
    const doctorForm = document.querySelector(".doctor-form");
    const closeFormBtn = document.querySelector(".close-form");
    const submitDoctorBtn = document.querySelector(".submit-doctor");

    // Show form when "Add More" is clicked
    addMoreBtn.addEventListener("click", function () {
        formContainer.style.display = "flex"; // Show form
    });

    // Close form
    closeFormBtn.addEventListener("click", function () {
        formContainer.style.display = "none";
    });

    // Submit form and add data to table
    submitDoctorBtn.addEventListener("click", function () {
        const name = document.getElementById("doctor-name").value;
        const phone = document.getElementById("doctor-phone").value;
        const age = document.getElementById("doctor-age").value;
        const gender = document.getElementById("doctor-gender").value;
        const address = document.getElementById("doctor-address").value;

        if (!name || !phone || !age || !address) {
            alert("Please fill all fields!");
            return;
        }

        const rowCount = tableBody.rows.length;
        const newRow = `<tr>
            <td>${rowCount}</td>
            <td>${name}</td>
            <td>${phone}</td>
            <td>${age}</td>
            <td>${gender}</td>
            <td>${address}</td>
        </tr>`;

        const addMoreRow = document.querySelector(".add-more").closest("tr"); 
        addMoreRow.insertAdjacentHTML("beforebegin", newRow);

        // Close form after submission
        formContainer.style.display = "none";

        // Clear form fields
        document.getElementById("doctor-name").value = "";
        document.getElementById("doctor-phone").value = "";
        document.getElementById("doctor-age").value = "";
        document.getElementById("doctor-address").value = "";
    });

    // Sidebar Active State Change
    document.querySelectorAll(".sidebar li").forEach(item => {
        item.addEventListener("click", function () {
            document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Logout Confirmation
    document.querySelector(".logout").addEventListener("click", function () {
        if (confirm("Are you sure you want to logout?")) {
            window.location.href = "login.html"; // Redirect to login page
        }
    });
});
