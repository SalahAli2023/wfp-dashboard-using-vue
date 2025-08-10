

<template>
        
    <!-- Sidebar -->
    <aside class="hidden md:flex md:flex-shrink-0 text-text bg-wfp-blue ">
        <div class="flex flex-col w-64">
        <!-- Logo and Title -->
        <div class="flex items-center justify-center h-16 px-4 border-b border-blue-800">
            <img src="@/assets/images/wfp-logo.svg" alt="WFP Logo" class="h-8 mr-2">
            <span class="text-lg font-bold">WFP Dashboard</span>
        </div>
        
        <!-- Navigation -->
        <nav class="flex-1 px-4 py-4 overflow-y-auto">
            <ul class="space-y-2">
                <li v-for="item in navItems" :key="item.name">
                    <router-link 
                        :to="item.path"
                        class="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                        :class="[item.active ? 'bg-blue-700 text-text' : 'hover:bg-blue-700 text-text']"
                        >
                        <i :class="['fas', `fa-${item.icon}`, 'mr-3']"></i>
                        {{ item.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
        
        <!-- User Profile -->
        <div class="p-4 border-t border-blue-800">
            <div class="flex items-center">
            <img class="w-10 h-10 rounded-full" src="@/assets/images/salah.jpg" alt="Admin">
            <div class="ml-3">
                <p class="text-sm font-medium">Admin User</p>
                <p class="text-xs text-blue-200">admin@wfp.org</p>
            </div>
            </div>
        </div>
        </div>
    </aside>
</template>

<script setup>

    defineProps({
        mobileOpen: Boolean,
        visible:Boolean
    });

    defineEmits(['close']);

    // const navItems = [
    //     { name: 'Dashboard', path: '/dashboard', icon: 'tachometer-alt', active: true },
    //     { name: 'Beneficiaries', path: '/beneficiaries', icon: 'users', active: false },
    //     { name: 'Projects', path: '/projects', icon: 'project-diagram', active: false },
    //     { name: 'Donations', path: '/donations', icon: 'donate', active: false },
    //     { name: 'Reports', path: '/reports', icon: 'chart-line', active: false },
    //     { name: 'Settings', path: '/settings', icon: 'cog', active: false }
    // ];

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: 'tachometer-alt', active: true },
        { name: 'Projects', path: '/projects', icon: 'project-diagram', active: false },
        { name: 'news', path: '/news', icon: 'donate', active: false },
        { name: 'services', path: '/services', icon: 'chart-line', active: false },
        { name: 'forms', path: '/forms', icon: 'users', active: false },
        { name: 'Settings', path: '/settings', icon: 'cog', active: false }
    ];
</script>