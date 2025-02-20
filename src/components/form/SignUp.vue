<script setup>
import InputGroup from './InputGroup.vue'
import FormCard from './FormCard.vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['handleSubmit', 'errorMessage', 'isLoading'])
</script>

<template>
  <FormCard
    title="Cadastro"
    action="Cadastre-se"
    :handleSubmit
    :errorMessage
    :isLoading
    @dismissAlert="$emit('dismissAlert')"
  >
    <template #form>
      <InputGroup class="bi-person-fill">
        <input type="text" name="name" class="form-control" placeholder="Nome de Usuário" />
      </InputGroup>
      <InputGroup class="bi-envelope-fill">
        <input type="email" name="email" class="form-control" placeholder="E-mail" />
      </InputGroup>
      <InputGroup class="bi-key-fill">
        <input type="password" name="password" class="form-control" placeholder="Senha" />
      </InputGroup>
      <InputGroup class="bi-key-fill">
        <input
          type="password"
          name="c_password"
          class="form-control"
          placeholder="Confirmar Senha"
        />
      </InputGroup>
    </template>
    <template #extra>
      <p class="text-center">
        Já Possui Uma Conta?<RouterLink to="login">Clique Aqui Para Entrar!</RouterLink>
      </p>
    </template>
  </FormCard>
</template>
