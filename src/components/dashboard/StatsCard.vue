<template>
    <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
        <div>
            <p class="text-sm font-medium text-gray-500">{{ title }}</p>
            <p class="text-3xl font-bold" :class="textColorClass">{{ value }}</p>
        </div>
        <div class="p-3 rounded-full" :class="iconBgClass">
            <i class="fas" :class="iconClass"></i>
            <!-- <i class="fas" :class="iconClass" :class="iconColorClass"></i> -->
        </div>
        </div>
        <p class="mt-2 text-sm" :class="trendColorClass">
        <i class="fas" :class="trendIconClass"></i> {{ trendValue }}
        </p>
    </div>
</template>

<script setup>
import { computed } from 'vue'

    const props = defineProps({
    title: String,
    value: String,
    icon: String,
    trend: {
        type: String,
        validator: value => ['up', 'down'].includes(value)
    },
    trendValue: String,
    color: {
        type: String,
        validator: value => ['blue', 'orange', 'green', 'purple'].includes(value)
    }
    })

    const colorClasses = {
    blue: {
        text: 'text-wfp-blue',
        bg: 'bg-blue-100',
        icon: 'text-wfp-blue'
    },
    orange: {
        text: 'text-wfp-orange',
        bg: 'bg-orange-100',
        icon: 'text-wfp-orange'
    },
    green: {
        text: 'text-green-600',
        bg: 'bg-green-100',
        icon: 'text-green-600'
    },
    purple: {
        text: 'text-purple-600',
        bg: 'bg-purple-100',
        icon: 'text-purple-600'
    }
}

const textColorClass = computed(() => colorClasses[props.color].text)
const iconBgClass = computed(() => colorClasses[props.color].bg)
const iconColorClass = computed(() => colorClasses[props.color].icon)
const iconClass = computed(() => `fa-${props.icon} text-xl`)

const trendColorClass = computed(() => props.trend === 'up' ? 'text-green-600' : 'text-red-600')
const trendIconClass = computed(() => props.trend === 'up' ? 'fa-arrow-up mr-1' : 'fa-arrow-down mr-1')
</script>