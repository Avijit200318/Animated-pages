const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener('mouseenter', (e) => {
    anime({
      targets: card,
      rotateY: "+= 180",
      easing: 'easeInOutSine',
      duration: 400,
    });
  })

  card.addEventListener('mouseleave', (e) => {
    anime({
      targets: card,
      rotateY: "+= 180",
      easing: 'easeInOutSine',
      duration: 400,
    });
  })
});
