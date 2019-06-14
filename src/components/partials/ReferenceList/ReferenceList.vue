<template>
  <div>
    <ul v-if="urls.length > 0">
      <li v-for="url in urls" v-bind:key="url">
        <reference-item :url="url"></reference-item>
      </li>
    </ul>
    <h4 v-if="urls.length === 0">Enter a reference URL</h4>
  </div>
</template >

<script src="./ReferenceList.js"></script>