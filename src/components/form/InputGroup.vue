<script>
    export default{
        props : ['class']
    }
</script>

<template>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text"><i class='bi' :class></i></span>
        </div>

        <slot></slot>
    </div>
</template>