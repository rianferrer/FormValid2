function comparePwd() {
        var p1 = document.getElementById("pass").value;
        var p2 = document.getElementById("conPass").value;
        
        if (p2 !== p1)
        {
                document.getElementById("p1").innerHTML = "Passwords do not match";
        }
        else
        {
                document.getElementById("p1").innerHTML = 'Passwords match';
        }
}