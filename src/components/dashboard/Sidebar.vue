<template>
    <aside class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64 bg-wfp-dark-blue text-white">
        <div class="flex items-center justify-center h-16 px-4 border-b border-blue-800">
            <img src="../assets/images/wfp-logo.svg" alt="WFP Logo" class="h-10 mr-2">
            <span class="text-xl font-bold">WFP Dashboard</span>
        </div>
        <div class="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
            <nav class="flex-1 space-y-2">
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
            <img class="w-10 h-10 rounded-full" src="../assets/images/salah.jpg" alt="Admin">
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
</script>