<template>
  <div>
    <form @submit.prevent="saveData">
      <div :class="errors.has('name') ? 'is-danger' : 'is-success'">
        <input type="text" name="name" placeholder="Nome" v-model="user.name" v-validate="'required|min:3|max:20'">
        <p v-show="errors.has('name')">{{ errors.first('name') }}</p>
      </div>
      
      <hr>
      <div :class="errors.has('email') ? 'is-danger' : 'is-success'">
        <input type="email" name="email" placeholder="E-mail" v-model="user.email" v-validate="'required|email'">
        <p v-show="errors.has('email')">{{ errors.first('email') }}</p>
      </div>
      
      <hr>
      <input type="number" placeholder="Idade" v-model="user.age">

      <hr>
      <input type="radio" name="sex" value="M" v-model="user.sex"> Masculino |
      <input type="radio" name="sex" value="F" v-model="user.sex"> Feminino
      
      <hr>
      <select name="" id="" v-model="user.state">
        <option value="">Selecione um Estado</option>
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="MG">Minas Gerais</option>
      </select>

      <hr>
      <input type="checkbox" id="agree" v-model="terms">
      <label for="agree">Concordo com os termos de uso</label>

      <hr>
      <textarea cols="30" rows="10" v-model="description"></textarea>

      <hr>
      <button type="submit">Enviar</button>
    </form>

    <div v-show="isSubmited">
      {{ user }}  
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        age: '',
        sex: '',
        state: ''
      },
      terms: false,
      description: '',
      isSubmited: false
    }
  },
  methods: {
    saveData() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.isSubmited = true;
          return;
        }
      });
    }
  }
}
</script>

<style>
  .is-danger input {
    border: solid 1px #f00;
  }
  .is-danger {
    color: #f00;
  }
  .is-success input {
    border: solid 1px #0f0;
  }
  .is-success {
    color: #0f0;
  }
</style>
