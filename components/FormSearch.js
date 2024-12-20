export default {
  props: {
    formVisibility: Boolean,
    characterRequested: String
  },
  data() {
    return {
      localCharacterRequested: this.characterRequested
    };
  },
  methods: {
    triggerSearch() {
      this.$emit('search', this.localCharacterRequested);
    }
  },
  watch: {
    characterRequested(newValue) {
      this.localCharacterRequested = newValue;
    }
  },
  template: `
    <form v-if="formVisibility" @submit.prevent="triggerSearch">
      <input v-model="localCharacterRequested" type="text" placeholder="Digite o Personagem Aqui" />
      <button type="button" @click="triggerSearch">Enviar!</button>
    </form>`
};
// revisao