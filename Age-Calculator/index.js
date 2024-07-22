function calculateAge() {
    let birthdate = document.getElementById("birthdate").value;
    let today = new Date();
    let birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    document.getElementById("result").innerHTML = "Your age is: " + age;
  }
  