const campoPesquisa = document.getElementById('campo-pesquisa');
const botaoPesquisar = document.getElementById('btn-pesquisar');

const buscas = [
  { nome: "Produção de Shows e Festivais", link: "servicos.html#prod_show" },
  { nome: "Eventos Sociais e Corporativos", link: "servicos.html#event_soci" },
  { nome: "Gestão de Palco Técnica", link: "servicos.html#gest_palc" },
  { nome: "Telefone", link: "contato.html#telefone" }
];
botaoPesquisar.addEventListener('click', function () {
  const termo = campoPesquisa.value.toLowerCase();

  const resultado = (buscas.find)(buscas =>
    buscas.nome.toLowerCase().includes(termo)
  );
  if (resultado) {
    window.location.href = resultado.link;
  } else {
    alert("Serviço não encontrado!");
  }
});

campoPesquisa.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    botaoPesquisar.click();
  }
});