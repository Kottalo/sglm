<script setup lang="ts">
import socket from 'socket.io-client'
import { onMounted } from 'vue'

const socketInstance = socket('http://localhost:3000')
onMounted(() => {
  socketInstance.on('connect', () => {
    console.log('Connected to server')
  })

  socketInstance.on('disconnect', () => {
    console.log('Disconnected from server')
  })
})
</script>

<template>
  <button class="btn">Default</button>
</template>

<style scoped></style>
