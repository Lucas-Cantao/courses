const sidebar = document.querySelector(".sidebar")
const categorias = document.querySelector(".categorias")
const fecha = document.querySelector(".fecha")


sidebar.addEventListener("click", () => {
    categorias.style.marginLeft = "0"
})

fecha.addEventListener("click", () => {
    categorias.style.marginLeft = '-500px'
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
    window.location.assign("../pages/01-html.html")
})
css.addEventListener("click" , () => {
    window.location.assign('../pages/02-css.html')
})
js.addEventListener("click" , () => {
    window.location.assign('../pages/03-javascript.html')
})
py.addEventListener("click" , () => {
    window.location.assign('../pages/04-python.html')
})
java.addEventListener("click" , () => {
    window.location.assign('../pages/05-java.html')
})
kt.addEventListener("click" , () => {
    window.location.assign('../pages/06-kotlin.html')
})
swift.addEventListener("click" , () => {
    window.location.assign('../pages/07-swift.html')
})
c.addEventListener("click" , () => {
    window.location.assign('../pages/08-c++.html')
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

