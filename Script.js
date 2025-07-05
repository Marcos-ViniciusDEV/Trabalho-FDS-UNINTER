function click() {
  let botao = document.querySelector("button");
  let h2 = document.createElement("h2");
  let text = "O único modo de fazer um excelente trabalho é amar o que você faz. - Steve Jobs. ";
  h2.innerHTML = "";
  botao.addEventListener("click", () => {
    if (h2.innerHTML !== "") {
      h2.innerHTML = "";
    } else {
      h2.textContent = text;
      botao.parentElement.insertBefore(h2, botao.nextElementSibling);
    }
  });
}

click();
