/* eslint-disable no-undef */
const { getFiles } = require('../readDir');
const { readFiles } = require('../readFile');
const { stats } = require('../stats');
const { requestStatus } = require('../httpRequest')
const axios = require('axios');
const { mdFiles, mdFile, mdFileObj, statsData, validateData } = require('./mockData')
jest.mock('axios');

describe('readDir', () => {

  it('is a function', () => {
    expect(typeof getFiles).toBe('function');
  });

  it('Should found md files in directory', () => {
    expect(getFiles('C:/DEV/Apuntes_curso_django2/prueba')).toEqual(mdFiles);
  });

  it('Should push file if path is md file', () => {
    expect(getFiles('C:/DEV/Apuntes_curso_django2/prueba/prueba.md')).toEqual(mdFile);
  });
});

describe('readFile', () => {
  it('Should read file and return an object with correct data', () => {
    expect(readFiles(mdFiles)).toMatchObject(mdFileObj);
  })
});

describe('stats', () => {
  it('Should calculate stats for files', () => {
    expect(stats(mdFileObj)).toMatchObject(statsData);
  });
});

describe('httpRequest', () => {
  it('Should do request status and return a dictionary with correct data', async() => {
    const dataFail = { response: { status: 404 }, statusText: 'Fail', message: 'No se encontró' }
      //const data = { status: 200, statusText: 'OK' }

    axios.get.mockImplementation((url) => {
      switch (url) {
        case 'https://eslint.org/':
          return Promise.resolve({ status: 200, statusText: 'OK' })
        case 'https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s':
          return Promise.resolve({ status: 200, statusText: 'OK' })
        case 'https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction':
          return Promise.resolve({ status: 200, statusText: 'OK' })
        case 'http://mascotas.com':
          return Promise.resolve({ status: 200, statusText: 'OK' })
        case 'https://eslint.org/docs/rules/':
          return Promise.resolve({ status: 200, statusText: 'OK' })
        default:
          return Promise.reject(Error(dataFail))
      }
    })

    const dataValid = await requestStatus(mdFileObj);
    //expect(axios.get).toHaveBeenNthCalledWith(1, 'https://eslint.org/')

    expect(dataValid).toEqual(validateData);
    //const response = requestStatus(mdFileObj);
    /*axios.get.mockResolveValue('https://developer.mozilla.org/en-US/docs/Glossary/perro');

    return requestStatus.all()
      .then(data => {
        console.log(data);
        expect(data).toMatchObject(validateData)
      })*/
    //.cath()
  })
})
