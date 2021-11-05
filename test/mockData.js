const mdFiles = [
  'C:\\DEV\\Apuntes_curso_django2\\prueba\\Prueba.md',
  'C:\\DEV\\Apuntes_curso_django2\\prueba\\prueba2\\prueba2.md',
  'C:\\DEV\\Apuntes_curso_django2\\prueba\\prueba2\\Prueba3\\prueba3.md'
]

const mdFile = [
  "C:/DEV/Apuntes_curso_django2/prueba/prueba.md"
]

const mdFileObj = [{
    text: 'Uso de HTML semántico.',
    href: 'https://developer.mozilla.org/en-US/docs/Glossary/perro',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\Prueba.md'
  },
  {
    text: 'eslint',
    href: 'https://eslint.org/',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\Prueba.md'
  },
  {
    text: 'reglas recomendadas (`"eslint:recommended"`)',
    href: 'https://eslint.org/docs/rules/',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\Prueba.md'
  },
  {
    text: 'Scrum en Detalle',
    href: 'https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\Prueba.md'
  },
  {
    text: 'Manipulación dinámica del DOM.',
    href: 'https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\prueba2\\prueba2.md'
  },
  {
    text: 'mascotas',
    href: 'http://mascotas.com',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\prueba2\\Prueba3\\prueba3.md'
  }
]
const statsData = [{ Total: 6, Unique: 6 }];

const validateData = [{
    text: 'Uso de HTML semántico.',
    href: 'https://developer.mozilla.org/en-US/docs/Glossary/perro',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\Prueba.md',
    status: 404,
    fail: 'fail'
  },
  {
    text: 'eslint',
    href: 'https://eslint.org/',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\Prueba.md',
    status: 200,
    ok: 'OK',
  },
  {
    text: 'reglas recomendadas (`"eslint:recommended"`)',
    href: 'https://eslint.org/docs/rules/',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\Prueba.md',
    status: 200,
    ok: 'OK'
  },
  {
    text: 'Scrum en Detalle',
    href: 'https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\Prueba.md',
    status: 200,
    ok: 'OK'
  },
  {
    text: 'Manipulación dinámica del DOM.',
    href: 'https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\prueba2\\prueba2.md',
    status: 200,
    ok: 'OK'
  },
  {
    text: 'mascotas',
    href: 'http://mascotas.com',
    file: 'C:\\DEV\\Apuntes_curso_django2\\prueba\\prueba2\\Prueba3\\prueba3.md',
    status: 200,
    ok: 'OK'
  }
]

module.exports = {
  mdFiles,
  mdFile,
  mdFileObj,
  statsData,
  validateData,
}
