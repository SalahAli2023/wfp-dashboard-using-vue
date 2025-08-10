<template>
    <DataTable :columns="['name', 'description']" storageKey="projects" />
</template>

<script>
import DataTable from '../components/DataTable.vue'

export default {
    components: { DataTable }
}
</script>
