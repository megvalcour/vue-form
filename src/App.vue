<template>
  <div id="app">
    <LayoutHeader heading="Vue Form">
    </LayoutHeader>
    <BaseForm>
    <BaseFieldset legend="Personal Information">
      <BaseTextInput 
        v-for="field in $root.fields" 
        :id="field.id" 
        :label="field.label" 
        :key="field.id" 
        v-model="field.value" />
      </BaseFieldset>
    <BaseFieldset legend="Some select options">
    <BaseCheckbox 
      v-for="setting in $root.settings" 
      :key="setting.id" 
      :id="setting.id" 
      :label="setting.label" 
      v-model="setting.value" />
    </BaseFieldset>
    <BaseFieldset legend="Choose some options">
    <BaseSelect 
      v-for="fruit in $root.fruits"
      :key="fruit.id"
      :id="fruit.id"
      :label="fruit.label"
      :options="$root.fruitOptions"
      v-model="fruit.value"  
      />
    <BaseSelectMulti 
      v-for="book in $root.books"
      :key="book.id"
      :id="book.id"
      :label="book.label"
      :options="$root.bookOptions"
      v-model="book.value"  
      />
    </BaseFieldset>
    </BaseForm>
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
import BaseFieldset from './components/forms/BaseFieldset.vue'
import BaseSelectMulti from './components/forms/BaseSelectMulti'
import BaseForm from './components/forms/BaseForm.vue'

import LayoutHeader from './components/layout/LayoutHeader.vue'
import LayoutFooter from './components/layout/LayoutFooter.vue'

export default {
  name: 'app',
  components: {
    BaseForm,
    BaseTextInput,
    BaseCheckbox,
    BaseSelect,
    BaseSelectMulti,
    BaseFieldset,
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,500,700');

html {
  font-size: 62.5%;
}

body {
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  color: #283039;
  background-color: #BDD5EA;
}

#app {
  width: 65vw;
  margin: 0 auto;
  background-color: #E7EFF7;
}

</style>
