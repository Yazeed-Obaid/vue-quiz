<template>
  <div class="progress-bar w-1/2 h-3 mb-16 rounded-full bg-silver">
    <span :style="{'width' :progressBarWidth + '%'}" class="progress-bar h-full rounded-full bg-silver-dark block">
    </span>
  </div>
</template>

<script>
  export default {
    props: ['progressBarWidth'],
    data: () => ({

    })
  }

</script>
