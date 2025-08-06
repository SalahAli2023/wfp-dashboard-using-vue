<template>
    <a href="#" class="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50">
        <div class="p-3 mb-2 rounded-full" :class="iconBgClass">
        <i class="fas" :class="iconClass"></i>
        </div>
        <span class="text-sm font-medium text-gray-700">{{ label }}</span>
    </a>
</template>

<script setup>
import { computed } from 'vue'

    const props = defineProps({
    icon: String,
    label: String,
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