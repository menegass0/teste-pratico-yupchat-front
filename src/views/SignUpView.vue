<script setup>
import SignUp from '@/components/form/SignUp.vue'
import { ref } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const errorMessage = ref('')

const handleSubmit = async (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)

  fetch('http://127.0.0.1:8000/api/register', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log(data.message)
        router.push('/login')
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
  <main class="main-center">
    <SignUp :handleSubmit :errorMessage @dismissAlert="dismissAlert" />
  </main>
</template>
