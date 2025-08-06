<template>
    <div class="flex h-screen overflow-hidden bg-bg-color">
      
      <!-- Mobile Sidebar -->
      <MobileSidebar :mobile-open ="mobileSidebarOpen"  @close="mobileSidebarOpen = false"/>

      <!-- Desktop Sidebar -->
      <Sidebar />

      <!-- Main Content -->
      <div class="flex flex-col flex-1 overflow-hidden">
        <Header/>
      </div>
    </div>
</template>

<script setup>
  import Sidebar from './components/dashboard/Sidebar.vue'
  import MobileSidebar from './components/dashboard/Sidebar.vue'
  import Header from './components/dashboard/Header.vue'
</script>


<!-- <style scoped></style> -->
