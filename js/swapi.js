let api = new Vue({
    el: '#api',
    data: {
        username: '',
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
        tabPosition: 'left',
    },
    methods: {
        toIndex: function() {
            window.location.href = './index.html';
        },
        toGithub: function() {
            window.location.href = 'https://github.com/ServiceComputingVanguard';
        },
    },
    computed: {},
});