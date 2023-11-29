const BLOG = require('./blog.config')
const { fontFamilies } = require('./lib/font')

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './themes/**/*.js'],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#ffffff',
          'neumorphic-hover': '#4472c4'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#111827'
        },
        hexo: {
          'background-gray': '#f5f5f5',
          'black-gray': '#101414',
          'light-gray': '#e5e5e5'
        }
      },
      boxShadow: {
        // 标准阴影
        neumorphic: '0.5rem 0.5rem 1rem #d9d9d9, -0.5rem -0.5rem 1rem #ffffff',
        // 暗色模式下的阴影
        'neumorphic-dark': '0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5), -0.5rem -0.5rem 1rem rgba(0, 0, 0, 0.2)'
      },
      maxWidth: {
        side: '14rem',
        '9/10': '90%'
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['hover', 'dark']
    }
  },
  plugins: []
}
