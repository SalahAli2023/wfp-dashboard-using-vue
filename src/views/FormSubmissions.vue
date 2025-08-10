<template>
    <DataTable :columns="['name', 'email', 'message']" storageKey="formSubmissions" />
</template>

<script>
import DataTable from '../components/DataTable.vue'

export default {
    components: { DataTable }
}
</script>
