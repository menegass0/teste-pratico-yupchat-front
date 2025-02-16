<script setup>
import { ref } from 'vue'
import Login from '../components/form/Login.vue'

const errorMessage = ref('')

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
      } else {
        errorMessage.value = data.message
      }
    })
}

const dismissAlert = () => {
  console.log('qaaaaaaaaa')
  errorMessage.value = ''
}
</script>

<template>
  <main>
    <Login :handleSubmit :errorMessage @dismissAlert="dismissAlert" />
  </main>
</template>
