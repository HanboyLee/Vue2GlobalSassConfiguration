<template>
    <div class="hello">
        <ElButton type="primary">按鈕</ElButton>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
    background: #fff;
}
</style>
