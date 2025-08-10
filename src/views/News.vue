<template>
    <DataTable :columns="['title', 'author']" storageKey="news" />
</template>

<script>
import DataTable from '../components/DataTable.vue'

export default {
    components: { DataTable }
}
</script>
