/* eslint-disable no-undef */
const { getFiles } = require('../readDir');
const { readFiles } = require('../readFile');
const { stats } = require('../stats')
const { mdFiles, mdFile, mdFileObj, statsData } = require('./mockData')


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
})

describe('readFile', () => {
  it('Should read file and return an object with correct data', () => {
    expect(readFiles(mdFiles)).toMatchObject(mdFileObj);
  })
})

describe('stats', () => {
  it('Should calculate stats for files', () => {
    expect(stats(mdFileObj)).toMatchObject(statsData);
  })
})
