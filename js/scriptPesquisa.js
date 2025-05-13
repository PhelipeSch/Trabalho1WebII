const campoPesquisa = document.getElementById('campo-pesquisa');
const botaoPesquisar = document.getElementById('btn-pesquisar');

const buscas = [
  { nome: "Produção de Shows e Festivais", link: "servicos.html#prod_show" },
  { nome: "Eventos Sociais e Corporativos", link: "servicos.html#event_soci" },
  { nome: "Gestão de Palco Técnica", link: "servicos.html#gest_palc" },
  { nome: "Telefone", link: "contato.html#telefone" },
  { nome: "E-mail", link: "contato.html#email" },
  { nome: "Endereço", link: "contato.html#endereco" },
  { nome: "Redes sociais", link: "contato.html#redes" },
  { nome: "Atendimento", link: "contato.html#at_pers" },
  { nome: "Dúvidas", link: "contato.html#duvidas" },
  { nome: "Clientes", link: "index.html#clientes" },
  { nome: "Kendrick Lammar", link: "kendrick.html#kendrick" },
  { nome: "John Lennon", link: "lennon.html#lennon" },
  { nome: "Metallica", link: "metallica.html#metallica" },
  {nome: "Vintage Culture", link: "Vintage.html#Vintage"}
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