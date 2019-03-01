<template>
  <div id="app">
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
      v-model="setting.value" 
      :true-value="true"
      :false-value="false"/>
  </div>
</template>

<script>
import BaseTextInput from './components/forms/BaseTextInput.vue'
import BaseCheckbox from './components/forms/BaseCheckbox.vue'

export default {
  name: 'app',
  components: {
    BaseTextInput,
    BaseCheckbox
  }
}
</script>

<style>
</style>
