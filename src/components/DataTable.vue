<template>
    <div class="card p-4 rounded shadow">
        <!-- Table Header with Search -->
        <div class="flex justify-between items-center mb-4">
            <input
                v-model="searchQuery"
                placeholder="Search..."
                class="border px-3 py-2 rounded"
            />
            <button @click="openAddModal" class="px-4 btn-primary py-2 rounded">Add New</button>
        </div>

        <!-- Table -->
        <table class="w-full border-collapse">
            <thead>
                <tr>
                    <th v-for="col in columns" :key="col" class="border-b p-2 text-left">{{ col }}</th>
                    <th class="border-b p-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(item, idx) in paginatedData"
                :key="idx"
                class="hover:text-text-dark hover:bg-secondary"
                >
                    <td v-for="col in columns" :key="col" class="p-2 border-b">{{ item[col] }}</td>
                    <td class="p-2 border-b">
                        <button @click="editItem(idx)" class="text-blue-500 mr-2">Edit</button>
                        <button @click="deleteItem(idx)" class="text-red-500">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Pagination -->
        <div class="flex justify-end mt-4 space-x-2">
            <button class="hover:text-white rounded hover:bg-primary" @click="prevPage" :disabled="page === 1"><<</button>
            <span>Page {{ page }} of {{ totalPages }}</span>
            <button class="hover:text-white rounded hover:bg-primary" @click="nextPage" :disabled="page === totalPages">>></button>
        </div>

        <!-- Add/Edit Modal -->
        <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div class="card p-6 w-1/3">
                <h2 class="text-lg font-bold mb-4">{{ editIndex !== null ? 'Edit Item' : 'Add Item' }}</h2>
                <form @submit.prevent="saveItem">
                    <div v-for="col in columns" :key="col" class="mb-3">
                        <label class="block mb-1">{{ col }}</label>
                        <input v-model="form[col]" required class="border px-3 py-2 rounded w-full" />
                    </div>
                    <div class="flex justify-end space-x-2">
                        <button type="button" @click="closeModal">Cancel</button>
                        <button type="submit" class="btn-primary px-4 py-2 rounded">Save</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['columns', 'storageKey'],
            data() {
                return {
                items: [],
                searchQuery: '',
                page: 1,
                perPage: 5,
                showModal: false,
                form: {},
                editIndex: null
                }
        },
        computed: {
            filteredData() {
            return this.items.filter(item =>
                Object.values(item).some(val => val.toString().toLowerCase().includes(this.searchQuery.toLowerCase()))
            )
            },
            totalPages() {
                return Math.ceil(this.filteredData.length / this.perPage)
            },
            paginatedData() {
                const start = (this.page - 1) * this.perPage
                return this.filteredData.slice(start, start + this.perPage)
            }
        },
        mounted() {
            const saved = localStorage.getItem(this.storageKey)
            if (saved) this.items = JSON.parse(saved)
        },
        methods: {
            prevPage() { if (this.page > 1) this.page-- },
            nextPage() { if (this.page < this.totalPages) this.page++ },
            openAddModal() {
                this.form = {}
                this.editIndex = null
                this.showModal = true
            },
            editItem(index) {
                this.form = { ...this.items[index] }
                this.editIndex = index
                this.showModal = true
            },
            deleteItem(index) {
                this.items.splice(index, 1)
                localStorage.setItem(this.storageKey, JSON.stringify(this.items))
            },
            saveItem() {
                if (this.editIndex !== null) {
                    this.items[this.editIndex] = { ...this.form }
                } else {
                    this.items.push({ ...this.form })
                }
                localStorage.setItem(this.storageKey, JSON.stringify(this.items))
                this.showModal = false
            },
            closeModal() {
                this.showModal = false
            }
        }
    }
</script>
