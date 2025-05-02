<template>
  <div class="plan-table">
    <h2>📅 План изучения {{ langName }}</h2>

    <table>
      <thead>
        <tr>
          <th>День</th>
          <th>Тема</th>
          <th>Задание</th>
          <th>Объяснение</th>
          <th>Пример</th>
          <th>Выполнено</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in planData"
          :key="item.day"
          :class="{ done: isCompleted(item.day) }"
        >
          <td>{{ item.day }}</td>
          <td>
            <strong>{{ item.theme }}</strong>
          </td>
          <td>{{ item.task }}</td>
          <td>{{ item.theory }}</td>
          <td>
            <code>{{ item.example }}</code>
          </td>
          <td style="text-align: center">
            <input
              type="checkbox"
              :checked="isCompleted(item.day)"
              @change="toggleComplete(item.day)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PlanTableComponent',
  props: ['planData', 'lang', 'langName'],
  data() {
    return {
      progress: {},
    };
  },
  created() {
    const saved = localStorage.getItem(`progress-${this.lang}`);
    this.progress = saved ? JSON.parse(saved) : {};
  },
  methods: {
    isCompleted(day) {
      return this.progress[day];
    },
    toggleComplete(day) {
      this.progress[day] = !this.progress[day];
      localStorage.setItem(`progress-${this.lang}`, JSON.stringify(this.progress));
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/sass/main.scss';

.plan-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.plan-table th,
.plan-table td {
  padding: 10px;
  border: 1px solid #ccc;
  vertical-align: top;
}

.plan-table th {
  background-color: #eee;
}

.plan-table code {
  display: block;
  white-space: pre-wrap;
  background: #f4f4f4;
  padding: 5px;
  font-size: 14px;
}

.plan-table input[type='checkbox'] {
  transform: scale(1.2);
}

.plan-table tr.done td {
  background-color: $done-bg;
}
</style>
