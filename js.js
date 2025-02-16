function showMainContent() {
    // Анимируем исчезновение вступительного экрана
    document.querySelector('.intro-screen').classList.add('fadeOut');

    setTimeout(function() {
        // После завершения анимации скрываем вступительный экран и показываем основной контент
        document.querySelector('.intro-screen').style.display = 'none';
        document.querySelector('main').style.display = 'block';
    }, 500); // Время задержки соответствует длительности анимации в CSS
};
window.onload = function() {
    setTimeout(showMainContent, 2500); // Показываем основной контент через 5000 мс (5 секунд)
};

// Получаем элементы кнопки и модального окна
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

// При клике на кнопку открываем модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}

// При клике на кнопку закрытия (x) закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// При клике вне модального окна закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Получаем элементы боковой панели и кнопки
const sidebar = document.getElementById("sidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");

// Открываем боковую панель сразу при загрузке страницы
window.onload = function() {
    sidebar.style.left = "0"; // Показать боковую панель
}

// Закрываем боковую панель
closeSidebarBtn.onclick = function() {
    sidebar.style.left = "-250px"; // Скрыть боковую панель
}

// Закрываем боковую панель при нажатии вне ее (необязательно)
window.onclick = function(event) {
    if (event.target !== sidebar && event.target !== closeSidebarBtn) {
        sidebar.style.left = "-250px"; // Скрыть боковую панель
    }
}
window.onload = function() {
    setTimeout(showPopup, 5000); // Через 5 секунд вызвать функцию showPopup
}

function showInfo() {
    const button = document.getElementById('infoButton');
    const infoText = button.getAttribute('data-info');
    
    // Создаем окно с информацией
    const infoWindow = document.createElement('div');
    infoWindow.className = 'info-window';
    infoWindow.innerText = infoText;

    // Устанавливаем позицию окна
    const rect = button.getBoundingClientRect();
    infoWindow.style.top = `${rect.bottom + window.scrollY}px`;
    infoWindow.style.left = `${rect.left}px`;
    
    document.body.appendChild(infoWindow);
    infoWindow.style.display = 'block';

    // Закрытие окна при клике вне его
    document.addEventListener('click', function closeInfoWindow(event) {
        if (!infoWindow.contains(event.target) && event.target !== button) {
            infoWindow.remove();
            document.removeEventListener('click', closeInfoWindow);
        }
    });
}