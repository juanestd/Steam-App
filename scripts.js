const sections = [
    {
        title: "Ciencia",
        content: "La ciencia en STEM+ fomenta la curiosidad natural de los estudiantes y su deseo de explorar y entender el mundo que les rodea. Se centra en el aprendizaje basado en la investigación, donde los estudiantes plantean preguntas, diseñan experimentos, recogen y analizan datos, y sacan conclusiones. Esta metodología ayuda a desarrollar habilidades críticas como la observación, el pensamiento analítico y la resolución de problemas.",
        videoUrl: "https://youtube.com/shorts/uaA3sGk2Kvs",
        icon: "fas fa-flask",
        image: "images/ciencia.jpg"
    },
    {
        title: "Ingeniería",
        content: "La ingeniería en STEM+ se centra en la resolución práctica de problemas mediante el diseño y la construcción de soluciones. Los estudiantes aplican principios científicos y matemáticos para diseñar prototipos, probar sus ideas y mejorar continuamente sus diseños. Esto fomenta la creatividad, el pensamiento crítico y la colaboración, preparando a los estudiantes para abordar desafíos complejos del mundo real.",
        videoUrl: "https://www.youtube.com/embed/kwZu2s2hKL4",
        icon: "fas fa-tools",
        image: "images/ingenieria.jpg"
    },
    {
        title: "Arte",
        content: "El arte en STEM+ añade un componente creativo esencial, permitiendo a los estudiantes expresar ideas y conceptos de maneras innovadoras. Integra la creatividad con la lógica y el análisis, fomentando habilidades como la visualización, la conceptualización y la comunicación. El arte ayuda a los estudiantes a ver conexiones entre disciplinas y a desarrollar una comprensión más holística del mundo.",
        videoUrl: "https://youtube.com/shorts/PG6rip2e0Dw?feature=share",
        icon: "fas fa-paint-brush",
        image: "images/arte.jpg"
    },
    {
        title: "Matemáticas",
        content: "Las matemáticas en STEM+ son fundamentales para desarrollar habilidades de razonamiento lógico y cuantitativo. A través de proyectos y problemas del mundo real, los estudiantes aprenden a aplicar conceptos matemáticos de manera práctica. Esto no solo mejora su comprensión de las matemáticas, sino que también les ayuda a ver su relevancia y utilidad en otras áreas del conocimiento.",
        videoUrl: "https://youtube.com/shorts/0y34-zEvIQY",
        icon: "fas fa-calculator",
        image: "images/matematicas.jpg"
    },
    {
        title: "Tecnología",
        content: "La tecnología en STEM+ prepara a los estudiantes para un mundo cada vez más digital y conectado. Aprenden a utilizar herramientas tecnológicas para investigar, crear y comunicar ideas. El enfoque en la tecnología fomenta habilidades de alfabetización digital, programación y pensamiento computacional, esenciales para el futuro académico y profesional de los estudiantes.",
        videoUrl: "https://youtube.com/shorts/HdVIpNvnBR4",
        icon: "fas fa-laptop-code",
        image: "images/tecnologia.jpg"
    },
    {
        title: "Metodología STEM+",
        content: "STEM+ es un enfoque educativo que utiliza Ciencia, Tecnología, Ingeniería, Arte y Matemáticas como puntos de acceso para guiar la investigación de los estudiantes, el diálogo y el pensamiento crítico. Su objetivo es preparar a los estudiantes para el mundo real al fomentar habilidades prácticas y transversales, la creatividad y la resolución de problemas complejos.",
        videoUrl: "https://youtube.com/shorts/YvNqyf0dx-g?feature=share",
        icon: "fas fa-lightbulb",
        image: "images/STEM.jpg"
    }
];

function showSection(index) {
    document.getElementById('mainMenu').classList.add('d-none');
    document.getElementById('searchContainer').classList.add('d-none');
    const sectionsContainer = document.getElementById('sections');
    sectionsContainer.innerHTML = '';

    const section = sections[index];
    const sectionTemplate = `
        <div class="section">
            <img src="${section.image}" alt="${section.title} Image" class="section-image">
            <h2 class="section-title">${section.title}</h2>
            <p class="section-content">${section.content}</p>
            <button class="btn-custom" onclick="window.open('${section.videoUrl}', '_blank')">Ir al video</button>
            <button class="btn-custom" onclick="goBack()">Volver al Menú</button>
        </div>
    `;
    sectionsContainer.innerHTML = sectionTemplate;
    sectionsContainer.classList.remove('d-none');
}

function goBack() {
    document.getElementById('sections').classList.add('d-none');
    document.getElementById('mainMenu').classList.remove('d-none');
    document.getElementById('searchContainer').classList.remove('d-none');
}

function createButtons() {
    const sectionMenu = document.getElementById('sectionMenu');
    sectionMenu.innerHTML = '';
    sections.forEach((section, index) => {
        const buttonTemplate = `
            <div class="col-md-4 mb-3">
                <button class="section-menu-button btn-custom btn-block" onclick="showSection(${index})">
                    <i class="${section.icon} icon-container"></i> ${section.title}
                </button>
            </div>
        `;
        sectionMenu.innerHTML += buttonTemplate;
    });
}

function filterSections() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const buttons = document.querySelectorAll('.section-menu-button');
    buttons.forEach(button => {
        const title = button.textContent.toLowerCase();
        if (title.includes(searchInput)) {
            button.parentElement.style.display = '';
        } else {
            button.parentElement.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createButtons();
    document.getElementById('searchInput').addEventListener('input', filterSections);
});
