<template>
    <div class="column">
        <div class="link" :style="{ backgroundColor: item.color}">
        <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
.link {
    /* max-width: 20rem; */
    height: 20rem;
}
</style>
