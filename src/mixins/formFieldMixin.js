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
