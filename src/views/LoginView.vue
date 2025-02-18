<script setup>
import { ref, onMounted } from 'vue'
import Login from '../components/form/Login.vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()

const errorMessage = ref('')

onMounted(() => {
  if (route.query.expired) {
    errorMessage.value = 'Seu token expirou. Por favor, faça login novamente.'
  }
})

const handleSubmit = async (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)

  fetch('http://127.0.0.1:8000/api/login', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem('user_token', data.data.original.access_token)
        router.push('/')
      } else {
        errorMessage.value = data.message
      }
    })
}

const dismissAlert = () => {
  errorMessage.value = ''
}
</script>

<template>
  <main>
    <Login :handleSubmit :errorMessage @dismissAlert="dismissAlert" />
  </main>
</template>
