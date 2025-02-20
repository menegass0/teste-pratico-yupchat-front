<script setup>
import NewTask from './NewTask.vue'
import TaskItem from './TaskItem.vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['tasks', 'isLoading'])
</script>

<template>
  <div class="d-flex flex-column align-items-center gap-3 pt-5">
    <h1 class="text-light text-center">Minhas tarefas</h1>
    <NewTask />
    <div v-if="!isLoading" class="card" v-for="task in tasks" key="task.id">
      <TaskItem
        :title="task.title"
        :status="task.status"
        :id="task.id"
        :description="task.description"
      />
    </div>
    <div v-else class="spinner-div d-flex flex-column justify-content-center align-items-center pt-5">
      <div class="spinner-border text-light" role="status"></div>
    </div>
  </div>
</template>

<style scoped>
h1.title {
  margin-top: 100px;
}

@media (min-width: 1024px) {
  .card {
    width: 900px;
  }
}
</style>
