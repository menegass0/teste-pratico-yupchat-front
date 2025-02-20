<script setup>
import { defineProps } from 'vue'
import InputGroup from './InputGroup.vue'
import FormCard from './FormCard.vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['handleSubmit', 'errorMessage'])
</script>

<script></script>

<template>
  <FormCard
    title="Login"
    action="Login"
    :handleSubmit
    :errorMessage
    @dismissAlert="$emit('dismissAlert')"
  >
    <template #form>
      <InputGroup class="bi-envelope-fill">
        <input type="email" name="email" class="form-control" placeholder="E-mail" required />
      </InputGroup>
      <InputGroup class="bi-key-fill">
        <input type="password" name="password" class="form-control" placeholder="Senha" required />
      </InputGroup>
    </template>
    <template #extra>
      <p class="text-center">
        Ainda Não Possui Uma Conta?<RouterLink to="signup">Cadastre-se Aqui!</RouterLink>
      </p>
    </template>
  </FormCard>
</template>


