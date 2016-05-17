<style lang="scss" scoped>
  div:first-of-type { background-color: #16a085; }

  span {
    color: rgba(#fff, .9);
    display: inline-block;
    font-size: 16px;
    padding: 8px 12px;
    width: 100%;

    i {
      float: right;
      font-size: 19px;
      vertical-align: bottom;

      &:hover {
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>

<template>
  <div>
    <span>Quick-Do<i class="material-icons">settings</i></span>
  </div>
</template>
