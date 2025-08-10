<template>
    <div class="card p-6 rounded shadow space-y-4">
        <h2 class="text-lg font-bold">Settings</h2>
        <div class="flex gap-3">
            <button @click="toggleTheme" class="btn-primary px-4 py-2 rounded">
                Toggle Theme
            </button>
            <button @click="resetData" class="bg-red-500 text-white px-4 py-2 rounded">
                Reset Site Data
            </button>
            <button @click="clearStorage" class="bg-yellow-500 text-white px-4 py-2 rounded">
                Clear Storage
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            toggleTheme() {
                document.documentElement.classList.toggle('dark-theme')
                const isDark = document.documentElement.classList.contains('dark-theme')
                localStorage.setItem('theme', isDark ? 'dark' : 'light')
            },
            resetData() {
                localStorage.clear()
                window.location.reload()
            },
            clearStorage() {
                localStorage.clear()
                alert('LocalStorage cleared')
            }
        }
    }
</script>
