<script setup>
import Tasks from '@/components/tasks/Tasks.vue'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import NewTask from '@/components/tasks/NewTask.vue'

const store = useStore()
const router = useRouter()
const isLoading = ref(true)

const tasks = computed(() => store.getters['tasks/allTasks'])

onMounted(() => {
  store
    .dispatch('tasks/fetchTasks')
    .then(() => {
      isLoading.value = false
    })
    .catch((error) => {
      isLoading.value = false
      console.error('Error fetching tasks:', error)
      router.push({ name: 'login', query: { expired: true } })
    })
})
</script>

<template>
  <main>
    <Tasks v-if="!isLoading" :tasks />
    <div v-else class="d-flex flex-column justify-content-center align-items-start">
      <div class="spinner-border text-light" role="status"></div>
    </div>
  </main>
</template>

<style scoped></style>
