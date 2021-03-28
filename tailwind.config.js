module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
       'hero1': "url('../../img/webhero.jpg')",
       'photo1': "url('../../img/photos/photo1.jpg')",
       'photo2': "url('../../img/photos/photo2.jpg')",
       'photo3': "url('../../img/photos/photo3.jpg')",
       'photo4': "url('../../img/photos/photo4.jpg')",
       'photo5': "url('../../img/photos/photo5.jpg')",
       'photo6': "url('../../img/photos/photo6.jpg')",
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
