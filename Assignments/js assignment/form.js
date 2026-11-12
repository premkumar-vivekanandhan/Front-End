
  let name = document.getElementById("studentName");

  let email = document.querySelector("#email");

  let inputs = document.querySelectorAll("input, select");

  let fields = document.getElementsByClassName("field");

  for (let f of fields) {
    f.addEventListener("focus", function () {
      this.style.borderColor = "blue";
    });
  }

  name.addEventListener("blur", function () {
    name.style.borderColor = "green";
  });

  document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let result = document.getElementById("result");

    if (name.value == "" || email.value == "" || dept.value == "") {
      result.innerHTML = "Please fill all fields!";
      result.style.backgroundColor = "pink";    
    } else {

      result.innerHTML = "Student name: " + name.value +
                         "<br>Email: " + email.value +
                         "<br>Department: " + dept.value;
      result.style.backgroundColor = "lightgreen"; 
    }
  });