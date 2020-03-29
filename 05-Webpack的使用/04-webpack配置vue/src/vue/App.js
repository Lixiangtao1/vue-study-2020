export default {
    template:`
        <div>
            <h2>{{msg}}</h2>
            <button @click="btnClick">按钮</button>
        </div>
    `,
    data () {
        return {
            msg: 'Hello world!'
        }
    },
    methods: {
        btnClick () {
            this.msg = 'hahahah';
        } 
    }
}