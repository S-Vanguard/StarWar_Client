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
            let errorMessage = this.check();
            if (errorMessage !== "") {
                this.$message.error(errorMessage);
                return;
            }
            if (this.isSignUp === true) {
                axios.post('/sign_up', {
                    username: this.form.username,
                    password: this.form.password,
                    email: this.form.email
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    this.$message.error('连接失败：服务器无响应');
                });
            }
            else {
                axios.post('/sign_up', {
                    username: this.form.username,
                    password: this.form.password,
                    email: this.form.email
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    this.$message.error('连接失败：服务器无响应');
                });
            }
        },
        onExchange: function() {
            this.isSignUp = !this.isSignUp;
        },
        toVisitor: function() {
            window.location.href = './swapi.html';
        },
        check: function() {
            if (this.form.username === "") {
                return "用户名不能为空";
            }
            if (this.form.password === "") {
                return "密码不能为空";
            }
            if (this.isSignUp && this.form.password !== this.form.confirmPsd) {
                return "两次输入的密码不一致";
            }
            if (this.isSignUp && this.form.email === "") {
                return "邮箱不能为空";
            }
            return "";
        }
    },
    computed: {},
});