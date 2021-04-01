module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex:{
      '2': '2 2 0%',
    },
    extend: {
      flex: ['hover', 'focus'],
      backgroundImage: {
       'hero1': "url('../../img/webhero.jpg')",
       'hero2' : "url('../../img/newHero1.png')",
       'photo1': "url('../../img/photos/photo1.jpg')",
       'photo2': "url('../../img/photos/photo2.jpg')",
       'photo3': "url('../../img/photos/photo3.jpg')",
       'photo4': "url('../../img/photos/photo4.jpg')",
       'photo5': "url('../../img/photos/photo5.jpg')",
       'photo6': "url('../../img/photos/photo6.jpg')",
       'photo7': "url('../../img/photos/photo7.jpg')",
       'photo8': "url('../../img/photos/photo8.jpg')",
       'photo9': "url('../../img/photos/photo9.jpg')",
       'photo10': "url('../../img/photos/photo10.jpg')",
       'photo11': "url('../../img/photos/photo11.jpg')",
       'photo12': "url('../../img/photos/photo12.jpg')",

      },
      backgroundOpacity: ['active'],
      colors: {
        blue: '#3a74a6',
        orange: '#e98324',
      },
      fontFamily: {
        'display': ["Glegoo", 'serif'],
        'body': ["Maven Pro", 'sans-serif']
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
