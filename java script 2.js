// Task Planner
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
let tasks = [];

if (taskForm) {
  taskForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('taskName').value;
    const date = document.getElementById('taskDate').value;
    const priority = document.getElementById('taskPriority').value;

    const task = { name, date, priority, complete: false };
    tasks.push(task);
    renderTasks();
    taskForm.reset();
  });
}

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${task.name} - ${task.date} - ${task.priority} 
      <button onclick="toggleComplete(${index})">✔</button>
      <button onclick="deleteTask(${index})">❌</button>`;
    if (task.complete) li.style.textDecoration = 'line-through';
    taskList.appendChild(li);
  });
  updateProgress();
}

function toggleComplete(index) {
  tasks[index].complete = !tasks[index].complete;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Accordion
const accBtns = document.querySelectorAll('.accordion-btn');
accBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Progress Tracker
function updateProgress() {
  const completed = tasks.filter(t => t.complete).length;
  const total = tasks.length;
  const percent = total ? (completed / total) * 100 : 0;

  const summary = document.getElementById('summary');
  const progressFill = document.getElementById('progressFill');
  const feedback = document.getElementById('feedback');

  if (summary) summary.textContent = `Completed: ${completed} | Pending: ${total - completed}`;
  if (progressFill) progressFill.style.width = percent + '%';
  if (feedback) feedback.textContent = completed === total && total > 0 ? "Great job!" : "Keep going!";
}
const messages = [
  "Success is the sum of small efforts, repeated day in and day out.",
  "Stay consistent — progress is built one step at a time.",
  "Your hard work today is your success tomorrow.",
  "Believe in yourself, you are capable of amazing things.",
  "Discipline is the bridge between goals and achievement."
];

function showMotivation() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("motivationText").textContent = messages[randomIndex];
}

showMotivation();
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
});
// Students helped data
const ctx = document.getElementById('studentsGraph').getContext('2d');
const studentsGraph = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2022', '2023', '2024', '2025', '2026'],
    datasets: [{
      label: 'Students Helped',
      data: [120, 250, 400, 600, 850], // Example numbers
      backgroundColor: '#6a0dad'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Growth of Students Using NWU Study Planner'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
// Impact percentages
const ctxImpact = document.getElementById('impactChart').getContext('2d');
const impactChart = new Chart(ctxImpact, {
  type: 'pie',
  data: {
    labels: [
      'Improved Time Management',
      'Reduced Stress',
      'Better Grades',
      'Stayed Organised'
    ],
    datasets: [{
      data: [35, 25, 20, 20], // Example percentages
      backgroundColor: [
        '#6a0dad', // purple
        '#ffd700', // gold
        '#28a745', // green
        '#17a2b8'  // teal
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'How Students Have Benefited (%)'
      }
    }
  }
});
const ctxImpact = document.getElementById('impactChart').getContext('2d');
const impactChart = new Chart(ctxImpact, {
  type: 'pie',
  data: {
    labels: ['Improved Time Management', 'Reduced Stress', 'Better Grades', 'Stayed Organised'],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: ['#6a0dad', '#ffd700', '#28a745', '#17a2b8']
    }]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'How Students Benefited (%)'
      }
    }
  }
});
