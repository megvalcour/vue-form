<template>
  <div id="app">
    <LayoutHeader heading="Vue Form">
    </LayoutHeader>
    <BaseTextInput 
      v-for="field in $root.fields" 
      :id="field.id" 
      :label="field.label" 
      :key="field.id" 
      v-model="field.value" />
    <BaseCheckbox 
      v-for="setting in $root.settings" 
      :key="setting.id" 
      :id="setting.id" 
      :label="setting.label" 
      v-model="setting.value" />
    <BaseSelect 
      v-for="fruit in $root.fruits"
      :key="fruit.id"
      :id="fruit.id"
      :label="fruit.label"
      :options="$root.fruitOptions"
      v-model="fruit.value"  
      />
      <LayoutFooter>
        <p slot="left">Thanks for checking out Vue Forms!</p>
        <p slot="right">And here's another piece of content.</p>
      </LayoutFooter>
  </div>
</template>

<script>
import BaseTextInput from './components/forms/BaseTextInput.vue'
import BaseCheckbox from './components/forms/BaseCheckbox.vue'
import BaseSelect from './components/forms/BaseSelect.vue'

import LayoutHeader from './components/layout/LayoutHeader.vue'
import LayoutFooter from './components/layout/LayoutFooter.vue'

export default {
  name: 'app',
  components: {
    BaseTextInput,
    BaseCheckbox,
    BaseSelect,
    LayoutHeader,
    LayoutFooter

  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300');

html {
  font-size: 62.5%;
}

body {
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.6rem;
  color: #283039;
  background-color: #BDD5EA;
}

#app {
  width: 65vw;
  margin: 0 auto;
  background-color: #E7EFF7;
}

</style>
