let main = new Vue({
    el: '#main',
    data: {
        form: {
            username: '',
            password: '',
            confirmPsd: '',
            email: '',
        },     
        isSignUp: false,
    },
    methods: {
        onSubmit: function() {
            console.log('Sign In');
        },
        onExchange: function() {
            this.isSignUp = !this.isSignUp;
        },
    },
    computed: {},
});