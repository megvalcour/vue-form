import Vue from 'vue'
import App from './App.vue'

var data = {
  fields: [
    {value: "Aeryn", label: "First Name", type: "text", id: "keyFirstName"},
    {value: "Sun", label: "Last Name", type: "text", id: "keyLastName"},
    {value: "", label: "Email", type: "email", id: "keyEmail"},
    {value: "", label: "Phone", type: "phone", id: "keyPhone"},
    {value: "", label: "Website", type: "url", id: "keyWebsite"}
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
    {value: ["go"], label: "Pick multiple books", id: "keyBooks"}
  ],
  bookSingle: [
    {value: "", label: "Favorite Book", id: "keyFavoriteBook"},
    {value: "", label: "Least Favorite Book", id: "keyLeastFavoriteBook"}

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
