<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input type="text" 
      v-model="newTask" 
      placeholder="Add a new task" 
      @keypress.enter="addTask" />
      <button @click="addTask">Add</button>
    </div>

    <div class="tasks">
      <Task
        v-for="(task, index) in $store.state.tasks"
        :key="index"
        :task="task" />
    </div>

  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      newTask: '',
    }
  },
  methods: {
    addTask () {
      if (this.newTask.trim() === '') return
      this.$store.commit('addTask', this.newTask)
      this.newTask = ''
    }
  },
  watch: {
      // whenever $store.state.tasks changes, this function will run
      '$store.state.tasks': {
          handler (tasks) {
              this.$store.commit('saveTasks')
          },
          deep: true
      }
  },
  mounted () {
      this.$store.commit('loadTasks')
  }
}
</script>
