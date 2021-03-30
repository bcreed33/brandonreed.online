module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
       'hero1': "url('../../img/webhero.jpg')",
       'photo1': "url('../../img/photos/photo1.png')",
       'photo2': "url('../../img/photos/photo2.png')",
       'photo3': "url('../../img/photos/photo3.png')",
       'photo4': "url('../../img/photos/photo4.png')",
       'photo5': "url('../../img/photos/photo5.png')",
       'photo6': "url('../../img/photos/photo6.png')",
       'photo7': "url('../../img/photos/photo7.png')",
       'photo8': "url('../../img/photos/photo8.png')",
       'photo9': "url('../../img/photos/photo9.png')",
       'photo10': "url('../../img/photos/photo10.png')",
       'photo11': "url('../../img/photos/photo11.png')",
       'photo12': "url('../../img/photos/photo12.png')",

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
