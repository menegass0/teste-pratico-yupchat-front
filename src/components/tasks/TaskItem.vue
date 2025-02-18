<script setup>
import { defineProps, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const isLoading = ref(false)

const props = defineProps(['title', 'description', 'id', 'status'])

const removeTask = (id) => {
  isLoading.value = true
  store.dispatch('tasks/removeTask', id).then(() => {
    isLoading.value = false
  })
}
</script>

<template>
  <div class="card-body">
    <div class="row align-items-center gy-2">
      <div class="col-md-8 order-1">
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Título da Tarefa"
          :value="title"
        />
      </div>

      <div class="col-md-4 order-3 order-md-2">
        <div class="d-flex gap-2">
          <div class="flex-grow-1">
            <select class="form-select" id="statusSelect" :value="status">
              <option value="em andamento">Em Andamento</option>
              <option value="concluida">Concluída</option>
              <option value="pendente">Pendente</option>
            </select>
          </div>
          <div class="d-flex">
            <button v-if="!isLoading" class="btn btn-danger" @click="removeTask(id)">
              <i class="bi bi-trash"></i>
            </button>
            <button v-else class="btn btn-danger" type="button" disabled>
              <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-12 order-2 order-md-3">
        <textarea
          class="form-control"
          :value="description"
          placeholder="Descrição da Tarefa"
        ></textarea>
      </div>
    </div>
  </div>
</template>
/
