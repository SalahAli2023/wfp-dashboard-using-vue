<template>
    <header class="flex items-center justify-between h-16 px-4  bg-nav-bg border-b  border-border-color">
        <div class="flex items-center">
        <button class="md:hidden text-gray-500 focus:outline-none" @click="openMobileSidebar">
            <i class="fas fa-bars"></i>
        </button>
        <h1 class="ml-4 text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>
        <div class="flex items-center space-x-4">
        <a href="#" class="p-2 text-gray-500 rounded-full hover:bg-gray-100">
            <i class="fas fa-home"></i>
        </a>
        <button class="p-2 text-gray-500 rounded-full hover:bg-gray-100">
            <i class="fas fa-bell"></i>
        </button>
        <button class="p-2 text-gray-500 rounded-full hover:bg-gray-100">
            <i class="fas fa-envelope"></i>
        </button>

        <div class="relative">
            <button class="flex items-center space-x-2 focus:outline-none" @click="toggleUserMenu">
            <img class="w-8 h-8 rounded-full" src="/src/assets/images/salah.jpg" alt="Admin">
            <span class="text-sm font-medium">Admin User</span>
            </button>
            <div class="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5" 
                v-show="isUserMenuOpen" @click.stop>
            <div class="py-1" role="none">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
            </div>
            </div>
        </div>
        </div>
    </header>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    const isUserMenuOpen = ref(false)
    const mobileSidebar = ref(null)

    const toggleUserMenu = () => {
    isUserMenuOpen.value = !isUserMenuOpen.value
    }

    const closeUserMenu = (event) => {
    if (!event.target.closest('.relative')) {
        isUserMenuOpen.value = false
    }
    }

    const openMobileSidebar = () => {
    mobileSidebar.value.openSidebar()
    }

    onMounted(() => {
    document.addEventListener('click', closeUserMenu)
    })

    onUnmounted(() => {
    document.removeEventListener('click', closeUserMenu)
    })

    // This will be set by the parent component
    defineExpose({
    setMobileSidebarRef: (ref) => {
        mobileSidebar.value = ref
    }
    })
</script>