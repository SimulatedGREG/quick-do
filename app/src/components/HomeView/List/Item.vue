<style lang="scss" scoped>
  div {
    background-color: rgba(#16a085, .1);
    border: solid 1px rgba(#16a085, .15);
    border-radius: 3px;
    max-height: 49px;
    padding: 14px 10px;
    transition: background 70ms ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: rgba(#16a085, .2);
    }

    input {
      display: inline-block;
      margin: 0 8px 0 6px;
    }
  }
</style>

<template>
  <div>
    <input type="checkbox">
    <span>Take out the trash</span>
  </div>
</template>
