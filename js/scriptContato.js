function enviarWhatsapp(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = '5554991675175';
    const mensagem = document.getElementById("mensagem").value;
    console.log(nome.value);

    const texto = `Olá! Me chamo ${nome} e gostaria de tirar algumas dúvidas: ${mensagem}`;
    const msgformatada = encodeURIComponent(texto);

    const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${msgformatada}`;
    console.log(url);
    window.open(url, '_blank');
}