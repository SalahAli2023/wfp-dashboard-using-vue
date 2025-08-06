<template>
    <div  v-if="mobileOpen" class=" md:hidden fixed inset-0 z-40" @click="$emit('close')">
        <div class="fixed inset-0 bg-gray-600 bg-opacity-75" :class="{'opacity-100': mobileOpen, 'opacity-0': !mobileOpen}"></div>
        <div class="relative flex flex-col w-72 h-full bg-wfp-dark-blue transform transition-all duration-300 ease-in-out" 
            :class="{'translate-x-0': mobileOpen, '-translate-x-full': !mobileOpen}">
        <div class="flex items-center justify-between h-16 px-4 border-b border-blue-800">
            <div class="flex items-center">
                <img src="/src/assets/images/wfp-logo.svg" alt="WFP Logo" class="h-8 mr-2">
                <span class="text-lg text-white font-bold">WFP Dashboard</span>
            </div>
            <button class="text-white" @click="$emit('close')">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="flex-1 px-4 py-4 overflow-y-auto">
            <nav class="space-y-2">
                <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-700 text-white">
                    <i class="fas fa-tachometer-alt mr-3"></i>
                    Dashboard
                </a>
                <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-blue-700 text-white">
                    <i class="fas fa-users mr-3"></i>
                    Beneficiaries
                </a>
                <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-blue-700 text-white">
                    <i class="fas fa-project-diagram mr-3"></i>
                    Projects
                </a>
                <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-blue-700 text-white">
                    <i class="fas fa-donate mr-3"></i>
                    Donations
                </a>
                <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-blue-700 text-white">
                    <i class="fas fa-chart-line mr-3"></i>
                    Reports
                </a>
                <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-blue-700 text-white">
                    <i class="fas fa-cog mr-3"></i>
                    Settings
                </a>
            </nav>
        </div>
        <div class="p-4 border-t border-blue-800">
            <div class="flex items-center">
            <img class="w-10 h-10 rounded-full" src="/src/assets/images/salah.jpg" alt="Admin">
            <div class="ml-3">
                <p class="text-sm text-white font-medium">Admin User</p>
                <p class="text-xs text-blue-200">admin@wfp.org</p>
            </div>
            </div>
        </div>
        </div>
    </div>

</template>

<script setup>
    import { ref } from 'vue'

    defineProps({
        mobileOpen:Boolean
    })

    defineEmits(['close']);
</script>