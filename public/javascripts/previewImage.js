imgInp.onchange = evt => {
    const [file] = imgInp.files;
    if (file) {
      imagem.src = URL.createObjectURL(file);
    }
}

const radio1 = document.getElementById("ReportOutraPessoa");
const radio2 = document.getElementById("ReportMesmaPessoa");
const inputNomeOutraPessoa = document.getElementById("divNomeOutraPessoa");

radio1.addEventListener('change', function() {

    if(radio1.checked){
        inputNomeOutraPessoa.style.display = "block";
    }
    
});

radio2.addEventListener('change', function() {

    if(radio2.checked){
        inputNomeOutraPessoa.style.display = "none";
    }

});
