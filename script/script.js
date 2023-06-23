const sidebar = document.querySelector(".sidebar")
const categorias = document.querySelector(".categorias")
const fecha = document.querySelector(".fecha")
const topo = document.querySelector("#meu-botao")

fecha.addEventListener("click", () => {
    categorias.style.marginLeft = '-500px'
})
sidebar.addEventListener("click", () => {
    categorias.style.marginLeft = "0"
})

window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    if(scrollY < 650){
        topo.style.scale = '0'
    } else{
        topo.style.scale = '1'
    }
})

topo.addEventListener("click", () => {
    window.scrollTo(0, 0)
})


const html = document.querySelector("#html")
const css = document.querySelector("#css")
const js = document.querySelector("#js")
const py = document.querySelector("#py")
const java = document.querySelector("#java")
const kt = document.querySelector("#kt")
const swift = document.querySelector("#swift")
const c = document.querySelector("#c")

html.addEventListener("click" , () => {
    window.location.assign("https://lucas-cantao.github.io/courses/pages/01-html.html")
})
css.addEventListener("click" , () => {
    window.location.assign('https://lucas-cantao.github.io/courses/pages/02-css.html')
})
js.addEventListener("click" , () => {
    window.location.assign('https://lucas-cantao.github.io/courses/pages/03-javascript.html')
})
py.addEventListener("click" , () => {
    window.location.assign('https://lucas-cantao.github.io/courses/pages/04-python.html')
})
java.addEventListener("click" , () => {
    window.location.assign('https://lucas-cantao.github.io/courses/pages/05-java.html')
})
kt.addEventListener("click" , () => {
    window.location.assign('https://lucas-cantao.github.io/courses/pages/06-kotlin.html')
})
swift.addEventListener("click" , () => {
    window.location.assign('https://lucas-cantao.github.io/courses/pages/07-swift.html')
})
c.addEventListener("click" , () => {
    window.location.assign('https://lucas-cantao.github.io/courses/pages/08-c++.html')
})

const course_details = document.querySelector(".course_details")




const curso_ALL = 

{
    curso1://curso de html da página inicial das categorias ALL e HTML
    {
        linkDoVideo: 'sj0p9O85AIg?list=PL2Fdisxwzt_cajoGVWTx44wM6Ht09QJ3A',
        canal: 'https://www.youtube.com/@programacaoweb',
        nome_do_canal: 'programação web',
        N_aulas: 15,
    }
    ,
    curso2://curso de HTML e CSS da página inicial da categoria ALL
    {
        linkDoVideo: 'Ejkb_YpuHWs?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n',
        canal: 'https://www.youtube.com/@CursoemVideo',
        nome_do_canal: 'Curso em vídeo',
        N_aulas: 41,
    }
    ,
    curso3://curso de JS da página inicial das categorias ALL e da categoria JAVASCRIPT
    {
        linkDoVideo: 'g08WcKOHeK0?list=PLm-VCNNTu3LnlPhqxx03kvjQd3qF6EBdz',
        canal: 'https://www.youtube.com/@dicasparadevs',
        nome_do_canal: 'Felipe Rocha • dicasparadevs',
        N_aulas: 17,
    }
    ,
    curso4://curso de PYTHON da página inicial das categorias ALL e PYTHON 
    {
        linkDoVideo: 'Jk4kuuwLThA?list=PLj7gJIFoP7jdirAFg-fHe9HKOnGLGXSHZ',
        canal: 'https://www.youtube.com/@Refatorando',
        nome_do_canal: 'Refatorando',
        N_aulas: 17,
    }
    ,
    curso5://curso de JAVA da página inicial daS categorias ALL e JAVA
    {
        linkDoVideo: 'LnORjqZUMIQ?list=PLGxZ4Rq3BOBq0KXHsp5J3PxyFaBIXVs3r',
        canal: 'https://www.youtube.com/@Loianegroner',
        nome_do_canal: 'Loiane Groner',
        N_aulas: 98,
    }
    ,
    curso6://curso de KOTLIN da página inicial das categorias ALL e KOTLIN
    {
        linkDoVideo: 'hEbb9cckl9c?list=PLizN3WA8HR1z1HJy0uSjNe4zhmzJNplb3',
        canal: 'https://www.youtube.com/@Stackmobile',
        nome_do_canal: 'Stack Mobile',
        N_aulas: 11,
    }
    ,
    curso7://curso de SWIFT da página inicial das categorias ALL E SWIFT
    {
        linkDoVideo: 'HJyYdxaJJGw?list=PLTl7hsEfhCWVx6os_oOHpJF_YrJmRnIQk',
        canal: 'https://www.youtube.com/@Negociostic',
        nome_do_canal: 'Novos negócios em TIC',
        N_aulas: 20,
    }
    ,
    curso8://curso de C++ da página inicial das categorias ALL e C++
    {
        linkDoVideo: '5W9YsbqnX0U?list=PLesCEcYj003QTw6OhCOFb1Fdl8Uiqyrqo',
        canal: 'https://www.youtube.com/@excriptvideo',
        nome_do_canal: 'eXcript',
        N_aulas: 61,
    }
    ,
    curso9:// segundo curso de HTML da página inicial
    {
        linkDoVideo: 'EiZbhsVY2Dk?list=PLwgL9IEA0PxUjbhob9UMdpVq12sGrjgU6',
        canal: 'https://www.youtube.com/@chiefofdesign',
        nome_do_canal: 'Chief of Design',
        N_aulas: 45,
    }
    ,
    curso10://curso de CSS da página inicial
    {
        linkDoVideo: 'HtVRRHoASes?list=PL2Fdisxwzt_f5C7Mv0kg1EAHhy2VJLf1c',
        canal: 'https://www.youtube.com/@programacaoweb',
        nome_do_canal: 'Programação web',
        N_aulas: 29,
    }
    ,
    curso11://curso de CSS da página inicial
    {
        linkDoVideo: 'FRhM6sMOTfg?list=PLwXQLZ3FdTVGf7GUtiOFLc_9AXO25iIzG',
        canal: 'https://www.youtube.com/@rodrigooliveiraweb',
        nome_do_canal: 'Rodrigo Oliveira',
        N_aulas: 30,
    }
    ,
    curso12://curso de JS da página inicial
    {
        linkDoVideo: 'TkD0QMyBa28?list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6',
        canal: 'https://www.youtube.com/@MatheusBattisti',
        nome_do_canal: 'Mathes Battisti - Hora de codar',
        N_aulas: 83,
    }
    ,
    curso13://curso de PYTHON da página inicial
    {
        linkDoVideo: 'j94IGZmwtYI?list=PLesCEcYj003QxPQ4vTXkt22-E11aQvoVj',
        canal: 'https://www.youtube.com/@excriptvideo',
        nome_do_canal: 'eXcript',
        N_aulas: 99,
    }
    ,
    curso14://curso de JAVA da página inicial
    {
        linkDoVideo: 'kkOSweUhGZM?list=PL62G310vn6nHrMr1tFLNOYP_c73m6nAzL',
        canal: 'https://www.youtube.com/@DevDojoBrasil',
        nome_do_canal: 'Dev Dojo',
        N_aulas: 210,
    }
    ,
    curso15://curso de KOTLIN da página inicial
    {
        linkDoVideo: '6JE4HdI4PSg?list=PLZDjneGuE1Qa5OU3KRBFSU6blg-1eAlC-',
        canal: 'https://www.youtube.com/@FernandoKanashiroProgramacao',
        nome_do_canal: 'Fernando Kanashiro - Programação',
        N_aulas: 22,
    }
    ,
    curso16://curso de SWIFT da página inicial
    {
        linkDoVideo: 'MnL3-a3eKNQ?list=PLJ0AcghBBWShgIH122uw7H9T9-NIaFpP-',
        canal: 'https://www.youtube.com/@TiagoAguiar',
        nome_do_canal: 'Tiago Aguiar',
        N_aulas: 20,
    }
    ,
    curso17://curso de C++ da página inicial
    {
        linkDoVideo: 'nUQKr-ey86Y?list=PLx4x_zx8csUjczg1qPHavU1vw1IkBcm40',
        canal: 'https://www.youtube.com/@cfbcursos',
        nome_do_canal: 'CFB Cursos',
        N_aulas: 189,
    }
    ,
    curso18://curso de HTML e CSS
    {
        linkDoVideo: 'vPNIAJ9B4hg?list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s',
        canal: 'https://www.youtube.com/@CursoemVideo',
        nome_do_canal: 'Curso em Vídeo',
        N_aulas: 43,
    }
    ,
    curso19://curso de HTML e CSS
    {
        linkDoVideo: 'ofFgnDtn_1c?list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ',
        canal: 'https://www.youtube.com/@CursoemVideo',
        nome_do_canal: 'Curso em Vídeo',
        N_aulas: 40,
    }
    ,
    curso20://curso de HTML e CSS
    {
        linkDoVideo: 'zHKHMmEG9vE?list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT',
        canal: 'https://www.youtube.com/@CursoemVideo',
        nome_do_canal: 'Curso em Vídeo',
        N_aulas: 45,
    }
    ,
    curso21://curso de HTML
    {
        linkDoVideo: 'BUpk68lggtY?list=PLx4x_zx8csUiVHRDO_7qhOaeNrrQ5uU8c',
        canal: 'https://www.youtube.com/@cfbcursos',
        nome_do_canal: 'CFB Cursos',
        N_aulas: 139,
    }
    ,
    curso22://curso de HTML
    {
        linkDoVideo: 'bCFTv8a59PE?list=PLbIBj8vQhvm00J3f3rD33tRuNLem8EgEA',
        canal: 'https://www.youtube.com/@OtávioMiranda',
        nome_do_canal: 'Otávio Miranda',
        N_aulas: 45,
    }
    ,
    curso23://curso de CSS
    {
        linkDoVideo: 'GPK8A-A156o?list=PLx4x_zx8csUi47Bnugpk78nqJN6rYvEnV',
        canal: 'https://www.youtube.com/@cfbcursos',
        nome_do_canal: 'CFB Cursos',
        N_aulas: 73,
    }
    ,
    curso24://curso de CSS
    {
        linkDoVideo: 'WxERsgTLIN0?list=PLnex8IkmReXymxq-k_2p12xcYBMn2g8qp',
        canal: 'https://www.youtube.com/@ProfessorEdsonMaia',
        nome_do_canal: 'Professor Edson Maia',
        N_aulas: 37,
    }
    ,
    curso25://curso de CSS
    {
        linkDoVideo: 'FRhM6sMOTfg?list=PLwXQLZ3FdTVGf7GUtiOFLc_9AXO25iIzG',
        canal: 'https://www.youtube.com/@redrigooliveiraweb',
        nome_do_canal: 'Rodrigo Oliveira',
        N_aulas: 30,
    }
    ,
    curso26://curso de CSS
    {
        linkDoVideo: 'vwbegraDXD8',
        canal: 'https://www.youtube.com/@MathesBattisti',
        nome_do_canal: 'Mathues Battisti - Hora de Codar',
        N_aulas: 'Aula única de 1h49m16s',
    }
    ,
    curso27://curso de JAVASCRIPT
    {
        linkDoVideo: 'vEwPnjqWQ-g?list=PL2Fdisxwzt_d590u3uad46W-kHA0PTjjw',
        canal: 'https://www.youtube.com/@programacaoweb',
        nome_do_canal: 'Programação Web',
        N_aulas: 20,
    }
    ,
    curso28://curso de JAVASCRIPT
    {
        linkDoVideo: 'BXqUH86F-kA?list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm',
        canal: 'https://www.youtube.com/@CursoemVideo',
        nome_do_canal: 'Curso em Vídeo',
        N_aulas: 32,
    }
    ,
    curso29://curso de JAVASCRIPT
    {
        linkDoVideo: 'E4DBTqgxHGM?list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T',
        canal: 'https://www.youtube.com/@cfbcursos',
        nome_do_canal: 'CFB Cursos',
        N_aulas: 222,
    }
    ,
    curso30://curso de JAVASCRIPT
    {
        linkDoVideo: 'E1Ww5Y1EnWQ?list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z',
        canal: 'https://www.youtube.com/@ProfessorEdsonMaia',
        nome_do_canal: 'Professor Edson Maia',
        N_aulas: 115,
    }
    ,
    curso31://curso de JAVASCRIPT
    {
        linkDoVideo: 'i6Oi-YtXnAU',
        canal: 'https://www.youtube.com/@DevAprender',
        nome_do_canal: 'Dev Aprender',
        N_aulas: 'Aula única de 4h35m31s',
    }
    ,
    curso32://curso de JAVASCRIPT
    {
        linkDoVideo: 'uFMUdv1W1p4?list=PLwXQLZ3FdTVF9Y0RbsuN54XYP7D0dZIlR',
        canal: 'https://www.youtube.com/@rodrigooliveiraweb',
        nome_do_canal: 'Rodrigo Oliveira',
        N_aulas: 31,
    }
    ,
    curso33://curso de PYTHON
    {
        linkDoVideo: 'uFMUdv1W1p4?list=PLwXQLZ3FdTVF9Y0RbsuN54XYP7D0dZIlR',
        canal: 'https://www.youtube.com/@CursoemVideo',
        nome_do_canal: 'Curso em Vídeo',
        N_aulas: 142,
    }
    ,
    curso34://curso de PYTHON
    {
        linkDoVideo: 'bHn91RxiTjY?list=PLyqOvdQmGdTSEPnO0DKgHlkXb8x3cyglD',
        canal: 'https://www.youtube.com/@DidaticaTech',
        nome_do_canal: 'Didática Tech',
        N_aulas: 13,
    }
    ,
    curso35://curso de PYTHON
    {
        linkDoVideo: 'wynFBNb2PcU?list=PLLVddSbilcul-1bAKtMKoL6wOCmDIPzFJ',
        canal: 'https://www.youtube.com/@JeffersonLobato',
        nome_do_canal: 'Jefferson Lobato',
        N_aulas: 107,
    }
    ,
    curso36://curso de PYTHON
    {
        linkDoVideo: 'Ay-MakuSg08?list=PLx4x_zx8csUhuVgWfy7keQQAy7t1J35TR',
        canal: 'https://www.youtube.com/@cfbcursos',
        nome_do_canal: 'CFB Cursos',
        N_aulas: 86,
    }
    ,
    curso37://curso de PYTHON
    {
        linkDoVideo: 'wpqkZJ10Gmo?list=PLucm8g_ezqNrrtduPx7s4BM8phepMn9I2',
        canal: 'https://www.youtube.com/@bosontreinamentos',
        nome_do_canal: 'Bóson Treinamentos',
        N_aulas: 82,
    }
    ,
    curso38://curso de PYTHON
    {
        linkDoVideo: 'tV1kT3cOCqU?list=PLFKhhNd35zq_INvuX9YzXIbtpo_LGDzYK',
        canal: 'https://www.youtube.com/@primecursosdobrasil',
        nome_do_canal: 'Prime Cursos do Brasil',
        N_aulas: 82,
    }
    ,
    curso39://curso de PYTHON
    {
        linkDoVideo: 'DtnvU5eDREg?list=PLqx8fDb-FZDEDg-FOuwNKEpxA0LhzrdhZ',
        canal: 'https://www.youtube.com/@RfZorzi-RafaelSerafim',
        nome_do_canal: 'RfZorzi',
        N_aulas: 37,
    }
    ,
    curso40://curso de JAVA
    {
        linkDoVideo: 'sTX0UEplF54?list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR',
        canal: 'https://www.youtube.com/@CursoemVideo',
        nome_do_canal: 'Curso em Vídeo',
        N_aulas: 30,
    }
    ,
    curso41://curso de JAVA
    {
        linkDoVideo: 'mRryrODqQcw?list=PLJ0AcghBBWSi6nK2CUkw9ngvwWB1gE8mL',
        canal: 'https://www.youtube.com/@TiagoAguiar',
        nome_do_canal: 'Tiago Aguiar',
        N_aulas: 40,
    }
    ,
    curso42://curso de JAVA
    {
        linkDoVideo: 'X8AnVQ-GqLU?list=PLx4x_zx8csUjFC5WWjoNUL7LOOD7LCKRW',
        canal: 'https://www.youtube.com/@cfbcursos',
        nome_do_canal: 'CFB Cursos',
        N_aulas: 52,
    }
    ,
    curso43://curso de JAVA
    {
        linkDoVideo: 'srNtqw2LEBU?list=PLbEOwbQR9lqxdW98mY-40IZQ5i8ZZyeQx',
        canal: 'https://www.youtube.com/@ProfessorJosedeAssis',
        nome_do_canal: 'Professor José de Assis',
        N_aulas: 35,
    }
    ,
    curso44://curso de JAVA
    {
        linkDoVideo: 'IA7xdtbUTfo?list=PLt2CbMyJxu8iQL67Am38O1j5wKLf0AIRZ',
        canal: 'https://www.youtube.com/@SimplismenteJava',
        nome_do_canal: 'BLSoft Simplismente Java',
        N_aulas: 52,
    }
    ,
    curso45://curso de JAVA
    {
        linkDoVideo: 'gsy5GqwWqjw?list=PLesCEcYj003Rfzs39Y4Bs_chpkE276-gD',
        canal: 'https://www.youtube.com/@excriptvideo',
        nome_do_canal: 'eXcript',
        N_aulas: 100,
    }
    ,
    curso46://curso de KOTLIN
    {
        linkDoVideo: '5BSSq921XNo?list=PLmcyA-BbqsvJnOZoGNHPMF1dCBq0m6Qzg',
        canal: 'https://www.youtube.com/@programacaoparainiciantes6945',
        nome_do_canal: 'PROGRAMAÇÃO PARA INICIANTES',
        N_aulas: 24,
    }
    ,
    curso47://curso de KOTLIN
    {
        linkDoVideo: 'Kd3msE3lMuc?list=PLlGFv5gh9fBIJ8SEaQ_AKon-uenAlUbjE',
        canal: 'https://www.youtube.com/@RapaduraDev',
        nome_do_canal: 'Rapadura Dev',
        N_aulas: 10,
    }
    ,
    curso48://curso de KOTLIN
    {
        linkDoVideo: 'xTK81wzyBPw?list=PL50rZONmv8ZRsWj0L3rvSicPSEJl6sQ40',
        canal: 'https://www.youtube.com/@brunofrs7',
        nome_do_canal: 'Bruno Santos',
        N_aulas: 71,
    }
    ,
    
    curso49://curso de KOTLIN
    {
        linkDoVideo: 'rhGWwjCxK7A?list=PLxWMYNrPoLoJ6RjjUdpIPm6NE5CiRPG6E',
        canal: 'https://www.youtube.com/@universocodigo9330',
        nome_do_canal: 'Universidade Código',
        N_aulas: 28,
    }
    ,
    curso50://curso de SWIFT
    {
        linkDoVideo: '9PMIV4tyNnQ?list=PLxNM4ef1BpxjjMKpcYSqXI4eY4tZG2csm',
        canal: 'https://www.youtube.com/@tutoriais01',
        nome_do_canal: 'Portal Hugo Cursos',
        N_aulas: 8,
    }
    ,
    curso51://curso de SWIFT
    {
        linkDoVideo: '5Z7TXUCbLaY?list=PLW-gR4IAiL9ubGKgE5MsyzwovmeOF7nt_',
        canal: 'https://www.youtube.com/@ThiagoRamosal',
        nome_do_canal: 'Thiago Ramos - Vida de Dev',
        N_aulas: 8,
    }
    ,
    curso52://curso de SWIFT
    {
        linkDoVideo: 'lXS3THkZjLo?list=PLm9_oosgve-eUtxE4pAyx9DU3lH7-Ha1I',
        canal: 'https://www.youtube.com/@WhatCast',
        nome_do_canal: 'What Cast',
        N_aulas: 16,
    }
    ,
    curso53://curso de C++
    {
        linkDoVideo: 'pYcneq-aOaQ?list=PLrOyM49ctTx9ZSF7W5y14ikyiZjLqWvx5',
        canal: 'https://www.youtube.com/@ProfessorDouglasMaioli',
        nome_do_canal: 'Professor Douglas Maioli',
        N_aulas: 19,
    }
    ,
    curso54://curso de C++
    {
        linkDoVideo: 'fvERTgomQXM?list=PLd_tyl_0h07Pp9QIfbqHx5TIvCnnZuwCi',
        canal: 'https://www.youtube.com/@tarcisioe',
        nome_do_canal: 'tarcisioe',
        N_aulas: 15,
    }
}






const createIFRAME = (id) => {
    const link = curso_ALL['curso' + id].linkDoVideo
    const iframe = "<iframe width='330' height='211' src='https://www.youtube.com/embed/" + `${link}` + "' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
    const canal = curso_ALL['curso' + id].canal
    const N_aulas = curso_ALL['curso' + id].N_aulas
    

    course_details.innerHTML = `<div class="fechar"><div>`
    course_details.innerHTML += iframe
    course_details.innerHTML += `<div class="detalhes"></div>`
    course_details.style.padding = '20px'
    const detalhes = document.querySelector(".detalhes")
    detalhes.innerHTML += `<p>Link do canal: <a href="${canal}"  target="_blank">@${curso_ALL['curso' + id].nome_do_canal}</a></p>`
    detalhes.innerHTML += `<p>QT. de aulas: <span>${N_aulas}</span></p>`
    
    
    document.querySelector(".fechar").addEventListener("click", () => {
        course_details.innerHTML = ''
        course_details.style.padding = '0'
    })
}

