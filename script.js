let texto = "Olá, sou o Cássio! 😄\n\n"
texto += "Minha trajetória profissional começou na verdade como motorista de aplicativo! Onde em uma das minhcas corridas conheci um passageiro que trabalhava como desenvolvedor e durante nossa conversa me encantei com a área. Foi ali que despertou meu interesse em programação..\n\n"
texto += "Atualmente estou me especializando em desenvolvimento front-end com JavaScript e tenho como objetivo atuar como programador FullStack. \n\n";
texto += "Possuo habilidades práticas com HTML, CSS e JavaScript, além de conhecimentos com versionamento de código Git/Github. Atualmente estou estudando frameworks modernos como React e busco constantemente melhorar meu código e aprender novas tecnologias.";
  let destino = document.getElementById("digitando");
  let index = 0;

  function digitar() {
    if (index < texto.length) {
      destino.innerHTML += texto.charAt(index);
      index++;
      setTimeout(digitar, 30);
    }
  }

  setTimeout(digitar, 1000);