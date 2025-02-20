<script setup>
import SignUp from '@/components/form/SignUp.vue'
import { ref } from 'vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const errorMessage = ref('')
const isLoading = ref(false)

const handleSubmit = async (event) => {
  event.preventDefault()
  isLoading.value = true
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
        isLoading.value = false
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
    <SignUp :handleSubmit :errorMessage @dismissAlert="dismissAlert" :isLoading />
  </main>
</template>
