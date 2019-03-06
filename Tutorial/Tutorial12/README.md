## VUE課程_Project12
component間要如何溝通

props中可放:

props: ['myName']

props: {
    myName: String
}

props: {
    myName: [String, Array]
}

component間parent to child 參數是另外指向一個pointer，所以在child中更動並不會影響到parent


$emit	用於子元件，向上傳遞事件與資料，事件可以自訂義。  例: this.$emit('子元件自訂事件',傳遞資料);
$event


$on	用於父層元件，接收事件。