<style lang="scss" scoped>
  div { background-color: #1abc9c; }

  ul {
    align-items: flex-end;
    box-shadow: 0 0 32px 0 rgba(0, 0, 0, .1);
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
    transition: background 90ms ease-in-out;

    &:hover:not(.active) {
      background-color: rgba(#fff, .15);
      cursor: pointer;
    }

    &:after {
      background-color: #fff;
      bottom: 0;
      content: '';
      display: block;
      height: 4px;
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
      transition: all 90ms ease-in-out;
      width: 0;
    }

    &.active:after {
      width: 100%;
    }
  }
</style>

<template>
  <div>
    <ul>
      <li v-for="c in categories" @click="select(c)" v-bind:class="{ 'active': c === selected }">
        {{ c }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        categories: [
          'TODO',
          'DONE',
          'ALL'
        ]
      }
    },
    methods: {
      select (c) {
        this.$parent.selected = c
      }
    },
    props: ['selected']
  }
</script>
