<script setup>
    import InputGroup from './InputGroup.vue'
    import FormCard from './FormCard.vue'
    import { RouterLink } from 'vue-router'
</script>

<template>
    <FormCard title="Login" action="Login">
        <template #form>
            <InputGroup class="bi-envelope-fill">
                <input type="email" class="form-control" placeholder="E-mail">
            </InputGroup>
            <InputGroup class="bi-key-fill">
                <input type="password" class="form-control" placeholder="Senha">
            </InputGroup>
        </template>
        <template #extra>
            <p class="text-center">Ainda Não Possui Uma Conta?<RouterLink to="signup">Cadastre-se Aqui!</RouterLink></p>
        </template>
    </FormCard>
</template>
