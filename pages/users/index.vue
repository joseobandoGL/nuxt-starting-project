<template>
    <h1>Please enter an id and click the button</h1>
</template>

<script>
export default {
    data() {
        return {
            userId: ''
        }
    },
    methods: {
        onLoadUser() {
            this.$router.push(`/users/${this.userId}`)
        }
    }
}
</script>
