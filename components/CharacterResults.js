export default {
  props: {
    characters: Array,
    formVisibility: Boolean
  },
  data() {
    return {
      itemsPerPage: 3,
      currentPage: 0
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.characters.length / this.itemsPerPage);
    },
    currentPageItems() {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.characters.slice(start, end);
    }
  },
  methods: {
    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    }
  },
  template: `
    <div class="characters" v-if="characters.length > 0" 
      :style="{
        boxShadow: formVisibility ? '0 4px 10px rgba(0, 0, 0, 0.3)' : 'none',
        background: formVisibility ? 'rgba(255, 255, 255, 0.1)' : 'none'
      }">
      
      <h2>Resultados:</h2>
      <div class="resultados">
        <div class="character-item" v-for="character in currentPageItems" :key="character.id">
          <img :src="character.image" :alt="character.name">
          <h3>{{ character.name }}</h3>
          <p>{{ character.species }}</p>
        </div>
      </div>

      <!-- Controles de navegação -->
      <div class="pagination">
        <button @click="previousPage" :disabled="currentPage == 0">Anterior</button>
        <button @click="nextPage" :disabled="currentPage == totalPages - 1">Próximo</button>
      </div>

      <!-- Paginação -->
      <div class="page-numbers">
        <button 
          v-for="(page, index) in totalPages" 
          :key="index" 
          @click="goToPage(index)" 
          :class="{'active': index === currentPage}">
          {{ index + 1 }}
        </button>
      </div>
    </div>
  `
};
