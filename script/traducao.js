// script.js
const translations = {
    en: {
        name: "Darlison Silva",
        intro: "Here on this site, you will find information about my career as a Java back-end developer.",
        about: "In August 2022, I started my journey in Java technology studies in the second semester of university. Initially, I liked technology a lot and dedicated myself to studying it beyond the classroom. From that moment I decided that this would be a technology I would delve into. At university, in addition to programming logic, I had the opportunity to learn about Object-Oriented Programming, Design Patterns, MVC Architecture, Hibernate, Testing, and developed some systems in the academic environment. With the aim of expanding my knowledge of this fantastic technology, I started studying the Spring Boot Framework for the development of APIs and RESTFull microservices, integration with Front-end applications, Spring Security, JWT, JPQL queries, package manager: Maven, Lombok, jUnit, JDBC, etc. I have already developed several Rest APIs using Spring together with databases such as PostgreSQL and MySQL.",
        start: "Welcome to my portfolio. My name is Darlison Silva, I am 25 years old, and I am a Software and Systems Programmer. I have 3 years and 2 months of experience with technology and skills in various tools and libraries that are widely used in web development. I have extensive knowledge in web development, both front-end and back-end. Additionally, I am proficient in databases, web design, web page responsiveness, design patterns, MVC architecture, microservices, scrum, and version control. I am also familiar with agile methodologies and have experience in customer support. My main goal is to become a Software Engineer, and I am constantly improving my skills to develop increasingly complex software.",
        links: "Visit the links below to see my main projects on github",
        api1: "This API has the purpose of allowing the creation of an online menu for restaurants. It provides endpoints dynamic elements that serve different purposes.",
        api2: "RESTFUll API for general studies. In it, I developed a complete CRUD operation in several different operations. Furthermore, I developed, in this same API, JPQL queries, uploading files such as photos and documents.",
        api3: "RESTFUll user authentication API. Here, the focus was on developing a user authentication system, creating security tokens and permissions. In this project, JWT and Spring Security were used.",
        api4: "API for a notepad system. This API, in addition to the authentication and login system, has the implementation of a complete CRUD, where the user can define individual tasks according to their preferences.",
        api5: "",
        api6: "",
        tl1: "Professional Journey",
        text1: "I entered the world of programming in October 2021, when I took my first steps in studying programming logic using the Python language through a course I acquired on an educational platform. In February 2022, I continued my education by enrolling in the Bachelor's degree program in Systems Analysis and Development at the Federal Institute of Santa Catarina, where I am currently studying and expected to graduate in December 2024.",
        text2: "I have several Front-end projects where I integrate them with the APIs that you saw when accessing my github repository. However, it was not possible to post them to a server so that you could have a more complete experience of these projects.",
        text3: "Below I leave the link to the Front-end applications available, where you can see them on github. Feel free to download the repository and try them out if you want.",
        tl2: "Studying Javascript",
        text4: "This is the part of a Front-end system where I just use it to study Javascript in general. In it, I take the opportunity to consume the API API NAME so that you can have a more complete experience.",
        tl3: "ACCESS THE PROJECT ON GITHUB",
        tl4: "Notepad",
        text5: "This is the part of a Front-end system where I just use it to study Javascript in general. In it, I take the opportunity to consume the API API NAME so that you can have a more complete experience.",
        tl5: "Home Dispensation",
        tl6: "ACCESS THE PROJECT ON GITHUB",
        tl8: "ACCESS THE PROJECT ON GITHUB",
        tl9: "ACCESS THE PROJECT ON GITHUB",
        tl7: "Login and Authentication",
        text6: "This is the part of a Front-end system where I just use it to study Javascript in general. In it, I take the opportunity to consume the API API NAME so that you can have a more complete experience.",
        text8: "This is the part of a Front-end system where I just use it to study Javascript in general. In it, I take the opportunity to consume the API API NAME so that you can have a more complete experience.",
        text9: "Still have questions about something?",
        text10: "Contact me through my whatsapp",
        location: "Tubarão-SC, Brazil"
    },
    es: {
        name: "Darlison Silva",
        intro: "En este sitio, encontrarás información sobre mi carrera como desarrollador de back-end en Java.",
        start: "Bienvenido a mi portafolio, mi nombre es Darlison Silva, tengo 25 años y soy Programador de Software y Sistemas. Tengo 3 años y 2 meses de experiencia con tecnología y habilidades en varias herramientas y bibliotecas que son muy usadas en el desarrollo web. Tengo un conocimiento amplio en desarrollo web, tanto en el front-end como en el back-end. Además, soy competente en bases de datos, diseño web, capacidad de respuesta de páginas web, patrones de diseño, arquitectura MVC, microservicios, scrum y control de versiones de código. También estoy familiarizado con metodologías ágiles y tengo experiencia en soporte al cliente. Mi principal objetivo es convertirme en Ingeniero de Software y estoy constantemente mejorando mis habilidades para desarrollar software cada vez más complejo.",
        about: "En agosto de 2022, comencé mi viaje de estudios en tecnología Java en el segundo semestre de la universidad. Al principio me gustaba mucho la tecnología y me dediqué a estudiarla más allá del aula. A partir de ese momento decidí que esta sería una tecnología en la que profundizaría. En la universidad, además de lógica de programación, tuve la oportunidad de aprender sobre Programación Orientada a Objetos, Patrones de Proyectos, Arquitectura MVC, Hibernate, Testing y desarrollé algunos sistemas en el ambiente académico. Con el objetivo de ampliar mis conocimientos sobre esta fantástica tecnología, comencé a estudiar Spring Boot Framework para el desarrollo de APIs y microservicios RESTFull, integración con aplicaciones Front-end, Spring Security, JWT, consultas JPQL, gestor de paquetes: Maven, Lombok, jUnit, JDBC, etc. Ya he desarrollado varias API Rest usando Spring junto con bases de datos como PostgreSQL y MySQL.",
        links: "Visite los links a continuación para ver mis principales proyectos en github.",
        api1: "Este proyecto es un portafolio similar a este. Sin embargo, está en portugués y fue desarrollado en React.js junto con otras tecnologías modernas. Haga clic en el botón de abajo para descubrirlo.",
        api2: "Aplicación desarrollada con fines de estudio. En él consumo una API RESTFUll para realizar un CRUD y utilizar técnicas de validación de datos.",
        api3: "En este proyecto, utilicé Spring Security y jwt para desarrollar niveles de autenticación y permisos para los usuarios. Su front-end fue desarrollado en React.js y el back-end en java Spring boot.",
        api4: "Sistema desarrollado en React, Bootstrap, Spring Boot y PostgreSQL. Aquí, después de iniciar sesión, el usuario puede crear su lista de tareas pendientes.",
        api5: "En este proyecto, consumí una API para mostrar el clima de una determinada ciudad o región a los usuarios. Ingrese el nombre de la ciudad en la barra de búsqueda para ver el clima.",
        api6: "Proyecto desarrollado en PHP, Html, CSS, Bootstrap y MySQL. Aquí podrás crear tu lista de contactos y personalizar cada uno de ellos como quieras.",
        tl1: "Jornada profesional",
        text1: "Ingresé en el mundo de la programación en octubre de 2021, cuando di los primeros pasos en el estudio de la lógica de programación utilizando el lenguaje Python a través de un curso que adquirí en una plataforma de enseñanza. En febrero de 2022, continué mi formación ingresando en el curso de grado en Análisis y Desarrollo de Sistemas en el Instituto Federal de Santa Catarina, donde estoy actualmente y con previsión de graduarme en diciembre de 2024.",
        text2: "Tengo varios proyectos Front-end donde los integro con las API que viste al acceder a mi repositorio de github. Sin embargo, no fue posible publicarlos en un servidor para que pudieras tener una experiencia más completa de estos proyectos.",
        text3: "A continuación dejo el enlace a las aplicaciones Front-end disponibles, donde puedes verlas en github. No dudes en descargar el repositorio y probarlos si lo deseas.",
        tl2: "Estudiando Javascript",
        text4: "Esta es la parte de un sistema front-end donde solo lo uso para estudiar Javascript en general. En él aprovecho para consumir la API <strong>API NAME</strong> para que puedas tener una experiencia más completa.",
        tl3: "ACCEDER AL PROYECTO EN GITHUB",
        tl4: "Bloc de notas",
        text5: "Esta es la parte de un sistema front-end donde solo lo uso para estudiar Javascript en general. En él aprovecho para consumir la API <strong>API NAME</strong> para que puedas tener una experiencia más completa.",
        tl5: "Dispensación a domicilio",
        tl6: "ACCEDER AL PROYECTO EN GITHUB",
        tl8: "ACCEDER AL PROYECTO EN GITHUB",
        tl9: "ACCEDER AL PROYECTO EN GITHUB",
        tl7: "Inicio de sesión y autenticación",
        text6: "Esta es la parte de un sistema front-end donde solo lo uso para estudiar Javascript en general. En él aprovecho para consumir la API: API NAME para que puedas tener una experiencia más completa.",
        text8: "Esta es la parte de un sistema front-end donde solo lo uso para estudiar Javascript en general. En él aprovecho para consumir la API: API NAME para que puedas tener una experiencia más completa.",
        text9: "¿Tienes preguntas sobre algo?",
        text10: "Contáctame a través de mi whatsapp",
        location: "Tubarão-SC, Brasil"
    },

    pt: {
        name: "Darlison Silva",
        intro: "Aqui nesse site, você encontrará informações sobre minha carreira como dev back-end java.",
        start: "Bem-vindo ao meu portfólio, meu nome é Darlison Silva, tenho 25 anos e sou Programador de Software e Sistemas. Possuo 3 anos e 2 meses de experiência com tecnologia e habilidades em várias ferramentas e bibliotecas que são muito usadas no desenvolvimento web. Tenho conhecimento abrangente em desenvolvimento web, tanto no front-end quanto no back-end. Além disso, sou proficiente em banco de dados, design web, responsividade de páginas web, padrões de projetos, arquitetura MVC, microsserviços, scrun e versionamento de códigos. Também estou familiarizado com metodologias ágeis e tenho experiência em suporte ao cliente. Meu principal objetivo é me tornar um Engenheiro de Software, e estou constantemente aprimorando minhas habilidades para desenvolver softwares cada vez mais complexos.",
        about: "Em agosto de 2022, iniciei minha jornada de estudos na tecnologia Java no segundo semestre da Faculdade. De início, gostei muito da tecnologia e me dediquei a estudá-la além da sala de aula. Daquele momento em diante, decidi que essa seria uma tecnologia que iria me aprofundar cada vez mais. Na faculdade, além de lógica de programação, eu tive a oportunidade de aprender sobre Programação Orientada a Objetos, Padrão de Projetos, Arquitetura MVC, Hibernate, Testes e Desenvolvi alguns sistemas no ambiente acadêmico. Visando expandir meus conhecimentos nessa tecnologia fantástica, passei a estudar o Framework Spring Boot para o desenvolvimeno de APIs RESTFull e microsserviços, integração com aplicação Front-end, Spring Security, JWT, consultas JPQL, gerenciador de pacotes: Maven, Lombok, jUnit, JDBC, etc. Já desenvolvi várias APIs Rest usando o Spring em conjunto com banco de dados como o PostgreSQL e o MySQL.",
        links: "Acesse os links abaixo para ver alguns dos meus projetos no github",
        api1: "Essa API tem um propósito de permitir a criação de um cardápio online para restaurantes. Ela disponibiliza endpoints dinâmicos que servem para diferentes propósito. ",
        api2: "API RESTFUll de estudos gerais. Nela, eu desenvolvi uma operação CRUD completa em várias operações diferentes. Alé, disso,desenvolvi, nessa mesma API, consultas JPQL, upload de arquivos como fotos e documentos.",
        api3: "API RESTFUll de autenticação de usuário. Aqui, o foco foi desenvolver um sistema de autenticação de usuário, criando token de segurança e permissões. Nesse projeto, foi usado o JWT e o Spring Security.",
        api4: "API para um sistema de bloco de notas. Nessa API, além do sistema de autenticaçao e login, tem a implementação de um CRUD completo, onde o usuário pode definir tarefas individuais de acordo com sua preferências.",
        api5: "Nessa API, é possível criar 3 tipos de conta, sendo: aluno, professor e diretor. Cada conta vai ter permissões específicas de acordo com o tipo. Ou seja, tem coisas que só o diretor pode fazer no sistema.",
        api6: "Api de estudos onde desenvolvo várias relações entre dados. Além disso, também realizo várias consultas JPQL afim de obter dados mais específicos.",
        tl1: "Jornada profissional",
        text1: "Ingressei no mundo da programação em outubro de 2021, quando dei os primeiros passos no estudo da lógica de programação utilizando a linguagem Python por meio de um curso que adquiri em uma plataforma de ensino. Em fevereiro de 2022, dei continuidade à minha formação ingressando no curso de graduação em Análise e Desenvolvimento de Sistemas no Instituto Federal de Santa Catarina, onde estou atualmente e com previsão de se formar em Dezembro de 2024.",
        text2: "Tenho vários projetos Front-end onde eu faço a integração deles com as APIs que você viu ao acessar meu repositório no github. No entanto, não foi possível postar eles  em um servidor para que você tivesse uma experiência mais completa desses projetos.",
        text3: "Abaixo eu deixo disponível o link para as aplicações Front-end, onde você poderá vê-las no no github. Sinta-se a vontade para baixar o repositório e testá-los caso queira.",
        tl2: "Estudando Javascript",
        text4: "Essa é a parte de uma sistema Front-end onde eu uso apenas para estudar javascritp de modo geral. Nele, eu aproveito para fazer o consumo da API NOME DA API para que você possa ter uma experiência mais completa.",
        tl3: "ACESSE O PROJETO NO GITHUB",
        tl4: "Bloco de Notas",
        text5: "Essa é a parte de uma sistema Front-end onde eu uso apenas para estudar javascritp de modo geral. Nele, eu aproveito para fazer o consumo da API NOME DA API para que você possa ter uma experiência mais completa.",
        tl5: "Dispensa de Casa",
        tl6: "ACESSE O PROJETO NO GITHUB",
        tl8: "ACESSE O PROJETO NO GITHUB",
        tl9: "ACESSE O PROJETO NO GITHUB",
        tl7: "Login e Autenticação",
        text6: "Essa é a parte de uma sistema Front-end onde eu uso apenas para estudar javascritp de modo geral. Nele, eu aproveito para fazer o consumo da API NOME DA API para que você possa ter uma experiência mais completa.",
        text8: "Essa é a parte de uma sistema Front-end onde eu uso apenas para estudar javascritp de modo geral. Nele, eu aproveito para fazer o consumo da API NOME DA API para que você possa ter uma experiência mais completa.",
        text9: "Ainda tem dúvidas sobre algo?",
        text10: "Entre em contato comigo através do meu whatsapp",
        location: "Tubarão-SC, Brasil"
    }
};

function translatePage() {
    const language = document.getElementById("languageSwitcher").value;
    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("languageSwitcher").value = "pt"; // Default to English
    translatePage();
});
