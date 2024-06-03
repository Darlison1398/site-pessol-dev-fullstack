// script.js
const translations = {
    en: {
        name: "Darlison Silva",
        intro: "Here on this site, you will find information about my career as a Java back-end developer.",
        about: "In August 2022, I started my journey in Java technology studies in the second semester of university. Initially, I liked technology a lot and dedicated myself to studying it beyond the classroom. From that moment I decided that this would be a technology I would delve into. At university, in addition to programming logic, I had the opportunity to learn about Object-Oriented Programming, Design Patterns, MVC Architecture, Hibernate, Testing, and developed some systems in the academic environment. With the aim of expanding my knowledge of this fantastic technology, I started studying the Spring Boot Framework for the development of APIs and RESTFull microservices, integration with Front-end applications, Spring Security, JWT, JPQL queries, package manager: Maven, Lombok, jUnit, JDBC, etc. I have already developed several Rest APIs using Spring together with databases such as PostgreSQL and MySQL.",
        links: "Visit the links below to see my main projects on github",
        api1: "This API has the purpose of allowing the creation of an online menu for restaurants. It provides endpoints dynamic elements that serve different purposes.",
        api2: "RESTFUll API for general studies. In it, I developed a complete CRUD operation in several different operations. Furthermore, I developed, in this same API, JPQL queries, uploading files such as photos and documents.",
        api3: "RESTFUll user authentication API. Here, the focus was on developing a user authentication system, creating security tokens and permissions. In this project, JWT and Spring Security were used.",
        api4: "API for a notepad system. This API, in addition to the authentication and login system, has the implementation of a complete CRUD, where the user can define individual tasks according to their preferences.",
        api5: "In this API, it is possible to create 3 types of account, namely: student, teacher and director. Each account will have specific permissions according to its type. In other words, there are things that only the director can do in the system.",
        api6: "Study API where I develop various relationships between data. In addition, I also perform several JPQL queries in order to obtain more specific data.",
        tl1: "Professional description",
        text1: "As you can see, most of my projects are aimed at back-end applications, and I use Java as the main technology for developing APIs. However, it is worth highlighting that I have skills with Front-end development as well. In addition to developing the Back-end part of an application, I can also develop the Front-end part of it.",
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
        about: "En agosto de 2022, comencé mi viaje de estudios en tecnología Java en el segundo semestre de la universidad. Al principio me gustaba mucho la tecnología y me dediqué a estudiarla más allá del aula. A partir de ese momento decidí que esta sería una tecnología en la que profundizaría. En la universidad, además de lógica de programación, tuve la oportunidad de aprender sobre Programación Orientada a Objetos, Patrones de Proyectos, Arquitectura MVC, Hibernate, Testing y desarrollé algunos sistemas en el ambiente académico. Con el objetivo de ampliar mis conocimientos sobre esta fantástica tecnología, comencé a estudiar Spring Boot Framework para el desarrollo de APIs y microservicios RESTFull, integración con aplicaciones Front-end, Spring Security, JWT, consultas JPQL, gestor de paquetes: Maven, Lombok, jUnit, JDBC, etc. Ya he desarrollado varias API Rest usando Spring junto con bases de datos como PostgreSQL y MySQL.",
        links: "Visite los links a continuación para ver mis principales proyectos en github.",
        api1: "Esta API tiene la finalidad de permitir la creación de un menú online para restaurantes. Proporciona puntos finales elementos dinámicos que sirven a diferentes propósitos.",
        api2: "API RESTFUll para estudios generales. En él desarrollé una operación CRUD completa en varias operaciones diferentes. Además, desarrollé, en esta misma API, consultas JPQL, subiendo archivos como fotos y documentos.",
        api3: "API de autenticación de usuario RESTFUll. Aquí, la atención se centró en desarrollar un sistema de autenticación de usuarios, crear tokens de seguridad y permisos. En este proyecto se utilizaron JWT y Spring Security.",
        api4: "API para un sistema de bloc de notas. Esta API, además del sistema de autenticación e inicio de sesión, cuenta con la implementación de un completo CRUD, donde el usuario puede definir tareas individuales según sus preferencias.",
        api5: "En esta API es posible crear 3 tipos de cuenta, a saber: estudiante, profesor y director. Cada cuenta tendrá permisos específicos según su tipo. En otras palabras, hay cosas que sólo el director puede hacer en el sistema.",
        api6: "API de estudio donde desarrollo diversas relaciones entre datos. Además, también realizo varias consultas JPQL para poder obtener datos más específicos.",
        tl1: "Descripción profesional",
        text1: "Como puedes ver, la mayoría de mis proyectos están dirigidos a aplicaciones back-end, y uso Java como tecnología principal para el desarrollo de APIs. Sin embargo, cabe destacar que también tengo habilidades con el desarrollo Front-end. Además de desarrollar la parte Back-end de una aplicación, también puedo desarrollar la parte Front-end de la misma.",
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
        about: "Em agosto de 2022, iniciei minha jornada de estudos na tecnologia Java no segundo semestre da Faculdade. De início, gostei muito da tecnologia e me dediquei a estudá-la além da sala de aula. Daquele momento em diante, decidi que essa seria uma tecnologia que iria me aprofundar cada vez mais. Na faculdade, além de lógica de programação, eu tive a oportunidade de aprender sobre Programação Orientada a Objetos, Padrão de Projetos, Arquitetura MVC, Hibernate, Testes e Desenvolvi alguns sistemas no ambiente acadêmico. Visando expandir meus conhecimentos nessa tecnologia fantástica, passei a estudar o Framework Spring Boot para o desenvolvimeno de APIs RESTFull e microsserviços, integração com aplicação Front-end, Spring Security, JWT, consultas JPQL, gerenciador de pacotes: Maven, Lombok, jUnit, JDBC, etc. Já desenvolvi várias APIs Rest usando o Spring em conjunto com banco de dados como o PostgreSQL e o MySQL.",
        links: "Acesse os links abaixo para ver os meus principais projetos no github",
        api1: "Essa API tem um propósito de permitir a criação de um cardápio online para restaurantes. Ela disponibiliza endpoints dinâmicos que servem para diferentes propósito. ",
        api2: "API RESTFUll de estudos gerais. Nela, eu desenvolvi uma operação CRUD completa em várias operações diferentes. Alé, disso,desenvolvi, nessa mesma API, consultas JPQL, upload de arquivos como fotos e documentos.",
        api3: "API RESTFUll de autenticação de usuário. Aqui, o foco foi desenvolver um sistema de autenticação de usuário, criando token de segurança e permissões. Nesse projeto, foi usado o JWT e o Spring Security.",
        api4: "API para um sistema de bloco de notas. Nessa API, além do sistema de autenticaçao e login, tem a implementação de um CRUD completo, onde o usuário pode definir tarefas individuais de acordo com sua preferências.",
        api5: "Nessa API, é possível criar 3 tipos de conta, sendo: aluno, professor e diretor. Cada conta vai ter permissões específicas de acordo com o tipo. Ou seja, tem coisas que só o diretor pode fazer no sistema.",
        api6: "Api de estudos onde desenvolvo várias relações entre dados. Além disso, também realizo várias consultas JPQL afim de obter dados mais específicos.",
        tl1: "Descrição profissional",
        text1: "Como você pode ver, grande parte dos meus projetos são voltados para aplicações back-end, e tenho o java como a tecnologia principal no desenvolvimento de APIs. No entanto, vale resaltarque tenho habilidades com o desenvolvimento Front-end também. Além de desenvolver a parte Back-end de uma aplicação, eu também consigo desenvolver a parte Front-end da mesma.",
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
    document.getElementById("languageSwitcher").value = "en"; // Default to English
    translatePage();
});
