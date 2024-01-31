<template>
    <div :class=" `task ${task.completed ? 'is-complete' : ''}` ">
        <div class="content">{{ task.content }}</div>
        <div class="buttons">
            <button @click="toggleTask">{{ task.completed ? 'Undo' : 'Done' }}</button>
            <button @click="removeTask" class="delete">Delete</button>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'Task',
    props: {
      task: {
        type: Object,
        required: true
      }
    },
    methods: {
        toggleTask () {
            this.$store.commit('toggleTask', this.task)
        },
        removeTask () {
            this.$store.commit('removeTask', this.task)
        }
    }
  }
</script>