<script setup lang="ts">
function toggleDark() {
  const isDark = document.documentElement.classList.toggle('dark')
  localStorage.setItem('color-schema', isDark ? 'dark' : 'light')
}
</script>

<template>
  <nav class="text-xl mt-6 inline-flex gap-2">
    <button class="icon-btn" @click="toggleDark()">
      <div class="i-carbon-sun dark:i-carbon-moon" />
    </button>
    <a href="https://github.com/elonehoo/point-line" target="_blank" class="icon-btn i-carbon-logo-github">
    </a>
  </nav>
</template>
