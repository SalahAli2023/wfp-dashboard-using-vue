<template>
    <div class="flex h-screen overflow-hidden bg-bg-color">
      <!-- Mobile Sidebar -->
      <MobileSidebar :mobile-open ="mobileSidebarOpen"  @close="mobileSidebarOpen = false"/>

      <!-- Desktop Sidebar -->
      <Sidebar />

      <!-- Main Content -->
      <div class="flex flex-col flex-1 overflow-hidden">
        <Header @openMobileSidebar="mobileSidebarOpen=!mobileSidebarOpen"/>
      
        <main class="flex-1 overflow-auto p-4 bg-gray-50">
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatsCard 
              title="Total Beneficiaries" 
              value="15,842" 
              icon="users" 
              trend="up" 
              trendValue="12.5% from last month" 
              color="blue"
            />
            <StatsCard 
              title="Active Projects" 
              value="24" 
              icon="project-diagram" 
              trend="up" 
              trendValue="3 new this month" 
              color="orange"
            />
            <StatsCard 
              title="Total Donations" 
              value="$2.4M" 
              icon="donate" 
              trend="up" 
              trendValue="8.2% from last month" 
              color="green"
            />
            <StatsCard 
              title="Volunteers" 
              value="342" 
              icon="hands-helping" 
              trend="down" 
              trendValue="2.3% from last month" 
              color="purple"
            />
          </div>
        </main>
      </div>
    </div>
</template>

<script setup>
    import MobileSidebar from './components/dashboard/MobileSidebar.vue'
    import Sidebar from './components/dashboard/Sidebar.vue'
    import Header from './components/dashboard/Header.vue'
    import StatsCard from './components/dashboard/StatsCard.vue'
    import { ref } from 'vue'
    const mobileSidebarOpen = ref(false);
    // const mobileSidebarOpen = false;
</script>


<!-- <style scoped></style> -->
