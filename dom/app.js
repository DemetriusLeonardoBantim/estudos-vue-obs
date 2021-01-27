new Vue({
  el: '#desafio',
  data: {
    titulo: 'Demetrius Leonardo!',
    idade: 22 * 3,
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Yin_yang.svg',
  },
  methods: {
    random: function () {
      return this.idade * Math.random();
    },
    alterarNome: function (event) {
      this.titulo = event.target.value;
    },
  },
});
