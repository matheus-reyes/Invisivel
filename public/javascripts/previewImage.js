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


const checkbox1 = document.getElementById("checkboxServicos");
const checkbox2 = document.getElementById("checkboxEmprego");
const inputServicos = document.getElementById("divServicos");
const inputTrabalho = document.getElementById("divTrabalho");

checkbox1.addEventListener('change', function() {

    if(checkbox1.checked){
        inputServicos.style.display = "block";
    }else{
        inputServicos.style.display = "none";
    }
    
});

checkbox2.addEventListener('change', function() {

    if(checkbox2.checked){
        inputTrabalho.style.display = "block";
    }else{
        inputTrabalho.style.display = "none";
    }
    
});

const denunciar = document.getElementById("click-denunciar");
const apoiar = document.getElementById("click-apoiar");

denunciar.addEventListener('click', function() {
    alert("clicou");
    denunciar.classList.toggle("text-danger");
});

apoiar.addEventListener('click', function() {
    alert("clicou2");
    apoiar.classList.toggle("text-warning");
});
