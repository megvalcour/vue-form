import Vue from 'vue'
import App from './App.vue'

var data = {
  fields: [
    {value: "Megan", label: "First Name", id: "keyFirstName"},
    {value: "Valcour", label: "Last Name", id: "keyLastName"},
    {value: "", label: "Email", id: "keyEmail"},
    {value: "", label: "Phone", id: "keyPhone"},
    {value: "", label: "Website", id: "keyWebsite"}
  ],
  settings: [
    {value: true, label: "This is checked on load", id: "keyLoadCheck"},
    {value: false, label: "This is unchecked on load", id: "keyLoadUncheck"}
  ],
  fruits: [
    {value: "", label: "Pick a fruit", id: "keyFruit"}
  ],
  fruitOptions: [
    {optionValue: "apple", optionDisplay: "Apple"},
    {optionValue: "pear", optionDisplay: "pear"},
    {optionValue: "grape", optionDisplay: "grape"},
    {optionValue: "orange", optionDisplay: "Orange"}

  ]
}

Vue.config.productionTip = false

new Vue({
  data: data,
  render: h => h(App),
}).$mount('#app')
