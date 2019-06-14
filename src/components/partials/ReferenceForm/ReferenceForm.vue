<template>
  <form @submit.prevent="saveReference">
    <input ref="refinput" type="text" v-model="url">
    <input type="submit" value="Add Reference">
  </form>
</template>

<script src="./ReferenceForm.js"></script>