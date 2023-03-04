<template>
  <app-base-form-field :title="title" :error="error">
    <textarea
      v-model="dataValue"
      class="form__input form__input--area"
      name="comments"
      :placeholder="placeholder"
    ></textarea>
  </app-base-form-field>
</template>

<script>
import AppBaseFormField from '@/components/BaseFormField.vue'

export default {
  name: 'AppBaseFormTextArea',

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
