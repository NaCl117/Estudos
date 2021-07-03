function Enviar() 
{
  let nome = document.getElementById("nome_id");
  if (nome.value != "") 
  {
    alert("Obrigado" +nome+ " os seus dados foram encaminhados com sucesso");
  }
  else
  {
    alert("Você não inseriu seu nome. Atualize a página e tente novamente")
  }
}