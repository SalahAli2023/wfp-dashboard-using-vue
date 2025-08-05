<template>
    <div class="flex h-screen overflow-hidden bg-bg-color">
      <!-- Desktop Sidebar -->
      <Sidebar />
      
      <!-- Mobile Sidebar -->
      <!-- <MobileSidebar /> -->

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
