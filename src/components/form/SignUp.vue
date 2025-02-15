<script setup>
import InputGroup from './InputGroup.vue'
import FormCard from './FormCard.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <FormCard title="Cadastro" action="Cadastre-se">
    <template #form>
      <InputGroup class="bi-person-fill">
        <input type="text" class="form-control" placeholder="Nome de Usuário" />
      </InputGroup>
      <InputGroup class="bi-envelope-fill">
        <input type="email" class="form-control" placeholder="E-mail" />
      </InputGroup>
      <InputGroup class="bi-key-fill">
        <input type="password" class="form-control" placeholder="Senha" />
      </InputGroup>
      <InputGroup class="bi-key-fill">
        <input type="password" class="form-control" placeholder="Confirmar Senha" />
      </InputGroup>
    </template>
    <template #extra>
      <p class="text-center">
        Já Possui Uma Conta?<RouterLink to="login">Clique Aqui Para Entrar!</RouterLink>
      </p>
    </template>
  </FormCard>
</template>
