let api = new Vue({
    el: '#api',
    data: {
        username: '',
        input: '',
        select: '',
        jsonSource: 'You\'ve not request any API.',
        isJSONParsed: false,
        loadingJSON: false,
        loadingUser: true,
        parsedJSONTable : [],
        parsingErrorMsg : 'No valid JSON to parse.',
        apiType : 0, // 0 for invalid, 1 for people, 2 for planets, 3 for starships
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
            window.location.href = 'index.html';
        },
        toProfile: function() {
            window.location.href = 'profile.html';
        },
        onSearch: function() {
            if (this.loadingJSON === false) {
                this.loadingJSON = true;
                axios.get('/' + this.input)
                    .then(function (response) {
                        if (response.status != 200) {
                            this.$message.error('Server error: ' + response.statusText);
                            this.jsonSource = 'Error'
                            this.isJSONParsed = false;
                            this.parsingErrorMsg = 'No valid JSON to parse.'
                            return;
                        }

                        this.jsonSource = JSON.stringify(response.data, null, 4)
                        if (username !== '') {
                            this.$message('Please wait, parsing JSON...')
                            this.isJSONParsed = false;
                            this.parsingErrorMsg = 'Parsing...'
                            parseJSON();
                            this.isJSONParsed = true;
                        }
                        else {
                            this.$message.warning('Login to view the parsed JSON')
                            this.isJSONParsed = false;
                            this.parsingErrorMsg = 'Login to view the parsed JSON.';
                        }
                    })
                    .catch(function (error) {
                        this.$message.error('Connection failed: server does not response');
                        this.jsonSource = 'Error'
                        this.isJSONParsed = false;
                        this.parsingErrorMsg = 'No valid JSON to parse.'
                    })
                    .then(function() {
                        this.loadingJSON = false;
                    });
            }
        },
        parseJSON: function () {
            let apiTypeKey = this.input.split('/')[0];
            switch(apiTypeKey) {
                case 'people':
                    this.apiType = 1;
                    break;
                case 'planets':
                    this.apiType = 2;
                    break;
                case 'starships':
                    this.apiType = 3;
                    break;
                default:
                    this.apiType = 0;
            }
            if (jsonSource.count != undefined) {
                // Parse Page of Objects //
                this.parsedJSONTable = jsonSource.results;
            }
            else {
                this.parsedJSONTable = [jsonSource];
            }
        }
    },
    computed: { },
    mounted: function () {
        // axios.post('/user/get', {})
        //     .then(function (response) {
        //         if (response.data.status === 'OK' && response.data.username !== undefined) {
        //             this.$message.success('Welcome, ' + response.data.username);
        //             this.username = response.data.username;
        //             loadingUser = false;
        //         }
        //         else if (response.data.status === "Failed" && response.data.message !== undefined) {
        //             this.$message.success('Welcome, visitor');
        //             this.username = '';
        //             loadingUser = false;
        //         }
        //         else {
        //             this.$message.error('Unknown error, try refreshing this page');
        //         }
        //     })
        //     .catch(function (error) {
        //         this.$message.error('Connection failed: server does not response');
        //         console.log(error)
        //     })

        // test module //
        this.$message.success('Welcome, visitor');
        this.username = '';
        this.loadingUser = false;
    }
});