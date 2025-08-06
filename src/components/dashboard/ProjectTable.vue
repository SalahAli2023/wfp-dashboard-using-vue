<template>
    <div class="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 class="text-lg font-semibold text-gray-800">Projects Overview</h2>
        <a href="#" class="text-sm font-medium text-wfp-blue hover:text-wfp-dark-blue">View all projects</a>
        </div>
        <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beneficiaries</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="project in projects" :key="project.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" :src="project.image" :alt="project.name">
                    </div>
                    <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ project.name }}</div>
                    <div class="text-sm text-gray-500">{{ project.category }}</div>
                    </div>
                </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" 
                        :class="statusClass(project.status)">
                    {{ project.status }}
                </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ project.beneficiaries || '-' }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ project.budget }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                    <div class="bg-wfp-blue h-2.5 rounded-full" :style="`width: ${project.progress}%`"></div>
                </div>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
    </template>

<script setup>
    const projects = [
        {
            id: 1,
            name: 'Food Security',
            category: 'Emergency Relief',
            image: '@/../src/assets/images/proj1.jpg',
            status: 'Active',
            beneficiaries: '8,742',
            budget: '$1.2M',
            progress: 75
        },
        {
            id: 2,
            name: "Women's Empowerment",
            category: 'Development',
            image: '@/../src/assets/images/proj2.jpg',
            status: 'Active',
            beneficiaries: '2,150',
            budget: '$450K',
            progress: 40
        },
        {
            id: 3,
            name: 'School Feeding',
            category: 'Education',
            image: '@/../src/assets/images/proj3.jpg',
            status: 'Planning',
            beneficiaries: null,
            budget: '$300K',
            progress: 15
        }
    ]

    const statusClass = (status) => {
        switch (status) {
            case 'Active':
            return 'bg-green-100 text-green-800'
            case 'Planning':
            return 'bg-yellow-100 text-yellow-800'
            case 'Completed':
            return 'bg-blue-100 text-blue-800'
            default:
            return 'bg-gray-100 text-gray-800'
        }
    }
</script>