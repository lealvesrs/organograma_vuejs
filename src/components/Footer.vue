<template>
  <v-footer height="40" app class="d-flex justify-space-between">
    <div>
      <a v-for="item in items" :key="item.title" :href="item.href" :title="item.title"
        class="d-inline-block mx-2 social-link" rel="noopener noreferrer" target="_blank">
        <v-icon :icon="item.icon" :size="20" />
      </a>
    </div>

    <div class="text-caption text-disabled">
      &copy; {{ (new Date()).getFullYear() }} lealvesrs
    </div>
  </v-footer>
</template>

<script setup>
const items = [
  {
    title: 'Email',
    icon: `mdi-email`,
    href: 'mailto:leticiadeoliveira.corp@gmail.com?subject=Gostei do seu organograma, Letícia!',
  },
  {
    title: 'LinkedIn',
    icon: 'mdi-linkedin',
    href: 'https://www.linkedin.com/in/leticia-deoliveira-corp',
  },
  {
    title: 'GitHub',
    icon: `mdi-github`,
    href: 'https://github.com/lealvesrs',
  }
]
</script>

<style scoped lang="scss">
.social-link :deep(.v-icon) {
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  text-decoration: none;
  transition: .2s ease-in-out;

  &:hover {
    color: #5C6BC0;
  }
}
</style>
