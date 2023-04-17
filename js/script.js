$(function() {
    $(".br").click(function() {
        //cabeçalho
        $(".nav-menu").children().eq(0).text("Saúde");
        $(".nav-menu").children().eq(1).text("Eletrônicos");
        $(".nav-menu").children().eq(2).text("Estética");
        $(".nav-menu").children().eq(3).text("Programação");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
        //seção
        $("#title").text("Solucione seu problema de maneira mais precisa!");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Contatos");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Telefones");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Email");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Colaboradores");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("(nomes)");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Feedback");
    });
});

//English
$(function() {
    $(".en").click(function() {
        //header
        $(".nav-menu").children().eq(0).text("Health");
        $(".nav-menu").children().eq(1).text("Electronics");
        $(".nav-menu").children().eq(2).text("Aesthetics");
        $(".nav-menu").children().eq(3).text("Programming");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#title").text("Solve your problem more precisely");
        //About
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Contacts");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Telephone numbers");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Email");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Collaborators");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("(names)");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Feedback");
    });
});

//Espanõl
$(function() {
    $(".es").click(function() {
        //encabezamiento
        $(".nav-menu").children().eq(0).text("Salud");
        $(".nav-menu").children().eq(1).text("Electrónica");
        $(".nav-menu").children().eq(2).text("Estética");
        $(".nav-menu").children().eq(3).text("Programación ");
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $("#title").text("¡Resuelva su problema con mayor precisión!");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Contactos");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Telefonos");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Correo electrónico");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Colaboradores");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("(nombres)");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Feedback");
    });
});
