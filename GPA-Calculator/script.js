function calc(){
    
    //get course value
    var course1 = document.getElementById("course1").value; 
    var course2 = document.getElementById("course2").value; 
    var course3 = document.getElementById("course3").value; 
    var course4 = document.getElementById("course4").value; 
    var course5 = document.getElementById("course5").value;

    //get credit per subject
    var credit1 = document.getElementById("credit1").value;
    var credit2 = document.getElementById("credit2").value;
    var credit3 = document.getElementById("credit3").value;
    var credit4 = document.getElementById("credit4").value;
    var credit5 = document.getElementById("credit5").value; 

    //get grade value
    var grade1 = document.getElementById("grade1").value;
    var grade2 = document.getElementById("grade2").value;
    var grade3 = document.getElementById("grade3").value;
    var grade4 = document.getElementById("grade4").value;
    var grade5 = document.getElementById("grade5").value;

    var check = false;

    if(!course1 || !course2 || !course3 || !course4 || !course5){
        alert("Please enter course name for all subjects.");
        return;
    }else{
        check = true;
    }
    
    if (!credit1 || !credit2 || !credit3 || !credit4 || !credit5) {
        alert("Please enter all credits.");
        return;
    }else{
        check = true;
    }

    if(!grade1 || !grade2 || !grade3 || !grade4 || !grade5){
        alert("Please enter all grades.");
        return;
    }else{
        check = true;
    }

    if(check){
        document.getElementById("output").style.display = "block";
        //get credit per subject
        var credit1 = document.getElementById("credit1").value;
        var credit2 = document.getElementById("credit2").value;
        var credit3 = document.getElementById("credit3").value;
        var credit4 = document.getElementById("credit4").value;
        var credit5 = document.getElementById("credit5").value;     
        
        //find Total Credit
        var TotalCredit = parseFloat(credit1) + parseFloat(credit2) + parseFloat(credit3) + parseFloat(credit4) + parseFloat(credit5);
        document.getElementById("totalCredit").innerHTML = TotalCredit.toFixed(2); 

        const gradeArray=[grade1, grade2, grade3, grade4, grade5];
        const gradeValueFromArray=[];
        for(var i=0; i<5; i++){
            if(gradeArray[i] == "A+" || gradeArray[i] == "A"){
                gradeValueFromArray[i] = 4.0;
            }
            else if(gradeArray[i] == "A-"){
                gradeValueFromArray[i] = 3.7;
            }
            else if(gradeArray[i] == "B+"){
                gradeValueFromArray[i] = 3.3;
            }
            else if(gradeArray[i] == "B"){
                gradeValueFromArray[i] = 3.0;
            }
            else if(gradeArray[i] == "B-"){
                gradeValueFromArray[i] = 2.7;
            }
            else if(gradeArray[i] == "C+"){
                gradeValueFromArray[i] = 2.3;
            }
            else if(gradeArray[i] == "C"){
                gradeValueFromArray[i] = 2.0;
            }
            else if(gradeArray[i] == "C-"){
                gradeValueFromArray[i] = 1.7;
            }
            else if(gradeArray[i] == "D+"){
                gradeValueFromArray[i] = 1.3;
            }
            else if(gradeArray[i] == "D"){
                gradeValueFromArray[i] = 1.0;
            }
            else if(gradeArray[i] == "E"){
                gradeValueFromArray[i] = 0.0;
            }   
        }
        //display course value
        document.getElementById("getcourse1").innerHTML = course1;    
        document.getElementById("getcourse2").innerHTML = course2;
        document.getElementById("getcourse3").innerHTML = course3;
        document.getElementById("getcourse4").innerHTML = course4;
        document.getElementById("getcourse5").innerHTML = course5;
        
        //display grade value
        document.getElementById("disGrade1").innerHTML = gradeValueFromArray[0];
        document.getElementById("disGrade2").innerHTML = gradeValueFromArray[1];
        document.getElementById("disGrade3").innerHTML = gradeValueFromArray[2];
        document.getElementById("disGrade4").innerHTML = gradeValueFromArray[3];
        document.getElementById("disGrade5").innerHTML = gradeValueFromArray[4]; 
   
        //display credit values
        document.getElementById("disCredit1").innerHTML = credit1;
        document.getElementById("disCredit2").innerHTML = credit2;
        document.getElementById("disCredit3").innerHTML = credit3;
        document.getElementById("disCredit4").innerHTML = credit4;
        document.getElementById("disCredit5").innerHTML = credit5;    

        var mulcredit1 = (credit1 * gradeValueFromArray[0]).toFixed(2);
        var mulcredit2 = (credit2 * gradeValueFromArray[1]).toFixed(2);
        var mulcredit3 = (credit3 * gradeValueFromArray[2]).toFixed(2);
        var mulcredit4 = (credit4 * gradeValueFromArray[3]).toFixed(2);
        var mulcredit5 = (credit5 * gradeValueFromArray[4]).toFixed(2);

        //dispaly grade point
        document.getElementById("disGP1").innerHTML = mulcredit1;
        document.getElementById("disGP2").innerHTML = mulcredit2;
        document.getElementById("disGP3").innerHTML = mulcredit3;
        document.getElementById("disGP4").innerHTML = mulcredit4;
        document.getElementById("disGP5").innerHTML = mulcredit5;

        var totalMulCredit = parseFloat(mulcredit1) + parseFloat(mulcredit2) + parseFloat(mulcredit3) + parseFloat(mulcredit4) + parseFloat(mulcredit5);

        document.getElementById("totalgradepoints").innerHTML = totalMulCredit.toFixed(2);

        var GPA = (totalMulCredit / TotalCredit).toFixed(2);
        document.getElementById("GPA").innerHTML = GPA;
    }    
}

