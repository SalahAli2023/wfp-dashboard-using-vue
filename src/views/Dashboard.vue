<template>
    <div class="space-y-6">
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
            
        <!-- Recent Activities and Quick Actions -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
            <!-- Recent Activities -->
            <div class="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
                <div class="px-6 py-4 border-b border-gray-200">
                    <h2 class="text-lg font-semibold text-gray-800">Recent Activities</h2>
                </div>
                <div class="divide-y divide-gray-200">
                    <ActivityItem 
                    icon="donate" 
                    title="New donation received" 
                    description="$5,000 from John Doe for Food Security Project" 
                    time="2 hours ago" 
                    color="blue"
                    />
                    <ActivityItem 
                    icon="user-plus" 
                    title="New volunteer registered" 
                    description="Sarah Johnson joined the Education Program" 
                    time="5 hours ago" 
                    color="green"
                    />
                    <ActivityItem 
                    icon="project-diagram" 
                    title="Project milestone reached" 
                    description="Women's Empowerment Project helped 500 women this month" 
                    time="1 day ago" 
                    color="orange"
                    />
                    <ActivityItem 
                    icon="calendar-check" 
                    title="Event completed" 
                    description="Fundraising Gala raised $250,000" 
                    time="2 days ago" 
                    color="purple"
                    />
                </div>
                <div class="px-6 py-4 border-t border-gray-200 text-center">
                    <a href="#" class="text-sm font-medium text-wfp-blue hover:text-wfp-dark-blue">View all activities</a>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <div class="px-6 py-4 border-b border-gray-200">
                    <h2 class="text-lg font-semibold text-gray-800">Quick Actions</h2>
                </div>
                <div class="p-6 grid grid-cols-2 gap-4">
                    <QuickAction 
                    icon="plus" 
                    label="Add Project" 
                    color="blue"
                    />
                    <QuickAction 
                    icon="user-plus" 
                    label="Add Beneficiary" 
                    color="green"
                    />
                    <QuickAction 
                    icon="file-invoice-dollar" 
                    label="Create Report" 
                    color="orange"
                    />
                    <QuickAction 
                    icon="envelope" 
                    label="Send Newsletter" 
                    color="purple"
                    />
                </div>
            </div>
        </div>
        <!-- Projects Overview -->
        <ProjectTable />
    </div>
</template>

<script setup>
    import StatsCard from '@/components/dashbordHome/StatsCard.vue'
    import ActivityItem from '@/components/dashbordHome/ActivityItem.vue'
    import QuickAction from '@/components/dashbordHome/QuickAction.vue'
    import ProjectTable from '@/components/dashbordHome/ProjectTable.vue'
    import { ref } from 'vue'
    const mobileSidebarOpen = ref(false);
</script>