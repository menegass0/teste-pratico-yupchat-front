<script >
export default{
    props: ['title', 'action']
}
</script>

<template>
    <div class="card p-3 bg-white shadow" id="card-form">
        <div class="card-body d-flex gap-3 flex-column justify-content-center">
            <h1 class="text-center">{{ title }}</h1>
            <div class="d-flex flex-column gap-3">
                <slot name="form">

                </slot>
                <button class="btn btn-primary">{{ action }}</button>
            </div>
            <slot name="extra"></slot>
        </div>
    </div>
</template>

<style>
a{
    text-decoration: none;
}
</style>