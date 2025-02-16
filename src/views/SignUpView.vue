<script setup>
import SignUp from '@/components/form/SignUp.vue'
import { ref } from 'vue'

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
    <SignUp :handleSubmit :errorMessage @dismissAlert="dismissAlert" />
  </main>
</template>
