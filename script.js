const texto = "Olá, sou Cássio Martins. Atualmente estou me aprofundando em desenvolvimento front-end com JavaScript e tenho como meta atuar como programador FullStack.";
  const destino = document.getElementById("digitando");
  let index = 0;

  function digitar() {
    if (index < texto.length) {
      destino.innerHTML += texto.charAt(index);
      index++;
      setTimeout(digitar, 30);
    }
  }

  setTimeout(digitar, 1000);