<template>
  <app-base-form-field :title="title" :error="error">
    <input
      v-model="dataValue"
      class="form__input"
      type="text"
      name="name"
      :placeholder="placeholder"
    />
  </app-base-form-field>
</template>

<script>
import AppBaseFormField from '@/components/BaseFormField.vue'

export default {
  name: 'AppBaseFormText',

  props: ['title', 'error', 'placeholder', 'value'],

  components: {AppBaseFormField},

  computed: {
    dataValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style></style>
