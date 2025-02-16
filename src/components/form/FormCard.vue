<script>
export default {
  props: ['title', 'action', 'handleSubmit', 'errorMessage'],

  methods: {
    dismissAlert() {
      this.$emit('dismissAlert')
    },
  },
}
</script>

<template>
  <div class="card p-3 bg-white shadow" id="card-form">
    <div class="card-body d-flex gap-3 flex-column justify-content-center">
      <h1 class="text-center">{{ title }}</h1>
      <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ errorMessage }}
        <button
          type="button"
          class="btn btn-close"
          @click="dismissAlert"
          aria-label="Close"
        ></button>
      </div>
      <form class="d-flex flex-column gap-3" @submit="handleSubmit">
        <slot name="form"> </slot>
        <button class="btn btn-primary">{{ action }}</button>
      </form>
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none;
}

.btn:focus,
.btn:active {
  outline: none !important;
  box-shadow: none;
}
</style>
