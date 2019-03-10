export default {
    data() {
        return {
            clientWidth: 0,
        };
    },

    components: {},
    computed: {
        clientHeight() {
            return this.$store.state.WinHeight;
        }
    },
    mounted() {
        let that = this
        that.clientWidth = that.$store.state.WinWidth
    },
    watch: {
    },

    methods: {}
}