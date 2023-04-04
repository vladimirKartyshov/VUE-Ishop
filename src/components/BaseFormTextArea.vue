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
import formFieldMixin from '@/mixins/formFieldMixin'

export default {
  mixins: [formFieldMixin],
}
</script>

<style></style>
