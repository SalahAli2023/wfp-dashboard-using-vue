<template>
    <div class="flex h-screen overflow-hidden">
        <!-- Mobile Sidebar -->
        <MobileSidebar :mobile-open ="mobileSidebarOpen"  @close="mobileSidebarOpen = false"/>

        <!-- Desktop Sidebar -->
        <Sidebar />

        <!-- Main Content -->
        <div class="flex flex-col flex-1 overflow-hidden">
            <Header @openMobileSidebar="mobileSidebarOpen=!mobileSidebarOpen"/>
        
            <main class="flex-1 overflow-auto p-4 bg-bg">
                <router-view />
            </main>
        </div>
    </div>       
</template>

<script setup>
    import MobileSidebar from '@/components/dashbordHome/MobileSidebar.vue';
    import Sidebar from '@/components/dashbordHome/Sidebar.vue';
    import Header from '@/components/dashbordHome/Header.vue';
    import { ref } from 'vue'
    const mobileSidebarOpen = ref(false);
    
</script>
<script>
export default {
        components: {MobileSidebar, Sidebar, Header }
    }
</script>
