Vue.component('my-slot', {
    template: `<div>
        <header>
            <slot name="header">HEADER</slot>
        </header>
        <div>
            <slot>MAIN</slot>
        </div>
        <footer>
            <slot name="footer">FOOTER</slot>
        </footer>
    </div>`
});

new Vue({
    el: '#app'
});