<template>
    <div>
        <div>記事コード：{{ aid }}</div>
        <div>{{ $route.name }}</div>
        <div>{{ $route.fullPath }}</div>
        <div>{{ $route.query }}</div>
        <div>{{ $route.hash }}</div>
        <div>{{ $route.matched }}</div>
        <div>{{ $route.redirectFrom }}</div>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: {
        aid: String
    }
}
</script>