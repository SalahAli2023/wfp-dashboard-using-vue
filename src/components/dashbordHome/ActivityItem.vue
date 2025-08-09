<template>
    <div class="p-6 hover:bg-gray-50">
        <div class="flex items-start">
        <div class="flex-shrink-0 p-2 rounded-full" :class="iconBgClass">
            <i class="fas" :class="iconClass"></i>
        </div>
        <div class="ml-4">
            <p class="text-sm font-medium text-gray-900">{{ title }}</p>
            <p class="text-sm text-gray-500">{{ description }}</p>
            <p class="mt-1 text-xs text-gray-400">{{ time }}</p>
        </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'

    const props = defineProps({
    icon: String,
    title: String,
    description: String,
    time: String,
    color: {
        type: String,
        validator: value => ['blue', 'orange', 'green', 'purple'].includes(value)
    }
    })

    const colorClasses = {
    blue: {
        bg: 'bg-blue-100',
        icon: 'text-wfp-blue'
    },
    orange: {
        bg: 'bg-orange-100',
        icon: 'text-wfp-orange'
    },
    green: {
        bg: 'bg-green-100',
        icon: 'text-green-600'
    },
    purple: {
        bg: 'bg-purple-100',
        icon: 'text-purple-600'
    }
}

const iconBgClass = computed(() => colorClasses[props.color].bg)
const iconClass = computed(() => `fa-${props.icon} ${colorClasses[props.color].icon}`)
</script>