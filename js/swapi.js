let api = new Vue({
    el: '#api',
    data: {
        input: '',
        select: '',
        apiOptions: [{
            value: '1',
            label: 'Person'
        }, {
            value: '2',
            label: 'Vehicle'
        }, {
            value: '3',
            label: 'Planet'
        }],
    },
    methods: {
        toGithub: function() {
            window.location.href = 'https://github.com/ServiceComputingVanguard';
        },
    },
    computed: {},
});