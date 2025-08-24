 // Controle das abas
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active de todas abas e conteúdos
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Ativa a aba clicada e o conteúdo correspondente
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
    });

    // Botão para subir ao topo da página
    const topButton = document.getElementById('topButton');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        topButton.style.display = 'block';
      } else {
        topButton.style.display = 'none';
      }
    });

    topButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });