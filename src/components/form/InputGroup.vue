<script>
export default {
  props: ['class'],
}
</script>

<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text rounded-0 rounded-start"><i class="bi" :class></i></span>
    </div>

    <slot></slot>
  </div>
</template>
