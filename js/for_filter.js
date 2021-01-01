new Vue({
    el: '#app',
    data: {
        books: [
            {
                isbn: 'aaaa',
                title: 'aaaa',
                price: '500'
            },
            {
                isbn: 'bbbb',
                title: 'bbbb',
                price: '100'
            },
            {
                isbn: 'cccc',
                title: 'cccc',
                price: '1000'
            }
        ]
    },
    computed: {
        expensiveBooks: function() {
            return this.books.filter(function(b) {
                return b.price >= 500;
            })
        }
    }
})