import Vue from 'vue'
import App from './App.vue'

var data = {
  fields: [
    {value: "Aeryn", label: "First Name", id: "keyFirstName"},
    {value: "Sun", label: "Last Name", id: "keyLastName"},
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
    {optionValue: "pear", optionDisplay: "Pear"},
    {optionValue: "grape", optionDisplay: "Grape"},
    {optionValue: "orange", optionDisplay: "Orange"}
  ],
  books: [
    {value: ["go"], label: "Pick multiple books", id: "keyBook"}
  ],
  bookOptions: [
    {optionValue: "hp", optionDisplay: "Harry Potter"},
    {optionValue: "go", optionDisplay: "Good Omens"},
    {optionValue: "heart", optionDisplay: "The Heart is a Lonely Hunter"},
    {optionValue: "sk", optionDisplay: "Skinny Legs and All"},
    {optionValue: "js", optionDisplay: "Anything by Jose Saramago"},
    {optionValue: "tttc", optionDisplay: "The Things They Carried"},
    {optionValue: "foundation", optionDisplay: "The Foundation Trilogy"},
    {optionValue: "tsar", optionDisplay: "The Sun Also Rises"}
  ]
}

Vue.config.productionTip = false

new Vue({
  data: data,
  render: h => h(App),
}).$mount('#app')
