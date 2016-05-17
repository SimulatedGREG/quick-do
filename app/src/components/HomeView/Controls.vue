<style lang="scss" scoped>
  div {
    background-color: #1abc9c;
  }

  ul {
    align-items: flex-end;
    display: flex;
    height: 51px;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    color: #fff;
    flex: 1;
    padding: 16px 0;
    position: relative;
    text-align: center;
    transition: background 150ms ease-in-out;

    &:hover {
      background-color: rgba(#fff, .15);
      cursor: pointer;
    }

    &.active:after {
      background-color: #fff;
      bottom: 0;
      content: '';
      display: block;
      height: 4px;
      position: absolute;
      width: 100%;
    }
  }
</style>

<template>
  <div>
    <ul>
      <li class="active">ALL</li>
      <li>WAITING</li>
      <li>DONE</li>
    </ul>
  </div>
</template>
