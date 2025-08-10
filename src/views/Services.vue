<template>
    <DataTable :columns="['serviceName', 'category']" storageKey="services" />
</template>

<script>
import DataTable from '../components/DataTable.vue'

export default {
    components: { DataTable }
}
</script>
