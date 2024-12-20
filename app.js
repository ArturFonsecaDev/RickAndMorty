import FormSearch from './components/FormSearch.js';
import CharacterResults from './components/CharacterResults.js';

new Vue({
  el: '#app',
  components: {
    FormSearch,
    CharacterResults
  },
  data: {
    characterRequested: '',
    characters: [],
    formVisibility: true
  },
  methods: {
    reqToRickAndMortyApi(characterRequested) {
      const url = 'https://rickandmortyapi.com/api/character';
      
      if (!characterRequested) {
        alert('Digite um personagem');
        return;
      }

      fetch(`${url}/?name=${encodeURIComponent(characterRequested)}`)
        .then(r => {
          this.formVisibility = false;
          return r.json();
        })
        .then(data => {
          if (data.results.length == 0) {
            alert("Nenhum resultado encontrado!");
            return;
          }
          this.characters = data.results;
        })
        .catch(err => {
          alert(`Falha ao buscar dados: ${err.message}`);
          this.formVisibility = true;  // Voltar o formulário
        });
    }
  }
});
