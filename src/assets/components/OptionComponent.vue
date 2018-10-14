<template>
  <div class="ml-10 pb-4">
    <label for="radio-option" class="text-platinum">
      <input id="radio-option" class="form-radio bg-platinum" type="radio" :name="questionId" 
      :value="option.id"
      :checked="questionChange"
        @click="pickedEvent">
      {{option.title}}
    </label>
  </div>
</template>

<script>
  export default {
    props: ['option', 'questionId', 'answer', 'questionChange'],
    methods: {
      pickedEvent() {
        this.$emit('picked');
      }
    }
  }

</script>

<style>

</style>
