const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const program = document.getElementById("program").value;

    const studentCard = document.createElement("div");
    studentCard.classList.add("student-card");

    const name = document.createElement("h3");
    name.textContent = studentName;

    const programText = document.createElement("p");
    programText.textContent = program;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.addEventListener("click", function() {
        studentCard.remove();
    });

    studentCard.appendChild(name);
    studentCard.appendChild(programText);
    studentCard.appendChild(removeButton);

    studentList.appendChild(studentCard);

    studentForm.reset();
});