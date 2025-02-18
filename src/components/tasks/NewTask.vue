<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const isLoading = ref(false)

const handleSubmit = (event) => {
  isLoading.value = true
  event.preventDefault()
  store.dispatch('tasks/addTask', event.target).then(() => {
    isLoading.value = false
  })
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <form class="row align-items-center gy-2" @submit="handleSubmit">
        <div class="col-md-8 order-1">
          <input
            type="text"
            class="form-control"
            id="title"
            name="title"
            placeholder="Título da Tarefa"
            required
          />
        </div>

        <div class="col-md-4 order-3 order-md-2">
          <div class="d-flex gap-2">
            <div class="flex-grow-1">
              <select class="form-select" name="status" id="statusSelect">
                <option value="em andamento">Em Andamento</option>
                <option value="concluida">Concluída</option>
                <option value="pendente">Pendente</option>
              </select>
            </div>
            <div class="d-flex">
              <button v-if="!isLoading" class="btn btn-success">
                <i class="bi bi-plus-lg"></i>
              </button>
              <button v-else class="btn btn-success" type="button" disabled>
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-12 order-2 order-md-3">
          <textarea
            class="form-control"
            name="description"
            placeholder="Descrição da Tarefa"
            required
          ></textarea>
        </div>
      </form>
    </div>
  </div>
</template>
