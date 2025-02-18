<script setup>
import NewTask from './NewTask.vue'
import TaskItem from './TaskItem.vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['tasks'])
</script>

<template>
  <div class="d-flex flex-column gap-3 teste">
    <h1 class="text-light text-center">Minhas tarefas</h1>
    <NewTask />
    <div class="card" v-for="task in tasks" key="task.id">
      <TaskItem
        :title="task.title"
        :status="task.status"
        :id="task.id"
        :description="task.description"
      />
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
