<script>
export default {
  props: {
    listCount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    filteredList() {
      const arr = ["one", "two", 3, 4, 5, 6, 7];
      return arr.slice(0, this.listCount);
    },
  },
};
</script>

<template>
  <div>
    <div v-for="item in filteredList" :key="item">{{ item }}</div>
  </div>
</template>
