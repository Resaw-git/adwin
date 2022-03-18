import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const scrFolder = `./src`

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        img: `${buildFolder}/img/`,
        svg: `${buildFolder}/img/svg/`,
        files: `${buildFolder}/files/`
    },
    src: {
        html: `${scrFolder}/*.html`,
        sass: `${scrFolder}/components/**/*.sass`,
        img: `${scrFolder}/img/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${scrFolder}/img/svg/*.svg`,
        files: `${scrFolder}/files/**/*.*`,
    },
    watch: {
        html: `${scrFolder}/**/*.html`,
        files: `${scrFolder}/files/**/*.*`,
        style: `${scrFolder}/components/**/*.sass`,
        img: `${scrFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    scrFolder: scrFolder,
    rootFolder: rootFolder,
    ftp: `test`,
}