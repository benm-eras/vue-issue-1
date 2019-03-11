<template>
  <div>
    <slot></slot>
    <slot name="someName"></slot>
  </div>
</template>

<script>
export default {
  name: "Bar"
}
</script>
