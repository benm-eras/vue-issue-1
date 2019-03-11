<template>
  <div ref="root">
    <bar ref="child">
      <div ref="defaultSlot"></div>

      <template v-slot:someName>
        <div ref="namedSlot"></div>
      </template>
    </bar>
  </div>
</template>

<script>
import Bar from "./Bar";

export default {
  name: 'Foo',
  components: {Bar}
}
</script>
