<script setup>
import { defineProps, ref, reactive } from 'vue'
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

const formData = reactive({
  id: props.id,
  title: props.title,
  description: props.description,
  status: props.status,
})

const updateTask = () => {
  isLoading.value = true
  store.dispatch('tasks/updateTask', formData).then(() => {
    isLoading.value = false
  })
}
</script>

<template>
  <div class="card-body">
    <form class="row align-items-center gy-2">
      <div class="col-md-8 order-1">
        <input
          type="text"
          class="form-control"
          id="title"
          @focusout="updateTask()"
          v-model="formData.title"
          :disabled="isLoading"
          placeholder="Título da Tarefa"
        />
      </div>

      <div class="col-md-4 order-3 order-md-2">
        <div class="d-flex gap-2">
          <div class="flex-grow-1">
            <select
              class="form-select"
              id="statusSelect"
              @focusout="updateTask(id)"
              v-model="formData.status"
              :disabled="isLoading"
            >
              <option value="em andamento">Em Andamento</option>
              <option value="concluida">Concluída</option>
              <option value="pendente">Pendente</option>
            </select>
          </div>
          <div class="d-flex">
            <button v-if="!isLoading" class="btn btn-danger" type="button" @click="removeTask(id)">
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
          @focusout="updateTask(id)"
          v-model="formData.description"
          :disabled="isLoading"
          placeholder="Descrição da Tarefa"
        ></textarea>
      </div>
    </form>
  </div>
</template>
/
