
save_btn.addEventListener('click', function () {
    var notes = document.getElementById("notes").value;
    var file_name = document.getElementById("file_name").value;
    var isValid=(function(){                                     //to check valid filenames
        var rg1=new RegExp('/^[^\\ \/ : * ? " < > |]+$/');
        var rg1= /^(?=[\S])[^\\ \/ : * ? " < > | ]+$/;
        if(!rg1.test(file_name)){
            alert("Enter a valid File Name");
        }
        else return(true);
      });
      
     if(isValid(file_name))
    {
    
    var file = new Blob([notes], { type: "text" });
    var a= file.text().result;
    console.log(a);
    var blobUrl = URL.createObjectURL(file);
    var a = document.createElement("a");
    a.href = blobUrl;
    a.download = file_name;
    a.innerHTML = "Download"; //file download link name
    document.body.appendChild(a); //to append link in the html document
    a.style.display = "none"; //to hide link element
    a.click(); //to autoclick on generated url
     }
});
input_f.addEventListener('change', function () {
    var file_path = this.value; //to get fake file path(browser return fake path for security reasons)
    var file_path = file_path.replace(/^.*[\\\/]/, ''); // the backslash is a special character and needs to be replaced
    var strlen = file_path.length;
    strlen = strlen - 4;
    var file_name = "";
    var i = 0;
    while (i < strlen) {
        file_name = file_name + file_path.charAt(i);
        i++;
    }
    document.getElementById("file_name").value = file_name;
    var reader = new FileReader();
    reader.onload = function () {
        document.getElementById("notes").value = reader.result;
    };
    reader.readAsText(this.files[0]);
    console.log(notes);
    console.log(file_name);
});
new_f.addEventListener('click', function () {
    document.getElementById("file_name").value ="";
    document.getElementById("notes").value="";
});